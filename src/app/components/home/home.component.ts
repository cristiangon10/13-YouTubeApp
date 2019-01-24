import { Component, OnInit } from '@angular/core';
import { YoutubeService} from '../../services/youtube.service';

declare var $:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  videos:any[] = [];
  videoSel:any;

  constructor( public _ys:YoutubeService) { 

    this._ys.getVideos().subscribe( videos =>{
      console.log(videos);
      this.videos = videos;
    });
  }

  ngOnInit() {
  }

  cerrarModal()
  {
    this.videoSel = null;
    $('#videoModal').modal('hide');
  }

  verVideo( video:any){
    this.videoSel = video;
    $('#videoModal').modal();
     console.log("Este es el video seleccionado" + this.videoSel   )
  } 

  agregarVideos()
  {
    this._ys.getVideos().subscribe( videos => this.videos.push.apply(this.videos, videos));
    
  }
}
