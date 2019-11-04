import { BaseGameScene } from '../base-game-scene/BaseGameScene';

export class CaracScene extends BaseGameScene{
    constructor(){
        super({key:'CaracScene'});
    }

    preload():void{
        this.loadingSources();
        this.load.image('recuadro','/assets/game-assets/scene-aux/recuadro_liston.png');
    }

    create():void{
        this.addUIElements();
        let recuadro = this.add.image(0,100,'recuadro');
        this.container.add(recuadro);

    }
}