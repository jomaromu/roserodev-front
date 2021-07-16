import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public windowSize = 0;

  @ViewChild('divBoard', { static: true }) divBoard: ElementRef<HTMLElement>;
  @ViewChild('divSidebar', { static: true }) divSidebar: ElementRef<HTMLElement>;

  constructor(
    public breakPointObserver: BreakpointObserver
  ) { }

  ngOnInit(): void {
    this.responsive();
    this.divBoardWidth();
  }

  // adaptar el ancho del board
  divBoardWidth(): void {

    const divBoard = this.divBoard.nativeElement;
    const widthWindow = window.innerWidth;
    const widthDiv = widthWindow - 120;
    divBoard.style.width = `${widthDiv}px`;
    divBoard.style.marginLeft = `120px`;
    // divBoard.style.backgroundColor = 'red';
  }

  responsive(): void {

    const divSidebar = this.divSidebar.nativeElement;
    const divBoard = this.divBoard.nativeElement;


    // 576 px
    this.breakPointObserver
      .observe(['(max-width: 576px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          anime({
            targets: divBoard,
            width: `100%`,
            marginLeft: `0px`,
            easing: 'linear',
            duration: 500
          });
        } else {
          divBoard.style.width = `${window.innerWidth - 120}px`;
          anime({
            targets: divBoard,
            marginLeft: '120px',
            easing: 'linear',
            duration: 500
          });
        }
      });
  }

}
