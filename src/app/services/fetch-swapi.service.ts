import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
}

@Injectable({
  providedIn: 'root'
})

export class FetchSWAPIService {
private _dbURL = "https://swapi.co/api"

  constructor(private _http: HttpClient) { }

  fetchStarWars(search, value): Observable<{}> {
    return this._http.get(`${this._dbURL}/${search}/?search=${value}`)
  }


}
