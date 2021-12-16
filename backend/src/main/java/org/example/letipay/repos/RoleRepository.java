package org.example.letipay.repos;

import org.example.letipay.models.Role;
import org.example.letipay.models.RoleEnum;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long>{

    Optional<Role> findByName(RoleEnum name);
}

