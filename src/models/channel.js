export default class Channel {
	constructor (instrument, length, speed) {
		this.instrument = instrument;
		this.length = length;
		this.speed = speed;

		this.interval = null;
		this.step = 0;
		this.notes = Array.apply(null, Array(this.length)).map(function () {return [];})
	}

	play () {
		this.playStep(this.step);

		this.advanceStep();
		this.evolve();

		this.interval = setTimeout(() => {
			this.play();
		}, this.speed * this.instrument.duration);
	}

	playStep (step) {
		console.log('Channel:playStep', step, this.notes[step]);
		this.notes[step].forEach((note) => {
			this.instrument.play(note);
		});
	}

	evolve () {
		if (this.notes[this.step].length >= 2) {
			this.notes[this.step].pop();
		}

		this.notes[this.step].push(Math.ceil(Math.random() * this.instrument.sounds));
	}

	advanceStep () {
		this.step = this.step === this.length - 1 ? 0 : this.step + 1;
	}

	stop () {
		clearInterval(this.interval);
	}
}
