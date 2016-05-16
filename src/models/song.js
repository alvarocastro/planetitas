import Channel from './channel.js';

export default class Song {
	constructor (instruments) {
		this.instruments = instruments;
		this.speed = .75;
		this.length = 8;

		this.channels = this.instruments.map((instrument) => {
			return new Channel(instrument, this.length, this.speed);
		})
	}
/*
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

	playInstrumentStep (instrumentIndex, step) {
		this.notes[instrumentIndex][step].forEach((note) => {
			this.instruments[instrumentIndex].play(note);
		});

		this.instrumentInterval[instrumentIndex] = setTimeout(() => {
			this.playInstrumentStep();
		}, this.speed * this.instruments[instrumentIndex].duration);
	}
*/
	play () {
		this.channels.forEach((channel) => {
			channel.play();
		});
	}

	stop () {
		this.channels.forEach((channel) => {
			channel.stop();
		});
	}

	random (max) {
		return Math.floor(Math.random() * max);
	}
}