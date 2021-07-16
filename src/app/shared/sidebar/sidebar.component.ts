import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { ItemSidebar } from '../../interfaces/item-sidebar';
import { Puntero } from '../../scripts/puntero';
import anime from 'animejs/lib/anime.es.js';
import { BotonResponsivo } from '../../scripts/boton-responsivo';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, AfterViewInit {

  public items: ItemSidebar[];

  @ViewChild('wrapSidebar', { static: true }) wrapSidebar: ElementRef<HTMLElement>;

  constructor(
    private puntero: Puntero,
    public breakPointObserver: BreakpointObserver,
    private btnResponsivo: BotonResponsivo
  ) { }

  ngOnInit(): void {
    this.responsive();
    this.puntero.puntero();
    this.cargarItemsSidebar();
    // this.ocultarSidebar();
  }

  ngAfterViewInit(): void {
    // this.ocultarSidebar();
  }

  cargarItemsSidebar(): void {
    this.items = [
      { nombre: 'Inicio', enlace: 'about' },
      { nombre: 'Habilidades', enlace: 'skills' },
      // { nombre: 'Productos', enlace: 'products' },
      // { nombre: 'Servicios', enlace: 'services' },
      { nombre: 'Trabajos', enlace: 'work' },
      { nombre: 'Contacto', enlace: 'contact' },
    ];
  }

  responsive(): void {

    const wrapSidebar = this.wrapSidebar.nativeElement;

    // 576 px
    this.breakPointObserver
      .observe(['(max-width: 576px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {

          anime({
            targets: wrapSidebar,
            left: '-120px',
            easing: 'linear',
            duration: 500
          });
        } else {
          anime({
            targets: wrapSidebar,
            left: '0px',
            easing: 'linear',
            duration: 500
          });
        }
      });
  }

  ocultarSidebar(event: Event): void {

    const btn = document.getElementById('btnResponsivo');

    if (!btn) {
      return;
    } else {
      btn.classList.remove('fa-times');
      btn.classList.add('fa-bars');
    }

    const wrapSidebar = this.wrapSidebar.nativeElement;
    wrapSidebar.classList.remove('animate__fadeIn');
    wrapSidebar.style.width = `120px`;
    wrapSidebar.style.marginLeft = `0px`;

    this.btnResponsivo.estadoBtn = false;

  }

}
