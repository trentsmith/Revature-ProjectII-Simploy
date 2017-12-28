package com.rev.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rev.service.JobService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(value = "/Job")
public class JobController {
	
	@Autowired
	JobService service;

}
