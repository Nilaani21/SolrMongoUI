import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Search} from './Models/search';
@Injectable({
  providedIn: 'root'
})
export class SolrService {
  First_Name = ""
  Dept = "";
   opts = { params: new HttpParams({fromString: "First_Name="+this.First_Name+"&Dept="+this.Dept}) };

  constructor(private httpClient: HttpClient) { }
  url='https://localhost:44360/weatherforecast/';
  
   
  mongourl='https://localhost:44359/api/Home/EmpidList/';
   getSolrData(name, dept
     ):Observable<any[]>{
     return this.httpClient.get<any>(this.url, this.opts )
  }
  Search(f,d){
    const opts = { params: new HttpParams({fromString: "First_Name="+f+"&Dept="+d}) };
    return this.httpClient.get<any>(this.url, opts)
  }
  // getMongoData(data:number[]):Observable<Search[]>{
  //     return this.http.get<Search[]>("https://localhost:44359/api/Home/EmpidList/"+data)
  //   }

    getMongoData(EmpidList:number[]):Observable<Search[]>{
      console.log(EmpidList);
      return this.httpClient.post<Search[]>("https://localhost:44359/api/Home/EmpidList/",EmpidList )
    }




}
