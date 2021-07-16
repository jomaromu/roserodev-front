import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Proyectos } from '../../interfaces/proyectos';
import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'app-show-project',
  templateUrl: './show-project.component.html',
  styleUrls: ['./show-project.component.css']
})
export class ShowProjectComponent implements OnInit {

  @Input() proyecto: Proyectos;
  @ViewChild('enlace', { static: true }) enlace: ElementRef<HTMLElement>;
  @ViewChild('efectoa', { static: true }) efectoa: ElementRef<HTMLElement>;

  constructor() { }

  ngOnInit(): void {
    this.efectosHover();
  }

  efectosHover(): void {
    const efectoa = this.efectoa.nativeElement;
    const enlace = this.enlace.nativeElement;

    enlace.addEventListener('mouseenter', (e) => {

      anime({
        targets: efectoa,
        top: '-60px',
        easing: 'easeInOutQuad',
        duration: 400,
      });

      enlace.style.border = '1px solid rgb(240, 35, 136)';
      enlace.style.width = '170px';
    });

    enlace.addEventListener('mouseleave', (e) => {

      anime({
        targets: efectoa,
        top: '30px',
        easing: 'easeInOutQuad',
        duration: 400,
      });
      enlace.style.border = '1px solid rgb(223, 223, 223)';
      enlace.style.width = '150px';
    });

  }

}
