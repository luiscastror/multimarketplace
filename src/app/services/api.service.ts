import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  URL_API: string = 'https://c873kmrp-3000.use2.devtunnels.ms';

  constructor(
    private http: HttpClient
  ) { }

  get(path: string) {
    return this.http.get(this.URL_API + path);
  }


}
