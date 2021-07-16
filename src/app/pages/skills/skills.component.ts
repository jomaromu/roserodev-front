import { Component, OnInit } from '@angular/core';
import { Whatsapp } from '../../scripts/whatsapp';
import { BotonResponsivo } from '../../scripts/boton-responsivo';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  public readonly colorAngular = 'rgb(208, 42, 45)';
  public readonly colorMovil = 'rgb(78, 142, 247)';
  public readonly colorBackend = 'rgb(0, 151, 44)';
  public readonly colorEscritorio = 'rgb(255, 101, 30)';

  public readonly porAngular = [80, 20];
  public readonly porMovil = [70, 30];
  public readonly porBack = [85, 15];
  public readonly porDesk = [60, 40];

  public porcentajeAn = 85;

  constructor(
    private whatasapp: Whatsapp,
    private btnResponsivo: BotonResponsivo
    ) { }

  ngOnInit(): void {
    this.whatasapp.btnWhatsapp();
    this.btnResponsivo.btnResponsivo();

  }

}
