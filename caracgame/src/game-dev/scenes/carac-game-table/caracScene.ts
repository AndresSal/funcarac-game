import { BaseGameScene } from '../base-game-scene/BaseGameScene';
import { PuzzlePiece } from 'src/game-dev/objects/components/carac-game-components/puzzlePiece';
import { caracGameComponents } from 'src/game-dev/consts/carac-game-config/carac-game-config';
import { PuzzleSlot } from 'src/game-dev/objects/components/carac-game-components/puzzleSlot';
import { BoardGame } from 'src/game-dev/objects/components/carac-game-components/boardGame';
import { PiecesBoard } from 'src/game-dev/objects/components/carac-game-components/piecesboard';

export class CaracScene extends BaseGameScene{
    redRing:PuzzleSlot[];
    yellowRing:PuzzleSlot[];
    greenRing:PuzzleSlot[];
    blueRing:PuzzleSlot[];

    constructor(){
        super({key:'CaracScene'});
    }

    preload():void{
        this.loadingSources();
        this.loadPieceResources();
    }

    create():void{
        this.addUIElements();

        let piecesBoard = new PiecesBoard(this,-400,100);
        this.container.add(piecesBoard);

        let piece01 = new PuzzlePiece(this,0,-150,1);
        let piece02 = new PuzzlePiece(this,0,30,2);
        let piece03 = new PuzzlePiece(this,0,210,3);
        piecesBoard.add([piece01,piece02,piece03]);

        let gameBoard = new BoardGame(this,200,100);
        this.container.add(gameBoard);

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
        this.load.image(caracGameComponents.board_game.key,caracGameComponents.board_game.url);
        this.load.image(caracGameComponents.pieces_board.key,caracGameComponents.pieces_board.url);
        this.load.image(caracGameComponents.pieces_board.label.key,caracGameComponents.pieces_board.label.url);
        this.load.image(caracGameComponents.board_game.label.key,caracGameComponents.board_game.label.url);

        //loading the backgrounds
        caracGameComponents.slot.background.forEach((obj)=>{
            this.load.image(obj.key,obj.url);
        })
    }

    createSlotRing(x:number,y:number,idType:number):PuzzleSlot[]{
        let slotsGroup:PuzzleSlot[]=[];
        let slotType = caracGameComponents.slot.background.find((option)=>{
            return option.id===idType;
        });
        
        for (let i=0;i<12;i++){
            let puzzleSlot = new PuzzleSlot(this,0,0,slotType.id);
            puzzleSlot.setScale(slotType.config.scale.x,slotType.config.scale.y);
            console.log(puzzleSlot);
            slotsGroup.push(puzzleSlot);
        }

        slotsGroup.forEach((slot)=>{
            this.container.add(slot);
        })

        Phaser.Actions.SetRotation(slotsGroup,26.72,0.52);
        let ringShape = new Phaser.Geom.Circle(x,y,slotType.config.ring_radius);
        Phaser.Actions.PlaceOnCircle(slotsGroup,ringShape);

        return slotsGroup;
    }
}