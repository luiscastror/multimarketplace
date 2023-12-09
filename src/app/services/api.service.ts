import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  URL_API: string = 'https://multimarketplace-d500d27833e2.herokuapp.com';

  constructor(
    private http: HttpClient
  ) { }

  get(path: string) {
    return this.http.get(this.URL_API + path);
  }


}
