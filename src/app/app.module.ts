

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';  
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { ServicioregclienteService } from './registro-cliente/servicioregcliente.service';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { PieComponent } from './pie/pie.component';
import { InicioComponent } from './inicio/inicio.component';
import { ProductosComponent } from './productos/productos.component';
import { TortasComponent } from './tortas/tortas.component';
import { BizcoheriaComponent } from './bizcoheria/bizcoheria.component';
import { PanaderiaComponent } from './panaderia/panaderia.component';
import { PonquesComponent } from './ponques/ponques.component';
import { LamejorComponent } from './lamejor/lamejor.component';
import { ContactoComponent } from './contacto/contacto.component';
import { Componenteparcial1Component } from './componenteparcial1/componenteparcial1.component';
import { FormularioComponent } from './formulario/formulario.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegistroClienteComponent } from './registro-cliente/registro-cliente.component';
import { RegistroProveedorComponent } from './registro-proveedor/registro-proveedor.component';
import { RegistroMaterialesComponent } from './registro-materiales/registro-materiales.component';

const routes: Routes = [
  { path: 'inicio', component:InicioComponent },
  { path: '', component:InicioComponent , pathMatch: 'full' },
  { path: 'productos', component:ProductosComponent },
  { path: 'lamejor', component:LamejorComponent },
  { path: 'contacto', component:ContactoComponent },
  { path: 'tortas', component:TortasComponent },
  { path: 'panaderia', component:PanaderiaComponent },
  { path: 'bizcoheria', component:BizcoheriaComponent },
  { path: 'ponques', component:PonquesComponent },
  { path: 'registro-cliente', component:RegistroClienteComponent },
  { path: 'registro-proveedor', component:RegistroProveedorComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    PieComponent,
    InicioComponent,
    ProductosComponent,
    TortasComponent,
    BizcoheriaComponent,
    PanaderiaComponent,
    PonquesComponent,
    LamejorComponent,
    ContactoComponent,
    Componenteparcial1Component,
    FormularioComponent,
    RegistroClienteComponent,
    RegistroProveedorComponent,
    RegistroMaterialesComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
    NgbModule
  ],
  providers: [
    ServicioregclienteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
