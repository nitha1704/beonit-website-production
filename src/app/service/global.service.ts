import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  isModalBoxShow = new BehaviorSubject(false);

  constructor() { 
  }

  getIsModalBoxShow() {
    return this.isModalBoxShow
  }
}
