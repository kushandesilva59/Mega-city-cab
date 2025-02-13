package com.example.demo.Repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.Entity.Booking;

import jakarta.transaction.Transactional;


public interface BookingRepo extends JpaRepository<Booking,Long>{


    @Query(value = "SELECT * FROM booking WHERE approve_status = false", nativeQuery = true)
    List<Booking> getNotApprovedBookings();

    @Modifying
    @Transactional
    @Query(value = "UPDATE booking SET driver_id = ?2, car_id = ?3,approve_status=true WHERE id = ?1", nativeQuery = true)
    int updateBooking(int bookingId, int driverId, int car_id);

    
} 
