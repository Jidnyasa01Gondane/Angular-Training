import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemodataService {

  constructor() { }
  userName = "Jidnyasa";
  getName () {
    return this.userName;
  }

  setName( tempName: string) {
    this.userName = tempName;
  }
}
