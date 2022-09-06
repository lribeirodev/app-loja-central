import { Injectable, isDevMode } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  constructor(private http: HttpClient){}

  public get(path: string): Observable<any>{
    return this.http.get(environment.BASE_API.concat(path));
  }
}
