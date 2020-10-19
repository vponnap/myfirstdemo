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
        return ( "Welcome to Dockers");
    }

    @GetMapping("/hellokubernetes")
    public String getKubernetes() {
        return ( "Welcome to K8s ");
    }

    @GetMapping("/hellojenkins")
    public String getJenkins() {
        return ( "Welcome to Jenkinss ");
    }

    @GetMapping("/getkanhadetails")
    public List<details> getKanhaDetails() {
        List<details> kanhadetails = new ArrayList<>();
         details d1 = new details( "THLC" , "School");
         details d2 = new details( "Kaivalya" , "Apartment");
         details d3 = new details( "Meera" , "Houses");
        details d4 = new details( "Farms" , "Fruits");
         kanhadetails.add(d1);
         kanhadetails.add(d2);
        kanhadetails.add(d3);
        kanhadetails.add(d4);
         return kanhadetails;

    }

}
