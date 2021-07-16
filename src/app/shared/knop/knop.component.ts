import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-knop',
  templateUrl: './knop.component.html',
  styleUrls: ['./knop.component.css']
})
export class KnopComponent implements OnInit, AfterViewInit {

  public estilos = {
    width: '33vw'
  };

  // Doughnut
  public doughnutChartLabels: Label[] = ['Avanzado', 'Restante'];
  public doughnutChartData: MultiDataSet;
  public doughnutChartType: ChartType = 'doughnut';

  @Input() color: string;
  @Input() porcentaje: Array<number>;
  public chartColors: Array<any>;

  constructor(
    public breakPointObserver: BreakpointObserver
  ) { }

  ngOnInit(): void {
    this.doughnutChartData = [this.porcentaje];
    this.chartColors = [
      { backgroundColor: [this.color, 'rgb(240, 35, 136)'] }
    ];
    // this.responsive();
  }

  ngAfterViewInit(): void {
    this.responsive();
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  responsive(): void {

    this.breakPointObserver
      .observe(['(max-width: 992px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.estilos = {
            width: '40vw'
          };
        }
      });

    this.breakPointObserver
      .observe(['(max-width: 576px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.estilos = {
            width: '100%'
          };
        }
      });
  }

}
