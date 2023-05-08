package edu.cibertec.stockwarehouse.empleado.infrastructure.out;

import edu.cibertec.stockwarehouse.empleado.domain.model.Empleado;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmpleadoRepository extends JpaRepository<Empleado, Integer> {
}
