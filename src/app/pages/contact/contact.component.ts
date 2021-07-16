import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Loader, LoaderOptions } from 'google-maps';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import anime from 'animejs/lib/anime.es.js';
import { BotonResponsivo } from '../../scripts/boton-responsivo';
import { Whatsapp } from '../../scripts/whatsapp';
import { ServicioService } from '../../services/servicio';
import Swal from 'sweetalert2';

const options: LoaderOptions = {};
const loader = new Loader('AIzaSyCh43SO5hwIjKEBjEJbb7PNfULtF71uWTg', options);


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @ViewChild('btnEnviar', { static: true }) btnEnviar: ElementRef<HTMLElement>;
  @ViewChild('spanEfecto', { static: true }) spanEfecto: ElementRef<HTMLElement>;

  public checkNombre = false;
  public checkCorreo = false;
  public checkMensaje = false;

  forma: FormGroup;

  constructor(
    private whatsapp: Whatsapp,
    private btnResponsivo: BotonResponsivo,
    private formBuilder: FormBuilder,
    private servicio: ServicioService
  ) { }

  ngOnInit(): void {

    this.crearFormulario();
    this.efectoHover();
    this.mapa();
    this.whatsapp.btnWhatsapp();
    this.btnResponsivo.btnResponsivo();
  }

  efectoHover(): void {

    const btnEnviar = this.btnEnviar.nativeElement;
    const spanEfecto = this.spanEfecto.nativeElement;

    btnEnviar.addEventListener('mouseenter', (e) => {

      anime({
        targets: spanEfecto,
        top: '-20px',
        easing: 'easeInOutQuad',
        duration: 400,
      });

      btnEnviar.style.border = '1px solid rgb(240, 35, 136)';
    });

    btnEnviar.addEventListener('mouseleave', (e) => {

      anime({
        targets: spanEfecto,
        top: '50px',
        easing: 'easeInOutQuad',
        duration: 400,
      });

      btnEnviar.style.border = '1px solid gray';
    });
  }

  async mapa(): Promise<any> {

    // const options: LoaderOptions = {};
    // const loader = new Loader('AIzaSyCh43SO5hwIjKEBjEJbb7PNfULtF71uWTg', options);

    const google = await loader.load();

    const mapa = document.getElementById('wrapMapa');

    const map = new google.maps.Map(mapa, {
      center: { lat: 9.02666, lng: -79.50632 },
      zoom: 19,
      styles: [
        {
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#212121"
            }
          ]
        },
        {
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#757575"
            }
          ]
        },
        {
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#212121"
            }
          ]
        },
        {
          "featureType": "administrative",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#757575"
            }
          ]
        },
        {
          "featureType": "administrative.country",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#9e9e9e"
            }
          ]
        },
        {
          "featureType": "administrative.locality",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#bdbdbd"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#757575"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#181818"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#616161"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#1b1b1b"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#2c2c2c"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#8a8a8a"
            }
          ]
        },
        {
          "featureType": "road.arterial",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#373737"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#3c3c3c"
            }
          ]
        },
        {
          "featureType": "road.highway.controlled_access",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#4e4e4e"
            }
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#616161"
            }
          ]
        },
        {
          "featureType": "transit",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#757575"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#000000"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#3d3d3d"
            }
          ]
        }
      ]
    });
  }

  crearFormulario(): void {
    this.forma = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]], // 50
      correo: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      mensaje: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(1000)]] // 1000
    });
  }

  verificaNombre(e: Event): void {

    const estadoNombre = this.forma.controls.nombre.status;
    // console.log(e.target.value);

    if (estadoNombre === 'INVALID') {
      this.checkNombre = true;
    } else {
      this.checkNombre = false;
    }
  }

  verificaCorreo(e: Event): void {

    const estadoCorreo = this.forma.controls.correo.status;
    // console.log(e.target.value);

    if (estadoCorreo === 'INVALID') {
      this.checkCorreo = true;
    } else {
      this.checkCorreo = false;
    }
  }

  verificaMensaje(e: Event): void {

    const estadoMensaje = this.forma.controls.mensaje.status;
    // console.log(e.target.value);

    if (estadoMensaje === 'INVALID') {
      this.checkMensaje = true;
    } else {
      this.checkMensaje = false;
    }
  }

  enviarMensaje(evento: Event): void {

    const nobmre = this.forma.controls.nombre.status;
    const correo = this.forma.controls.correo.status;
    const mensaje = this.forma.controls.mensaje.status;

    if (nobmre === 'INVALID') {
      this.checkNombre = true;
    }

    if (correo === 'INVALID') {
      this.checkCorreo = true;
    }

    if (mensaje === 'INVALID') {
      this.checkMensaje = true;
    }

    // si todo esta bien
    if (this.forma.status === 'VALID') {

      this.fondoNegro('flex');
      const txtNombre: string = this.forma.controls.nombre.value;
      const txtCorreo: string = this.forma.controls.correo.value;
      const txtMensaje: string = this.forma.controls.mensaje.value;

      const data = new FormData();

      data.append('nombre', txtNombre);
      data.append('correo', txtCorreo.toLowerCase());
      data.append('mensaje', txtMensaje);

      this.servicio.enviarCorreo(data)
        .subscribe((resp: any) => {


          if (resp.ok === true) {

            setTimeout(() => {
              const fondoNegro = document.getElementById('fondoNegro');
              fondoNegro.style.display = 'none';

              Swal.fire(
                'Mensaje',
                `${resp.mensaje}`,
                'info'
              );

              setTimeout(() => {
                window.location.reload();
              }, 2000);

            }, 1500);

          } else if (resp.ok === false) {

            const fondoNegro = document.getElementById('fondoNegro');
            fondoNegro.style.display = 'none';

            Swal.fire(
              'Mensaje',
              `${resp.mensaje}`,
              'error'
            );

          } else {
            setTimeout(() => {

              const fondoNegro = document.getElementById('fondoNegro');
              fondoNegro.style.display = 'none';

              Swal.fire(
                'Mensaje',
                `No se pudo enviar el mensaje`,
                'error'
              );

            }, 20000);
          }
        });
    }
  }

  fondoNegro(display: string): void {

    const body = document.body;
    const fondoNegro = document.createElement('div');
    const loading = document.createElement('img');
    fondoNegro.setAttribute('id', 'fondoNegro');

    fondoNegro.style.display = `${display}`;
    fondoNegro.style.width = `100vw`;
    fondoNegro.style.height = `100vh`;
    fondoNegro.style.position = 'fixed';
    fondoNegro.style.top = `0px`;
    fondoNegro.style.left = `0px`;
    fondoNegro.style.zIndex = `999`;
    fondoNegro.style.backgroundColor = 'rgba(86, 86, 86, 0.3)';
    fondoNegro.style.justifyContent = 'center';
    fondoNegro.style.alignItems = 'center';
    // fondoNegro.style.cursor = 'auto';

    loading.setAttribute('src', `../../../assets/loading.gif`);
    loading.style.width = `100px`;
    loading.style.height = `100px`;
    fondoNegro.append(loading);

    body.style.overflow = 'hidden';

    body.append(fondoNegro);
  }
}
