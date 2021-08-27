import { Component } from '@angular/core';
import { Usuario} from './clases/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'claseUno';

  public edadUno:number;
  public edadDos:number;
  public sumaEdades:number;
  public promedioEdades:number;
  public miUsuario:Usuario;


  constructor(){
    this.edadUno=0;
    this.edadDos=0;
    this.sumaEdades=0;
    this.promedioEdades= 0;
    this.miUsuario= new Usuario("Rocio","1234");
  }

/*
bindeos:
*atraves del (click)='funcion()'
*con las {{  }}

bindeo de doble via:
<input type="text" name="" id="" [(ngModel)]='title'> //no hace falta el name ni id (para el binding)
    para que funcione en el app.module.ts hay que importar 
    el modulo ngModel (import { FormsModule } from '@angular/forms';)
*/
  public calcular(){
  console.log("como va");
   this.sumaEdades= this.edadUno+ this.edadDos;

  this.promedioEdades = this.sumaEdades/2;
  }

  public limpiarResultados(){
    this.edadUno=0;
    this.edadDos=0;
    this.promedioEdades=0;
    this.sumaEdades=0;
  }
}
