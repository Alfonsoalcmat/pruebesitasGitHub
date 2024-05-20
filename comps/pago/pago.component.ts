import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../common/data.service';
import { Producto } from '../../common/tienda';
import { FooterComponent } from '../../layouts/footer/footer.component';
import { TarjetaComponent } from '../tarjeta/tarjeta.component';

@Component({
  selector: 'app-pago',
  standalone: true,
  imports: [FooterComponent, TarjetaComponent],
  templateUrl: './pago.component.html',
  styleUrl: './pago.component.css'
})
export class PagoComponent {

}