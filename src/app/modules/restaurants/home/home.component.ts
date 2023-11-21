import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'src/app/modules/restaurants/retaurant';
import { RestaurantService } from 'src/app/modules/restaurants/restaurants.service';
declare var window: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allRestaurants: Restaurant[] = [];
  deleteModal: any;
  idTodelete: number = 0;
  constructor(private restaurantsService: RestaurantService) {}
  ngOnInit(): void {
    this.deleteModal = new window.bootstrap.Modal(
      document.getElementById('deleteModal')
    );
    this.get();
  }
  get() {
    this.restaurantsService.get().subscribe((data) => {
      this.allRestaurants = data;
    });
  }
  openDeleteModal(id: number) {
    this.idTodelete = id;
    this.deleteModal.show();
  }
 
  delete() {
    this.restaurantsService.delete(this.idTodelete).subscribe({
      next: (data) => {
        this.allRestaurants = this.allRestaurants.filter(_ => _.id != this.idTodelete)
        this.deleteModal.hide();
      },
    });
  }
}


 

 
 
 
   