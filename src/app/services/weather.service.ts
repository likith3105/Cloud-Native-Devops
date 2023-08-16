import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from '../enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherData(cityName: string){
    this.http.get(enviroment.weatherApiBaseUrl,{
      headers: new HttpHeaders()
      .set(enviroment.XRapidAPIHostHeaderName,enviroment.XRapidAPIHostHeaderValue)
      .set(enviroment.XRapidAPIKeyHeaderName,enviroment.XRapidAPIKeyHeaderValue),
      params: new HttpParams()
      .set('q', cityName)
      .set('units', 'metric')
      .set('mode','json') 
      

    })
  }
}
