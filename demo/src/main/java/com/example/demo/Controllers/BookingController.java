package com.example.demo.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.Entity.Booking;
import com.example.demo.Service.BookingService;
import com.example.demo.model.UpdateBookingDTO;
import com.example.demo.model.UserLoginModel;

@RestController
@RequestMapping("/api/bookings")
public class BookingController {

    @Autowired
    private BookingService bookingService;
    

    @GetMapping("/all")
    public List<Booking> getAllBookings(){
        return bookingService.getAllBookings();
    }

    @PostMapping("/save")
    public String addBooking(@RequestBody Booking booking) {
        System.out.println("Booking controller  save start");
        System.out.println(booking);

        
         return bookingService.addBooking(booking);
    }

    @GetMapping("/notApprovedBookings")
    public List<Booking> getNotApprovedBookings(){
        return bookingService.getNotApprovedBookings();
    }

    @PutMapping("")
    public String updateBooking(
        @RequestBody UpdateBookingDTO updateBookingDTO
    ) {
        String response = bookingService.updateBooking(updateBookingDTO.getId(), updateBookingDTO.getDriverId(), updateBookingDTO.getCarId());
        System.out.println(updateBookingDTO);
        return response;
    }
}
