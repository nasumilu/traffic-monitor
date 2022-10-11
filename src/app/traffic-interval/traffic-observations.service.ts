import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TrafficObservationSetModel} from "../models/traffic-observation-set.model";
import {map, Observable} from "rxjs";

const SERVICE_URL = 'http://localhost:8080/traffic-counts/'

@Injectable({
  providedIn: 'root'
})
export class TrafficObservationsService {

  constructor(private http: HttpClient) { }

  getObservations(interval= 'PT15M', start: Date|null = null, end: Date|null = null): Observable<TrafficObservationSetModel> {
    const params = new URLSearchParams();
    if(null !== start) {
      params.append('start', start.toISOString());
    }

    if(null !== end) {
      params.append('end', end.toISOString());
    }

    return this.http.get<TrafficObservationSetModel>(`${SERVICE_URL}${interval}?${params}`)
      .pipe(map(res => new TrafficObservationSetModel().deserialize(res)));
  }
}
