package com.pms.service;

import com.pms.modal.User;

import java.util.List;

public interface UserService {
    public User getUserProfile(String jwt);

    public List<User> getAllUserProfile();
}
