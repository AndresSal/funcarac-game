import { caracGameComponents } from 'src/game-dev/consts/carac-game-config/carac-game-config';

export class PuzzlePiece extends Phaser.GameObjects.Container{
    scene:Phaser.Scene;
    body:Phaser.GameObjects.Image;
    photo:Phaser.GameObjects.Image;
    label:Phaser.GameObjects.Image;
    title:Phaser.GameObjects.Text;

    pieceInfo:any;

    constructor(scene:Phaser.Scene,x:number,y:number,id:number){
        super(scene,x,y);

        this.scene = scene;
        
        this.pieceInfo = caracGameComponents.pieces.find((type)=>{
            return type.id === id;
        });

        this.buildAPiece();
    }

    buildAPiece():void{
        this.body = this.scene.add.image(0,0,this.pieceInfo.key);
        this.label = this.scene.add.image(0,25,caracGameComponents.label.key);
        this.photo = this.scene.add.image(0,-20,caracGameComponents.photo.key);
        
        //TODO agregar titulo de la pieza

        this.add([this.body,this.label,this.photo]);
        this.setSize(this.body.width,this.body.height);
    }


}