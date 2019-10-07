import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainLogoComponent } from './main-logo/main-logo.component';
import { MainNavListComponent } from './main-nav-list/main-nav-list.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { PvdashboardComponent } from './pvdashboard/pvdashboard.component';
import { DsurComponent } from './dsur/dsur.component';
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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 

// used to create fake backend
import { fakeBackendProvider, JwtInterceptor, ErrorInterceptor } from './_helpers';


@NgModule({
  declarations: [
    AppComponent,  
    MainNavComponent,
    MainLogoComponent,
    MainNavListComponent,
    MainFooterComponent,
    PvdashboardComponent,
    DsurComponent,
    SasrComponent,
    AprComponent,
    RmpComponent,
    PsurComponent,
    DilsComponent,
    PracComponent,
    SafetygovernanceComponent,
    SignalmanangementComponent,
    SdeaComponent,
    QualityandcomplianceComponent,
    LicensemanagementComponent,
    AdminComponent,
    SuperadminComponent,
    LoginComponent
  ],
  imports: [
    NgbModule, 
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule 
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    
    // provider used to create fake backend
    fakeBackendProvider
  ], 
  bootstrap: [AppComponent]
})
export class AppModule { }
