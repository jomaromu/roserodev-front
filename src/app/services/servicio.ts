import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(
    private http: HttpClient
  ) { }

  enviarCorreo(correo: FormData): Observable<any> {

    const url = `${environment.urlBack}/correo`;
    return this.http.post(url, correo)
    .pipe(
      map((resp: any) => {
        return resp;
      })
    );
  }
}
