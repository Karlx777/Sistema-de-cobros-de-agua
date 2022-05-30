import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { AgregarComponent } from './agregar/agregar.component';
import { MostrarComponent } from './mostrar/mostrar.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { ConsultarComponent } from './consultar/consultar.component';
import { ConceptoComponent } from './concepto/concepto.component';
import { FacturaComponent } from './factura/factura.component';


const routes: Routes =[
  {path: 'agregar', component: AgregarComponent},
  {path: 'mostrar', component: MostrarComponent},
  {path: 'registrar', component: RegistrarComponent},
  {path: 'consultar', component: ConsultarComponent},
  {path: 'concepto', component: ConceptoComponent},
  {path: 'factura', component: FacturaComponent}


];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
