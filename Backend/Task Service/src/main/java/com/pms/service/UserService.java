package com.pms.service;

import com.pms.modal.UserDto;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;

@FeignClient(value = "USER-SERVICE", url = "http://localhost:8080")
public interface UserService {

    @GetMapping("/api/user/profile")
    UserDto getUserProfile(@RequestHeader("Authorization") String jwt);
}
