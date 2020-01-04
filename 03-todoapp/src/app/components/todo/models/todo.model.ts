/**
 * Esta classe representa il modelo de una tarea
 * a realizar (ToDo)
 */
export class Todo {
  public id: number;
  public texto: string;
  public completado: boolean;

  constructor(texto: string ) {
    this.texto = texto.charAt(0).toUpperCase() + texto.slice(1);
    this.completado = false; // Los ToDos seran siempre creados como Pendientes
    this.id = Math.random();
  }
}
