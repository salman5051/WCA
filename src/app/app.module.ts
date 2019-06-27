import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RemoteDiagnosisComponent } from './remote-diagnosis/remote-diagnosis.component';
import { RemoteDiagnosisListComponent } from './remote-diagnosis/remote-diagnosis-list/remote-diagnosis-list.component';
import { RemoteDiagnosisDetailsComponent } from './remote-diagnosis/remote-diagnosis-details/remote-diagnosis-details.component';
import { RemoteControlComponent } from './remote-control/remote-control.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { RemoteDiagnosisServiceService } from './remote-diagnosis-service.service';

const appRoutes: Routes = [
  { path: 'remote-diagnosis', component: RemoteDiagnosisComponent },
  { path: 'remote-control', component: RemoteControlComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RemoteDiagnosisComponent,
    RemoteDiagnosisListComponent,
    RemoteDiagnosisDetailsComponent,
    RemoteControlComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
    )

  ],
  providers: [RemoteDiagnosisServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
