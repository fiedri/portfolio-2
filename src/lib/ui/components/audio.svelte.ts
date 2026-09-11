const STORAGE_KEY = "hud_sound_muted";

function readMuted(): boolean {
	try {
		return typeof window !== "undefined" && localStorage.getItem(STORAGE_KEY) === "1";
	} catch {
		return false;
	}
}

let muted = $state(readMuted());

export function isMuted(): boolean {
	return muted;
}

export function toggleMuted(): boolean {
	muted = !muted;
	try {
		localStorage.setItem(STORAGE_KEY, muted ? "1" : "0");
	} catch {
		// storage may be blocked; session state still works
	}
	return muted;
}

interface AudioEngineOptions {
	src: string;
	volume: number;
}

class AudioEngine {
	private audio: HTMLAudioElement | null = null;
	private readonly src: string;
	private readonly volume: number;

	constructor({ src, volume }: AudioEngineOptions) {
		this.src = src;
		this.volume = volume;
	}

	private element(): HTMLAudioElement | null {
		if (typeof window === "undefined") return null;
		if (!this.audio) {
			this.audio = new Audio(this.src);
			this.audio.volume = this.volume;
		}
		return this.audio;
	}

	play(): void {
		if (muted) return;
		const audio = this.element();
		if (!audio) return;
		audio.currentTime = 0;
		audio.play().catch((err) => {
			console.warn("La reproducción de audio fue bloqueada por el navegador:", err);
		});
	}

	get audioElement(): HTMLAudioElement | null {
		return this.element();
	}
}

export const audioService = new AudioEngine({
	src: "/sounds/tv-static.mp3",
	volume: 0.25,
});

export const navAudioService = new AudioEngine({
	src: "/sounds/switch.mp3",
	volume: 0.15,
});
