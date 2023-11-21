import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashbordComponent } from './modules/dashbord/dashbord.component';
import { PostsComponent } from './modules/posts/posts.component';
import { RestaurantsComponent } from './modules/restaurants/restaurants.component';
import { HomeComponent } from './modules/restaurants/home/home.component';

const routes: Routes = [
  {
    path:'',
    component:DefaultComponent,
    children:[{
      path:'',
      component:DashbordComponent
    },{
      path:'posts',
      component:PostsComponent
    },{
      path:'restaurants/home',
      component:HomeComponent
    }]
  
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
