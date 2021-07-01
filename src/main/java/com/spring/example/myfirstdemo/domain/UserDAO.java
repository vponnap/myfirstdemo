package com.spring.example.myfirstdemo.domain;
import java.util.List;
import com.spring.example.myfirstdemo.user.User;

public interface UserDAO {
    List<User> get();

    User get(int id);

    void save(User name);
}
