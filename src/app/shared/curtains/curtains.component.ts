import { AfterViewChecked, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'app-curtains',
  templateUrl: './curtains.component.html',
  styleUrls: ['./curtains.component.css']
})
export class CurtainsComponent implements OnInit, AfterViewChecked {

  @ViewChild('up', { static: true }) up: ElementRef<HTMLElement>;
  @ViewChild('down', { static: true }) down: ElementRef<HTMLElement>;
  @ViewChild('wrapCurtains', { static: true }) wrapCurtains: ElementRef<HTMLElement>;
  public ocultarWrap = false;

  constructor() { }

  ngOnInit(): void {
    this.cargarCortinas();
    this.checkReadyDom();
  }

  ngAfterViewChecked(): void {

    // ocultar wrapCurtains
    const wrapCurtains = this.wrapCurtains.nativeElement;

    setTimeout(() => {
      if (this.ocultarWrap === true) {
        wrapCurtains.style.display = 'none';
      }
    }, 680);

  }

  cargarCortinas(): void {

    const up = this.up.nativeElement;
    const down = this.down.nativeElement;
    // const up = document.getElementById('up');


    // up
    anime({
      targets: up,
      top: ['-50%', '0%'],
      duration: 200,
      easing: 'linear'
    });

    // down
    anime({
      targets: down,
      top: ['100%', '50%'],
      duration: 200,
      easing: 'linear'
    });
  }

  checkReadyDom(): void {

    const up = this.up.nativeElement;
    const down = this.down.nativeElement;
    const wrapCurtains = this.wrapCurtains.nativeElement;

    const estatusDom = setInterval(() => {
      const state = document.readyState;

      if (state === 'complete') {

        // up
        anime({
          targets: up,
          top: ['0%', '-50%'],
          duration: 200,
          easing: 'linear'
        });

        // down
        anime({
          targets: down,
          top: ['50%', '100%'],
          duration: 200,
          easing: 'linear'
        });

        this.ocultarWrap = true;
        clearInterval(estatusDom);
      }
    }, 500);
  }

}
