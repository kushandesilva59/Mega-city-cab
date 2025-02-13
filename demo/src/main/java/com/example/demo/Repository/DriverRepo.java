package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Entity.Driver;

public interface DriverRepo extends JpaRepository<Driver, Integer>{

    
} 
