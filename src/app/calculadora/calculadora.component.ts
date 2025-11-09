import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss'],
})
export class CalculadoraComponent implements OnInit {

  @Input() valor1!: number;
  @Input() valor2!: number;
  @Output() resultados = new EventEmitter<{ suma: number; resta: number; multiplicacion: number; division: number }>();

  constructor() { }

  ngOnInit() {}

  calcular() {
    const suma = this.valor1 + this.valor2;
    const resta = this.valor1 - this.valor2;
    const multiplicacion = this.valor1 * this.valor2;
    const division = this.valor2 !== 0 ? this.valor1 / this.valor2 : NaN;

    this.resultados.emit({ suma, resta, multiplicacion, division });
  }

}
