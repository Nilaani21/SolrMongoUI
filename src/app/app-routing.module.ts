import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MongoComponent } from './mongo/mongo.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [{path: 'search', component : SearchComponent},
{path: 'mongo', component : MongoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
