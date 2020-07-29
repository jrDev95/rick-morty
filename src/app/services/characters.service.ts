import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs'; //Make data state cross component

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  //characters data
  private characters = new BehaviorSubject<any>(null);
  characterState = this.characters.asObservable();

  constructor( 
    private http: HttpClient
  ) { }

  initCharacters(): any {
    console.log('getCharacters')
    const res = this.http.get('https://rickandmortyapi.com/api/character/?page=1');
    res.subscribe(res => this.characters.next(res));
  }

  paginationGetCharacters(pagination: string) {
    console.log(pagination);
    const res = this.http.get(pagination);
    res.subscribe(res => this.characters.next(res));
  }
}

