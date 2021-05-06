import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {SolrService} from '../solr.service';
import {Search} from '../Models/search';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  name: string='';
  place: string='';
  activatedRoute;
  order;
  filter;
  details;
  
First_Name:any;
Dept:any;
employee; 
search: Search[];
EmployeeForm = new FormGroup({
  First_Name: new FormControl,
  Dept: new FormControl

});
  sub: any;
  constructor(private _solrService: SolrService,private route: ActivatedRoute) { }

  ngOnInit(): void {

}
OnSearch(data){
  this.First_Name=this.EmployeeForm.get('First_Name').value;
  this.Dept=this.EmployeeForm.get('Dept').value;
  console.log(this._solrService.First_Name, this._solrService.Dept);
  this._solrService.Search(this.First_Name,this.Dept).subscribe((res:number[])=> {
    console.log(res);
    this.employee = res;
    this._solrService.getMongoData(res).subscribe((res:Search[])=>{
      console.log(res);
      this.details = res;
    })
  })
}
}
