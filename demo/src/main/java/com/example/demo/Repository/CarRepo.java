package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.Entity.Car;

import jakarta.transaction.Transactional;

public interface CarRepo extends JpaRepository<Car, Integer>{

    @Modifying
    @Transactional
    @Query(value = "UPDATE car SET brand = ?2, model = ?3,license_plate=?4,people_count=?5,free_km=?6, per_day_price=?7 WHERE id = ?1", nativeQuery = true)
    int updateCar(int id, String brand, String model, String licensePlate, int peopleCount, int freeKm,
            double perDayPrice);


          
    @Query(value = "SELECT * from car WHERE driver_id = ?1", nativeQuery = true)
    Car getCarByDriverId(int driverId);


        

} 
