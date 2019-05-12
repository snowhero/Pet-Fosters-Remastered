import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';

import { PET } from '../interfaces/pet';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor() { }
}
