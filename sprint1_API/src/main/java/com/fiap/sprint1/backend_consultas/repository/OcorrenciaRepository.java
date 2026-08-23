package com.fiap.sprint1.backend_consultas.repository;

import com.fiap.sprint1.backend_consultas.model.Ocorrencia;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OcorrenciaRepository extends JpaRepository<Ocorrencia, Long> {
}