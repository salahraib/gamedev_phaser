import Phaser from 'phaser'
import CoronaBusterScene from './scenes/CoronaBusterScene'



	

		const config = {
			type: Phaser.AUTO,
			parent:"app",
			width: 400,
			height: 620,
			physics: {
			default: 'arcade',
			arcade: {
			
			gravity: { y: 0 }
			}
			},
			scene: [CoronaBusterScene],
			scale : {
			mode :Phaser.Scale.FIT,
			autoCenter : Phaser.Scale.CENTER_BOTH
			},
			}


export default new Phaser.Game(config)

