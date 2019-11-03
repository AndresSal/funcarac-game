import { sceneComponents } from 'src/game-dev/util/main-menu/main-menu-def'

export class BaseGameScene extends Phaser.Scene{
    sceneWidth:number;
    sceneHeight:number;
    
    window:Phaser.GameObjects.Image;
    label:Phaser.GameObjects.Image;
    title:Phaser.GameObjects.Text;
    
    constructor(sceneConfig){
        super(sceneConfig)
    }

    init():void{
        this.sceneWidth = this.sys.canvas.width*2/3;
        this.sceneHeight = this.sys.canvas.height;
    }

    addUIElements():void{
        this.window = this.add.image(this.sceneWidth,this.sceneHeight/2,'scene-window');
        this.window.setScale(0.6);
        this.label = this.add.image(this.sceneWidth+5,this.sceneHeight/6-20,'scene-Label');
        this.label.setScale(0.6);

    }

    loadingSources():void{
        //loading my components
        sceneComponents.forEach((el)=>{
            this.load.image(el.key,el.url)
        });
    }
}