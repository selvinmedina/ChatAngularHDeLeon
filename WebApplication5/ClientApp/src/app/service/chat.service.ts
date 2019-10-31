import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Message, MyResponse } from '../Interfaces';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  public algo: string;
  private baseUrl: string;

  constructor(private _http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.algo = 'Holaa mundo!!';
    this.baseUrl = baseUrl;
  }

  public getMessage(): Observable<Message[]> {
    return this._http.get<Message[]>(this.baseUrl + 'api/Chat/Message');
  }

  public Add(name, text) {
    this._http.post<MyResponse>(
      this.baseUrl + 'api/Chat/Add',
      { 'Name': name, 'Text': text }, httpOptions).subscribe(
        result => {
          console.log(result);
        },
        err => {
          console.error(err);
        }
      );
  }
}
