import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pilotos } from '../interfaces/pilotos';

@Injectable({
  providedIn: 'root'
})
export class PilotosService {

  public pilotos: Pilotos[] = [];

  public nombresPilotos: any = [];

  public URL = "https://back-ranking.herokuapp.com/ver/pilotos"

  constructor(private http: HttpClient) { }

  obtenerPilotos():Observable<Pilotos[]>{
    return this.http.get<Pilotos[]>(`${this.URL}`);
  }

}
