import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetService {

  apiUrl = 'http://localhost:35555';

  constructor(private http: HttpClient) { }

  getWether(): Observable<any[]>{
    return this.http.get<any>(`${this.apiUrl}/WeatherForecast`)
  }

}
