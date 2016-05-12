import Instrument from './models/instrument';
import Song from './models/song';

var piano = new Instrument([
		new Howl({
			src: ['/audio/morning_sprite_lowest.mp3'],
			volume: 1,
			sprite: {
				1: [0, 3000],
				2: [4000, 3000],
				3: [8000, 3000],
				4: [12000, 3000],
				5: [16000, 3000],
				6: [20000, 3000],
				7: [24000, 3000],
				8: [28000, 3000],
				9: [32000, 3000]
			}
		})
	], 9, 1),
	violin = new Instrument([
		new Howl({
			src: ['/audio/morning_sprite_lowest.mp3'],
			volume: 1,
			sprite: {
				1: [35000, 8500],
				2: [45000, 8500],
				3: [54000, 8500],
				4: [65000, 8500],
				5: [75000, 8500],
				6: [84000, 8500],
				7: [95000, 8500],
				8: [105000, 8500],
				9: [114000, 8500]
			}
		})
	], 9, 16);

var s = new Song([piano]);

setTimeout(function () {
	s.play();
}, 1000);
window.s = s;
