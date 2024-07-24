package com.crafts.order.security.init;

import com.crafts.order.security.common.PasswordEncoder;
import com.crafts.order.security.entity.Authority;
import com.crafts.order.security.entity.CraftUser;
import com.crafts.order.security.repository.AuthorityRepository;
import com.crafts.order.security.repository.CraftUserRepository;
import com.crafts.order.security.util.UserType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Set;

@Component
public class SystemRunner implements CommandLineRunner {

    @Autowired
    private AuthorityRepository authorityRepository;

    @Autowired
    private CraftUserRepository craftUserRepository;

    @Autowired
    private PasswordEncoder encoder;

    @Override
    public void run(String... args) throws Exception {

        System.out.println("CommandLine Runner=================");

        List<Authority> authorityList = new ArrayList<>();

        authorityList = authorityRepository.findAll();

        CraftUser superAdmin = craftUserRepository.findByAuthoritiesRoleName(UserType.SUPER_ADMIN.getLabel());

        if(authorityList.size() == 0){
            authorityList = getAuthorites();
            authorityRepository.saveAll(authorityList);
        }

        if(superAdmin == null){

            Authority authority = authorityRepository.findByRoleName(UserType.SUPER_ADMIN.getLabel());

            CraftUser craftUser = new CraftUser("Craft Super Admin", encoder.encoder().encode("superAdmin"),
                    "superadmin@gmail.com", Set.of(authority));

            craftUserRepository.save(craftUser);
        }

        System.out.println("End CommandLine Runner=================");
    }

    public List<Authority> getAuthorites() {

        List<Authority> authorities = new ArrayList<>(
                Arrays.asList(new Authority(UserType.SUPER_ADMIN.getValue(), UserType.SUPER_ADMIN.getLabel()),
                        new Authority(UserType.ADMIN.getValue(), UserType.ADMIN.getLabel()),
                        new Authority(UserType.USER.getValue(), UserType.USER.getLabel()))
        );

        return authorities;
    }


}
