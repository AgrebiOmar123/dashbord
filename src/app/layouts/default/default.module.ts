import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashbordComponent } from 'src/app/modules/dashbord/dashbord.component';
import { RouterModule } from '@angular/router';
import { PostsComponent } from 'src/app/modules/posts/posts.component';
import { SharedModule } from 'src/app/shared/shared.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule } from '@angular/material/divider';
import {MatCardModule } from '@angular/material/card';
import {MatPaginatorModule } from '@angular/material/paginator';
import {MatTableModule } from '@angular/material/table';
import { FlexLayoutModule } from '@angular/flex-layout'; 
//import { RestaurantsComponent } from 'src/app/modules/restaurants/restaurants.component';
import { HomeComponent } from 'src/app/modules/restaurants/home/home.component';



@NgModule({
  declarations: [
    DefaultComponent,
    DashbordComponent,
    PostsComponent,
    HomeComponent
        
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    FlexLayoutModule,
    
  ]
})
export class DefaultModule { }
