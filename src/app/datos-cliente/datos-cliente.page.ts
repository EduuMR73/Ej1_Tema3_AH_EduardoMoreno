import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, IonHeader, IonTitle, IonToolbar,
  IonCard, IonCardHeader, IonCardTitle, IonCardContent,
  IonText
} from '@ionic/angular/standalone';
import { ClienteDataService } from '../services/cliente-data.service';

@Component({
  selector: 'app-datos-cliente',
  templateUrl: './datos-cliente.page.html',
  styleUrls: ['./datos-cliente.page.scss'],
  standalone: true,
  imports: [
    CommonModule, FormsModule, IonContent, IonHeader, IonTitle, IonToolbar,
    IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonText
  ]
})
export class DatosClientePage implements OnInit {
  datos: any;

  constructor(private clienteData: ClienteDataService) {}

  ngOnInit() {
    this.datos = this.clienteData.getDatos();
  }
}
