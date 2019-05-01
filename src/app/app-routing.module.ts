import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { PetsComponent } from './components/pets/pets.component';
import { PetBioComponent } from './components/pet-bio/pet-bio.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // '' -> default component
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'pets', component: PetsComponent },
  { path: 'pet-bio', component: PetBioComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
