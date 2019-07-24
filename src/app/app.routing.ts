import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RemoteDiagnosisComponent } from './remote-diagnosis/remote-diagnosis.component'
import { AuthGuard } from './helpers';
import { DefaultPageComponent } from './default-page/default-page.component'
const routes: Routes = [
    { path: 'remoteDiagnosis', component: RemoteDiagnosisComponent,  canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },    
    { path: 'home', component: DefaultPageComponent, canActivate: [AuthGuard] },    
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);