import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../../services/characters.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss']
})
export class CharactersListComponent implements OnInit {

  characters: any;

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



  nextPage() {
    if(!!this.characters.info.next) {
      this.characterService.paginationGetCharacters(this.characters.info.next);
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    }
  }

  prevtPage() {
    if(!!this.characters.info.prev) {
      this.characterService.paginationGetCharacters(this.characters.info.prev);
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    }
  }


}
