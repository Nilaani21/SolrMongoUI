import { Component } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { SearchComponent } from './search/search.component';
import {SolrService} from './solr.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SolrMongo';
}
