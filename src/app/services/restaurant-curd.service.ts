import { Injectable } from '@angular/core';
import { Restaurant } from '../Model/restaurant';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RestaurantCurdService {

  restaurants: Restaurant[]
  restaurantAddedSuccess:boolean
  restaurantAddedError: boolean

  restaurantEditedSuccess:boolean
  restaurantEditedError:boolean

  restaurantDeletedSuccess:boolean

  constructor(public http:HttpClient) { 
    this.restaurants=[]
    this.restaurantAddedSuccess=false
    this.restaurantAddedError=false

    this.restaurantEditedSuccess=false
    this.restaurantEditedError=false

    this.restaurantDeletedSuccess=false
  }

  getRestaurants()
  {
    this.http.get<Restaurant[]>('http://localhost:8080/restaurants').subscribe(data=>this.restaurants=data)
  }

  addRestaurant(restaurant:Restaurant)
  {
    this.restaurantAddedSuccess=false
    this.http.post('http://localhost:8080/restaurants',restaurant).subscribe(data => this.restaurantAddedSuccess=true)
  }

  editRestaurant(restaurant:Restaurant)
  {
    this.restaurantEditedSuccess=false
    this.http.post('http://localhost:8080/restaurants',restaurant).subscribe(data => this.restaurantEditedSuccess=true)
  }

  deleteRestaurant(restaurantId:number)
  {
    this.restaurantDeletedSuccess=false
      this.http.delete<any>('http://localhost:8080/restaurants/'+restaurantId).subscribe(data=>{
      if (data.status)
        this.restaurantDeletedSuccess=true
  })
  }
}
