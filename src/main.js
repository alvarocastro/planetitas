var Instrument = function (palettes, sounds, duration) {
	this.palettes = palettes;
	this.sounds = 9;
	this.duration = duration * 1000;
	this.soundPalette = 0;
};
Instrument.prototype = {
	play (sound) {
		this.palettes[this.soundPalette].play(sound.toString());
	}
};

var Song = function (instruments) {
	this.instruments = instruments;
	this.speed = 1 * 1000;
	this.length = 8;
	this.step = 0;
	this.interval;

	var self = this;

	/**
	 * Array con instrumentos.
	 * Cada instrumento es un array con los pasos.
	 * Cada paso tiene un array con las notas a reproducir.
	 */
	this.notes = instruments.map(() => {
		var notes = [];
		for (var i = 0; i < self.length; i++) {
			notes[i] = [];
		}
		return notes;
	});
};
Song.prototype = {
	advanceStep () {
		this.step = this.step === this.length - 1 ? 0 : this.step + 1;
	},

	playStep (step) {
		this.notes.forEach((instrumentNotes, instrumentIndex) => {
			var stepNotes = instrumentNotes[step],
				shouldChange = this.random(2 + stepNotes.length);

			console.log('>> Should change', shouldChange);
			console.log('>> Notes count', stepNotes.length);

			if (!shouldChange) {
				if (Math.random(1)) {
					console.log('>> Change: push note');
					stepNotes.push(this.random(9) + 1);
				} else {
					console.log('>> Change: pop note');
					stepNotes.pop();
				}
			}

			stepNotes.forEach((note) => {
				console.log('>> Play i:[', instrumentIndex, '] n:[', note,']');
				this.instruments[instrumentIndex].play(note);
			});
		});
	},

	play () {
//*
		console.group('> play step', this.step);

		//this.notes[this.random(1)][this.step].push(this.random(9) + 1);

		this.playStep(this.step);


		this.advanceStep();
		console.groupEnd();

		this.interval = setTimeout(() => {
			this.play();
		}, this.speed);
//*/
	},

	stop () {
		clearInterval(this.interval);
	},

	random (max) {
		return Math.floor(Math.random() * max);
	}
};


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

var s = new Song([piano/*, violin*/]);

setTimeout(function () {
	s.play();
}, 1000);
window.s = s;
