package com.example.demo.Controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.Car;
import com.example.demo.Entity.Driver;
import com.example.demo.Service.DriverService;


@RestController
@RequestMapping("/api/driver")
public class DriverController {
   @Autowired
    private DriverService driverService;

    
    @GetMapping("/all")
    public List<Driver> getAllDrivers(){
        return driverService.getAllDrivers();
    } 

    // @PostMapping("/save")
    // public Driver addDriver(@RequestBody Driver driver) {
    //     System.out.println("Driver controller  save start");
    //     System.out.println(driver);

    //     carController.addCar(driver.getCar());
    //     return driverService.addDriver(driver);
    // }

       @PutMapping("/update")
    public String updateDriver(
        @RequestBody Driver driver
    ) {
        String response = driverService.updateDriver(driver.getDriverId(),driver.getName(),driver.getPhoneNumber(),driver.getLicenseNumber());
        System.out.println(driver);
        return response;
    }
}


