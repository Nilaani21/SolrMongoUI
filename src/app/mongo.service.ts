import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MongoService {

  constructor(private http: HttpClient) { }
 
  mongourl='https://localhost:44342/weatherforecast/name/';
 
 
  getMongoData(id):Observable<any[]>{
      return this.http.get<any>(this.mongourl + id)
    }




}
