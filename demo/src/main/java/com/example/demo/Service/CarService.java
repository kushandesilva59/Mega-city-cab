package com.example.demo.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.Car;
import com.example.demo.Entity.Driver;
import com.example.demo.Repository.CarRepo;

@Service
public class CarService {
    @Autowired
    private CarRepo carRepo;


    public List<Car> getAllcars(){
        
        return carRepo.findAll();
    }


    public Optional<Car> getCarById(int carId){
      return carRepo.findById(carId);
    }


    public Car addCar(Car car) {
      return carRepo.save(car);
    }


    public String updateCar(int id,String brand, String model, String licensePlate, int peopleCount, int freeKm, double perDayPrice) {
        Car car = carRepo.findById(id).orElse(null);
        if (car == null) return "Car not found";

        // Update booking
        int updated = carRepo.updateCar(id,brand,model,licensePlate,peopleCount,freeKm,perDayPrice);
        System.out.println("Update status"+updated);
        return (updated > 0) ? "Car updated successfully" : "Car not found";    
      }

      public Car getCarByDriverId(int driverId){
        return carRepo.getCarByDriverId(driverId);
      }
}
