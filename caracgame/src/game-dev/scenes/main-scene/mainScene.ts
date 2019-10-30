import { MainMenuButton } from 'src/game-dev/objects/components/main-menu-button';
import { mainMenuComponents, mainMenuButtons } from 'src/game-dev/util/main-menu/main-menu-def';

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
    }

    private create():void{
        let button1 = new MainMenuButton(this,200,300,1);
        let button2 = new MainMenuButton(this,390,300,2);
        let button3 = new MainMenuButton(this,580,300,3);
    }
}