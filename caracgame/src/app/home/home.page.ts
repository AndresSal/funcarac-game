import { Component, OnInit } from '@angular/core';
import { BaseGame } from 'src/game-dev/classes/game-class/baseGame';
import { gameConfig } from 'src/game-dev/consts/game-config/gameConfig';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  mainGame:BaseGame;

  constructor() {}

  ngOnInit(){
    this.mainGame = new BaseGame(gameConfig);
  }

}
