package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Entity.AppUser;

public interface UserRepository extends JpaRepository<AppUser, Long> {
   // Optional<User> findByUsername(String username);  

    AppUser findByUsername(String username);
}



