export default class Instrument {
	constructor (palettes, sounds, duration) {
		this.palettes = palettes;
		this.sounds = sounds;
		this.duration = duration * 1000;
		this.soundPalette = 0;
	}

	play (sound) {
		this.palettes[this.soundPalette].play(sound.toString());
	}
}
