import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../../services/characters.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  character: any = {}

  constructor(
    private characterService: CharactersService,
    private route: ActivatedRoute
  ) { 
    
  }

  ngOnInit(): void {
    this.characterService.getCharacter(Number(this.route.snapshot.paramMap.get('id')));
    this.characterService.characterState.subscribe(characters => this.character = characters);
  }

}
