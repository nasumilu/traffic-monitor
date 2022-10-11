import {TrafficObservationModel} from "./traffic-observation.model";

export class TrafficObservationSetModel {

  duration?: string;
  startDate?: Date;
  endDate?: Date;
  observations: TrafficObservationModel[] = [];

  constructor() {
    this.observations = [];
  }

  deserialize(input: any) {
    if(input.observations) {
      input.observations = input?.observations.map((v: any) => new TrafficObservationModel().deserialize(v));
    }
    Object.assign(<any>this, input);
    return this;
  }

}
