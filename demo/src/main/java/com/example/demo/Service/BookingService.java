package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.Booking;
import com.example.demo.Entity.Car;
import com.example.demo.Entity.Driver;
import com.example.demo.Repository.BookingRepo;
import com.example.demo.Repository.CarRepo;
import com.example.demo.Repository.DriverRepo;

@Service
public class BookingService {

    @Autowired
    private BookingRepo bookingRepo;


    @Autowired
    private CarRepo carRepo;
    
    @Autowired
    private DriverRepo driverRepo;

      public List<Booking> getAllBookings(){
        
        return bookingRepo.findAll();
    }

    public String addBooking(Booking booking) {
        // TODO Auto-generated method stub
        // throw new UnsupportedOperationException("Unimplemented method 'addBooking'");

        Booking booking2 = bookingRepo.save(booking);
        return booking2.getCustomerName();
    }

    public List<Booking> getNotApprovedBookings(){
        return bookingRepo.getNotApprovedBookings();
    }

     public String confirmBooking(int bookingId, int carId, int driverId) {

        System.out.println("Car ID :"+carId);

        // Check if car exists
        Car car = carRepo.findById(carId).orElse(null);
        if (car == null) return "Car not found";

        // Check if driver exists
        Driver driver = driverRepo.findById(driverId).orElse(null);
        if (driver == null) return "Driver not found";

        // Update booking
        int updated = bookingRepo.confirmBooking(bookingId, carId, driverId);
        return (updated > 0) ? "Booking updated successfully" : "Booking not found";
    }
    
}
