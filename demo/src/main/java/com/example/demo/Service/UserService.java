package com.example.demo.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.AppUser;
import com.example.demo.Repository.UserRepository;
import com.example.demo.model.UserLoginModel;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    AuthenticationManager authManager;

    @Autowired
    private JWTService jwtService;
    

    private BCryptPasswordEncoder encoder = new BCryptPasswordEncoder(12);


    public AppUser register(AppUser appUser){

        appUser.setPassword(encoder.encode(appUser.getPassword()));
        return userRepository.save(appUser);
    }

    public String verify(UserLoginModel user){
        Authentication authentication = authManager.authenticate(new UsernamePasswordAuthenticationToken(user.getUsername(), user.getPassword()));

        if(authentication.isAuthenticated()){

             return jwtService.generateToken(user.getUsername());
                       
        }else{
            return "fali";
        }
    }


    public AppUser getUserByUsername(String username){
       return userRepository.findByUsername(username);
    }
}
