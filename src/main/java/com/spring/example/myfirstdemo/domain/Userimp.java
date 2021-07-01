package com.spring.example.myfirstdemo.domain;

import com.spring.example.myfirstdemo.user.User;

import java.util.List;

public interface Userimp {
    List<User> get();

    void save(User user);
}
