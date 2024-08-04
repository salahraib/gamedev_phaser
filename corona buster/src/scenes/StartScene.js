import Phaser from 'phaser';

export default class StartScene extends Phaser.Scene {

    constructor() {
        super('start-scene');
    }

    init(data) {
        this.playButton = undefined;
    }

    preload() {
        this.load.image('background', 'images/bg-layer1.png');
        this.load.image('game-title', 'images/game-title.png');
        this.load.image('play-button', 'images/play.png');
    }

    create() {

        this.add.image(200, 320, 'background');
        this.add.image(200, 200, 'game-title');

        this.playButton = this.add.image(200, 400, 'play-button')
            .setInteractive().setScale(0.5);

        this.playButton.once('pointerup', () => {
            this.scene.start('corona-buster-scene');
        }, this);

    }

}
