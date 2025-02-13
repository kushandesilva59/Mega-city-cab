package com.example.demo.Entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Driver {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String phoneNumber;
    private String licenseNumber;
    
    @OneToOne
    @JoinColumn(name = "car_id", unique = true) 
    private Car car;
}
