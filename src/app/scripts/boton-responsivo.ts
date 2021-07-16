import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Injectable, ElementRef } from '@angular/core';

@Injectable()

export class BotonResponsivo {

    public estadoBtn = false;

    constructor(
        public breakPointObserver: BreakpointObserver
    ) { }

    btnResponsivo(): void {

        const body = document.body;
        const divFilaMain = document.getElementById('divFilaMain');

        const wrapSidebar = document.getElementById('wrapSidebar');
        const divLogo = document.getElementById('divLogo');
        const socialMedia = wrapSidebar.querySelector('#socialMedia');
        const divItems: any = wrapSidebar.querySelector('#divItems');

        const whatsapp: any = document.querySelector('.whatsapp');

        const anchoMenu = 60;

        const btnMenu = document.createElement('i');
        btnMenu.setAttribute('id', 'btnResponsivo');
        btnMenu.classList.add('fas', 'fa-bars');
        btnMenu.style.marginRight = '25px';
        btnMenu.style.fontSize = '1.5rem';
        btnMenu.style.color = 'white';

        const navbar = document.createElement('div');
        navbar.style.width = '100%';
        navbar.style.height = `${anchoMenu}px`;
        // navbar.style.border = '1px solid red';
        navbar.style.position = 'fixed';
        navbar.style.top = '0px';
        navbar.style.left = '0px';
        navbar.style.zIndex = '9999';
        navbar.style.display = 'none';
        navbar.style.flexDirection = 'row';
        navbar.style.justifyContent = 'space-between';
        navbar.style.alignItems = 'center';
        navbar.style.backgroundColor = 'rgb(24, 24, 24)';
        navbar.style.borderBottom = '1px solid rgba(204, 204, 204, 0.5)';

        // navbar.append(divLogo, btnMenu);
        // body.append(navbar);

        this.breakPointObserver
            .observe(['(max-width: 576px)'])
            .subscribe((state: BreakpointState) => {

                if (state.matches) {
                    navbar.append(divLogo, btnMenu);
                    body.append(navbar);

                    divFilaMain.style.marginTop = `${anchoMenu}px`;
                    navbar.style.display = 'flex';

                    divLogo.style.marginTop = '0px';
                    divLogo.style.marginLeft = '25px';
                    // divLogo.style.border = '1px solid red';
                    divLogo.style.width = `${30}px`;
                    divLogo.style.height = `${30}px`;
                    divLogo.style.display = 'flex';
                    divLogo.style.justifyContent = 'center';
                    divLogo.style.alignItems = 'center';

                } else {
                    divFilaMain.style.marginTop = `${0}px`;
                    navbar.style.display = 'none';

                    wrapSidebar.insertBefore(divLogo, divItems);
                    wrapSidebar.style.width = `120px`;
                    wrapSidebar.style.marginLeft = '0px';
                    divItems.style.marginTop = `0px`;

                }

            });

        this.desplegarSidebar(btnMenu);
        // this.ocultarSidebar();

    }

    desplegarSidebar(btn: HTMLElement): void {

        const wrapSidebar = document.getElementById('wrapSidebar');
        const divItems = document.getElementById('divItems');


        btn.addEventListener('click', (e) => {

            if (this.estadoBtn === false) {

                btn.classList.remove('fa-bars');
                btn.classList.add('fa-times');

                const anchoVentana = window.innerWidth;
                const altoVentana = window.innerHeight / 2;
                const altoDivItems = divItems.clientHeight / 2;
                const topDIv = altoVentana - altoDivItems;

                wrapSidebar.style.width = `${anchoVentana}px`;
                wrapSidebar.style.marginLeft = '120px';
                wrapSidebar.classList.add('animate__fadeIn');

                divItems.style.width = '80%';
                divItems.style.marginTop = `${topDIv}px`;

                // quitar boton de whatsapp
                setTimeout(() => {

                    const whatsapp: any = document.querySelector('.whatsapp');
                    whatsapp.style.display = 'none';
                }, 300);

                this.estadoBtn = true;

            } else {

                btn.classList.remove('fa-times');
                btn.classList.add('fa-bars');

                wrapSidebar.classList.remove('animate__fadeIn');
                wrapSidebar.style.width = `120px`;
                wrapSidebar.style.marginLeft = '0px';
                divItems.style.marginTop = `0px`;


                // poner boton de whatsapp
                setTimeout(() => {

                    const whatsapp: any = document.querySelector('.whatsapp');
                    whatsapp.style.display = 'block';
                }, 300);

                this.estadoBtn = false;
            }
        });
    }
}
