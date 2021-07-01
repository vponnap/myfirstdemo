package com.spring.example.myfirstdemo.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.spring.example.myfirstdemo.user.User;
@Repository
public interface UserRepository extends JpaRepository<User, Long>{

}