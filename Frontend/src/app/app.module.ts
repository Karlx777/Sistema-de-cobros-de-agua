import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';

import { AppRoutingModule } from './app-routing.module';
import { AgregarComponent } from './agregar/agregar.component';
import { MostrarComponent } from './mostrar/mostrar.component';
import { ConsultarComponent } from './consultar/consultar.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { ConceptoComponent } from './concepto/concepto.component';
import { FacturaComponent } from './factura/factura.component';
import { LecturaComponent } from './lectura/lectura.component';
import { MedidorComponent } from './medidor/medidor.component';
import { TarifaComponent } from './tarifa/tarifa.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AgregarComponent,
    MostrarComponent,
    ConsultarComponent,
    RegistrarComponent,
    ConceptoComponent,
    FacturaComponent,
    LecturaComponent,
    MedidorComponent,
    TarifaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
