import 'bootstrap';
import { inject } from 'aurelia-framework';
import AuthService from 'AuthService';
import Camps from 'camps';

@inject(AuthService, Camps)
export class App {
  campData = []
  constructor(AuthService, Camps) {
    this.auth = AuthService;
    this.camps = Camps;
  }


  showcamps() {
    return Promise.resolve(this.camps.getCamps()).then((data) => {
    this.campData = data;
      console.table(this.campData);
     });
  }
}
export class ToJSONValueConverter {
  toView(obj) {
    if (obj) {
      return JSON.stringify(obj, null, 2)
    }
  }
}