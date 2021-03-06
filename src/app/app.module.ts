import { RecuperarComponent } from './login/recuperar/recuperar.component';

import { TOKEN_NAME } from './_shared/var.constant';
import { ServerErrorsInterceptor } from './_shared/server-errors.interceptor';
import { PacienteEdicionComponent } from './pages/paciente/paciente-edicion/paciente-edicion.component';
import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { ConsultaComponent } from './pages/consulta/consulta.component';
import { EspecialidadComponent } from './pages/especialidad/especialidad.component';
import { ExamenComponent } from './pages/examen/examen.component';
import { MedicoComponent } from './pages/medico/medico.component';
import { PacienteComponent } from './pages/paciente/paciente.component';
import { ReporteComponent } from './pages/reporte/reporte.component';
import { Not403Component } from './pages/not403/not403.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EspecialidadEdicionComponent } from './pages/especialidad/especialidad-edicion/especialidad-edicion.component';
import { ExamenEdicionComponent } from './pages/examen/examen-edicion/examen-edicion.component';
import { DialogoComponent } from './pages/medico/dialogo/dialogo.component';
import { EspecialComponent } from './pages/consulta/especial/especial.component';
import { DialogoDetalleComponent } from './pages/buscar/dialogo-detalle/dialogo-detalle.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { LoginComponent } from './login/login.component';

import { JwtModule } from '@auth0/angular-jwt';
import { TokenComponent } from './login/recuperar/token/token.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { RolComponent } from './pages/rol/rol.component';
import { RegistrarRolComponent } from './pages/rol/registrar-rol/registrar-rol.component';
import { AsignarRolesMenuComponent } from './pages/asignar-roles-menu/asignar-roles-menu.component';
import { MenuComponent } from './pages/menu/menu.component';
import { AsignarMenuUsuariosComponent } from './pages/asignar-menu-usuarios/asignar-menu-usuarios.component';
import { RegistrarMenuComponent } from './pages/menu/registrar-menu/registrar-menu.component';

export function tokenGetter() {
  const tk = JSON.parse(sessionStorage.getItem(TOKEN_NAME));
  const token = tk != null ? tk.access_token : '';
  // console.log(token);
  return token;
}

@NgModule({
  declarations: [
    AppComponent,
    BuscarComponent,
    ConsultaComponent,
    EspecialidadComponent,
    ExamenComponent,
    MedicoComponent,
    PacienteComponent,
    ReporteComponent,
    Not403Component,
    PacienteEdicionComponent,
    EspecialidadEdicionComponent,
    ExamenEdicionComponent,
    DialogoComponent,
    EspecialComponent,
    DialogoDetalleComponent,
    LoginComponent,
    RecuperarComponent,
    TokenComponent,
    RolComponent,
    RegistrarRolComponent,
    AsignarRolesMenuComponent,
    MenuComponent,
    AsignarMenuUsuariosComponent,
    RegistrarMenuComponent
  ],
  entryComponents: [
    DialogoComponent,
    DialogoDetalleComponent,
    RegistrarRolComponent,
    RegistrarMenuComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    PdfViewerModule,
    // https://github.com/auth0/angular2-jwt
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:8080'],
        blacklistedRoutes: ['localhost:8080/mediapp-backend/login/enviarCorreo']
      }
    })
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: ServerErrorsInterceptor,
    multi: true,
  },
  {
    provide: LocationStrategy, useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
