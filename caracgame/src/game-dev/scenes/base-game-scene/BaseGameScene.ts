import { sceneComponents } from 'src/game-dev/util/main-menu/main-menu-def'

export class BaseGameScene extends Phaser.Scene{
    sceneWidth:number;
    sceneHeight:number;
    
    window:Phaser.GameObjects.Image;
    label:Phaser.GameObjects.Image;
    title:Phaser.GameObjects.Text;
    container: Phaser.GameObjects.Container;
    
    constructor(sceneConfig){
        super(sceneConfig)
    }

    init():void{
        this.sceneWidth = this.sys.canvas.width;
        this.sceneHeight = this.sys.canvas.height;
    }

    addUIElements():void{
        // this.window = this.add.image(this.sceneWidth,this.sceneHeight/2,'scene-window');
        this.window = this.add.image(0,0,'scene-window');
        // this.label = this.add.image(this.sceneWidth+5,this.sceneHeight/6-20,'scene-Label');
        this.label = this.add.image(this.window.x,this.window.y-400,'scene-Label');
        
        this.container = this.add.container(this.sceneWidth/2+this.sceneWidth/12,this.sceneHeight/2+1,[this.window,this.label]);
        this.container.setSize(this.window.width,this.window.height);
        this.container.setScale(window.devicePixelRatio*0.6);
    }

    loadingSources():void{
        //loading my components
        sceneComponents.forEach((el)=>{
            this.load.image(el.key,el.url)
        });
    }
}