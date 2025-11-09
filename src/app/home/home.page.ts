import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import {
  IonHeader, IonToolbar, IonTitle, IonButtons, IonButton,
  IonContent, IonItem, IonLabel, IonInput, IonRouterOutlet, IonFooter
} from '@ionic/angular/standalone';
import { UserStateService } from '../core/user-state.service';
import { CounterComponent } from '../components/counter/counter.component';
import { CalculadoraComponent } from '../calculadora/calculadora.component'; 

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [
    CommonModule, FormsModule, RouterLink, RouterOutlet,
    IonHeader, IonToolbar, IonTitle, IonButtons, IonButton,
    IonContent, IonItem, IonLabel, IonInput, IonRouterOutlet,
    CounterComponent, IonFooter, CalculadoraComponent
  ],
  templateUrl: './home.page.html'
})
export class HomePage {
  //private state = inject(UserStateService);

  parentCount = 0;
  milestoneMsg = '';

  valor1: number = 0;
  valor2: number = 0;
  resultados: any;

  incrementFromParent() {
    this.parentCount++;
  }

  onMilestoneReached(n: number) {
    this.milestoneMsg = `Ha llegado al ${n}`;
    setTimeout(() => this.milestoneMsg = '', 3000);
  }

  onResultadosCalculo(event: any) {
    this.resultados = event;
  }
}
