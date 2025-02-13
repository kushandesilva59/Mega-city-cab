package com.example.demo.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.AppUser;
import com.example.demo.Service.UserService;
import com.example.demo.model.LoginResponseModel;
import com.example.demo.model.UserLoginModel;

import org.springframework.web.bind.annotation.RequestBody;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/")
public class UserController {
   
    @Autowired
    private UserService userService;




    @PostMapping("/register")
    public AppUser register(@RequestBody AppUser appUser) {

      return userService.register(appUser);
    }

    // @PostMapping("/login")
    // public String login(@RequestBody UserLoginModel user) {
    //     System.out.println("Login controller start");
    //     System.out.println(user);

        
    //      return userService.verify(user);
    // }
    @PostMapping("/login")
    public LoginResponseModel login(@RequestBody UserLoginModel user) {
        System.out.println("Login controller start");
        System.out.println(user);
        AppUser user2 = null;

        
        String token = userService.verify(user);
        System.out.println();

         if(token != null){
            user2 = userService.getUserByUsername(user.getUsername());
         }

         return new LoginResponseModel(token,user2);

    }
    



}
