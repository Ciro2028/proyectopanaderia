import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioregclienteService {
  

  URL = 'http://localhost/API';

  constructor(private http: HttpClient) { }

  InsercionDatos(contacto) {
    //alert('Mensaje Enviado !'+JSON.stringify(contacto.nombre));
    return this.http.post(`${this.URL}Insertardatos.php`, JSON.stringify(contacto));
  }
}
