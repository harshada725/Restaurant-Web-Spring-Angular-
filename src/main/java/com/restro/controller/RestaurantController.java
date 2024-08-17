package com.restro.controller;

import java.util.List;
import java.util.Optional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.restro.entity.Restaurant;
import com.restro.exception.RestaurantNotFound;
import com.restro.repository.RestaurantPagingRepository;
import com.restro.repository.RestaurantRepository;

import jakarta.transaction.Transactional;
import responseType.QueryStatus;


@RestController
@Transactional
@CrossOrigin
public class RestaurantController {

	
	
	
	@Autowired
	RestaurantRepository restaurantRepository;
	
	@Autowired
	RestaurantPagingRepository restaurantPagingRepository;
	
	//TODO:Get all resturants.
	@GetMapping("restaurants")
	public List<Restaurant> getRestaurants()
	{
		return (List<Restaurant>) restaurantRepository.findAll();
		
	}
	//TODO:save a new resturant
	@PostMapping("restaurants")
	public Restaurant saveResturant(@RequestBody Restaurant restaurant)
	{
		return restaurantRepository.save(restaurant);
	}
	
	@DeleteMapping("restaurants/{restaurantId}")
	public QueryStatus deleteRestaurant(@PathVariable int restaurantId)
	{
		Integer res=restaurantRepository.deleteByRestaurantId(restaurantId);
		if(res==1)
			return new QueryStatus(true);
		else
			throw new RestaurantNotFound();
	}
	//TODO:Find restaurant by Id
	@GetMapping("restaurants/find/{restaurantId}")
	public Restaurant getRestaurant(@PathVariable int restaurantId)
	{
		//return restaurantRepository.findById(restaurantId).get();
		Optional<Restaurant> optionalRestaurant =restaurantRepository.findById(restaurantId);
		 if(optionalRestaurant.isEmpty())
		 throw new RestaurantNotFound();
		 return optionalRestaurant.get();
	}
	
	//TODO:Save restaurants by name
	@GetMapping("restaurants/sort/name")
	public List<Restaurant> sortRestaurantsByName()
	{
		Sort nameSort=Sort.by("restaurantName");
		return (List<Restaurant>) restaurantPagingRepository.findAll(nameSort);
		
	}
	
	//TODO:Paginate restaurants
	@GetMapping("restaurants/results/{pageNo}/{pageSize}")
	public List<Restaurant> paginateRestaurants(@PathVariable int pageNo,@PathVariable int pageSize)
	{
		Pageable pageable=PageRequest.of(pageNo, pageSize);
		Page<Restaurant> pageResult=restaurantPagingRepository.findAll(pageable);
		return pageResult.getContent();
		
	}
}
