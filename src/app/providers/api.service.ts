import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_URL = 'https://restcountries.eu/rest/v2/all';

  constructor(private http: HttpClient) { }

  displayData() {
    return this.http.get(`${this.API_URL}`);
  }
}
