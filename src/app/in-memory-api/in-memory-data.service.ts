import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from '../_models/User';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  constructor() { }
  createDb() {
    const users = [
      {
        id:0, 
        Email:'raselcse97@gmail.com', 
        FirstName:'Saiful Islam', 
        LastName:'Rasel', 
        Role:'admin', 
        Gender:'male',
        Interests:'programming, cricket',
        Phone:'01840167116',
        Password:'123456',
        ConfirmPassword:'123456',
        DateOfBirth:'05-12-1997',
      },
      {
        id:1, 
        Email:'s.i.r.computerengineer.24@gmail.com', 
        FirstName:'Saiful Islam', 
        LastName:'Rasel', 
        Role:'user', 
        Gender:'male',
        Interests:'programming, cricket',
        Phone:'01840167116',
        Password:'123456',
        ConfirmPassword:'123456',
        DateOfBirth:'05-12-1997',
      },
    ];
    return {users};
  }

  genId(users: User[]): number {
    return users.length > 0 ? 
          Math.max(...users.map(user => user.id)) + 1 : 0;
  }

}
