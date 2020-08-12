import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs'; //Make data state cross component

@Injectable({
  providedIn: 'root'
})
export class EpisodesService {

  //characters data
  private episodes = new BehaviorSubject([]);
  episodesState = this.episodes.asObservable();

  constructor(
    private http: HttpClient
  ) { }

  queryURLEpisode(url: string[]){
    let episodesData = [];
    url.forEach(episodeURL => {
      const res = this.http.get(episodeURL);
      res.subscribe(res => episodesData.push(res));
    });
    this.episodes.next(episodesData);
  }
}
