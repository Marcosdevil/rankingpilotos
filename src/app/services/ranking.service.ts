import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PilCatPunt } from '../interfaces/pil-cat-punt';
import { Pilotos } from '../interfaces/pilotos';
import { Ranking } from '../interfaces/ranking';
import { PilotosService } from './pilotos.service';

@Injectable({
  providedIn: 'root'
})
export class RankingService {

  public tablaRanking: Ranking[] = [];

  public pilotos: Pilotos[] = [];

  public puntosXPiloto: PilCatPunt[] = [
    {
      idPilCatPunt: 1,
      nombrePilotoPilCatPunt: "Werner, Mariano",
      idCategoriaPilCatPunt: "TC",
      puntosAntPilCantPunt: 15.050,
      puntosActPilCantPunt: 15.847 
    },
    {
      idPilCatPunt: 2,
      nombrePilotoPilCatPunt: "Werner, Mariano",
      idCategoriaPilCatPunt: "TN3",
      puntosAntPilCantPunt: 2.532,
      puntosActPilCantPunt: 2.852
    },
    {
      idPilCatPunt: 3,
      nombrePilotoPilCatPunt: "Werner, Mariano",
      idCategoriaPilCatPunt: "TCPK",
      puntosAntPilCantPunt: 1.467,
      puntosActPilCantPunt: 1.721 
    },
    {
      idPilCatPunt: 4,
      nombrePilotoPilCatPunt: "Santero, Julián",
      idCategoriaPilCatPunt: "TC",
      puntosAntPilCantPunt: 6.426,
      puntosActPilCantPunt: 6.879 
    },
    {
      idPilCatPunt: 5,
      nombrePilotoPilCatPunt: "Santero, Julián",
      idCategoriaPilCatPunt: "STC2000",
      puntosAntPilCantPunt: 4.682,
      puntosActPilCantPunt: 4.912 
    },
    {
      idPilCatPunt: 6,
      nombrePilotoPilCatPunt: "Santero, Julián",
      idCategoriaPilCatPunt: "TN3",
      puntosAntPilCantPunt: 6.804,
      puntosActPilCantPunt: 7.066 
    },
    {
      idPilCatPunt: 7,
      nombrePilotoPilCatPunt: "Canapino, Agustín",
      idCategoriaPilCatPunt: "TC",
      puntosAntPilCantPunt: 10.377,
      puntosActPilCantPunt: 10.725
    },
    {
      idPilCatPunt: 8,
      nombrePilotoPilCatPunt: "Canapino, Agustín",
      idCategoriaPilCatPunt: "STC2000",
      puntosAntPilCantPunt: 7.000,
      puntosActPilCantPunt: 7.282
    },
    {
      idPilCatPunt: 9,
      nombrePilotoPilCatPunt: "Pernia, Lionel",
      idCategoriaPilCatPunt: "TC",
      puntosAntPilCantPunt: 4.367,
      puntosActPilCantPunt: 4.868
    },
    {
      idPilCatPunt: 10,
      nombrePilotoPilCatPunt: "Pernia, Lionel",
      idCategoriaPilCatPunt: "STC2000",
      puntosAntPilCantPunt: 5.973,
      puntosActPilCantPunt: 6.627
    },
    {
      idPilCatPunt: 11,
      nombrePilotoPilCatPunt: "Pernia, Lionel",
      idCategoriaPilCatPunt: "TN3",
      puntosAntPilCantPunt: 3.957,
      puntosActPilCantPunt: 4.154 
    },
    {
      idPilCatPunt: 12,
      nombrePilotoPilCatPunt: "Urcera, José Manuel",
      idCategoriaPilCatPunt: "TC",
      puntosAntPilCantPunt: 5.128,
      puntosActPilCantPunt: 5.356 
    },
    {
      idPilCatPunt: 13,
      nombrePilotoPilCatPunt: "Urcera, José Manuel",
      idCategoriaPilCatPunt: "STC2000",
      puntosAntPilCantPunt: 757,
      puntosActPilCantPunt: 809
    },
    {
      idPilCatPunt: 14,
      nombrePilotoPilCatPunt: "Urcera, José Manuel",
      idCategoriaPilCatPunt: "TN3",
      puntosAntPilCantPunt: 5.126,
      puntosActPilCantPunt: 5.467 
    },
    {
      idPilCatPunt: 15,
      nombrePilotoPilCatPunt: "Castellano, Jhonatan",
      idCategoriaPilCatPunt: "TC",
      puntosAntPilCantPunt: 7.935,
      puntosActPilCantPunt: 8.225
    },
    {
      idPilCatPunt: 16,
      nombrePilotoPilCatPunt: "Castellano, Jhonatan",
      idCategoriaPilCatPunt: "TN3",
      puntosAntPilCantPunt: 2.134,
      puntosActPilCantPunt: 2.591 
    },
    {
      idPilCatPunt: 17,
      nombrePilotoPilCatPunt: "Castellano, Jhonatan",
      idCategoriaPilCatPunt: "TCPK",
      puntosAntPilCantPunt: 187,
      puntosActPilCantPunt: 230
    },
    {
      idPilCatPunt: 18,
      nombrePilotoPilCatPunt: "Ardusso, Facundo",
      idCategoriaPilCatPunt: "TC",
      puntosAntPilCantPunt: 5.000,
      puntosActPilCantPunt: 5.260
    },
    {
      idPilCatPunt: 19,
      nombrePilotoPilCatPunt: "Ardusso, Facundo",
      idCategoriaPilCatPunt: "STC2000",
      puntosAntPilCantPunt: 4.990,
      puntosActPilCantPunt: 5.125
    },
    {
      idPilCatPunt: 20,
      nombrePilotoPilCatPunt: "Chapur, Facundo",
      idCategoriaPilCatPunt: "TN3",
      puntosAntPilCantPunt: 4.790,
      puntosActPilCantPunt: 5.127 
    },
    {
      idPilCatPunt: 21,
      nombrePilotoPilCatPunt: "Chapur, Facundo",
      idCategoriaPilCatPunt: "TCPK",
      puntosAntPilCantPunt: 249,
      puntosActPilCantPunt: 286
    },
    {
      idPilCatPunt: 22,
      nombrePilotoPilCatPunt: "Chapur, Facundo",
      idCategoriaPilCatPunt: "TCM",
      puntosAntPilCantPunt: 582,
      puntosActPilCantPunt: 602
    },
    {
      idPilCatPunt: 23,
      nombrePilotoPilCatPunt: "Ledesma, Christian",
      idCategoriaPilCatPunt: "TC",
      puntosAntPilCantPunt: 7.939,
      puntosActPilCantPunt: 8.005
    },
    {
      idPilCatPunt: 24,
      nombrePilotoPilCatPunt: "Ledesma, Christian",
      idCategoriaPilCatPunt: "TCPK",
      puntosAntPilCantPunt: 210,
      puntosActPilCantPunt: 240
    },
    {
      idPilCatPunt: 25,
      nombrePilotoPilCatPunt: "Rossi, Matias",
      idCategoriaPilCatPunt: "STC2000",
      puntosAntPilCantPunt: 7.159,
      puntosActPilCantPunt: 7.304
    },
    {
      idPilCatPunt: 26,
      nombrePilotoPilCatPunt: "Rossi, Matias",
      idCategoriaPilCatPunt: "TRV6",
      puntosAntPilCantPunt: 597,
      puntosActPilCantPunt: 638
    }
  ];

  constructor(private http: HttpClient, private pilotosService: PilotosService) { }

  verPilotos(){
    this.pilotosService.obtenerPilotos().subscribe(dato => {
      this.pilotos = dato;      
      console.log(dato);
      
    });
  }

  
  
}
