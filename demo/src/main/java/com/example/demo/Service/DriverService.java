package com.example.demo.Service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.Entity.Driver;
import com.example.demo.Repository.DriverRepo;

@Service
public class DriverService {
    @Autowired
    private DriverRepo driverRepo;


    public List<Driver> getAllDrivers(){
        
        return driverRepo.findAll();
    }


    public Driver addDriver(Driver driver) {
       return driverRepo.save(driver);
    }
}
