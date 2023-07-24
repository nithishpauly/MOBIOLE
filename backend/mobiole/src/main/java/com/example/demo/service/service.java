package com.example.demo.service;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.entity;
import com.example.demo.repo.repo;


@Service
public class service {
	
	@Autowired 
	repo r;
	public boolean addEmployee(entity employee)
	{
	return r.save(employee)!=null?true:false;
	}
	public List <entity> getAllEmployees()
	{
	return r.findAll();
	}
	public entity getEmployeeById(long number)
	{
	return r.findById(number).get();
	}
	public entity updateDetails(entity e1) {
		return r.saveAndFlush(e1);
	}
	public void deleteDetails(long number) {
		r.deleteById(number);
	}
}
