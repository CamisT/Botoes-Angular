import { Component } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  Input: number = 0
  title: any; 


  constructor() {}
   
    aumentar() {
      this.Input++;
    }

    diminuir() {
      this.Input--;
    }



    /* alterarValor(event: any): void {
      this.valorInput = event.target.value
    } */
} 