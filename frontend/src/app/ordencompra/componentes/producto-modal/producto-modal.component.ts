import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Producto } from 'src/app/producto/modelos/Producto';
import { ProductoService } from 'src/app/producto/servicios/producto.service';


@Component({
  selector: 'app-producto-modal',
  templateUrl: './producto-modal.component.html',
  styleUrls: ['./producto-modal.component.css']
})
export class ProductoModalComponent implements OnInit {

  productos?: Producto[]; 
  productoSeleccionado: any; 

  constructor(
    public dialogRef: MatDialogRef<ProductoModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private productoService:ProductoService
  ) { }

  ngOnInit(): void {
    

      this.productoService.getProductos().subscribe(
        data=>{
          this.productos=data;
          console.log(data);
        },
        error=>{
          console.log(error);
        }
    );
    
  }

  seleccionarProducto(producto: any) {
    this.productoSeleccionado = producto;
  }

  confirmarSeleccion() {
    this.dialogRef.close(this.productoSeleccionado);
  }

  cancelarSeleccion() {
    this.dialogRef.close();
  }

  
}