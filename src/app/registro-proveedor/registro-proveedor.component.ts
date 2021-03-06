import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registro-proveedor',
  templateUrl: './registro-proveedor.component.html',
  styleUrls: ['./registro-proveedor.component.css']
})
export class RegistroProveedorComponent implements OnInit {

  contacto: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,  private http: HttpClient) { }

  ngOnInit(): void {
    this.contacto = this.formBuilder.group({
      nombre: ['', Validators.required],
      cedula: ['',[Validators.required,Validators.compose([Validators.minLength(6), Validators.maxLength(9)]), Validators.pattern(/^[0-9]*$/)] ],           
      email: ['', [Validators.required, Validators.email]],
      clave: ['', [Validators.required, Validators.minLength(6), Validators.pattern(/^[0-9]*$/)]],
      direccion: ['', Validators.required],
      ciudad: ['', Validators.required],
      pais: ['', Validators.required],
      telefono: ['',[Validators.required, Validators.pattern(/^[0-9]*$/)]]
  });

}

get f() { return this.contacto.controls; }

    onSubmit() { //funcion de formulario
     
      this.submitted = true;
      
      if (this.contacto.invalid) {
          return;
      }
      alert('Mensaje Enviado !'+JSON.stringify(this.contacto.value))
    console.log('Mensaje Enviado !'+JSON.stringify(this.contacto.value))
     
        //this.InsercionDatos();
    }


    //InsercionDatos() {
      //this.servicioregclienteservice.InsercionDatos(this.contacto.value).subscribe(
        //datos => {
          //if(datos['resultado'] == 'OK') {
            //alert(datos['mensaje']);
          
          //}
        //}
      //);
    //}
}
