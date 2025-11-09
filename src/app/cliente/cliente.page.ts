import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ClienteDataService } from '../services/cliente-data.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.page.html',
  styleUrls: ['./cliente.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, ReactiveFormsModule]
})
export class ClientePage {
  clienteForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private clienteData: ClienteDataService, // Inyecta el servicio
    private router: Router // Inyecta el router para navegar
  ) {
    this.clienteForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      nacionalidad: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.clienteForm.valid) {
      this.clienteData.setDatos(this.clienteForm.value); // Guarda los datos
      this.router.navigate(['/datos-cliente']); // Navega a la página de destino
    }
  }
}
