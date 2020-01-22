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
        textHTML: this.colorizeBriefingText(row["text"])
      };
      if (this.stationDataMap.get(row["stationId"])) {
        this.stationDataMap.get(row["stationId"]).push(stationData);
      } else {
        this.stationDataMap.set(row["stationId"], new Array(stationData));
      }
    });
    console.log(this.stationDataMap);
  }

  colorizeBriefingText(text: string): string {
    const tokens = text
      .replace("\n", " ")
      .replace("=", "")
      .split(" ");
    const regexp = /^FEW[0-9]{3}$|^SCT[0-9]{3}$|^BKN[0-9]{3}$/gm;

    tokens.forEach((token, i) => {
      if (regexp.test(token)) {
        const value = parseInt(token.substring(3, 6), 10);
        if (value <= 30) {
          tokens[i] = '<span class="blue">' + token + "</span>";
        } else {
          tokens[i] = '<span class="red">' + token + "</span>";
        }
      }
    });

    return tokens.join(" ") + "=";
  }
}

export interface StationData {
  queryType: string;
  reportTime: Date;
  textHTML: string;
}
