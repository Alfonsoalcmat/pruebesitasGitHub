import { Component, inject } from '@angular/core';
import { DataService } from '../../common/data.service';
import { ActivatedRoute } from '@angular/router';
import { Producto } from '../../common/tienda';
import { NavComponent } from '../../layouts/nav/nav.component';
import { FooterComponent } from '../../layouts/footer/footer.component';

@Component({
  selector: 'app-filtro-cats',
  standalone: true,
  imports: [NavComponent, FooterComponent],
  templateUrl: './filtro-cats.component.html',
  styleUrl: './filtro-cats.component.css'
})
export class FiltroCatsComponent {

  private data: DataService = inject(DataService);
  private ar: ActivatedRoute = inject(ActivatedRoute);
  prods: Producto[] = []

  constructor(){
    this.cargarCat();
  }

  cargarCat(){
    const id = this.ar.snapshot.params["id"];

    this.data.loadCat(id).subscribe({
      next: (datos: Producto[]) => {
        this.prods = datos;
      },
      error: (err: string) => {
        console.log(err);
      },
      complete: () => {
        console.log("Completado");
      }
    })
  }
}