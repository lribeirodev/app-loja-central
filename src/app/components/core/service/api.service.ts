import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

enum API {
  BASE_DEV = "https://api.central.app.br/v1/"
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  constructor(private http: HttpClient){}

  public get(path: string): Observable<any>{
    return this.http.get(API.BASE_DEV.concat(path));
  }
}
