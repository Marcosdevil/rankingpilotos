import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Noticia } from '../interfaces/noticia';


@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  private URL = "https://complete-audry-privas06.koyeb.app/ver/noticiasOrdenadas";

  constructor(private http: HttpClient) { }

  // Este metodo es para obtener la lista de noticias del back
  obtenerNoticias():Observable<Noticia[]> {
    return this.http.get<Noticia[]>(`${this.URL}`);
  }

}
