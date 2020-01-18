import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";
import { invalidTextArrayFormat } from "./custom-validations/invalidTextArrayFormat.directive";
import { atLeastOneMessageTypeChecked } from "./custom-validations/atLeastOneMessageTypeChecked.directive";
import { OpmetRpcQuery } from "../opmet.service";
import { airportOrCountryFilled } from "./custom-validations/airportOrCountryFilled.directive";

@Component({
  selector: "app-pilot-briefing-form",
  templateUrl: "./pilot-briefing-form.component.html",
  styleUrls: ["./pilot-briefing-form.component.css"]
})
export class PilotBriefingFormComponent implements OnInit {
  briefingForm: FormGroup;
  briefingId = 0;
  submitted: boolean;
  @Output()
  rpcQueryConstructed = new EventEmitter<OpmetRpcQuery>();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.initFormControls();
  }

  initFormControls() {
    this.briefingForm = this.formBuilder.group(
      {
        metarChecked: new FormControl(false),
        sigmetChecked: new FormControl(false),
        tafChecked: new FormControl(false),
        airports: new FormControl("", [
          invalidTextArrayFormat(/^[A-Z]{4}( [A-Z]{4}){0,}$/g)
        ]),
        countries: new FormControl("", [
          invalidTextArrayFormat(/^[A-Z]{2}( [A-Z]{2}){0,}$/g)
        ])
      },
      {
        validators: [atLeastOneMessageTypeChecked(), airportOrCountryFilled()]
      }
    );
  }

  validateInputs() {
    // will show validation errors in user interface after first submit
    this.submitted = true;

    if (this.briefingForm.valid) {
      this.rpcQueryConstructed.emit(this.constructRpcQueryObject());
    }
  }

  constructRpcQueryObject(): OpmetRpcQuery {
    const airportsVal = this.briefingForm.get("airports").value;
    const countriesVal = this.briefingForm.get("countries").value;

    const airportsArr = airportsVal === "" ? [] : airportsVal.split(" ");
    const countriesArr = countriesVal === "" ? [] : countriesVal.split(" ");
    const reportTypesArr = this.getSelectedReportTypes();

    return {
      id: "query" + this.briefingId,
      method: "query",
      params: [
        {
          id: "report" + this.briefingId++,
          reportTypes: reportTypesArr,
          stations: airportsArr,
          countries: countriesArr
        }
      ]
    };
  }

  getSelectedReportTypes(): string[] {
    const reportTypes = [];

    if (this.briefingForm.get("metarChecked").value) {
      reportTypes.push("METAR");
    }
    if (this.briefingForm.get("sigmetChecked").value) {
      reportTypes.push("SIGMET");
    }
    if (this.briefingForm.get("tafChecked").value) {
      reportTypes.push("TAF");
    }

    return reportTypes;
  }
}
