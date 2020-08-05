import { Component, OnInit } from '@angular/core';
import { FormComposition, GENDERS, STATUS, SPECIES} from '../../data/character-filter';
import { FormControl } from '@angular/forms';
import { CharactersService } from '../../services/characters.service';
@Component({
  selector: 'app-show-filters',
  templateUrl: './show-filters.component.html',
  styleUrls: ['./show-filters.component.scss']
})
export class ShowFiltersComponent implements OnInit {

  showFiltersValue: boolean = false;

  formState: any = {
    name: new FormControl(""),
    species: new FormControl(""),
    gender: new FormControl(""),
    status: new FormControl("")
  }

  species : FormComposition[] = SPECIES;
  genders : FormComposition[] = GENDERS;
  status : FormComposition[] = STATUS;

  constructor(
    private characterService: CharactersService
  ) { }

  ngOnInit(): void {
  }

  showFilters(){
    this.characterService.filterCharacter(this.formState);
    this.showFiltersValue = !this.showFiltersValue
  }

  filterCharacter() {
    this.characterService.filterCharacter(this.formState);
  }

}
