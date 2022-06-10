import { Injectable } from '@angular/core';
import { IService } from './iservice';

@Injectable({
  providedIn: 'root'
})
export class CrazyService implements IService {

  serviceMessage: string = 'Crazy Service';

  crazy = 'crazy';

  echoCrazy() {
    return '[CRAZY] I am the crazy service';
  }
}
