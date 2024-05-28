import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // URL_API: string = 'https://multimarketplace-d500d27833e2.herokuapp.com';
  URL_API: string = 'https://marketplace-quilla-98cdd2d74ec0.herokuapp.com';

  constructor(
    private http: HttpClient
  ) { }

  get(path: string) {
    console.log(this.URL_API + path)
    return this.http.get(this.URL_API + path);
  }

  post(path: string, payload: any) {
    return this.http.post(this.URL_API + path, payload);
  }

  put(path: string, payload: any) {
    return this.http.put(this.URL_API + path, payload);
  }

  delete(path: string) {
    return this.http.delete(this.URL_API + path);
  }

  getSecurity(path: string) {
    return this.http.get(this.URL_API + path);
  }

}



