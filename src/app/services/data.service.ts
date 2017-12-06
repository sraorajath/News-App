import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import 'rxjs/add/operator/map'

@Injectable()
export class DataService {

  constructor(public http:Http) { 
    console.log("Data Service Connected.....")
  }

  getSources() {
    return this.http.get('https://newsapi.org/v1/sources')
      .map(res => res.json());
  }

  getArticles(id) {
    return this.http.get('https://newsapi.org/v1/articles?source='+ id +'&apiKey=44e3fae496ee4a958bcc1b9fdd1760af')
      .map(res => res.json())
  }

}
