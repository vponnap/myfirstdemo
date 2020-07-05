package com.spring.example.myfirstdemo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MyuserController {

    @GetMapping("/hellovenka")
    public String getNames() {
        return ( "Welcome Venka to Dockers and K8S, Jenkins");
    }


}
