import { gameAssistantComponents } from 'src/game-dev/util/main-menu/main-menu-def';
import { AssistantMenuButton } from './menuButton';

export class AssistantMenu {
    scene:Phaser.Scene;
    board:Phaser.GameObjects.Image;

    container:Phaser.GameObjects.Container;

    constructor(scene:Phaser.Scene,x:number,y:number){
        this.scene = scene;

         this.board = this.scene.add.image(0,0,gameAssistantComponents.find((el)=>{
            return el.name === 'menu';
        }).key);

        let xPosition = this.board.x-200;
        let buttonOptions = [];


        for (let i=1;i<=5;i++){
            
            let optionButton = new AssistantMenuButton(this.scene,xPosition,this.board.y-10,i);
            buttonOptions.push(optionButton);
            xPosition+=100;
        }

        this.container = this.scene.add.container(x,y,[this.board]);
        buttonOptions.forEach((button)=>{
            this.container.add(button.container);
        })
        this.container.setSize(this.board.width,this.board.height);
    }
}