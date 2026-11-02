// Web Audio API Procedural Music & Sound Effects Engine for CybAram Vilaiyaattu
// Features independent controls for Background Music and Sound Effects.
// Produces a rich, 16-bar casual puzzle soundtrack (Rhodes chords, walking bass, marimba melodies)
// with zero external audio assets, zero network latency, and perfectly smooth looping.

let isMusicMuted = false;
let isSfxMuted = false;
let isBgmPlaying = false;

let audioCtx: AudioContext | null = null;
let musicMasterGain: GainNode | null = null;
let sfxMasterGain: GainNode | null = null;
let bgmTimerId: ReturnType<typeof setTimeout> | null = null;

function getAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const AudioContextClass =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume().catch(() => {});
  }
  if (audioCtx && !musicMasterGain) {
    musicMasterGain = audioCtx.createGain();
    musicMasterGain.gain.setValueAtTime(isMusicMuted ? 0 : 0.22, audioCtx.currentTime);
    musicMasterGain.connect(audioCtx.destination);
  }
  if (audioCtx && !sfxMasterGain) {
    sfxMasterGain = audioCtx.createGain();
    sfxMasterGain.gain.setValueAtTime(isSfxMuted ? 0 : 0.28, audioCtx.currentTime);
    sfxMasterGain.connect(audioCtx.destination);
  }
  return audioCtx;
}

// -------------------------------------------------------------
// ENERGETIC CASUAL ADVENTURE & PUZZLE SOUNDTRACK (124 BPM)
// Upbeat, bouncy, playful, catchy: Syncopated walking bass +
// off-beat cheerful chord stabs + light percussion + lively marimba melodies
// -------------------------------------------------------------
interface AdventureBar {
  chordName: string;
  bassRoot: number; // Hz
  bassNotes: Array<{ beat: number; freq: number; dur: number }>;
  chordNotes: number[]; // frequencies
  chordStabs: number[]; // beats where stabs occur (e.g. 0.5, 1.5, 2.5, 3.5)
}

const TEMPO_BPM = 124;
const BEAT_DURATION = 60 / TEMPO_BPM; // ~0.4839 sec
const SECONDS_PER_BAR = BEAT_DURATION * 4; // ~1.9355 sec

// 8-Bar Catchy Chord Loop (C -> Am -> F -> G -> C -> Em -> F -> G/B)
const ADVENTURE_BARS: AdventureBar[] = [
  // Bar 1: C Major (Bouncy, welcoming)
  {
    chordName: 'C',
    bassRoot: 130.81, // C3
    bassNotes: [
      { beat: 0.0, freq: 130.81, dur: 0.2 },
      { beat: 0.75, freq: 130.81, dur: 0.15 },
      { beat: 1.5, freq: 196.0, dur: 0.2 }, // G3
      { beat: 2.0, freq: 261.63, dur: 0.18 }, // C4
      { beat: 3.0, freq: 196.0, dur: 0.18 }
    ],
    chordNotes: [261.63, 329.63, 392.0, 523.25], // C - E - G - C
    chordStabs: [0.5, 1.5, 2.5, 3.5]
  },
  // Bar 2: A Minor (Playful groove)
  {
    chordName: 'Am',
    bassRoot: 110.0, // A2
    bassNotes: [
      { beat: 0.0, freq: 110.0, dur: 0.2 },
      { beat: 0.75, freq: 110.0, dur: 0.15 },
      { beat: 1.5, freq: 164.81, dur: 0.2 }, // E3
      { beat: 2.0, freq: 220.0, dur: 0.18 }, // A3
      { beat: 3.25, freq: 174.61, dur: 0.15 } // F3 lead-in
    ],
    chordNotes: [220.0, 261.63, 329.63, 440.0], // A - C - E - A
    chordStabs: [0.5, 1.5, 2.5, 3.5]
  },
  // Bar 3: F Major (Bright, open)
  {
    chordName: 'F',
    bassRoot: 87.31, // F2
    bassNotes: [
      { beat: 0.0, freq: 87.31, dur: 0.2 },
      { beat: 0.75, freq: 87.31, dur: 0.15 },
      { beat: 1.5, freq: 130.81, dur: 0.2 }, // C3
      { beat: 2.0, freq: 174.61, dur: 0.18 }, // F3
      { beat: 3.0, freq: 130.81, dur: 0.18 }
    ],
    chordNotes: [261.63, 349.23, 440.0, 523.25], // C - F - A - C
    chordStabs: [0.5, 1.5, 2.5, 3.5]
  },
  // Bar 4: G Dominant (Excited build)
  {
    chordName: 'G',
    bassRoot: 98.0, // G2
    bassNotes: [
      { beat: 0.0, freq: 98.0, dur: 0.2 },
      { beat: 0.75, freq: 98.0, dur: 0.15 },
      { beat: 1.5, freq: 146.83, dur: 0.2 }, // D3
      { beat: 2.0, freq: 196.0, dur: 0.18 }, // G3
      { beat: 3.25, freq: 246.94, dur: 0.15 } // B3 turnaround
    ],
    chordNotes: [246.94, 293.66, 392.0, 493.88], // B - D - G - B
    chordStabs: [0.5, 1.5, 2.5, 3.5]
  },
  // Bar 5: C Major (Second phrase variation)
  {
    chordName: 'C',
    bassRoot: 130.81,
    bassNotes: [
      { beat: 0.0, freq: 130.81, dur: 0.2 },
      { beat: 0.75, freq: 130.81, dur: 0.15 },
      { beat: 1.5, freq: 196.0, dur: 0.2 },
      { beat: 2.0, freq: 261.63, dur: 0.18 },
      { beat: 3.0, freq: 164.81, dur: 0.18 } // E3
    ],
    chordNotes: [261.63, 329.63, 392.0, 523.25],
    chordStabs: [0.5, 1.5, 2.5, 3.5]
  },
  // Bar 6: Em7 (Intriguing mystery chord)
  {
    chordName: 'Em7',
    bassRoot: 82.41, // E2
    bassNotes: [
      { beat: 0.0, freq: 82.41, dur: 0.2 },
      { beat: 0.75, freq: 82.41, dur: 0.15 },
      { beat: 1.5, freq: 123.47, dur: 0.2 }, // B2
      { beat: 2.0, freq: 164.81, dur: 0.18 }, // E3
      { beat: 3.25, freq: 146.83, dur: 0.15 } // D3
    ],
    chordNotes: [246.94, 293.66, 329.63, 392.0], // B - D - E - G
    chordStabs: [0.5, 1.5, 2.5, 3.5]
  },
  // Bar 7: Fmaj7 (Lift!)
  {
    chordName: 'Fmaj7',
    bassRoot: 87.31,
    bassNotes: [
      { beat: 0.0, freq: 87.31, dur: 0.2 },
      { beat: 0.75, freq: 87.31, dur: 0.15 },
      { beat: 1.5, freq: 130.81, dur: 0.2 },
      { beat: 2.0, freq: 174.61, dur: 0.18 },
      { beat: 3.0, freq: 220.0, dur: 0.18 } // A3
    ],
    chordNotes: [261.63, 329.63, 349.23, 440.0],
    chordStabs: [0.5, 1.5, 2.5, 3.5]
  },
  // Bar 8: G7 (Grand energetic resolution back to bar 1)
  {
    chordName: 'G7',
    bassRoot: 98.0,
    bassNotes: [
      { beat: 0.0, freq: 98.0, dur: 0.2 },
      { beat: 0.5, freq: 146.83, dur: 0.15 },
      { beat: 1.0, freq: 196.0, dur: 0.18 },
      { beat: 2.0, freq: 246.94, dur: 0.18 },
      { beat: 3.0, freq: 293.66, dur: 0.25 } // D4
    ],
    chordNotes: [246.94, 293.66, 349.23, 392.0],
    chordStabs: [0.5, 1.5, 2.5, 3.5]
  }
];

// Lively, catchy marimba & bell melody hooks
const ADVENTURE_MELODY: Array<{ bar: number; beat: number; freq: number; dur: number }> = [
  // Bar 1 (C) - Cheerful opening motif
  { bar: 0, beat: 0.0, freq: 523.25, dur: 0.22 },  // C5
  { bar: 0, beat: 0.5, freq: 659.25, dur: 0.2 },   // E5
  { bar: 0, beat: 1.0, freq: 783.99, dur: 0.35 },  // G5
  { bar: 0, beat: 2.0, freq: 659.25, dur: 0.2 },   // E5
  { bar: 0, beat: 2.5, freq: 587.33, dur: 0.2 },   // D5
  { bar: 0, beat: 3.0, freq: 523.25, dur: 0.35 },  // C5

  // Bar 2 (Am) - Playful syncopated answer
  { bar: 1, beat: 0.5, freq: 440.0, dur: 0.25 },   // A4
  { bar: 1, beat: 1.0, freq: 523.25, dur: 0.2 },   // C5
  { bar: 1, beat: 1.5, freq: 587.33, dur: 0.2 },   // D5
  { bar: 1, beat: 2.0, freq: 659.25, dur: 0.4 },   // E5
  { bar: 1, beat: 3.0, freq: 440.0, dur: 0.35 },   // A4

  // Bar 3 (F) - Upbeat bouncy climb
  { bar: 2, beat: 0.0, freq: 523.25, dur: 0.2 },   // C5
  { bar: 2, beat: 0.5, freq: 587.33, dur: 0.2 },   // D5
  { bar: 2, beat: 1.0, freq: 659.25, dur: 0.2 },   // E5
  { bar: 2, beat: 1.5, freq: 698.46, dur: 0.25 },  // F5
  { bar: 2, beat: 2.0, freq: 783.99, dur: 0.35 },  // G5
  { bar: 2, beat: 3.0, freq: 659.25, dur: 0.3 },   // E5

  // Bar 4 (G) - Spirited cadence
  { bar: 3, beat: 0.0, freq: 587.33, dur: 0.3 },   // D5
  { bar: 3, beat: 1.0, freq: 493.88, dur: 0.25 },  // B4
  { bar: 3, beat: 1.5, freq: 587.33, dur: 0.2 },   // D5
  { bar: 3, beat: 2.0, freq: 783.99, dur: 0.45 },  // G5
  { bar: 3, beat: 3.0, freq: 880.0, dur: 0.35 },   // A5

  // Bar 5 (C) - Second phrase high spark
  { bar: 4, beat: 0.0, freq: 1046.5, dur: 0.3 },   // C6
  { bar: 4, beat: 1.0, freq: 783.99, dur: 0.25 },  // G5
  { bar: 4, beat: 1.5, freq: 880.0, dur: 0.2 },    // A5
  { bar: 4, beat: 2.0, freq: 783.99, dur: 0.3 },   // G5
  { bar: 4, beat: 2.5, freq: 659.25, dur: 0.2 },   // E5
  { bar: 4, beat: 3.0, freq: 523.25, dur: 0.35 },  // C5

  // Bar 6 (Em7) - Nimble triplet-like bounce
  { bar: 5, beat: 0.0, freq: 659.25, dur: 0.2 },   // E5
  { bar: 5, beat: 0.5, freq: 783.99, dur: 0.2 },   // G5
  { bar: 5, beat: 1.0, freq: 987.77, dur: 0.3 },   // B5
  { bar: 5, beat: 2.0, freq: 783.99, dur: 0.25 },  // G5
  { bar: 5, beat: 3.0, freq: 587.33, dur: 0.3 },   // D5

  // Bar 7 (Fmaj7) - Joyful flourish
  { bar: 6, beat: 0.0, freq: 523.25, dur: 0.2 },   // C5
  { bar: 6, beat: 0.5, freq: 659.25, dur: 0.2 },   // E5
  { bar: 6, beat: 1.0, freq: 783.99, dur: 0.25 },  // G5
  { bar: 6, beat: 1.5, freq: 880.0, dur: 0.3 },    // A5
  { bar: 6, beat: 2.5, freq: 783.99, dur: 0.2 },   // G5
  { bar: 6, beat: 3.0, freq: 698.46, dur: 0.3 },   // F5

  // Bar 8 (G7) - Enthusiastic build & resolution
  { bar: 7, beat: 0.0, freq: 659.25, dur: 0.2 },   // E5
  { bar: 7, beat: 0.5, freq: 587.33, dur: 0.2 },   // D5
  { bar: 7, beat: 1.0, freq: 523.25, dur: 0.2 },   // C5
  { bar: 7, beat: 1.5, freq: 493.88, dur: 0.2 },   // B4
  { bar: 7, beat: 2.0, freq: 587.33, dur: 0.3 },   // D5
  { bar: 7, beat: 2.75, freq: 783.99, dur: 0.35 }  // G5
];

function scheduleBgmCycle(startTime: number) {
  const ctx = getAudioContext();
  if (!ctx || !musicMasterGain) return;

  ADVENTURE_BARS.forEach((bar, barIdx) => {
    const barStart = startTime + barIdx * SECONDS_PER_BAR;

    // 1. Upbeat Bouncy Walking Bass (punchy synth-bass pluck)
    bar.bassNotes.forEach((bn) => {
      const noteTime = barStart + bn.beat * BEAT_DURATION;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(bn.freq, noteTime);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(380, noteTime);
      filter.frequency.exponentialRampToValueAtTime(140, noteTime + bn.dur);

      gain.gain.setValueAtTime(0.001, noteTime);
      gain.gain.linearRampToValueAtTime(0.24, noteTime + 0.015);
      gain.gain.exponentialRampToValueAtTime(0.001, noteTime + bn.dur);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(musicMasterGain!);

      osc.start(noteTime);
      osc.stop(noteTime + bn.dur + 0.05);
    });

    // 2. Off-beat Staccato Chords (bouncy reggae/puzzle groove)
    bar.chordStabs.forEach((stabBeat) => {
      const stabTime = barStart + stabBeat * BEAT_DURATION;
      bar.chordNotes.forEach((freq) => {
        const chordOsc = ctx.createOscillator();
        const chordGain = ctx.createGain();
        chordOsc.type = 'sine';
        chordOsc.frequency.setValueAtTime(freq, stabTime);

        chordGain.gain.setValueAtTime(0.001, stabTime);
        chordGain.gain.linearRampToValueAtTime(0.042, stabTime + 0.01);
        chordGain.gain.exponentialRampToValueAtTime(0.001, stabTime + 0.16);

        chordOsc.connect(chordGain);
        chordGain.connect(musicMasterGain!);

        chordOsc.start(stabTime);
        chordOsc.stop(stabTime + 0.18);
      });
    });

    // 3. Snappy rhythm percussive woodblock / clicks on beats 1 & 3, claps on 2 & 4
    for (let beat = 0; beat < 4; beat++) {
      const beatTime = barStart + beat * BEAT_DURATION;
      const isBackbeat = beat === 1 || beat === 3;

      const clickOsc = ctx.createOscillator();
      const clickGain = ctx.createGain();
      const clickFilter = ctx.createBiquadFilter();

      clickOsc.type = isBackbeat ? 'triangle' : 'sine';
      clickOsc.frequency.setValueAtTime(isBackbeat ? 880 : 1320, beatTime);
      clickOsc.frequency.exponentialRampToValueAtTime(120, beatTime + 0.04);

      clickFilter.type = 'bandpass';
      clickFilter.frequency.setValueAtTime(isBackbeat ? 1400 : 2200, beatTime);

      const amp = isBackbeat ? 0.06 : 0.025;
      clickGain.gain.setValueAtTime(0.001, beatTime);
      clickGain.gain.linearRampToValueAtTime(amp, beatTime + 0.004);
      clickGain.gain.exponentialRampToValueAtTime(0.0005, beatTime + 0.045);

      clickOsc.connect(clickFilter);
      clickFilter.connect(clickGain);
      clickGain.connect(musicMasterGain!);

      clickOsc.start(beatTime);
      clickOsc.stop(beatTime + 0.05);
    }
  });

  // 4. Cheerful Marimba & Glockenspiel Melodies across the cycle
  ADVENTURE_MELODY.forEach((ev) => {
    const noteStart = startTime + ev.bar * SECONDS_PER_BAR + ev.beat * BEAT_DURATION;
    const oscMarimba = ctx.createOscillator();
    const oscGlock = ctx.createOscillator();
    const noteGain = ctx.createGain();

    oscMarimba.type = 'triangle';
    oscGlock.type = 'sine';

    oscMarimba.frequency.setValueAtTime(ev.freq, noteStart);
    oscGlock.frequency.setValueAtTime(ev.freq * 2.0, noteStart); // crisp harmonic overtone

    noteGain.gain.setValueAtTime(0.001, noteStart);
    noteGain.gain.linearRampToValueAtTime(0.095, noteStart + 0.012);
    noteGain.gain.exponentialRampToValueAtTime(0.001, noteStart + ev.dur);

    oscMarimba.connect(noteGain);
    oscGlock.connect(noteGain);
    noteGain.connect(musicMasterGain!);

    oscMarimba.start(noteStart);
    oscGlock.start(noteStart);
    oscMarimba.stop(noteStart + ev.dur + 0.02);
    oscGlock.stop(noteStart + ev.dur + 0.02);
  });
}

function runBgmLoop() {
  if (!isBgmPlaying) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  const totalCycleDuration = ADVENTURE_BARS.length * SECONDS_PER_BAR; // ~15.48 seconds
  const now = ctx.currentTime;
  scheduleBgmCycle(now);

  // Re-schedule smoothly before cycle ends to create infinite seamless loop
  bgmTimerId = setTimeout(() => {
    if (isBgmPlaying) {
      runBgmLoop();
    }
  }, Math.max(1000, (totalCycleDuration - 0.3) * 1000));
}

// -------------------------------------------------------------
// SOUND EFFECTS & EXPORTED MANAGER
// -------------------------------------------------------------
export const soundManager = {
  isMusicMuted: () => isMusicMuted,
  isSfxMuted: () => isSfxMuted,
  isMuted: () => isSfxMuted && isMusicMuted,
  isBgmActive: () => isBgmPlaying,

  setMusicMuted: (muted: boolean) => {
    isMusicMuted = muted;
    const ctx = getAudioContext();
    if (ctx && musicMasterGain) {
      const now = ctx.currentTime;
      musicMasterGain.gain.linearRampToValueAtTime(muted ? 0 : 0.22, now + 0.15);
    }
  },

  setSfxMuted: (muted: boolean) => {
    isSfxMuted = muted;
    const ctx = getAudioContext();
    if (ctx && sfxMasterGain) {
      sfxMasterGain.gain.setValueAtTime(muted ? 0 : 0.22, ctx.currentTime);
    }
  },

  toggleMusic: () => {
    const next = !isMusicMuted;
    soundManager.setMusicMuted(next);
    return next;
  },

  toggleSfx: () => {
    const next = !isSfxMuted;
    soundManager.setSfxMuted(next);
    return next;
  },

  // Backward compatible toggle for general mute
  toggleMute: () => {
    const next = !isSfxMuted;
    soundManager.setMusicMuted(next);
    soundManager.setSfxMuted(next);
    return next;
  },

  // Start BGM only after explicit user interaction (Clicking "Play Now")
  startBgm: () => {
    if (isBgmPlaying) return;
    const ctx = getAudioContext();
    if (!ctx) return;
    isBgmPlaying = true;
    runBgmLoop();
  },

  // Stop BGM when leaving game
  stopBgm: () => {
    isBgmPlaying = false;
    if (bgmTimerId) {
      clearTimeout(bgmTimerId);
      bgmTimerId = null;
    }
    const ctx = getAudioContext();
    if (ctx && musicMasterGain) {
      musicMasterGain.gain.setValueAtTime(0, ctx.currentTime);
    }
  },

  // 1. Tactile UI Tap / Click
  playTap: () => {
    if (isSfxMuted) return;
    try {
      const ctx = getAudioContext();
      if (!ctx || !sfxMasterGain) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(640, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(380, ctx.currentTime + 0.035);

      gain.gain.setValueAtTime(0.2, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);

      osc.connect(gain);
      gain.connect(sfxMasterGain);
      osc.start();
      osc.stop(ctx.currentTime + 0.04);
    } catch {
      // safely ignore
    }
  },

  // 2. Interactive Toggle Switch (2FA / Permissions activation)
  playToggleSwitch: () => {
    if (isSfxMuted) return;
    try {
      const ctx = getAudioContext();
      if (!ctx || !sfxMasterGain) return;
      const now = ctx.currentTime;

      // Mechanical switch click
      const osc1 = ctx.createOscillator();
      const gain1 = ctx.createGain();
      osc1.type = 'triangle';
      osc1.frequency.setValueAtTime(800, now);
      osc1.frequency.exponentialRampToValueAtTime(1600, now + 0.04);
      gain1.gain.setValueAtTime(0.25, now);
      gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

      osc1.connect(gain1);
      gain1.connect(sfxMasterGain);
      osc1.start(now);
      osc1.stop(now + 0.05);

      // Positive activation resonant ping
      const osc2 = ctx.createOscillator();
      const gain2 = ctx.createGain();
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(880, now + 0.04);
      gain2.gain.setValueAtTime(0.22, now + 0.04);
      gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.45);

      osc2.connect(gain2);
      gain2.connect(sfxMasterGain);
      osc2.start(now + 0.04);
      osc2.stop(now + 0.45);
    } catch {
      // safely ignore
    }
  },

  // 3. Object Drag & Drop / Slide Sound
  playDrag: () => {
    if (isSfxMuted) return;
    try {
      const ctx = getAudioContext();
      if (!ctx || !sfxMasterGain) return;
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(420, now);
      osc.frequency.linearRampToValueAtTime(560, now + 0.06);

      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.07);

      osc.connect(gain);
      gain.connect(sfxMasterGain);
      osc.start(now);
      osc.stop(now + 0.07);
    } catch {
      // safely ignore
    }
  },

  // 4. Clue Discovery / Hidden Detail Sparkle
  playClue: () => {
    if (isSfxMuted) return;
    try {
      const ctx = getAudioContext();
      if (!ctx || !sfxMasterGain) return;
      const now = ctx.currentTime;
      // D5, G5, B5, D6 sparkle chime
      const notes = [587.33, 783.99, 987.77, 1174.66];
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        const start = now + idx * 0.055;
        osc.frequency.setValueAtTime(freq, start);

        gain.gain.setValueAtTime(0.22, start);
        gain.gain.exponentialRampToValueAtTime(0.001, start + 0.32);

        osc.connect(gain);
        gain.connect(sfxMasterGain!);
        osc.start(start);
        osc.stop(start + 0.32);
      });
    } catch {
      // safely ignore
    }
  },

  playInspect: () => {
    soundManager.playClue();
  },

  // 5. Safe / Correct Decision Victory Chime (~1.0s warm rising C-Major arpeggio)
  playSuccess: () => {
    if (isSfxMuted) return;
    try {
      const ctx = getAudioContext();
      if (!ctx || !sfxMasterGain) return;
      const now = ctx.currentTime;
      const notes = [523.25, 659.25, 783.99, 1046.5]; // C5 -> E5 -> G5 -> C6
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        const start = now + idx * 0.14;
        osc.frequency.setValueAtTime(freq, start);

        gain.gain.setValueAtTime(0.28, start);
        gain.gain.exponentialRampToValueAtTime(0.001, start + 0.65);

        osc.connect(gain);
        gain.connect(sfxMasterGain!);
        osc.start(start);
        osc.stop(start + 0.65);
      });
    } catch {
      // safely ignore
    }
  },

  // 6. Unsafe / Caution Sound (~0.9s gentle descending tone, friendly "pause and review")
  playWarning: () => {
    if (isSfxMuted) return;
    try {
      const ctx = getAudioContext();
      if (!ctx || !sfxMasterGain) return;
      const now = ctx.currentTime;
      // Soft descending warm sine tones: G4 -> E4 -> C4 (gentle wobble, not a buzzer)
      const notes = [392.0, 329.63, 261.63];
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        const start = now + idx * 0.18;
        osc.frequency.setValueAtTime(freq, start);

        gain.gain.setValueAtTime(0.22, start);
        gain.gain.exponentialRampToValueAtTime(0.001, start + 0.48);

        osc.connect(gain);
        gain.connect(sfxMasterGain!);
        osc.start(start);
        osc.stop(start + 0.48);
      });
    } catch {
      // safely ignore
    }
  },

  // 7. Transition to Next Puzzle (whimsical paper slide / bubble pop)
  playNextPuzzle: () => {
    if (isSfxMuted) return;
    try {
      const ctx = getAudioContext();
      if (!ctx || !sfxMasterGain) return;
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(320, now);
      osc.frequency.exponentialRampToValueAtTime(680, now + 0.08);

      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.09);

      osc.connect(gain);
      gain.connect(sfxMasterGain);
      osc.start(now);
      osc.stop(now + 0.09);
    } catch {
      // safely ignore
    }
  },

  playSceneTransition: () => {
    soundManager.playNextPuzzle();
  },

  // 8. High Score Celebratory Fanfare (90-100%)
  playHighScoreCelebration: () => {
    if (isSfxMuted) return;
    try {
      const ctx = getAudioContext();
      if (!ctx || !sfxMasterGain) return;
      const now = ctx.currentTime;
      const notes = [523.25, 659.25, 783.99, 1046.5, 1318.51];
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        const start = now + idx * 0.08;
        osc.frequency.setValueAtTime(freq, start);

        gain.gain.setValueAtTime(0.28, start);
        gain.gain.exponentialRampToValueAtTime(0.001, start + 0.55);

        osc.connect(gain);
        gain.connect(sfxMasterGain!);
        osc.start(start);
        osc.stop(start + 0.55);
      });
    } catch {
      // safely ignore
    }
  },

  // 9. Medium Score Encouraging Sound (60-89%)
  playMediumScoreEncourage: () => {
    if (isSfxMuted) return;
    try {
      const ctx = getAudioContext();
      if (!ctx || !sfxMasterGain) return;
      const now = ctx.currentTime;
      const notes = [440, 554.37, 659.25];
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        const start = now + idx * 0.1;
        osc.frequency.setValueAtTime(freq, start);

        gain.gain.setValueAtTime(0.24, start);
        gain.gain.exponentialRampToValueAtTime(0.001, start + 0.4);

        osc.connect(gain);
        gain.connect(sfxMasterGain!);
        osc.start(start);
        osc.stop(start + 0.4);
      });
    } catch {
      // safely ignore
    }
  },

  // 10. Low Score Supportive Tone (0-59%)
  playLowScoreSupport: () => {
    if (isSfxMuted) return;
    try {
      const ctx = getAudioContext();
      if (!ctx || !sfxMasterGain) return;
      const now = ctx.currentTime;
      const notes = [349.23, 440, 523.25];
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        const start = now + idx * 0.14;
        osc.frequency.setValueAtTime(freq, start);

        gain.gain.setValueAtTime(0.18, start);
        gain.gain.exponentialRampToValueAtTime(0.001, start + 0.45);

        osc.connect(gain);
        gain.connect(sfxMasterGain!);
        osc.start(start);
        osc.stop(start + 0.45);
      });
    } catch {
      // safely ignore
    }
  },

  playComplete: () => {
    soundManager.playHighScoreCelebration();
  }
};
