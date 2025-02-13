package com.example.demo.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String customerName;
    private String telephoneNumber;
    private String address;
    private String email;
    private String destinationLocation;
    private String startLocation;  
    private String date;
    private String time;
    private boolean approveStatus;
    private String carId;
    private String driverId;
}
