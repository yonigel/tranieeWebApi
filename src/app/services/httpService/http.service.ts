import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  get(url: string): Observable<any> {
    return this.http.get(url);
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
