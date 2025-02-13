package com.example.demo.model;

import com.example.demo.Entity.AppUser;

import lombok.Data;

@Data
public class LoginResponseModel {
    String token;
    AppUser user;

    public LoginResponseModel(String token, AppUser user){
        this.token = token;
        this.user = user;
    }
}


