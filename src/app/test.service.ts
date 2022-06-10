import { Injectable } from '@angular/core';
import { IService } from './iservice';

@Injectable({
  providedIn: 'root'
})
export class TestService implements IService {

  test = 'test';
  serviceMessage: string = 'Test Service';

  constructor() { }

  echoTest() {
    return '[TEST] I am the test service';
  }
}
