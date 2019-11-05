import { caracGameComponents } from 'src/game-dev/consts/carac-game-config/carac-game-config';

export class PiecesBoard extends Phaser.GameObjects.Container{
    scene:Phaser.Scene;
    board: Phaser.GameObjects.Image;
    label: Phaser.GameObjects.Image;

    constructor(scene:Phaser.Scene,x:number,y:number){
        super(scene,x,y);

        this.scene = scene;

        this.board = this.scene.add.image(0,0,caracGameComponents.pieces_board.key);
        this.label = this.scene.add.image(0,-300,caracGameComponents.pieces_board.label.key);

        this.add([this.board,this.label]).setSize(this.board.width,this.board.height);
    }
}