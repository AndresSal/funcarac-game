import { gameAssistantComponents, buttonIcons } from 'src/game-dev/util/main-menu/main-menu-def';

export class AssistantMenuButton {
    scene:Phaser.Scene;
    body:Phaser.GameObjects.Image;
    label:Phaser.GameObjects.Image;
    icon:Phaser.GameObjects.Image;
    title:Phaser.GameObjects.Text;
    
    container:Phaser.GameObjects.Container;

    constructor(scene:Phaser.Scene,x:number, y:number, iconID:number){
        this.scene = scene;

        //adding button's body
        this.body = this.scene.add.image(0,0,gameAssistantComponents.find((el)=>{
            return el.name === 'button';
        }).key);

        //searching option button
        let iconOption = buttonIcons.find((icon)=>{
            return icon.id === iconID;
        })

        //adding button's icon
        this.icon = this.scene.add.image(this.body.x,this.body.y,iconOption.key);

        //adding button's title
        this.title = this.scene.add.text(0,0,iconOption.title,{fontFamily:'Arial', fontSize:11, color:'#000000', align:'center'});
        
        //adding button's label
        this.label = this.scene.add.image(0,0,gameAssistantComponents.find((el)=>{
            return el.name === 'button-label';
        }).key);

        //setting positions
        this.label.setX(this.body.x+1);
        this.label.setY(this.body.y+55);
        this.title.setPosition(this.label.x-33,this.label.y-7);


        //building the component
        this.container = this.scene.add.container(x,y,[this.body,this.icon,this.label,this.title]);
        this.container.setSize(this.label.width,this.body.height+this.label.height);

    }
}