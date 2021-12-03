package org.example.letipay.repos;

import org.example.letipay.models.Card;
import org.example.letipay.models.Payment;
import org.example.letipay.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface PaymentRepository extends JpaRepository<Payment, Long> {

    @Query("select p from Payment p join p.card c where c.user = :user")
    List<Payment> findPaymentByCard(User user);

    @Query("select p, c from Payment p join p.card c")
    List<Payment> findAllPayments();
}
