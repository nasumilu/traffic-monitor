import {Component, Input, OnInit} from '@angular/core';
import {interval, startWith, switchMap} from "rxjs";
import {TrafficObservationSetModel} from "../models/traffic-observation-set.model";
import {TrafficObservationsService} from "./traffic-observations.service";

@Component({
  selector: 'app-traffic-interval',
  templateUrl: './traffic-interval.component.html',
  styleUrls: ['./traffic-interval.component.css']
})
export class TrafficIntervalComponent implements OnInit {

  @Input()
  interval = 'PT15M';
  @Input()
  refreshRate: number = 1000 * 5 * 60;

  observationSet: TrafficObservationSetModel = new TrafficObservationSetModel();

  constructor(private polling: TrafficObservationsService) { }

  ngOnInit(): void {

    interval(this.refreshRate).pipe(
      startWith(0),
      switchMap(() => this.polling.getObservations(this.interval))
    ).subscribe(res => this.observationSet = res);
  }

}
