package com.rev.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rev.repository.JobRepository;

@Service
@Transactional
public class JobService {
	
	@Autowired
	private JobRepository jobRepo;

}
