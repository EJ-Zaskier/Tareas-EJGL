import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/Tarea';

@Component({
  selector: 'app-tareas',
  templateUrl:'./tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

  listaTareas: Tarea[] = [];
  nombreTarea: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  agregarTarea(): void {
   const tarea: Tarea = {
      nombre: this.nombreTarea,
      estado: false
   }
   //Agregar obeto al array
   this.listaTareas.push(tarea);
   //Limpiar el input
   this.nombreTarea = '';

  }

  eliminarTarea(index: number): void{
    //console.log(index)
    this.listaTareas.splice(index,1);
  }

  actualizarTarea(index: number, tarea: Tarea): void{
    tarea.estado = !tarea.estado;
  } 

}
