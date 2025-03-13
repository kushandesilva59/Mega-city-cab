package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.Entity.Driver;

import jakarta.transaction.Transactional;

public interface DriverRepo extends JpaRepository<Driver, Integer>{

    @Modifying
    @Transactional
    @Query(value = "UPDATE driver SET name = ?2, phone_number = ?3,license_number=?4 WHERE driver_id = ?1", nativeQuery = true)
    int updateDriver(int driverId, String name, String phoneNumber, String licenseNumber);

} 
