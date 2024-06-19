import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {


  constructor(
    private http: HttpClient
  ) { }

  private token: string = 'w5vdbfy0xwoka0mv';
  private instance: string = 'instance86021'
  private baseUrl: string = 'https://api.ultramsg.com/' + this.instance;

  sendNotificationPOS(payload: any) {
    payload.token = this.token;
    return this.http.post(this.baseUrl + '/messages/chat', payload);
  }
}
