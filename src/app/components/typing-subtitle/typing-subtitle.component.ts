import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typing-subtitle',
  templateUrl: './typing-subtitle.component.html',
  styleUrls: ['./typing-subtitle.component.css']
})
export class TypingSubtitleComponent implements OnInit {
  titulo: string = "Valentino Ceniceros"; 
  tituloMostrado: string = "";

  constructor() { }

  ngOnInit(): void {
    this.tipearTitulo();
  }

  tipearTitulo() {
    for (let i = 0; i < this.titulo.length; i++) {
      setTimeout(() => {
        this.tituloMostrado = this.titulo.slice(0, i + 1);
      }, 100 * i);

    }
  }

}
