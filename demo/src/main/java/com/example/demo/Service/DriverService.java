package com.example.demo.Service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.Car;
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


    public String updateDriver(int driverId, String name, String phoneNumber, String licenseNumber) {
      Driver driver = driverRepo.findById(driverId).orElse(null);
        if (driver == null) return "Driver not found";

        // Update booking
        int updated = driverRepo.updateDriver(driverId,name,phoneNumber,licenseNumber);
        return (updated > 0) ? "Driver updated successfully" : "Driver not found";     
    }
}
