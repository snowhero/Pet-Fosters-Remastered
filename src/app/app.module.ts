import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { AngularFireStorageModule } from 'angularfire2/storage';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { AppRoutingModule } from './app-routing.module';
import { PetsComponent } from './components/pets/pets.component';
import { PetBioComponent } from './components/pet-bio/pet-bio.component';

import { FirebaseService } from './services/firebase.service';
import { AngularFireDatabase } from 'angularfire2/database';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    PetsComponent,
    PetBioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  providers: [FirebaseService, AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
