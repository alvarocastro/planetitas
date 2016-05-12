export default class Song {
	constructor (instruments) {
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
	}

	advanceStep () {
		this.step = this.step === this.length - 1 ? 0 : this.step + 1;
	}

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
	}

	playInstrumentStep (step) {

	}

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
	}

	stop () {
		clearInterval(this.interval);
	}

	random (max) {
		return Math.floor(Math.random() * max);
	}
}