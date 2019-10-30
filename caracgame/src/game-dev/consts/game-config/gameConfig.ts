import { MainScene } from 'src/game-dev/scenes/main-scene/mainScene';

export const gameConfig = {
    type:Phaser.CANVAS,
    scale:{
        parent:'game-container',
        mode:Phaser.Scale.ENVELOP,
        autoCenter:Phaser.Scale.CENTER_BOTH,
        width:window.innerWidth*window.devicePixelRatio,
        height:window.innerHeight*window.devicePixelRatio
    },
    scene:[MainScene],
    backgroundColor:'2d2d2d'
}