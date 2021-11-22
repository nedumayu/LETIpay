package org.example.letipay.repos;

import org.example.letipay.models.Card;
import org.example.letipay.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CardRepository extends JpaRepository<Card, Long> {
    Optional<Card> findById(Long Id);
    Optional<Card> findByUser(User user);
}
