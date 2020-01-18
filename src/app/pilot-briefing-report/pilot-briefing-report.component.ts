import {
  Component,
  OnInit,
  Input,
  SimpleChanges,
  SimpleChange,
  OnChanges
} from "@angular/core";
import { Observable } from "rxjs";

@Component({
  selector: "app-pilot-briefing-report",
  templateUrl: "./pilot-briefing-report.component.html",
  styleUrls: ["./pilot-briefing-report.component.css"]
})
export class PilotBriefingReportComponent implements OnInit, OnChanges {
  @Input()
  briefingDataInput: Array<object>;
  stationDataMap: Map<string, StationData[]>;

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    const briefingDataInputChange: SimpleChange = changes.briefingDataInput;

    if (!briefingDataInputChange.isFirstChange()) {
      const data = Object.assign(briefingDataInputChange.currentValue);
      this.processBriefingData(data);
    }
  }

  ngOnInit() {}

  processBriefingData(data: Array<object>) {
    this.stationDataMap = new Map();
    data.forEach(row => {
      // keep only data relevant for GUI
      const stationData = {
        queryType: row["queryType"],
        reportTime: row["reportTime"],
        textHTML: row["textHTML"]
      };
      if (this.stationDataMap.get(row["stationId"])) {
        this.stationDataMap.get(row["stationId"]).push(stationData);
      } else {
        this.stationDataMap.set(row["stationId"], new Array(stationData));
      }
    });
    console.log(this.stationDataMap);
  }
}

export interface StationData {
  queryType: string;
  reportTime: Date;
  textHTML: string;
}
