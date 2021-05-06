
import { Component, OnInit, Input } from '@angular/core';
import {MongoService} from '../mongo.service';
import { Search } from '../Models/search';
//import {Search} from './Models/search';

@Component({
  selector: 'app-mongo',
  templateUrl: './mongo.component.html',
  styleUrls: ['./mongo.component.css']
})
export class MongoComponent implements OnInit {
  @Input() filteredId : any[];
  search: Search[];
 id : number = 779497;
  
  constructor(private _mongoService : MongoService) { }

  ngOnInit(): void {
    this._mongoService.getMongoData(this.id).subscribe((res: Search[])=> {
      this.filteredId = res;
      
       console.log(res);
    });
  }

}
