import { Component, OnInit, ViewChild, ElementRef, HostListener, AfterViewInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Whatsapp } from '../../scripts/whatsapp';
import { BotonResponsivo } from '../../scripts/boton-responsivo';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, AfterViewInit {

  @ViewChild('tituloDetalles', { static: true }) tituloDetalles: ElementRef<HTMLElement>;
  @ViewChild('detalles', { static: true }) detalles: ElementRef<HTMLElement>;
  @ViewChild('wrapAbout', { static: true }) wrapAbout: ElementRef<HTMLElement>;
  @ViewChild('about', { static: true }) about: ElementRef<HTMLElement>;

  public windowWidth: number;

  constructor(
    private whatsapp: Whatsapp,
    private btnResponsivo: BotonResponsivo,
    public breakPointObserver: BreakpointObserver
  ) { }

  ngOnInit(): void {
    // this.breakPoinst();
    this.responsive();
    this.efectoTitulo();
    this.divDetalles();
    this.whatsapp.btnWhatsapp();
    this.btnResponsivo.btnResponsivo();
  }

  // metodo que da efecto al titulo
  efectoTitulo(): void {
    const tituloDetalles = this.tituloDetalles.nativeElement;
    const textoOriginal = `Permita que nos presentemos`;
    const arrayTitulo = Array.from(textoOriginal);

    // agragar los span a cada letra
    for (const label of arrayTitulo) {
      const span = document.createElement('span');
      span.classList.add('animate__animated');
      // span.style.cursor = 'pointer';
      span.innerText = label;
      tituloDetalles.append(span);

      // eventos
      span.addEventListener('mouseenter', () => {
        span.classList.add('animate__flash');
      });


      span.addEventListener('mouseleave', () => {
        span.classList.remove('animate__flash');
      });
    }

  }

  // metodo del div detalles
  divDetalles(): void {

    const detalles = this.detalles.nativeElement;
    const divWidth = detalles.clientWidth;
    const divHeight = detalles.clientHeight;

    const ancho = 230;
    const alto = 230;

    detalles.style.display = 'grid';
    detalles.style.gridTemplateColumns = `auto auto auto`;
    detalles.style.gridTemplateRows = `auto auto auto`;

    // crear los div que contendran las img
    for (let i = 0; i < 9; i++) {

      const divLogos = document.createElement('div');
      divLogos.classList.add('divLogos');
      divLogos.style.width = `${ancho}px`;
      divLogos.style.height = `${alto}px`;
      divLogos.style.border = '1px solid gray';
      divLogos.style.display = 'flex';
      divLogos.style.justifyContent = 'center';
      divLogos.style.alignItems = 'center';
      divLogos.style.overflow = 'hidden';

      detalles.append(divLogos);
    }

    const divLogosProceso = document.getElementsByClassName('divLogos');
    const arrayDivLogos = Array.from(divLogosProceso);

    // insertar img en cada div
    // tslint:disable-next-line: prefer-for-of
    for (let j = 0; j < arrayDivLogos.length; j++) {

      switch (j) {
        case 0:
          const img1 = document.createElement('img');
          img1.setAttribute('src', '../../../assets/img/logos/angular.png');
          img1.style.height = `80%`;
          arrayDivLogos[j].append(img1);
          break;
        case 1:
          const img2 = document.createElement('img');
          img2.setAttribute('src', '../../../assets/img/logos/nodejs.png');
          img2.style.height = `80%`;
          arrayDivLogos[j].append(img2);
          break;
        case 2:
          const img3 = document.createElement('img');
          img3.setAttribute('src', '../../../assets/img/logos/html5.png');
          img3.style.height = `80%`;
          arrayDivLogos[j].append(img3);
          break;
        case 3:
          const img4 = document.createElement('img');
          img4.setAttribute('src', '../../../assets/img/logos/css3.png');
          img4.style.height = `80%`;
          arrayDivLogos[j].append(img4);
          break;
        case 4:
          const img5 = document.createElement('img');
          img5.setAttribute('src', '../../../assets/img/logos/js.png');
          img5.style.height = `80%`;
          arrayDivLogos[j].append(img5);
          break;
        case 5:
          const img6 = document.createElement('img');
          img6.setAttribute('src', '../../../assets/img/logos/ionic.png');
          img6.style.height = `80%`;
          arrayDivLogos[j].append(img6);
          break;
        case 6:
          const img7 = document.createElement('img');
          img7.setAttribute('src', '../../../assets/img/logos/mongodb.png');
          img7.style.height = `80%`;
          arrayDivLogos[j].append(img7);
          break;
        case 7:
          const img8 = document.createElement('img');
          img8.setAttribute('src', '../../../assets/img/logos/nginx.png');
          img8.style.height = `80%`;
          arrayDivLogos[j].append(img8);
          break;
        case 8:
          const img9 = document.createElement('img');
          img9.setAttribute('id', 'imgAmazon');
          img9.setAttribute('src', '../../../assets/img/logos/aws.png');
          img9.style.height = `80%`;
          arrayDivLogos[j].append(img9);
          break;
      }
    }

    /*
    posiciion inicial
    posicion final
     */

    // efecto intercambios
    // primer par
    setInterval(() => {

      const ele1 = Math.round(Math.random() * 8);
      const ele2 = Math.round(Math.random() * 8);

      const imgIni = arrayDivLogos[ele1].querySelector('img').getAttribute('src');
      const imgTarget = arrayDivLogos[ele2].querySelector('img').getAttribute('src');

      arrayDivLogos[ele1].querySelector('img').removeAttribute('src');
      arrayDivLogos[ele2].querySelector('img').removeAttribute('src');

      arrayDivLogos[ele1].querySelector('img').setAttribute('src', `${imgTarget}`);
      arrayDivLogos[ele2].querySelector('img').setAttribute('src', `${imgIni}`);

      arrayDivLogos[ele1].querySelector('img').classList.add('animate__animated', 'animate__rubberBand');
      arrayDivLogos[ele2].querySelector('img').classList.add('animate__animated', 'animate__rubberBand');
    }, 3000);

    // remover la clase animate__rubberBand
    setInterval(() => {
      // tslint:disable-next-line: prefer-for-of
      for (let l = 0; l < arrayDivLogos.length; l++) {
        arrayDivLogos[l].querySelector('img').classList.remove('animate__rubberBand');
      }

    }, 3700);
  }

  ngAfterViewInit(): void {
    setInterval(() => {
      this.responsive();
    }, 200);
  }

  responsive(): void {

    const divDetalles = this.detalles.nativeElement;
    const wrapAbout = this.wrapAbout.nativeElement;
    const about = this.about.nativeElement;
    const tituloDetalles = this.tituloDetalles.nativeElement;
    const divLogos = document.getElementsByClassName('divLogos');
    const arrayLogos = Array.from(divLogos);

    // 1200 px
    this.breakPointObserver
      .observe(['(max-width: 1200px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {

          wrapAbout.style.flexDirection = 'row';
          divDetalles.style.width = `504px`;
          divDetalles.style.height = `504px`;
          arrayLogos.forEach((elementos: any) => {
            elementos.style.width = '166px';
            elementos.style.height = '166px';
          });
        }
      });

    // 992 px
    this.breakPointObserver
      .observe(['(max-width: 992px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          wrapAbout.style.height = 'auto';
          wrapAbout.style.flexDirection = 'column';
        }
      });

    // 768 px
    this.breakPointObserver
      .observe(['(max-width: 768px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          // about.style.border = '1px solid red';
          about.style.width = '95%';
          divDetalles.style.marginRight = '0px';
          // about.style.height = '600px';
        }
      });

    // 576 px
    this.breakPointObserver
      .observe(['(max-width: 576px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          divDetalles.style.marginRight = '0px';
        }
      });

    // 440 px
    this.breakPointObserver
      .observe(['(max-width: 440px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          about.style.width = '100%';
          divDetalles.style.width = '400px';
          divDetalles.style.height = '400px';
          // divDetalles.style.border = '1px solid red';
          arrayLogos.forEach((elementos: any) => {
            elementos.style.width = '130px';
            elementos.style.height = '130px';
          });
        }
      });


    // 340 px
    this.breakPointObserver
      .observe(['(max-width: 378px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {

          tituloDetalles.style.fontSize = '2rem';
          tituloDetalles.style.textAlign = 'center';
          about.style.padding = '15px';
          divDetalles.style.width = '300px';
          divDetalles.style.height = '300px';
          // divDetalles.style.border = '1px solid red';
          arrayLogos.forEach((elementos: any) => {
            elementos.style.width = '98px';
            elementos.style.height = '98px';
          });
        }
      });

  }

}
