import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RemoteDiagnosisComponent } from './remote-diagnosis/remote-diagnosis.component'
import { AuthGuard } from './helpers';

const routes: Routes = [
    { path: 'remoteDiagnosis', component: RemoteDiagnosisComponent,  canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },    

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);