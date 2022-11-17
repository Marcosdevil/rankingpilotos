import { Component, OnInit } from '@angular/core';
import { Noticia } from '../interfaces/noticia';
import { NoticiasService } from '../services/noticias.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public noticias: Noticia[] = [];
  
  constructor(private noticiaServicio: NoticiasService) { }

  ngOnInit(): void {
    this.verNoticias();
  }

  private verNoticias(){
    this.noticiaServicio.obtenerNoticias().subscribe(dato => {
      this.noticias = dato;
    });
  }
}
