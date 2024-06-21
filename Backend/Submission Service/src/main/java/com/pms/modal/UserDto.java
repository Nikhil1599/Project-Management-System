package com.pms.modal;

import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class UserDto {
    private Long id;
    private String password;
    private String email;
    private String role;
    private String fullname;
}
