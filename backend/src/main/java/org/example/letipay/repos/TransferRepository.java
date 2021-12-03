package org.example.letipay.repos;


import org.example.letipay.models.Transfer;
import org.example.letipay.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TransferRepository extends JpaRepository<Transfer, Long>  {

    @Query("select t from Transfer t join t.card c where c.user = :user")
    List<Transfer> findTransferByCard(User user);

}
