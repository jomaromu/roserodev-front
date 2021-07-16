import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import anime from 'animejs/lib/anime.es.js';

@Injectable()

export class Puntero {

    public cantPasos = 6;
    public cantPasos2 = 0;

    constructor(
        public breakPointObserver: BreakpointObserver
    ) { }

    puntero(): void {
        const div = document.createElement('div');
        const placeDIv = document.createElement('div');
        const body = document.body;

        placeDIv.style.width = `40px`;
        placeDIv.style.height = `40px`;
        placeDIv.style.border = `none`;
        // placeDIv.style.backgroundColor = 'red';
        placeDIv.style.position = 'fixed';
        placeDIv.style.display = 'flex';
        placeDIv.style.justifyContent = 'center';
        placeDIv.style.alignItems = 'center';
        placeDIv.style.transform = 'translate(-50%, -50%)';
        placeDIv.style.zIndex = '9999';
        placeDIv.style.setProperty('--blend-mode', 'normal');
        placeDIv.style.pointerEvents = 'none';


        // div.style.width = `40px`;
        // div.style.height = `40px`;
        div.style.borderRadius = '50%';
        div.style.position = 'fixed';
        div.style.backgroundColor = `rgba(255, 255, 255, 0.5)`;
        div.style.border = '3px solid rgba(150, 150, 150, 0.5)';

        placeDIv.append(div);
        body.append(placeDIv);

        // anime({
        //     targets: div,
        //     width: '10px',
        //     height: '10px',
        //     easing: 'easeInOutQuad',
        //     direction: 'alternate',
        //     loop: true,
        //     duration: 1200,
        //     background: 'rgb(240, 35, 136)'
        //   });

        document.body.addEventListener('mousemove', (e) => {

            anime({
                targets: div,
                width: ['15px', '40px'],
                height: ['15px', '40px'],
                // scaleX: [1, 3.5],
                // scaleY: [1, 3.5],
                easing: 'easeInOutQuad',
                direction: 'alternate',
                loop: true,
                duration: 1200,
                background: 'rgba(240, 35, 136, 0.5)'
              });

            const divWidth = div.clientWidth;
            const divHeight = div.clientHeight;

            const positionElement = {
                x: e.pageX,
                y: e.pageY
            };

            placeDIv.style.top = `${positionElement.y}px`;
            placeDIv.style.left = `${positionElement.x}px`;
        });

        this.breakPointObserver
        .observe(['(max-width: 576px)'])
        .subscribe((state: BreakpointState) => {
            if (state.matches) {
                div.style.display = 'none';
            }
        });
    }
}
