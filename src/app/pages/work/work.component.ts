import { Component, OnInit } from '@angular/core';
import { Proyectos } from '../../interfaces/proyectos';
import { Whatsapp } from '../../scripts/whatsapp';
import { BotonResponsivo } from '../../scripts/boton-responsivo';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  public proyectos: Array<Proyectos>;

  constructor(
    private whatsapp: Whatsapp,
    private btnResponsivo: BotonResponsivo
    ) { }

  ngOnInit(): void {

    this.proyectos = [
      {
        imagen: '../../../assets/img/think.webp',
        titulo: 'Think Translations',
        descripcion: 'Landing Page enfocada en la traducción, interpretación y transcripción de todo tipo de multimedia.',
        tecno: ['Angular', 'NodeJs', 'AWS'],
        url: 'https://thinktranslations.com/'
      },
      {
        imagen: '../../../assets/img/sebalu.webp',
        titulo: 'Sebalu Logistics',
        descripcion: 'Landig Page relacionado con la logística de productos farmaceuticos.',
        tecno: ['Angular', 'NodeJs', 'AWS'],
        url: 'https://sebalulogistics.com/'
      },
      {
        imagen: '../../../assets/img/cbwyn.webp',
        titulo: 'CBWYN',
        descripcion: 'Aplicación web que conecta empresarios con emprendedores.',
        tecno: ['Angular', 'NodeJs', 'MongoDB', 'AWS', 'IONIC'],
        url: 'https://cbwyn.com/'
      },
      {
        imagen: '../../../assets/img/fabio.webp',
        titulo: 'Abogado Fabio Villegas',
        descripcion: 'Página web semi-dinámica, de uso profesional enfocada al derecho y ciencias políticas.',
        tecno: ['Angular', 'NodeJs', 'MongoDB', 'AWS'],
        url: 'https://abogadofabiovillegasc.com/'
      },
      {
        imagen: '../../../assets/img/royal.webp',
        titulo: 'Royal World Logistics',
        descripcion: 'Landing page dedicada al servicio logístico y aduanas',
        tecno: ['Angular', 'NodeJs', 'AWS'],
        url: 'https://royalwlogistics.com/'
      },
    ];

    this.whatsapp.btnWhatsapp();
    this.btnResponsivo.btnResponsivo();
  }

}
