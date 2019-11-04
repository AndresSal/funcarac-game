import { MainMenuButton } from 'src/game-dev/objects/components/main-menu-button';
import { mainMenuComponents, mainMenuButtons, gameAssistantComponents, buttonIcons, sceneComponents } from 'src/game-dev/util/main-menu/main-menu-def';
import { MainMenu } from 'src/game-dev/objects/components/main-menu/main-menu';
import { AssistantMenu } from 'src/game-dev/objects/components/game-assistant/assistantMenu';
import { AssistantMenuButton } from 'src/game-dev/objects/components/game-assistant/menuButton';
import { GameAssistantWindow } from 'src/game-dev/objects/components/game-assistant/gameAssistantWindow';
import { BaseGameScene } from '../base-game-scene/BaseGameScene';

export class MainScene extends Phaser.Scene{
    sceneWidth:number;
    sceneHeight:number;
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

    private init():void{
        this.sceneWidth = this.sys.canvas.width;
        this.sceneHeight = this.sys.canvas.height;
    }


    private create():void{
        let assistantWindow = new GameAssistantWindow(this,this.sceneWidth/3-this.sceneWidth/6,this.sceneHeight/3+2.5);
        let mainMenu = new MainMenu(this,this.sceneWidth/3-this.sceneWidth/6,this.sceneHeight-this.sceneHeight/6-2.55);
        let scaleRatio = window.devicePixelRatio;
        assistantWindow.container.setScale(scaleRatio*0.6);
        mainMenu.container.setScale(scaleRatio*0.6);
                
        this.scene.launch('CaracScene');
    }
}