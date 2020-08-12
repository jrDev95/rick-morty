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
    const res = this.http.get('https://rickandmortyapi.com/api/character/?page=1');
    res.subscribe(res => this.characters.next(res));
  }

  paginationGetCharacters(pagination: string) {
    const res = this.http.get(pagination);
    res.subscribe(res => this.characters.next(res));
  }

  getCharacter(id: number) {
    const res = this.http.get(`https://rickandmortyapi.com/api/character/${id}`);
    res.subscribe(res => this.characters.next(res));
  }

  filterCharacter(filterData: any){
    const res = this.http.get(`https://rickandmortyapi.com/api/character/?${filterData.name.value !== "" ? `name=${filterData.name.value.toLowerCase()}` : "" }${filterData.species.value !== "" ? `&species=${filterData.species.value}` : "" }${filterData.gender.value !== "" ? `&gender=${filterData.gender.value}` : "" }${filterData.status.value !== "" ? `&status=${filterData.status.value}` : "" } `);
    res.subscribe(res => this.characters.next(res));
  }
}

