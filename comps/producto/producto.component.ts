import { Component, inject } from '@angular/core';
import { DataService } from '../../common/data.service';
import { Producto } from '../../common/tienda';
import { ActivatedRoute } from '@angular/router';
import { NavComponent } from '../../layouts/nav/nav.component';
import { FooterComponent } from '../../layouts/footer/footer.component';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [NavComponent, FooterComponent],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {

  private ar: ActivatedRoute = inject(ActivatedRoute);
  private data: DataService = inject(DataService);
  producto!: Producto;

  constructor(){
    this.cargarProducto();
  }

  cargarProducto(){
    const id = this.ar.snapshot.params["id"];

    this.data.loadProducto(id).subscribe({
      next: (datos: Producto) => {
        this.producto = datos;
      },
      error: (err: string) => {
        console.log(err);
      },
      complete: () => {
        console.log("Complete");
      }
    })
  }
}