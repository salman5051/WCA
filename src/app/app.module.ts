import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { appRoutingModule } from './app.routing';
import { JwtInterceptor, ErrorInterceptor } from './helpers';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RemoteDiagnosisComponent } from './remote-diagnosis/remote-diagnosis.component';
import { RemoteDiagnosisListComponent } from './remote-diagnosis/remote-diagnosis-list/remote-diagnosis-list.component';
import { RemoteDiagnosisDetailsComponent } from './remote-diagnosis/remote-diagnosis-details/remote-diagnosis-details.component';
import { RemoteControlComponent } from './remote-control/remote-control.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RemoteDiagnosisServiceService } from './remote-diagnosis-service.service';
import { AlertComponent } from './components/alert/alert.component';
 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,    
    RemoteDiagnosisComponent,
    RemoteDiagnosisListComponent,
    RemoteDiagnosisDetailsComponent,
    RemoteControlComponent,
    LoginComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    appRoutingModule,
  ],
  providers: [RemoteDiagnosisServiceService,{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
