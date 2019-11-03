import { AssistantMenuButton } from './menuButton';
import { AssistantMenu } from './assistantMenu';
import { gameAssistantComponents } from 'src/game-dev/util/main-menu/main-menu-def';

export class GameAssistantWindow {
    scene: Phaser.Scene;
    window: Phaser.GameObjects.Image;
    label: Phaser.GameObjects.Image;
    
    assistantMenu: AssistantMenu;

    container: Phaser.GameObjects.Container;

    constructor(scene:Phaser.Scene,x:number,y:number){
        this.scene = scene;
        this.window = this.scene.add.image(0,0,gameAssistantComponents.find((el)=>{
            return el.name === 'window';
        }).key);

        this.label = this.scene.add.image(0,0,gameAssistantComponents.find((el)=>{
            return el.name === 'label';
        }).key);

        this.label.setPosition(this.window.x,this.window.y-250)

        this.assistantMenu = new AssistantMenu(this.scene,this.window.x,this.window.y+240);

        this.container = this.scene.add.container(x,y,[this.window,this.label,this.assistantMenu.container]);
        this.container.setSize(this.window.width,this.window.height);
        this.container.setScale(0.6);

    }
}