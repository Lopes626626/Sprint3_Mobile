package com.fiap.sprint1.backend_consultas.controller;

import com.fiap.sprint1.backend_consultas.model.Ocorrencia;
import com.fiap.sprint1.backend_consultas.service.OcorrenciaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/ocorrencias")
@CrossOrigin(origins = "*")
public class OcorrenciaController {

    @Autowired
    private OcorrenciaService service;

    @GetMapping
    public ResponseEntity<List<Ocorrencia>> listar() {
        return ResponseEntity.ok(service.listarTodas());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Ocorrencia> buscarPorId(@PathVariable Long id) {
        return service.buscarPorId(id)
                .map(ocorrencia -> ResponseEntity.ok().body(ocorrencia))
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Ocorrencia> criar(@RequestBody Ocorrencia ocorrencia) {
        return ResponseEntity.ok(service.criar(ocorrencia));
    }
}