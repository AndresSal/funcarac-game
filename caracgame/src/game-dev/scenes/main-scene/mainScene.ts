import { MainMenuButton } from 'src/game-dev/objects/components/main-menu-button';
import { mainMenuComponents, mainMenuButtons, gameAssistantComponents, buttonIcons, sceneComponents } from 'src/game-dev/util/main-menu/main-menu-def';
import { MainMenu } from 'src/game-dev/objects/components/main-menu/main-menu';
import { AssistantMenu } from 'src/game-dev/objects/components/game-assistant/assistantMenu';
import { AssistantMenuButton } from 'src/game-dev/objects/components/game-assistant/menuButton';
import { GameAssistantWindow } from 'src/game-dev/objects/components/game-assistant/gameAssistantWindow';
import { BaseGameScene } from '../base-game-scene/BaseGameScene';

export class MainScene extends Phaser.Scene{
    gameWidth:number;
    gameHeight:number;
    uiElements:Phaser.GameObjects.Group;

    currentScene:Phaser.Scene;

    constructor(){
        super({key:'MainScene'});
    }

    private preload():void{
        mainMenuComponents.forEach((el)=>{
            this.load.image(el.key,el.url);
        })

        mainMenuButtons.forEach((el)=>{
            this.load.image(el.key,el.url);
        })

        gameAssistantComponents.forEach((el)=>{
            this.load.image(el.key,el.url);
        });

        buttonIcons.forEach((el)=>{
            this.load.image(el.key,el.url);
        });
    }

    private create():void{
        this.gameWidth = this.game.canvas.width;
        this.gameHeight = this.game.canvas.height;

        let menu = new MainMenu(this,0,0);
        let gameAssistantWindow = new GameAssistantWindow(this,0,0);

        this.uiElements = this.add.group([gameAssistantWindow.container,menu.container]);
        Phaser.Actions.GridAlign(this.uiElements.getChildren(),{
            width:-1,
            height:this.gameHeight,
            cellWidth: menu.container.width,
            cellHeight: menu.container.height+143,
            x:this.gameWidth/2-this.gameWidth/4-3,
            y:111
        });
        
        this.scene.launch('CaracScene');
    }
}