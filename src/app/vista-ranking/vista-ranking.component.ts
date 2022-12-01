import { Component, OnInit } from '@angular/core';
import { PilCatPunt } from '../interfaces/pil-cat-punt';
import { Pilotos } from '../interfaces/pilotos';
import { Ranking } from '../interfaces/ranking';
import { PilotosService } from '../services/pilotos.service';
import { RankingService } from '../services/ranking.service';

@Component({
  selector: 'app-vista-ranking',
  templateUrl: './vista-ranking.component.html',
  styleUrls: ['./vista-ranking.component.css']
})
export class VistaRankingComponent implements OnInit {

  public pilCatPunt: PilCatPunt[] = [];

  public pilotos: Pilotos[] = [];

  nombresPilotos: any = [];

  piloto = "";

  constructor(private rankingService: RankingService, private pilotoService: PilotosService) { }

  ngOnInit(): void {
    this.verPilotos();
    //this.iterarPilotos();
  }

  verPilotos(){
    this.pilotoService.obtenerPilotos().subscribe(dato => {
      this.pilotos = dato;    
      this.nombresPilotos = this.pilotos.map(nombre => nombre.nombrePiloto);
      console.log(this.pilotos);
      console.log(this.nombresPilotos);   
      this.verPilCatPunt(this.nombresPilotos.map((pilot: string) => pilot.trim()));
    });
  }

  verPilCatPunt(piloto: String){
    this.piloto = this.nombresPilotos.map((nombre: string) => {
      return nombre.trim();
    });
    this.rankingService.TraerPilCatPunt(piloto).subscribe(dato => {
      this.pilCatPunt = dato;
    })
  } 


  /*iterarPilotos(){
    return this.nombresPilotos.forEach(pilot => {
      pilot.RankingService.TraerPilCatPunt
    });
      
    }
  }*/
    /*return this.rankingService.TraerPilCatPunt(this.nombresPilotos).subscribe(dato => {
      this.pilCatPunt = dato;
      console.log(this.pilCatPunt);
    })*/    
  }


