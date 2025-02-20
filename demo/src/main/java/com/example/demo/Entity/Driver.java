package com.example.demo.Entity;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Driver {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int driverId;
    private String name;
    private String phoneNumber;
    private String licenseNumber;
        
      @OneToMany(mappedBy = "driver", cascade = CascadeType.ALL, orphanRemoval = true)
      @JsonManagedReference
    private List<Car> cars = new ArrayList<>();
}
