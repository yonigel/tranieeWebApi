import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  get(url: string): Observable<any> {
    return new Observable<any>();
  }

  post(url: string, body = {}): Observable<any> {
    return new Observable<any>();
  }

  put(url: string, body = {}): Observable<any> {
    return new Observable<any>();
  }

  delete(url: string): Observable<any> {
    return new Observable<any>();
  }

}
