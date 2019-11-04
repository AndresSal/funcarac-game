import { caracGameComponents } from 'src/game-dev/consts/carac-game-config/carac-game-config';
import { PuzzleSlot } from './puzzleSlot';

export class BoardGame extends Phaser.GameObjects.Container{
    scene:Phaser.Scene;
    board:Phaser.GameObjects.Image;

    redRing:PuzzleSlot[];
    yellowRing:PuzzleSlot[];
    greenRing:PuzzleSlot[];
    blueRing:PuzzleSlot[];

    constructor(scene:Phaser.Scene,x:number,y:number){
        super(scene,x,y);

        this.board = this.scene.add.image(0,0,caracGameComponents.board_game.key);
        this.add(this.board);
        this.setSize(this.board.width,this.board.height);

        this.redRing = this.createSlotRing(0,0,1);
        this.yellowRing = this.createSlotRing(0,0,2);
        this.greenRing = this.createSlotRing(0,0,3);
        this.blueRing = this.createSlotRing(0,0,4);

    }


    createSlotRing(x:number,y:number,idType:number):PuzzleSlot[]{
        let slotsGroup:PuzzleSlot[]=[];
        let slotType = caracGameComponents.slot.background.find((option)=>{
            return option.id===idType;
        });
        
        for (let i=0;i<12;i++){
            let puzzleSlot = new PuzzleSlot(this.scene,0,0,slotType.id);
            puzzleSlot.setScale(slotType.config.scale.x,slotType.config.scale.y);
            console.log(puzzleSlot);
            slotsGroup.push(puzzleSlot);
            this.add(puzzleSlot);
        }

        Phaser.Actions.SetRotation(slotsGroup,26.72,0.52);
        let ringShape = new Phaser.Geom.Circle(x,y,slotType.config.ring_radius);
        Phaser.Actions.PlaceOnCircle(slotsGroup,ringShape);
        return slotsGroup;
    }
}