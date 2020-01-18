import { Component, OnInit } from "@angular/core";
import { OpmetRpcQuery, OpmetService } from '../opmet.service';

@Component({
  selector: "app-pilot-briefing",
  templateUrl: "./pilot-briefing.component.html",
  styleUrls: ["./pilot-briefing.component.css"]
})
export class PilotBriefingComponent implements OnInit {
  receivedData: object;

  constructor(private opmetService: OpmetService) {}

  ngOnInit() {}

  processOpmetRpcQuery(data: OpmetRpcQuery) {
    const jsonData = JSON.stringify(data);

    this.opmetService.gueryBriefingData(jsonData).subscribe(response => {
      if (response["error"]) {
        console.error(response["error"]);
      }
      else {
        this.receivedData = response["result"];
      }
    });
  }
}
