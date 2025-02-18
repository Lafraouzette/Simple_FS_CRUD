package com.example.simple_crud.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.simple_crud.entities.Data;

import com.example.simple_crud.repositories.DataRepository;

@Service
public class DataServiceImp implements DataService {

    @Autowired
    private DataRepository dataRepository;

    @Override
    public List<Data> getAllData() {
        return dataRepository.findAll();
    }

    @Override
    public Optional<Data> getDataById(Long id) {
        return dataRepository.findById(id);
    }

    @Override
    public Data saveData(Data data) {
        return dataRepository.save(data);
    }

    @Override
    public void deleteData(Long id) {
        dataRepository.deleteById(id);
    }

}
