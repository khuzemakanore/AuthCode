import { Aurelia, inject } from 'aurelia-framework';
import { HttpClient } from 'aurelia-fetch-client';
import config from 'config';

@inject(Aurelia, HttpClient)
export default class Camps {

  /*token = null */
  http = null
 users=[]
  constructor(Aurelia, http) {
    this.token = localStorage['token'] || null;
    var myheaders = new Headers();
    myheaders.append('Authorization', 'Bearer ' + this.token);


  http.configure(config => {
        config
          .useStandardConfiguration()
          .withBaseUrl('https://localhost:44388/api/camps/ATL2016/');
      });

    this.http = http;
  }

  getCamps() {    

return this.http.fetch('speakers')
      .then(response => response.json())
      .then(users =>{ this.users = users
        console.log(users);
        return this.users;
    });

  }
}