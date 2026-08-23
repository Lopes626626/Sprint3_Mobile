package com.fiap.sprint1.backend_consultas.service;

import com.fiap.sprint1.backend_consultas.model.Ocorrencia;
import com.fiap.sprint1.backend_consultas.repository.OcorrenciaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OcorrenciaService {

    @Autowired
    private OcorrenciaRepository repository;

    public Ocorrencia criar(Ocorrencia ocorrencia) {
        return repository.save(ocorrencia);
    }

    public List<Ocorrencia> listarTodas() {
        return repository.findAll();
    }

    public Optional<Ocorrencia> buscarPorId(Long id) {
        return repository.findById(id);
    }

    public Ocorrencia atualizar(Long id, Ocorrencia ocorrenciaAtualizada) {
        return repository.findById(id).map(ocorrencia -> {
            ocorrencia.setNome(ocorrenciaAtualizada.getNome());
            ocorrencia.setDescricao(ocorrenciaAtualizada.getDescricao());
            ocorrencia.setStatus(ocorrenciaAtualizada.getStatus());
            ocorrencia.setData(ocorrenciaAtualizada.getData());
            return repository.save(ocorrencia);
        }).orElse(null);
    }

    public boolean deletar(Long id) {
        if (repository.existsById(id)) {
            repository.deleteById(id);
            return true;
        }
        return false;
    }
}
