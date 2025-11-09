import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteDataService {
  private datosCliente: any;

  setDatos(datos: any) {
    this.datosCliente = datos;
  }

  getDatos() {
    return this.datosCliente;
  }
}
