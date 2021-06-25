package com.spring.example.myfirstdemo.domain;
import java.util.List;
import javax.persistence.EntityManager;
import org.hibernate.query.Query;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import com.spring.example.myfirstdemo.user.User;

@Repository
public class UserDAOImp implements Userimp {

    @Autowired
    private EntityManager entityManager;
    @Override
    public List<User> get() {
        Session currSession = entityManager.unwrap(Session.class);
        Query<User> query = currSession.createQuery("from User", User.class);
        List<User> list = query.getResultList();
        return list;
    }

    @Override
    public void save(User user) {

        Session currSession = entityManager.unwrap(Session.class);
        currSession.saveOrUpdate(user);
    }

}