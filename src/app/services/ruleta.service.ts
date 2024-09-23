import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RuletaService {

  private preguntas: { pregunta: string, color: string }[] = [
    { pregunta: "¿Cuál es la capital de Francia?", color: "#ff9999" },
    { pregunta: "¿En qué año se descubrió América?", color: "#99ff99" },
    { pregunta: "¿Cuál es el río más largo del mundo?", color: "#9999ff" },
    // Agrega más preguntas con colores diferentes según necesites
  ];

  constructor() { }

  obtenerPreguntaAleatoria(): { pregunta: string, color: string } {
    const index = Math.floor(Math.random() * this.preguntas.length);
    return this.preguntas[index];
  }

}
