import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PilCatPunt } from '../interfaces/pil-cat-punt';

@Injectable({
  providedIn: 'root'
})
export class RankingService {

  public URL_BASE = "https://back-ranking.herokuapp.com/ver";

  public URL_ENDPOINT = "/pilCatPuntXPiloto/"



  constructor(private http: HttpClient) { }

  TraerPilCatPunt(nombrePiloto:String):Observable<PilCatPunt[]>{
    return this.http.get<PilCatPunt[]>(`${this.URL_BASE} ${this.URL_ENDPOINT}` + nombrePiloto);
  }
  
} 
