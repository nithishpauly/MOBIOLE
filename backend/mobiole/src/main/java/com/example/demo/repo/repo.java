package com.example.demo.repo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.entity;
@Repository
public interface repo extends JpaRepository<entity,Long>{

}