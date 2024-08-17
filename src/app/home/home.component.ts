import { Component } from '@angular/core';
import { RestaurantCurdService } from '../services/restaurant-curd.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(public restaurantCurdService:RestaurantCurdService)
  {

  }
  ngOnInit()
  {
    this.restaurantCurdService.getRestaurants()
  }
}
