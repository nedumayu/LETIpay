package org.example.letipay.repos;

import org.example.letipay.models.Card;
import org.example.letipay.models.Payment;
import org.example.letipay.models.User;
import org.example.letipay.repos.dto.PaymentInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface PaymentRepository extends JpaRepository<Payment, Long> {

    @Query("select p from Payment p join p.card c where c.user = :user")
    List<Payment> findPaymentByCard(User user);

    @Query("select new org.example.letipay.repos.dto.PaymentInfo(p.id, p.payName, p.paySum, p.payDate, u.username) " +
            "from Payment p inner join User u on (p.card=u.id)")
    List<PaymentInfo> findPaymentsAndUsers();

}
