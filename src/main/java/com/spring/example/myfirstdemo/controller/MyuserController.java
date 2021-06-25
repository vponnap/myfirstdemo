package com.spring.example.myfirstdemo.controller;

import com.spring.example.myfirstdemo.domain.details;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import java.util.List;
import java.util.ArrayList;
import com.spring.example.myfirstdemo.user.User;
import com.spring.example.myfirstdemo.repository.UserRepository;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping
public class MyuserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("users")
    public List < User > getUsers() {
        return this.userRepository.findAll();
    }

    @GetMapping("/hellodocker")
    public String getNames() {
        return ( "Welcome to Dockers Session");
    }

    @GetMapping("/hellok8s")
    public String getKubernetes() {
        return ( "Welcome to K8S ");
    }

    @GetMapping("/helloeks")
    public String getEks() {
        return ( "Welcome to AWS EKS ");
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

    @GetMapping("/api/foos")
    @ResponseBody
    public String getFoos(@RequestParam(required = false) String id) {
        return "ID: " + id;
    }
}
