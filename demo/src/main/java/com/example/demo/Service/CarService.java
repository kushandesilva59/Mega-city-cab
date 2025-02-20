package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.Car;
import com.example.demo.Repository.CarRepo;

@Service
public class CarService {
    @Autowired
    private CarRepo carRepo;


    public List<Car> getAllcars(){
        
        return carRepo.findAll();
    }


    public Car addCar(Car car) {
      return carRepo.save(car);
    }
}
