package com.spring.example.myfirstdemo.controller;

import com.spring.example.myfirstdemo.domain.details;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.ArrayList;
@RestController
public class MyuserController {

    @GetMapping("/hellodocker")
    public String getNames() {
        return ( "Welcome to Dockers and K8S, Jenkins ");
    }

    @GetMapping("/hellokanha")
    public String getKanha() {
        return ( "Welcome to Kanha and be safe ");
    }

    @GetMapping("/getkanhadetails")
    public List<details> getKanhaDetails() {
        List<details> kanhadetails = new ArrayList<>();
         details d1 = new details( "THLC" , "School");
         details d2 = new details( "Kaivalya" , "Apartment");
         kanhadetails.add(d1);
         kanhadetails.add(d2);
         return kanhadetails;

    }

}
