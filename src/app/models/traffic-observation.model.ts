export class TrafficObservationModel {

  series: Date;
  count: number;

  constructor() {
    this.count = 0;
  }

  deserialize(input: any) {
    Object.assign(<any>this, input);
    return this;
  }
}
