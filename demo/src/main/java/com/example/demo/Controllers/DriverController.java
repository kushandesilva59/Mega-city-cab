package com.example.demo.Controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.Entity.Driver;
import com.example.demo.Service.DriverService;


@RestController
@RequestMapping("/api/driver")
public class DriverController {
   @Autowired
    private DriverService driverService;

    @Autowired
    private CarController carController;
    
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
}
