package edu.cibertec.stockwarehouse.detalleordencompra.domain.dto;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import java.math.BigDecimal;

@Getter
@Setter
public class DetalleOrdenCompraDTO {

    private int id_detalle_orden;
    private int cantidad;
    private BigDecimal precio_unitario;
    private BigDecimal costo_detalleorden;
    private int estado;
    private int id_orden_compra;
    //private int id_producto;
}