import { caracGameComponents } from 'src/game-dev/consts/carac-game-config/carac-game-config';

export class PuzzleSlot extends Phaser.GameObjects.Container{
    scene:Phaser.Scene;

    optionInfo:any;

    board:Phaser.GameObjects.Image;
    background:Phaser.GameObjects.Image;
    
    constructor(scene:Phaser.Scene,x:number,y:number,idType:number){
        super(scene,x,y);
        this.scene = scene;

        this.optionInfo = caracGameComponents.slot.background.find((type)=>{
            return type.id === idType;
        });

        
        this.buildPuzzleSlot();
    }

    buildPuzzleSlot():void{
        this.board = this.scene.add.image(0,0,caracGameComponents.slot.board.key);
        this.background = this.scene.add.image(0,0,this.optionInfo.key);

        this.add([this.board,this.background]);
        this.setSize(this.board.width,this.board.height);
    }
}