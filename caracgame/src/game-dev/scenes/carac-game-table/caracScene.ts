import { BaseGameScene } from '../base-game-scene/BaseGameScene';
import { PuzzlePiece } from 'src/game-dev/objects/components/carac-game-components/puzzlePiece';
import { caracGameComponents } from 'src/game-dev/consts/carac-game-config/carac-game-config';
import { PuzzleSlot } from 'src/game-dev/objects/components/carac-game-components/puzzleSlot';

export class CaracScene extends BaseGameScene{
    constructor(){
        super({key:'CaracScene'});
    }

    preload():void{
        this.loadingSources();
        this.loadPieceResources();
    }

    create():void{
        this.addUIElements();

        let puzzleTest = new PuzzlePiece(this,0,100,1);
        this.container.add(puzzleTest);

        let slotTest = new PuzzleSlot(this,100,100,1);
        this.container.add(slotTest);
    }

    loadPieceResources():void{
        //loading the bodies
        caracGameComponents.pieces.forEach((obj)=>{
            this.load.image(obj.key,obj.url);
        });

        //loading the rest
        this.load.image(caracGameComponents.label.key,caracGameComponents.label.url);
        this.load.image(caracGameComponents.photo.key,caracGameComponents.photo.url);
        this.load.image(caracGameComponents.slot.board.key,caracGameComponents.slot.board.url);

        //loading the backgrounds
        caracGameComponents.slot.background.forEach((obj)=>{
            this.load.image(obj.key,obj.url);
        })
    }
}