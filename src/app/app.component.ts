import {Component, OnInit} from '@angular/core';
import {interval, startWith, switchMap} from "rxjs";
import {TrafficObservationSetModel} from "./models/traffic-observation-set.model";
import {TrafficObservationsService} from "./traffic-interval/traffic-observations.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements  OnInit {
  title = 'traffic-monitor';

  pollingRate = 60 * 1000 * 5;

  constructor() { }

  ngOnInit(): void {

  }


}
