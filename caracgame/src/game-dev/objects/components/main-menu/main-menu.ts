import { MainMenuButton } from '../main-menu-button';
import { mainMenuComponents } from 'src/game-dev/util/main-menu/main-menu-def';

export class MainMenu {
    scene:Phaser.Scene;

    window:Phaser.GameObjects.Image;
    caracButton:MainMenuButton;
    talesButton:MainMenuButton;
    chakraButton:MainMenuButton;

    container:Phaser.GameObjects.Container;

    constructor(scene:Phaser.Scene,x:number,y:number){
        this.scene = scene;

        //adding window
        this.window = this.scene.add.image(0,0,mainMenuComponents.find((el)=>{
            return el.name === 'menuWindow'
        }).key);

        //adding buttons
        this.caracButton = new MainMenuButton(this.scene,-190,0,1);
        this.talesButton = new MainMenuButton(this.scene,0,0,2);
        this.chakraButton = new MainMenuButton(this.scene,190,0,3);

        //building the component
        this.container = this.scene.add.container(x,y,[this.window,this.caracButton.container,this.talesButton.container,this.chakraButton.container]);
        this.container.setSize(this.window.width,this.window.height);
        this.container.setScale(0.6);
    }
}