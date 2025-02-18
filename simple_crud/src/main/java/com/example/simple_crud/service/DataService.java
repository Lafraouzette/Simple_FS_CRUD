package com.example.simple_crud.service;
import java.util.List;
import java.util.Optional;
import com.example.simple_crud.entities.Data;

public interface DataService {
    public List<Data> getAllData() ;

    public Optional<Data> getDataById(Long id) ;

    public Data saveData(Data data);

    public void deleteData(Long id);

}
