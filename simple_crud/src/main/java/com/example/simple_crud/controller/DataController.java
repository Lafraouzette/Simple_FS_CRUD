package com.example.simple_crud.controller;
import com.example.simple_crud.entities.Data;
import com.example.simple_crud.service.DataServiceImp;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;

@RestController
@RequestMapping("/data")
@CrossOrigin(origins = "http://localhost:4200")
class DataController {
    @Autowired
    private DataServiceImp dataService;

    @GetMapping
    public List<Data> getAllData() { return dataService.getAllData(); }

    @GetMapping("/{id}")
    public ResponseEntity<Data> getDataById(@PathVariable Long id) {
        return dataService.getDataById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Data createData(@RequestBody Data data) { return dataService.saveData(data); }

    @PutMapping("/{id}")
    public ResponseEntity<Data> updateData(@PathVariable Long id, @RequestBody Data newData) {
        return dataService.getDataById(id).map(existingData -> {
            existingData.setName(newData.getName());
            existingData.setValue(newData.getValue());
            return ResponseEntity.ok(dataService.saveData(existingData));
        }).orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteData(@PathVariable Long id) {
        if (dataService.getDataById(id).isPresent()) {
            dataService.deleteData(id);
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}
