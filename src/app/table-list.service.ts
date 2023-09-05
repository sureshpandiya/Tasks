import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableListService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Bearer Um_C8E-wKBjby4HvSAfq7IcNl6TFyY46VrE1alpdTwPILqYlQg'
    })
  };
  
  constructor(private http: HttpClient) { }

  private baseURL = `http://crudapi.co.uk/api/v1`
  // app.use('/api', routes)
  
  getAllData(): Observable<any> {
    // throw new Error('Method not implemented.');
    return this.http.get(`${this.baseURL}/task`, this.httpOptions)
  }
}
