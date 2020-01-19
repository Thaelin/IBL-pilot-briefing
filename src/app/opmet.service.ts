import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class OpmetService {
  constructor(private http: HttpClient) {}

  gueryBriefingData(data: string) {
    return this.http.post("https://ogcie.iblsoft.com/ria/opmetquery", data);
  }
}

export interface OpmetRpcQuery {
  id: string;
  method: string;
  params: OpmetRpcQueryParam[];
}

export interface OpmetRpcQueryParam {
  id: string;
  reportTypes: string[];
  stations: string[];
  countries: string[];
}
