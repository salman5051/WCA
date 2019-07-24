import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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

import { BsDatepickerModule } from 'ngx-bootstrap';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { DefaultPageComponent } from './default-page/default-page.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,    
    RemoteDiagnosisComponent,
    RemoteDiagnosisListComponent,
    RemoteDiagnosisDetailsComponent,
    RemoteControlComponent,
    LoginComponent,
    AlertComponent,
    DefaultPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    appRoutingModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot(),
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300, 
    })

  ],
  providers: [RemoteDiagnosisServiceService,{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
