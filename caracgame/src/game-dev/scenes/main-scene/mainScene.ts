import { MainMenuButton } from 'src/game-dev/objects/components/main-menu-button';
import { mainMenuComponents, mainMenuButtons, gameAssistantComponents, buttonIcons } from 'src/game-dev/util/main-menu/main-menu-def';
import { MainMenu } from 'src/game-dev/objects/components/main-menu/main-menu';
import { AssistantMenu } from 'src/game-dev/objects/components/game-assistant/assistantMenu';
import { AssistantMenuButton } from 'src/game-dev/objects/components/game-assistant/menuButton';

export class MainScene extends Phaser.Scene{
    
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
        })
    }

    private create():void{
        let menu = new MainMenu(this,this.sys.canvas.width/3,this.sys.canvas.height/3);
        let assistantMenu = new AssistantMenu(this,300,500);
    }
}