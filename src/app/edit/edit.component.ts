import { Component } from '@angular/core';
import { Restaurant } from '../Model/restaurant';
import { RestaurantCurdService } from '../services/restaurant-curd.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  restaurant:Restaurant
  constructor(public restaurantCurdService:RestaurantCurdService)
  {
    this.restaurant=new Restaurant();
  }
  editRestaurantSubmit(editRestaurantForm: any)
  {
    this.restaurantCurdService.editRestaurant(this.restaurant)
    editRestaurantForm.from.markAsPristine()
  }

  selectRestaurantId()
  {
    this.restaurantCurdService.restaurants.forEach((rest)=>
    {
      if(rest.restaurantId==this.restaurant.restaurantId)
        Object.assign(this.restaurant,rest
      )
    })
    console.log(this.restaurant)
  }
}
