import { Component, OnInit, Input } from '@angular/core';
import { EpisodesService } from '../../services/episodes.service';

@Component({
  selector: 'app-episode-list',
  templateUrl: './episode-list.component.html',
  styleUrls: ['./episode-list.component.scss']
})
export class EpisodeListComponent implements OnInit {

  @Input() url: string = "";
  @Input() episodeArray: any = [];
  episodeList : any[] = [];

  constructor(
    private episodesService : EpisodesService
  ) { }

  ngOnInit(): void {
      this.episodesService.queryURLEpisode(this.episodeArray);
      this.episodesService.episodesState.subscribe(episode => this.episodeList = episode);     
  }
}
