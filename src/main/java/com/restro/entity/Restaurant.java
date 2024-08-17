package com.restro.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Restaurant {

	@Id
	@GeneratedValue(strategy= GenerationType.AUTO)
	private Integer restaurantId;
	private String restaurantName;
	private String resturantCity;
	private String resturantCuisine;
	
	public Restaurant() {
		// TODO Auto-generated constructor stub
	}

	public Restaurant(Integer restaurantId, String restaurantName, String resturantCity, String resturantCuisine) {
		super();
		this.restaurantId = restaurantId;
		this.restaurantName = restaurantName;
		this.resturantCity = resturantCity;
		this.resturantCuisine = resturantCuisine;
	}

	public Integer getRestaurantId() {
		return restaurantId;
	}

	public void setRestaurantId(Integer restaurantId) {
		this.restaurantId = restaurantId;
	}

	public String getRestaurantName() {
		return restaurantName;
	}

	public void setRestaurantName(String restaurantName) {
		this.restaurantName = restaurantName;
	}

	public String getResturantCity() {
		return resturantCity;
	}

	public void setResturantCity(String resturantCity) {
		this.resturantCity = resturantCity;
	}

	public String getResturantCuisine() {
		return resturantCuisine;
	}

	public void setResturantCuisine(String resturantCuisine) {
		this.resturantCuisine = resturantCuisine;
	}

	@Override
	public String toString() {
		return "Restaurant [restaurantId=" + restaurantId + ", restaurantName=" + restaurantName + ", resturantCity="
				+ resturantCity + ", resturantCuisine=" + resturantCuisine + "]";
	}

	
	
}
