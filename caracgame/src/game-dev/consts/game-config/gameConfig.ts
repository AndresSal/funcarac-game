import { MainScene } from 'src/game-dev/scenes/main-scene/mainScene';
import { BaseGameScene } from 'src/game-dev/scenes/base-game-scene/BaseGameScene';
import { CaracScene } from 'src/game-dev/scenes/carac-game-table/caracScene';

export const gameConfig = {
    type:Phaser.CANVAS,
    scale:{
        parent:'game-container',
        mode:Phaser.Scale.ENVELOP,
        autoCenter:Phaser.Scale.CENTER_BOTH,
        width:window.innerWidth*window.devicePixelRatio,
        height:window.innerHeight*window.devicePixelRatio
    },
    scene:[MainScene,CaracScene],
    backgroundColor:'2d2d2d'
}