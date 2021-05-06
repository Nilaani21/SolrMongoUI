import { Component, OnInit, Input } from '@angular/core';
import {SolrService} from '../solr.service';
import {Search} from '../Models/search';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
 @Input() employee: any; 
  First_Name : string = "Angelique";
Dept: string = "Da";
Emp_ID:string;
search: Search[];
//employee:number;
  constructor(private _solrService : SolrService) { }

  ngOnInit(): void {
     this._solrService.getSolrData(this.First_Name, this.Dept).subscribe((res: Search[])=> {
      this.employee = res;
      
       console.log(res);
       this.First_Name = res['First_Name'];
       this.Dept = res['Dept'];
      
    });
  }

}
