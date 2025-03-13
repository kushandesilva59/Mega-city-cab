package com.example.demo.Entity;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Data;

@Entity
@Data
public class Car {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String brand;
    private String model;
    @Column(unique = true)
    private String licensePlate;
    private int peopleCount;
    private int freeKm;
    private double perDayPrice;

    @ManyToOne
    @JoinColumn(name = "driver_id") // Foreign key in Car table
    @JsonBackReference
    private Driver driver;
}
