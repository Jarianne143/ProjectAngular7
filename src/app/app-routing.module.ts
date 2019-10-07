import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PvdashboardComponent } from './pvdashboard/pvdashboard.component';
import { DsurComponent } from './dsur/dsur.component';
import { HttpClientModule } from '@angular/common/http';
import { SasrComponent } from './sasr/sasr.component';
import { AprComponent } from './apr/apr.component';
import { RmpComponent } from './rmp/rmp.component';
import { PsurComponent } from './psur/psur.component';
import { DilsComponent } from './dils/dils.component';
import { PracComponent } from './prac/prac.component';
import { SafetygovernanceComponent } from './safetygovernance/safetygovernance.component';
import { SignalmanangementComponent } from './signalmanangement/signalmanangement.component';
import { SdeaComponent } from './sdea/sdea.component';
import { QualityandcomplianceComponent } from './qualityandcompliance/qualityandcompliance.component';
import { LicensemanagementComponent } from './licensemanagement/licensemanagement.component';
import { AdminComponent } from './admin/admin.component';
import { SuperadminComponent } from './superadmin/superadmin.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './_helpers';

const routes: Routes = [
  { path: '', component: PvdashboardComponent, canActivate: [AuthGuard] },
  { path: 'DSUR', component: DsurComponent, canActivate: [AuthGuard] },
  { path: 'SASR', component: SasrComponent, canActivate: [AuthGuard] },
  { path: 'APR', component: AprComponent, canActivate: [AuthGuard] },
  { path: 'RMP', component: RmpComponent, canActivate: [AuthGuard] },
  { path: 'PSUR', component: PsurComponent, canActivate: [AuthGuard] },
  { path: 'DILS', component: DilsComponent, canActivate: [AuthGuard] },
  { path: 'PRAC', component: PracComponent, canActivate: [AuthGuard] },
  { path: 'SAFETYGOVERNANCE', component: SafetygovernanceComponent, canActivate: [AuthGuard] },
  { path: 'SIGNALMANAGEMENT', component: SignalmanangementComponent, canActivate: [AuthGuard] },
  { path: 'SDEA', component: SdeaComponent, canActivate: [AuthGuard] },
  { path: 'QUALITYANDCOMPLIANCE', component: QualityandcomplianceComponent, canActivate: [AuthGuard] },
  { path: 'LICENSEMANAGEMENT', component: LicensemanagementComponent, canActivate: [AuthGuard] },
  { path: 'ADMIN', component: AdminComponent, canActivate: [AuthGuard] },
  { path: 'SUPERADMIN', component: SuperadminComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
