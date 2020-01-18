import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { PilotBriefingComponent } from "./pilot-briefing/pilot-briefing.component";
import { PilotBriefingFormComponent } from "./pilot-briefing-form/pilot-briefing-form.component";
import { PilotBriefingReportComponent } from "./pilot-briefing-report/pilot-briefing-report.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    PilotBriefingComponent,
    PilotBriefingFormComponent,
    PilotBriefingReportComponent
  ],
  imports: [BrowserModule, ReactiveFormsModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
