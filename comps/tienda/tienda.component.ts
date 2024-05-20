import { Component, inject } from '@angular/core';
import { Producto } from '../../common/tienda';
import { DataService } from '../../common/data.service';
import { NavComponent } from '../../layouts/nav/nav.component';
import { FooterComponent } from "../../layouts/footer/footer.component";

@Component({
    selector: 'app-tienda',
    standalone: true,
    templateUrl: './tienda.component.html',
    styleUrl: './tienda.component.css',
    imports: [NavComponent, FooterComponent]
})
export class TiendaComponent {

  private data: DataService = inject(DataService);
  tienda: Producto[] = [];

  constructor(){
    this.cargarTienda();
  }

  cargarTienda(){
    this.data.loadTienda().subscribe({
      next: (datos: Producto[]) => {
        this.tienda = datos;
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