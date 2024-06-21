package com.pms.controller;

import com.pms.modal.Task;
import com.pms.modal.TaskStatus;
import com.pms.modal.UserDto;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class HomeController {
    @GetMapping("/tasks")
    public ResponseEntity<String> getAssignedUser() throws Exception {

        return new ResponseEntity<>("Welcome to task services", HttpStatus.OK);
    }
}
