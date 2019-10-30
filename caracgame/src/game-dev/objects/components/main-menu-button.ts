import { mainMenuComponents, mainMenuButtons } from 'src/game-dev/util/main-menu/main-menu-def';

export class MainMenuButton{
    scene:Phaser.Scene;

    background:Phaser.GameObjects.Image;
    window:Phaser.GameObjects.Image;
    label:Phaser.GameObjects.Image;
    picture:Phaser.GameObjects.Image;
    title: Phaser.GameObjects.Text;

    container:Phaser.GameObjects.Container;

    constructor(scene:Phaser.Scene,x:number,y:number, idButton:number){
        this.scene = scene;

        //getting button
        let option = mainMenuButtons.find((el)=>{
            return el.id === idButton;
        });
        
        //adding background
        this.background = this.scene.add.image(0,0,mainMenuComponents.find((el)=>{
            return el.name === 'body'
        }).key);

        //adding window
        this.window = this.scene.add.image(0,0,mainMenuComponents.find((el)=>{
            return el.name === 'window';
        }).key);

        // //adding label
        this.label = this.scene.add.image(0,0,mainMenuComponents.find((el)=>{
            return el.name === 'label'
        }).key);

        //adding picture
        this.picture = this.scene.add.image(0,0,option.key);

        //adding title
        this.title = this.scene.add.text(0,0,option.title,{fontFamily:'Arial', fontSize:16, color:'#000000', align:'center'});

        //setting the positions
        this.window.setY(this.background.y-50);
        this.label.setY(this.background.y + 90);
        this.picture.setY(this.window.y-5);
        this.title.setPosition(this.label.x-65,this.label.y-20);

        //building the component
        this.container = this.scene.add.container(x,y,[this.background,this.window,this.picture,this.label,this.title]);
        this.container.setSize(this.background.width,this.background.height);
    }


}