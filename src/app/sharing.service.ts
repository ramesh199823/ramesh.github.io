import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharingService {
  userDetails = new BehaviorSubject({}) 
  constructor() { }
}
