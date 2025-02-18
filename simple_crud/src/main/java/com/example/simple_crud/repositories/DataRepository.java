package com.example.simple_crud.repositories;
import org.springframework.data.jpa.repository.JpaRepository;

import com.example.simple_crud.entities.Data;

public interface DataRepository extends JpaRepository<Data, Long> {}
