import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Whatsapp } from './scripts/whatsapp';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'front';

  constructor(
    private whatsapp: Whatsapp,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {

        const body = document.body;
        const ele = body.getElementsByClassName('whatsapp');

        const arrayEle = Array.from(ele);
        arrayEle.forEach(elemento => {
          elemento.parentElement.removeChild(elemento);
        });
      }
    });
  }

}
