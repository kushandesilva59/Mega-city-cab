package com.example.demo.Controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.Entity.Car;
import com.example.demo.Service.CarService;
import com.example.demo.model.UpdateBookingDTO;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/api/car")
public class CarController {

    @Autowired
    private CarService carService;
    

    @GetMapping("/all")
    public List<Car> getAllCars(){
        return carService.getAllcars();
    }

    @PostMapping("/save")
    public Car addCar(@RequestBody Car car) {
        System.out.println("Car controller  save start");
        System.out.println(car);

         return carService.addCar(car);
    }

     @PutMapping("/update")
    public String updateCar(
        @RequestBody Car car
    ) {
        String response = carService.updateCar(car.getId(),car.getBrand(),car.getModel(),car.getLicensePlate(),car.getPeopleCount(),car.getFreeKm(),car.getPerDayPrice());
        System.out.println(car);
        return response;
    }
}
