import { Component } from '@angular/core';
import { Restaurant } from '../Model/restaurant';
import {RestaurantCurdService} from '../services/restaurant-curd.service'


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  restaurant:Restaurant
  constructor(public restaurantCurdService:RestaurantCurdService)
  {
    this.restaurant=new Restaurant();
  }
  addRestaurantSubmit(addRestaurantForm: any)
  {
    this.restaurantCurdService.addRestaurant(this.restaurant)
    //addRestaurantForm.from.markAsPristine()
  }
}
