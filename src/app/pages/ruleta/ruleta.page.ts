import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { MessageService } from 'src/app/services/message.service';
import { RuletaService } from 'src/app/services/ruleta.service';

@Component({
  selector: 'app-ruleta',
  templateUrl: './ruleta.page.html',
  styleUrls: ['./ruleta.page.scss'],
})
export class RuletaPage implements OnInit {

  preguntas = [
    {
      pregunta: "La Mucopolisacaridosis es una enfermedad",
      respuestas: ["Infecciosa", "Cardiovascular", "Genética"],
      correcta: "Genética",
      respondida: false
    },
    {
      pregunta: "La Mucopolisacaridosis se detecta por medio de",
      respuestas: ["Análisis de GAG en la orina", "Prueba de embarazo", "polisomnografía o estudio del sueño"],
      correcta: "Análisis de GAG en la orina",
      respondida: false
    },
    {
      pregunta: "La Mucopolisacaridosis se detecta por medio de",
      respuestas: ["Verdadero", "Falso"],
      correcta: "Verdadero",
      respondida: false
    },
    {
      pregunta: "La mucopolisacaridosis afecta a nivel",
      respuestas: ["Inmunológico", "Multisistémico", "Cognitivo"],
      correcta: "Multisistémico",
      respondida: false
    },
    {
      pregunta: "Existe solo un tipo de mucopolisacaridosis",
      respuestas: ["Verdadero", "Falso"],
      correcta: "Falso",
      respondida: false
    },
    {
      pregunta: "La mucopolisacaridosis es debida a la ausencia o mal funcionamiento de la molécula",
      respuestas: ["Glucosaminoglicanos", "Insulina", "Déficit de proteína"],
      correcta: "Glucosaminoglicanos",
      respondida: false
    },
    {
      pregunta: "Uno de los tratamientos que se emplean para esta enfermedad es la Terapia de reemplazo enzimático",
      respuestas: ["Verdadero", "Falso"],
      correcta: "Verdadero",
      respondida: false
    },
    {
      pregunta: "¿La Mucopolisacaridosis es una enfermedad genética?",
      respuestas: ["Verdadero", "Falso"],
      correcta: "Verdadero",
      respondida: false
    },
    // Agrega más preguntas aquí
  ];
  preguntaActual: any;
  respuestaSeleccionada: string = '';
  preguntasRestantes: any[];

  constructor(
    private navCtrl: NavController,
    private messageService: MessageService,
  ) {
    this.preguntasRestantes = this.preguntas.slice(); // Hacemos una copia de todas las preguntas al iniciar
    this.seleccionarPreguntaAleatoria();
  }

  ngOnInit() { }

  seleccionarPreguntaAleatoria() {
    this.preguntasRestantes = this.preguntasRestantes.filter(({ respondida }) => respondida == false)
    const index = Math.floor(Math.random() * this.preguntasRestantes.length);
    this.preguntaActual = this.preguntasRestantes[index];
  }

  responder() {
    if (this.respuestaSeleccionada === this.preguntaActual.correcta) {
      this.messageService.presentToastMsg('¡Correcto!', 'success');
      this.preguntaActual.respondida = true;
      this.seleccionarPreguntaAleatoria();
    } else {
      this.messageService.presentToastMsg('Incorrecto. Intenta de nuevo.', 'danger');
    }
  }

  reiniciarJuego() {
    // reiniciar las preguntas
    this.preguntasRestantes = this.preguntas.map(pregunta => {
      return { ...pregunta, respondida: false }
    }).slice();
    this.seleccionarPreguntaAleatoria();
  }

  volver() {
    this.navCtrl.navigateBack('/mps/1');
  }

  setRespuestaSeleccionada(value: string) {
    this.respuestaSeleccionada = value;
    this.responder();
  }
}
