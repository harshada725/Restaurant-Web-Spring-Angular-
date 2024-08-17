import { Component } from '@angular/core';
import { RestaurantCurdService } from '../services/restaurant-curd.service';
import { Restaurant } from '../Model/restaurant';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {

  restaurant:Restaurant
  constructor(public restaurantCurdService:RestaurantCurdService) { 
    this.restaurant = new Restaurant();
  }
  deleteRestaurantSubmit(deleteRestaurantForm:any)
  {

  }
  
}
