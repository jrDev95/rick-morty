import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../../services/characters.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss']
})
export class CharactersListComponent implements OnInit {

  characters: any;
  page: number = 1;

  constructor( 
    private characterService: CharactersService 
  ) { }

  ngOnInit(): void {
    this.characterService.characterState.subscribe(characters => this.characters = characters);
    this.initCharacterList();
  }

  initCharacterList() {
    this.characterService.initCharacters();
  }

  logCharactersList() {
    console.log(this.characters);
  }

  nextPage() {
    if(!!this.characters.info.next) {
      this.characterService.paginationGetCharacters(this.characters.info.next);
    }
  }

  prevtPage() {
    if(!!this.characters.info.prev) {
      this.characterService.paginationGetCharacters(this.characters.info.prev);
    }
  }


}
