import { Component, inject } from '@angular/core';
import { DataService } from '../../common/data.service';
import { Category } from '../../common/tienda';
import { NavComponent } from '../../layouts/nav/nav.component';
import { FooterComponent } from '../../layouts/footer/footer.component';

@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [NavComponent, FooterComponent],
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css'
})
export class CategoriasComponent {

  private data: DataService = inject(DataService);
  cats!: Category[];

  constructor(){
    this.cargarCategorias();
  }

  private cargarCategorias(){
    this.data.loadCategorias().subscribe  ({
      next: (datos: Category[]) => {
        this.cats = datos;
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