import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule, MatMenuModule,
  MatNativeDateModule, MatProgressBarModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatSidenavModule, MatSnackBarModule,
  MatStepperModule,
  MatTableModule, MatTabsModule,
  MatToolbarModule, MatTreeModule
} from '@angular/material';
import { LoginFormComponent } from './components/login-form/login-form.component';
import {RouterModule} from '@angular/router';
import { LoginPageSmartComponent } from './containers/login-page-smart/login-page-smart.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { HomepageSmartComponent } from './containers/homepage-smart/homepage-smart.component';
import { StudentPageComponent } from './components/student-page/student-page.component';
import { StudentPageSmartComponent } from './containers/student-page-smart/student-page-smart.component';
import { SecretaryPageComponent } from './components/secretary-page/secretary-page.component';
import { SecretaryPageSmartComponent } from './containers/secretary-page-smart/secretary-page-smart.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginPageSmartComponent,
    LoginFormComponent,
    HomepageComponent,
    HomepageSmartComponent,
    StudentPageComponent,
    StudentPageSmartComponent,
    SecretaryPageComponent,
    SecretaryPageSmartComponent,
  ],
  imports: [
    FontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule, MatFormFieldModule, MatCardModule, MatTableModule, MatButtonModule, MatCheckboxModule,
    MatDividerModule, MatIconModule, MatGridListModule, MatListModule, MatSidenavModule, MatDialogModule,
    MatToolbarModule, MatDatepickerModule, MatSelectModule, FormsModule,
    MatNativeDateModule, MatExpansionModule, MatStepperModule, MatChipsModule, MatBadgeModule,
    MatAutocompleteModule, MatProgressSpinnerModule, MatMenuModule, MatTabsModule, MatTreeModule, RouterModule, MatSnackBarModule,
    MDBBootstrapModule.forRoot(), MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
