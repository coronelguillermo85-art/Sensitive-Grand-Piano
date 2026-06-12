<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Sensitive Grand Piano · Professional Edition</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/tone/14.8.49/Tone.js"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,300;14..32,400;14..32,500;14..32,600;14..32,700&display=swap" rel="stylesheet">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; user-select: none; }
        body {
            background: radial-gradient(ellipse at 50% 30%, #0a0c14, #05070c);
            font-family: 'Inter', sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            padding: 20px;
        }
        
        .pro-panel {
            width: 100%;
            max-width: 1400px;
            background: linear-gradient(145deg, #1a1c26, #0e1018);
            border-radius: 28px;
            box-shadow: 0 30px 50px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.05);
            padding: 20px;
            border: 1px solid rgba(80,100,140,0.2);
        }
        
        .lcd-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
            flex-wrap: wrap;
            gap: 15px;
        }
        .brand h1 {
            font-size: 1.4rem;
            font-weight: 600;
            background: linear-gradient(135deg, #e8e8f0, #a0a8c0);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            letter-spacing: 1px;
        }
        .brand p {
            font-size: 0.55rem;
            color: #5a6a80;
            letter-spacing: 2px;
        }
        
        .lcd {
            background: #0a0c14;
            border-radius: 12px;
            padding: 12px 20px;
            border: 1px solid #2a3a4a;
            box-shadow: inset 0 0 15px rgba(0,0,0,0.5), 0 0 10px rgba(0,200,255,0.1);
        }
        .lcd-chord {
            font-family: monospace;
            font-size: 1.5rem;
            font-weight: 600;
            text-align: center;
            color: #00ccff;
            text-shadow: 0 0 8px #00ccff;
            letter-spacing: 3px;
        }
        .lcd-info {
            text-align: center;
            color: #6a8aaa;
            font-size: 0.6rem;
            margin-top: 5px;
        }
        
        .fx-rack {
            display: flex;
            justify-content: center;
            gap: 25px;
            margin: 20px 0;
            padding: 12px 20px;
            background: rgba(0,0,0,0.4);
            border-radius: 20px;
            flex-wrap: wrap;
            border: 1px solid rgba(80,100,140,0.2);
        }
        .fx-unit {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 6px;
        }
        .fx-unit label {
            font-size: 0.6rem;
            color: #8a9aba;
            letter-spacing: 1px;
        }
        .pro-knob {
            width: 45px;
            height: 45px;
            background: #15181f;
            border-radius: 50%;
            box-shadow: inset 0 2px 5px rgba(0,0,0,0.6), 0 2px 3px rgba(255,255,255,0.05);
            position: relative;
            cursor: ns-resize;
        }
        .pro-knob::after {
            content: "";
            position: absolute;
            top: 5px;
            left: 50%;
            width: 3px;
            height: 16px;
            background: #00ccff;
            border-radius: 2px;
            transform: translateX(-50%) rotate(0deg);
            transition: transform 0.02s linear;
        }
        .knob-value {
            font-size: 0.55rem;
            color: #00ccff;
        }
        
        .vu-meter {
            display: flex;
            gap: 3px;
            align-items: flex-end;
            height: 30px;
            background: #0a0c14;
            border-radius: 4px;
            padding: 3px;
        }
        .vu-bar {
            width: 4px;
            background: #00ccff;
            border-radius: 1px;
            transition: height 0.05s;
        }
        
        .preset-bar {
            background: #0a0c14;
            border-radius: 40px;
            padding: 4px;
            display: flex;
            gap: 4px;
            border: 1px solid #2a3a4a;
            flex-wrap: wrap;
            justify-content: center;
            margin-bottom: 15px;
        }
        .preset {
            background: transparent;
            border: none;
            padding: 6px 14px;
            border-radius: 40px;
            font-size: 0.65rem;
            font-weight: 500;
            color: #8a9aba;
            cursor: pointer;
            transition: all 0.2s;
        }
        .preset.active {
            background: #2a3a5a;
            color: #ffffff;
            box-shadow: 0 0 8px rgba(0,160,255,0.2);
        }
        
        .controls {
            display: flex;
            gap: 12px;
            justify-content: center;
            margin: 18px 0;
            flex-wrap: wrap;
        }
        .btn {
            background: #15181f;
            border: 1px solid #3a4a60;
            color: #b0c0e0;
            padding: 8px 24px;
            border-radius: 40px;
            cursor: pointer;
            font-size: 0.7rem;
            transition: all 0.2s;
        }
        .btn:hover {
            background: #2a3a5a;
            border-color: #6a9acc;
            color: #ffffff;
        }
        .btn-primary {
            background: #2a4a6a;
            border-color: #4a8acc;
            color: #ffffff;
        }
        
        .piano-stage {
            background: #0a0c12;
            border-radius: 18px;
            padding: 12px 0 10px;
            border: 1px solid #2a3a4a;
            margin: 18px 0;
        }
        .keyboard {
            display: flex;
            position: relative;
            height: 160px;
            width: 100%;
            background: #0f1118;
            border-radius: 12px;
        }
        
        .white {
            background: linear-gradient(145deg, #f5f7fc, #e0e4ec);
            flex: 1 1 0;
            height: 160px;
            border-right: 1px solid #c0c4d0;
            border-bottom: 2px solid #b0b4c0;
            border-radius: 0 0 10px 10px;
            cursor: pointer;
            position: relative;
            z-index: 1;
            transition: all 0.04s linear;
            min-width: 0;
        }
        .white.active {
            background: linear-gradient(145deg, #80c8f0, #4090c0);
            transform: translateY(3px);
            border-bottom-width: 1px;
            box-shadow: 0 0 15px rgba(0,160,255,0.5);
        }
        .white::after {
            content: attr(data-note);
            position: absolute;
            bottom: 5px;
            left: 50%;
            transform: translateX(-50%);
            font-size: 6px;
            color: #7a8090;
            white-space: nowrap;
        }
        
        .black {
            background: linear-gradient(145deg, #2a2e38, #1a1e26);
            width: 0;
            flex: 0 0 0;
            height: 96px;
            border: none;
            border-radius: 0 0 8px 8px;
            cursor: pointer;
            position: relative;
            z-index: 2;
            transition: all 0.04s linear;
            margin-left: -6px;
            margin-right: -6px;
            box-shadow: 0 2px 6px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06);
        }
        .black {
            width: 14px;
            flex: 0 0 14px;
        }
        .black.active {
            background: linear-gradient(145deg, #5a6a90, #3a4a6a);
            transform: translateY(2px);
            box-shadow: 0 0 12px rgba(0,160,255,0.4);
        }
        .black::after {
            content: attr(data-note);
            position: absolute;
            bottom: 4px;
            left: 50%;
            transform: translateX(-50%);
            font-size: 5px;
            color: #a0a8c0;
            white-space: nowrap;
        }
        
        .status {
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: #5a7a9a;
            border-top: 1px solid #2a3a4a;
            padding-top: 12px;
            margin-top: 15px;
            font-size: 0.6rem;
            flex-wrap: wrap;
            gap: 10px;
        }
        .midi-led {
            display: inline-block;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: #ff6640;
            margin-left: 5px;
            box-shadow: 0 0 5px #ff6640;
            transition: 0.1s;
        }
        .footer {
            text-align: center;
            font-size: 0.5rem;
            color: #4a6070;
            margin-top: 12px;
        }
        
        @media (max-width: 900px) {
            .black { width: 12px; flex: 0 0 12px; margin-left: -5px; margin-right: -5px; }
            .white { height: 150px; }
            .keyboard { height: 150px; }
            .black { height: 90px; }
            .lcd-chord { font-size: 1.2rem; }
            .pro-knob { width: 35px; height: 35px; }
        }
        @media (max-width: 700px) {
            .black { width: 10px; flex: 0 0 10px; margin-left: -4px; margin-right: -4px; }
        }
    </style>
</head>
<body>
<div class="pro-panel">
    <div class="lcd-header">
        <div class="brand">
            <h1>SENSITIVE GRAND PIANO</h1>
            <p>PROFESSIONAL · 88 KEYS · VST CLASS</p>
        </div>
        <div class="lcd">
            <div id="chord-name" class="lcd-chord">—</div>
            <div id="chord-detail" class="lcd-info">▶ ACTIVAR AUDIO</div>
        </div>
    </div>

    <div class="preset-bar">
        <button class="preset active" data-preset="grand">GRAND</button>
        <button class="preset" data-preset="upright">UPRIGHT</button>
        <button class="preset" data-preset="electric">EPIANO</button>
        <button class="preset" data-preset="honky">HONKY</button>
        <button class="preset" data-preset="century">XVIII</button>
        <button class="preset" data-preset="organ">ÓRGANO</button>
    </div>

    <div class="fx-rack">
        <div class="fx-unit">
            <label>REVERB</label>
            <div class="pro-knob" id="reverb-knob" data-value="32" data-min="0" data-max="70"></div>
            <div class="knob-value" id="reverb-val">32%</div>
        </div>
        <div class="fx-unit">
            <label>CHORUS</label>
            <div class="pro-knob" id="chorus-knob" data-value="18" data-min="0" data-max="60"></div>
            <div class="knob-value" id="chorus-val">18%</div>
        </div>
        <div class="fx-unit">
            <label>BRILLO</label>
            <div class="pro-knob" id="bright-knob" data-value="70" data-min="20" data-max="100"></div>
            <div class="knob-value" id="bright-val">70%</div>
        </div>
        <div class="fx-unit">
            <label>VOLUMEN</label>
            <div class="pro-knob" id="volume-knob" data-value="75" data-min="10" data-max="100"></div>
            <div class="knob-value" id="volume-val">75%</div>
        </div>
        <div class="fx-unit">
            <label>VU</label>
            <div class="vu-meter" id="vu-meter">
                <div class="vu-bar" style="height: 0px"></div><div class="vu-bar" style="height: 0px"></div>
                <div class="vu-bar" style="height: 0px"></div><div class="vu-bar" style="height: 0px"></div>
                <div class="vu-bar" style="height: 0px"></div><div class="vu-bar" style="height: 0px"></div>
                <div class="vu-bar" style="height: 0px"></div><div class="vu-bar" style="height: 0px"></div>
            </div>
        </div>
    </div>

    <div class="controls">
        <button id="start-btn" class="btn btn-primary">⚡ ACTIVAR</button>
        <button id="midi-btn" class="btn">🎛 CONECTAR MIDI</button>
        <button id="sustain-btn" class="btn">♮ SUSTAIN</button>
    </div>

    <div class="piano-stage">
        <div class="keyboard" id="keyboard"></div>
    </div>

    <div class="status">
        <span>🎹 MIDI: <span id="midi-status">DESCONECTADO</span><span id="midi-led" class="midi-led"></span></span>
        <span>🎼 C0 - C8 (88 teclas)</span>
        <span>🔊 <span id="audio-status">INACTIVO</span></span>
        <span>💾 6 presets · FX real-time</span>
    </div>
    <div class="footer">· CLIC O ARRASTRE · MIDI FÍSICO · PEDAL SUSTAIN (CC64) · GIRO LAS PERILLAS ·</div>
</div>

<script>
(function(){
    let currentSynth = null;
    let audioReady = false;
    let activeNotes = new Set();
    let sustainedNotes = new Set();
    let sustainOn = false;
    let mouseDown = false;
    let lastMouseNote = null;
    let midiAccess = null;
    
    let reverbNode = null;
    let chorusNode = null;
    let filterNode = null;
    let volumeNode = null;
    let compressorNode = null;
    
    let meterInterval = null;
    
    const chordNameEl = document.getElementById('chord-name');
    const chordDetailEl = document.getElementById('chord-detail');
    const startBtn = document.getElementById('start-btn');
    const midiBtn = document.getElementById('midi-btn');
    const sustainBtn = document.getElementById('sustain-btn');
    const midiStatusSpan = document.getElementById('midi-status');
    const midiLed = document.getElementById('midi-led');
    const audioStatusSpan = document.getElementById('audio-status');
    
    const noteNames = ['Do', 'Do#', 'Re', 'Re#', 'Mi', 'Fa', 'Fa#', 'Sol', 'Sol#', 'La', 'La#', 'Si'];
    const simpleNames = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
    
    // ========== CADENA DE EFECTOS ==========
    function buildEffectChain() {
        if (!audioReady) return;
        
        reverbNode = new Tone.Reverb({ decay: 1.6, wet: 0.32, preDelay: 0.04 });
        chorusNode = new Tone.Chorus({ frequency: 1.2, delayTime: 3.2, depth: 0.18, wet: 0.18 });
        filterNode = new Tone.Filter(2000, "lowpass");
        volumeNode = new Tone.Gain(0.75);
        compressorNode = new Tone.Compressor({ threshold: -18, ratio: 2.5, attack: 0.01, release: 0.12 });
        
        if (currentSynth) {
            currentSynth.disconnect();
            currentSynth.connect(filterNode);
            filterNode.connect(chorusNode);
            chorusNode.connect(reverbNode);
            reverbNode.connect(compressorNode);
            compressorNode.connect(volumeNode);
            volumeNode.toDestination();
        }
    }
    
    function updateEffects() {
        if (!reverbNode) return;
        reverbNode.wet.value = parseFloat(document.getElementById('reverb-val').textContent) / 100;
        chorusNode.wet.value = parseFloat(document.getElementById('chorus-val').textContent) / 100;
        filterNode.frequency.value = 600 + (parseFloat(document.getElementById('bright-val').textContent) / 100) * 10000;
        volumeNode.gain.value = parseFloat(document.getElementById('volume-val').textContent) / 100;
    }
    
    // ========== KNOBS FUNCIONALES ==========
    function initKnobs() {
        const knobs = document.querySelectorAll('.pro-knob');
        
        knobs.forEach(knob => {
            const valSpan = knob.nextElementSibling;
            const minVal = parseFloat(knob.getAttribute('data-min') || 0);
            const maxVal = parseFloat(knob.getAttribute('data-max') || 100);
            let currentVal = parseFloat(knob.getAttribute('data-value') || valSpan.textContent);
            let dragging = false;
            let startY = 0;
            let startVal = currentVal;
            
            // Inicializar valor visual
            valSpan.textContent = Math.round(currentVal) + '%';
            const rotation = (currentVal - minVal) / (maxVal - minVal) * 270 - 135;
            knob.style.transform = `rotate(${rotation}deg)`;
            
            knob.addEventListener('mousedown', (e) => {
                e.preventDefault();
                dragging = true;
                startY = e.clientY;
                startVal = currentVal;
                knob.style.cursor = 'ns-resize';
                document.body.style.cursor = 'ns-resize';
            });
            
            window.addEventListener('mousemove', (e) => {
                if (!dragging) return;
                const delta = (startY - e.clientY) * 0.6;
                let newVal = Math.min(maxVal, Math.max(minVal, startVal + delta));
                if (Math.abs(newVal - currentVal) < 0.5) return;
                currentVal = newVal;
                valSpan.textContent = Math.round(currentVal) + '%';
                const newRotation = (currentVal - minVal) / (maxVal - minVal) * 270 - 135;
                knob.style.transform = `rotate(${newRotation}deg)`;
                updateEffects();
            });
            
            window.addEventListener('mouseup', () => {
                dragging = false;
                knob.style.cursor = '';
                document.body.style.cursor = '';
            });
        });
    }
    
    // ========== INSTRUMENTOS ==========
    function createGrand() {
        const s = new Tone.PolySynth(Tone.Synth).toDestination();
        s.set({ oscillator: { type: "sine" }, envelope: { attack: 0.006, decay: 0.28, sustain: 0.32, release: 1.6 } });
        return s;
    }
    function createUpright() {
        const s = new Tone.PolySynth(Tone.Synth).toDestination();
        s.set({ oscillator: { type: "triangle" }, envelope: { attack: 0.012, decay: 0.32, sustain: 0.26, release: 1.3 } });
        return s;
    }
    function createElectric() {
        const s = new Tone.PolySynth(Tone.Synth).toDestination();
        s.set({ oscillator: { type: "square" }, envelope: { attack: 0.003, decay: 0.35, sustain: 0.18, release: 0.9 } });
        return s;
    }
    function createHonky() {
        const s = new Tone.PolySynth(Tone.Synth).toDestination();
        s.set({ oscillator: { type: "sawtooth" }, envelope: { attack: 0.005, decay: 0.22, sustain: 0.22, release: 1.0 } });
        return s;
    }
    function createCentury() {
        const s = new Tone.PolySynth(Tone.Synth).toDestination();
        s.set({ oscillator: { type: "sine" }, envelope: { attack: 0.018, decay: 0.42, sustain: 0.22, release: 0.95 } });
        return s;
    }
    function createOrgan() {
        const s = new Tone.PolySynth(Tone.Synth).toDestination();
        s.set({ oscillator: { type: "sine" }, envelope: { attack: 0.08, decay: 0.15, sustain: 0.7, release: 1.2 } });
        return s;
    }
    
    function changeInstrument(inst) {
        if (!audioReady) return;
        if (currentSynth) { try { currentSynth.releaseAll(); } catch(e) {} }
        switch(inst) {
            case 'grand': currentSynth = createGrand(); break;
            case 'upright': currentSynth = createUpright(); break;
            case 'electric': currentSynth = createElectric(); break;
            case 'honky': currentSynth = createHonky(); break;
            case 'century': currentSynth = createCentury(); break;
            case 'organ': currentSynth = createOrgan(); break;
            default: currentSynth = createGrand();
        }
        if (filterNode && currentSynth) {
            currentSynth.connect(filterNode);
        }
        activeNotes.forEach(midi => { currentSynth.triggerAttack(midiToNote(midi), undefined, 0.8); });
    }
    
    function midiToNote(midi) { return simpleNames[midi % 12] + (Math.floor(midi / 12) - 1); }
    
    function noteOn(midi, vel) {
        if (!audioReady || !currentSynth) return;
        if (activeNotes.has(midi)) return;
        activeNotes.add(midi);
        try { currentSynth.triggerAttack(midiToNote(midi), undefined, vel / 127); } catch(e) {}
        const key = document.getElementById(`k${midi}`);
        if (key) key.classList.add('active');
        updateChord();
    }
    
    function noteOff(midi) {
        if (!audioReady || !currentSynth) return;
        if (!activeNotes.has(midi)) return;
        activeNotes.delete(midi);
        if (sustainOn) {
            sustainedNotes.add(midi);
        } else {
            try { currentSynth.triggerRelease(midiToNote(midi)); } catch(e) {}
            const key = document.getElementById(`k${midi}`);
            if (key) key.classList.remove('active');
        }
        updateChord();
    }
    
    function clearSustained() {
        sustainedNotes.forEach(midi => {
            if (!activeNotes.has(midi)) {
                try { currentSynth.triggerRelease(midiToNote(midi)); } catch(e) {}
                const key = document.getElementById(`k${midi}`);
                if (key) key.classList.remove('active');
            }
        });
        sustainedNotes.clear();
    }
    
    const chordDB = {
        '4,7': '', '3,7': 'm', '4,8': 'aug', '3,6': 'dim', '2,7': 'sus2', '5,7': 'sus4',
        '4,7,11': 'maj7', '3,7,10': 'm7', '4,7,10': '7', '3,6,10': 'm7b5', '3,6,9': 'dim7',
        '4,7,9': '6', '3,7,9': 'm6', '2,4,7': 'add9', '2,4,7,10': '9', '2,3,7,10': 'm9',
        '2,4,7,11': 'maj9', '2,4,7,10,9': '13', '2,4,7,11,9': 'maj13'
    };
    
    function updateChord() {
        const all = new Set([...activeNotes, ...sustainedNotes]);
        if (all.size === 0) {
            chordNameEl.textContent = '—';
            chordDetailEl.textContent = '🎹 Esperando notas...';
            return;
        }
        const sorted = Array.from(all).sort((a,b)=>a-b);
        const pcs = [...new Set(sorted.map(n=>n%12))].sort((a,b)=>a-b);
        if (pcs.length > 7) {
            chordNameEl.textContent = 'COMPLEJO';
            chordDetailEl.textContent = sorted.map(n=>noteNames[n%12]+(Math.floor(n/12)-1)).join(' ');
            return;
        }
        const bassPC = sorted[0] % 12;
        let best = null, bestScore = -1;
        for (let i = 0; i < pcs.length; i++) {
            const root = pcs[i];
            const intervals = pcs.map(p => (p - root + 12) % 12).filter(x=>x!==0).sort((a,b)=>a-b).join(',');
            if (chordDB[intervals]) {
                const score = bassPC === root ? 3 : 1;
                if (score > bestScore) { bestScore = score; best = { root, suffix: chordDB[intervals] }; }
            }
        }
        const detail = sorted.map(n => noteNames[n%12] + (Math.floor(n/12)-1)).join(' · ');
        if (!best) { chordNameEl.textContent = '—'; chordDetailEl.textContent = detail; return; }
        let name = noteNames[best.root] + best.suffix;
        if (bassPC !== best.root) name += ' / ' + noteNames[bassPC];
        chordNameEl.textContent = name;
        chordDetailEl.textContent = detail;
    }
    
    // ========== TECLADO ==========
    const keyboard = document.getElementById('keyboard');
    keyboard.innerHTML = '';
    const startMidi = 24, endMidi = 108;
    function isBlack(m) { const pc = m % 12; return pc === 1 || pc === 3 || pc === 6 || pc === 8 || pc === 10; }
    
    for (let m = startMidi; m <= endMidi; m++) {
        const black = isBlack(m);
        const key = document.createElement('div');
        key.className = black ? 'black' : 'white';
        key.id = `k${m}`;
        const oct = Math.floor(m / 12) - 1;
        key.setAttribute('data-note', simpleNames[m % 12] + oct);
        key.addEventListener('mousedown', (e) => { e.preventDefault(); if (!audioReady) return; mouseDown = true; if (lastMouseNote !== null && lastMouseNote !== m) noteOff(lastMouseNote); noteOn(m, 95); lastMouseNote = m; });
        key.addEventListener('mouseenter', () => { if (mouseDown && audioReady && lastMouseNote !== m) { if (lastMouseNote !== null) noteOff(lastMouseNote); noteOn(m, 90); lastMouseNote = m; } });
        keyboard.appendChild(key);
    }
    
    document.addEventListener('mouseup', () => { if (mouseDown) { mouseDown = false; if (lastMouseNote !== null) { noteOff(lastMouseNote); lastMouseNote = null; } } });
    
    // ========== MIDI ==========
    function flashMIDI() { 
        midiLed.style.background = '#00ff80'; 
        midiLed.style.boxShadow = '0 0 8px #00ff80';
        setTimeout(() => { 
            if (midiAccess && midiAccess.inputs.size > 0) {
                midiLed.style.background = '#00ff80';
            } else {
                midiLed.style.background = '#ff6640';
                midiLed.style.boxShadow = '0 0 5px #ff6640';
            }
        }, 200); 
    }
    
    function onMIDI(msg) { 
        if (!audioReady) return; 
        flashMIDI(); 
        const [cmd, note, vel] = msg.data; 
        if (cmd >= 144 && cmd <= 159 && vel > 0) { 
            noteOn(note, vel); 
        } else if ((cmd >= 128 && cmd <= 143) || (cmd >= 144 && cmd <= 159 && vel === 0)) { 
            noteOff(note); 
        } else if ((cmd & 0xF0) === 0xB0 && note === 64) { 
            if (vel >= 64 && !sustainOn) { 
                sustainOn = true; 
                sustainBtn.textContent = '🔘 SUSTAIN ON'; 
                sustainBtn.style.background = '#2a4a6a'; 
            } else if (vel < 64 && sustainOn) { 
                sustainOn = false; 
                clearSustained(); 
                sustainBtn.textContent = '♮ SUSTAIN'; 
                sustainBtn.style.background = '#15181f'; 
            } 
        } 
    }
    
    async function connectMIDI() { 
        if (!navigator.requestMIDIAccess) { 
            midiStatusSpan.textContent = 'NO SOPORTADO'; 
            return; 
        } 
        midiStatusSpan.textContent = 'BUSCANDO...'; 
        try { 
            midiAccess = await navigator.requestMIDIAccess(); 
            const inputs = midiAccess.inputs; 
            if (inputs.size === 0) { 
                midiStatusSpan.textContent = 'SIN DISPOSITIVOS'; 
                midiLed.style.background = '#ff4440'; 
            } else { 
                inputs.forEach(input => { 
                    input.onmidimessage = onMIDI; 
                    console.log('MIDI conectado:', input.name);
                }); 
                midiStatusSpan.textContent = `${inputs.size} DISPOSITIVO${inputs.size > 1 ? 'S' : ''}`; 
                midiLed.style.background = '#00ff80'; 
                midiLed.style.boxShadow = '0 0 8px #00ff80';
            } 
        } catch(e) { 
            console.error('MIDI error:', e);
            midiStatusSpan.textContent = 'ERROR'; 
            midiLed.style.background = '#ff4440'; 
        } 
    }
    
    // ========== PRESETS ==========
    document.querySelectorAll('.preset').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.preset').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            changeInstrument(btn.getAttribute('data-preset'));
            chordDetailEl.textContent = `🎹 ${btn.textContent} - Listo`;
        });
    });
    
    // ========== VU METER ==========
    function startVUMeter() {
        if (meterInterval) clearInterval(meterInterval);
        meterInterval = setInterval(() => {
            if (!audioReady) return;
            const activity = Math.min(1, activeNotes.size / 12);
            const bars = document.querySelectorAll('.vu-bar');
            for (let i = 0; i < bars.length; i++) {
                const height = Math.min(28, activity * 28 * (1 - i / bars.length * 0.5));
                bars[i].style.height = height + 'px';
            }
        }, 50);
    }
    
    // ========== INICIAR ==========
    async function startAudio() {
        if (audioReady) return;
        chordDetailEl.textContent = '🔄 Iniciando motor profesional...';
        await Tone.start();
        currentSynth = createGrand();
        audioReady = true;
        buildEffectChain();
        updateEffects();
        startVUMeter();
        startBtn.textContent = '✅ ACTIVO';
        startBtn.style.background = '#3a6a4a';
        audioStatusSpan.textContent = 'ACTIVO';
        chordDetailEl.textContent = '🎹 88 TECLAS | FX EN TIEMPO REAL | MIDI LISTO';
        const welcome = [60, 64, 67, 72];
        welcome.forEach((n, i) => setTimeout(() => { if (audioReady && currentSynth) currentSynth.triggerAttackRelease(midiToNote(n), "1n"); }, i * 200));
        connectMIDI();
    }
    
    startBtn.addEventListener('click', startAudio);
    midiBtn.addEventListener('click', connectMIDI);
    sustainBtn.addEventListener('click', () => { if (!audioReady) { startAudio(); return; } if (sustainOn) { sustainOn = false; clearSustained(); sustainBtn.textContent = '♮ SUSTAIN'; sustainBtn.style.background = '#15181f'; } else { sustainOn = true; sustainBtn.textContent = '🔘 SUSTAIN ON'; sustainBtn.style.background = '#2a4a6a'; } });
    
    initKnobs();
    updateChord();
})();
</script>
</body>
</html><!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Sensitive Grand Piano · Professional Edition</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/tone/14.8.49/Tone.js"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,300;14..32,400;14..32,500;14..32,600;14..32,700&display=swap" rel="stylesheet">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; user-select: none; }
        body {
            background: radial-gradient(ellipse at 50% 30%, #0a0c14, #05070c);
            font-family: 'Inter', sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            padding: 20px;
        }
        
        .pro-panel {
            width: 100%;
            max-width: 1400px;
            background: linear-gradient(145deg, #1a1c26, #0e1018);
            border-radius: 28px;
            box-shadow: 0 30px 50px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.05);
            padding: 20px;
            border: 1px solid rgba(80,100,140,0.2);
        }
        
        .lcd-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
            flex-wrap: wrap;
            gap: 15px;
        }
        .brand h1 {
            font-size: 1.4rem;
            font-weight: 600;
            background: linear-gradient(135deg, #e8e8f0, #a0a8c0);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            letter-spacing: 1px;
        }
        .brand p {
            font-size: 0.55rem;
            color: #5a6a80;
            letter-spacing: 2px;
        }
        
        .lcd {
            background: #0a0c14;
            border-radius: 12px;
            padding: 12px 20px;
            border: 1px solid #2a3a4a;
            box-shadow: inset 0 0 15px rgba(0,0,0,0.5), 0 0 10px rgba(0,200,255,0.1);
        }
        .lcd-chord {
            font-family: monospace;
            font-size: 1.5rem;
            font-weight: 600;
            text-align: center;
            color: #00ccff;
            text-shadow: 0 0 8px #00ccff;
            letter-spacing: 3px;
        }
        .lcd-info {
            text-align: center;
            color: #6a8aaa;
            font-size: 0.6rem;
            margin-top: 5px;
        }
        
        .fx-rack {
            display: flex;
            justify-content: center;
            gap: 25px;
            margin: 20px 0;
            padding: 12px 20px;
            background: rgba(0,0,0,0.4);
            border-radius: 20px;
            flex-wrap: wrap;
            border: 1px solid rgba(80,100,140,0.2);
        }
        .fx-unit {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 6px;
        }
        .fx-unit label {
            font-size: 0.6rem;
            color: #8a9aba;
            letter-spacing: 1px;
        }
        .pro-knob {
            width: 45px;
            height: 45px;
            background: #15181f;
            border-radius: 50%;
            box-shadow: inset 0 2px 5px rgba(0,0,0,0.6), 0 2px 3px rgba(255,255,255,0.05);
            position: relative;
            cursor: ns-resize;
        }
        .pro-knob::after {
            content: "";
            position: absolute;
            top: 5px;
            left: 50%;
            width: 3px;
            height: 16px;
            background: #00ccff;
            border-radius: 2px;
            transform: translateX(-50%) rotate(0deg);
            transition: transform 0.02s linear;
        }
        .knob-value {
            font-size: 0.55rem;
            color: #00ccff;
        }
        
        .vu-meter {
            display: flex;
            gap: 3px;
            align-items: flex-end;
            height: 30px;
            background: #0a0c14;
            border-radius: 4px;
            padding: 3px;
        }
        .vu-bar {
            width: 4px;
            background: #00ccff;
            border-radius: 1px;
            transition: height 0.05s;
        }
        
        .preset-bar {
            background: #0a0c14;
            border-radius: 40px;
            padding: 4px;
            display: flex;
            gap: 4px;
            border: 1px solid #2a3a4a;
            flex-wrap: wrap;
            justify-content: center;
            margin-bottom: 15px;
        }
        .preset {
            background: transparent;
            border: none;
            padding: 6px 14px;
            border-radius: 40px;
            font-size: 0.65rem;
            font-weight: 500;
            color: #8a9aba;
            cursor: pointer;
            transition: all 0.2s;
        }
        .preset.active {
            background: #2a3a5a;
            color: #ffffff;
            box-shadow: 0 0 8px rgba(0,160,255,0.2);
        }
        
        .controls {
            display: flex;
            gap: 12px;
            justify-content: center;
            margin: 18px 0;
            flex-wrap: wrap;
        }
        .btn {
            background: #15181f;
            border: 1px solid #3a4a60;
            color: #b0c0e0;
            padding: 8px 24px;
            border-radius: 40px;
            cursor: pointer;
            font-size: 0.7rem;
            transition: all 0.2s;
        }
        .btn:hover {
            background: #2a3a5a;
            border-color: #6a9acc;
            color: #ffffff;
        }
        .btn-primary {
            background: #2a4a6a;
            border-color: #4a8acc;
            color: #ffffff;
        }
        
        .piano-stage {
            background: #0a0c12;
            border-radius: 18px;
            padding: 12px 0 10px;
            border: 1px solid #2a3a4a;
            margin: 18px 0;
        }
        .keyboard {
            display: flex;
            position: relative;
            height: 160px;
            width: 100%;
            background: #0f1118;
            border-radius: 12px;
        }
        
        .white {
            background: linear-gradient(145deg, #f5f7fc, #e0e4ec);
            flex: 1 1 0;
            height: 160px;
            border-right: 1px solid #c0c4d0;
            border-bottom: 2px solid #b0b4c0;
            border-radius: 0 0 10px 10px;
            cursor: pointer;
            position: relative;
            z-index: 1;
            transition: all 0.04s linear;
            min-width: 0;
        }
        .white.active {
            background: linear-gradient(145deg, #80c8f0, #4090c0);
            transform: translateY(3px);
            border-bottom-width: 1px;
            box-shadow: 0 0 15px rgba(0,160,255,0.5);
        }
        .white::after {
            content: attr(data-note);
            position: absolute;
            bottom: 5px;
            left: 50%;
            transform: translateX(-50%);
            font-size: 6px;
            color: #7a8090;
            white-space: nowrap;
        }
        
        .black {
            background: linear-gradient(145deg, #2a2e38, #1a1e26);
            width: 0;
            flex: 0 0 0;
            height: 96px;
            border: none;
            border-radius: 0 0 8px 8px;
            cursor: pointer;
            position: relative;
            z-index: 2;
            transition: all 0.04s linear;
            margin-left: -6px;
            margin-right: -6px;
            box-shadow: 0 2px 6px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06);
        }
        .black {
            width: 14px;
            flex: 0 0 14px;
        }
        .black.active {
            background: linear-gradient(145deg, #5a6a90, #3a4a6a);
            transform: translateY(2px);
            box-shadow: 0 0 12px rgba(0,160,255,0.4);
        }
        .black::after {
            content: attr(data-note);
            position: absolute;
            bottom: 4px;
            left: 50%;
            transform: translateX(-50%);
            font-size: 5px;
            color: #a0a8c0;
            white-space: nowrap;
        }
        
        .status {
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: #5a7a9a;
            border-top: 1px solid #2a3a4a;
            padding-top: 12px;
            margin-top: 15px;
            font-size: 0.6rem;
            flex-wrap: wrap;
            gap: 10px;
        }
        .midi-led {
            display: inline-block;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: #ff6640;
            margin-left: 5px;
            box-shadow: 0 0 5px #ff6640;
            transition: 0.1s;
        }
        .footer {
            text-align: center;
            font-size: 0.5rem;
            color: #4a6070;
            margin-top: 12px;
        }
        
        @media (max-width: 900px) {
            .black { width: 12px; flex: 0 0 12px; margin-left: -5px; margin-right: -5px; }
            .white { height: 150px; }
            .keyboard { height: 150px; }
            .black { height: 90px; }
            .lcd-chord { font-size: 1.2rem; }
            .pro-knob { width: 35px; height: 35px; }
        }
        @media (max-width: 700px) {
            .black { width: 10px; flex: 0 0 10px; margin-left: -4px; margin-right: -4px; }
        }
    </style>
</head>
<body>
<div class="pro-panel">
    <div class="lcd-header">
        <div class="brand">
            <h1>SENSITIVE GRAND PIANO</h1>
            <p>PROFESSIONAL · 88 KEYS · VST CLASS</p>
        </div>
        <div class="lcd">
            <div id="chord-name" class="lcd-chord">—</div>
            <div id="chord-detail" class="lcd-info">▶ ACTIVAR AUDIO</div>
        </div>
    </div>

    <div class="preset-bar">
        <button class="preset active" data-preset="grand">GRAND</button>
        <button class="preset" data-preset="upright">UPRIGHT</button>
        <button class="preset" data-preset="electric">EPIANO</button>
        <button class="preset" data-preset="honky">HONKY</button>
        <button class="preset" data-preset="century">XVIII</button>
        <button class="preset" data-preset="organ">ÓRGANO</button>
    </div>

    <div class="fx-rack">
        <div class="fx-unit">
            <label>REVERB</label>
            <div class="pro-knob" id="reverb-knob" data-value="32" data-min="0" data-max="70"></div>
            <div class="knob-value" id="reverb-val">32%</div>
        </div>
        <div class="fx-unit">
            <label>CHORUS</label>
            <div class="pro-knob" id="chorus-knob" data-value="18" data-min="0" data-max="60"></div>
            <div class="knob-value" id="chorus-val">18%</div>
        </div>
        <div class="fx-unit">
            <label>BRILLO</label>
            <div class="pro-knob" id="bright-knob" data-value="70" data-min="20" data-max="100"></div>
            <div class="knob-value" id="bright-val">70%</div>
        </div>
        <div class="fx-unit">
            <label>VOLUMEN</label>
            <div class="pro-knob" id="volume-knob" data-value="75" data-min="10" data-max="100"></div>
            <div class="knob-value" id="volume-val">75%</div>
        </div>
        <div class="fx-unit">
            <label>VU</label>
            <div class="vu-meter" id="vu-meter">
                <div class="vu-bar" style="height: 0px"></div><div class="vu-bar" style="height: 0px"></div>
                <div class="vu-bar" style="height: 0px"></div><div class="vu-bar" style="height: 0px"></div>
                <div class="vu-bar" style="height: 0px"></div><div class="vu-bar" style="height: 0px"></div>
                <div class="vu-bar" style="height: 0px"></div><div class="vu-bar" style="height: 0px"></div>
            </div>
        </div>
    </div>

    <div class="controls">
        <button id="start-btn" class="btn btn-primary">⚡ ACTIVAR</button>
        <button id="midi-btn" class="btn">🎛 CONECTAR MIDI</button>
        <button id="sustain-btn" class="btn">♮ SUSTAIN</button>
    </div>

    <div class="piano-stage">
        <div class="keyboard" id="keyboard"></div>
    </div>

    <div class="status">
        <span>🎹 MIDI: <span id="midi-status">DESCONECTADO</span><span id="midi-led" class="midi-led"></span></span>
        <span>🎼 C0 - C8 (88 teclas)</span>
        <span>🔊 <span id="audio-status">INACTIVO</span></span>
        <span>💾 6 presets · FX real-time</span>
    </div>
    <div class="footer">· CLIC O ARRASTRE · MIDI FÍSICO · PEDAL SUSTAIN (CC64) · GIRO LAS PERILLAS ·</div>
</div>

<script>
(function(){
    let currentSynth = null;
    let audioReady = false;
    let activeNotes = new Set();
    let sustainedNotes = new Set();
    let sustainOn = false;
    let mouseDown = false;
    let lastMouseNote = null;
    let midiAccess = null;
    
    let reverbNode = null;
    let chorusNode = null;
    let filterNode = null;
    let volumeNode = null;
    let compressorNode = null;
    
    let meterInterval = null;
    
    const chordNameEl = document.getElementById('chord-name');
    const chordDetailEl = document.getElementById('chord-detail');
    const startBtn = document.getElementById('start-btn');
    const midiBtn = document.getElementById('midi-btn');
    const sustainBtn = document.getElementById('sustain-btn');
    const midiStatusSpan = document.getElementById('midi-status');
    const midiLed = document.getElementById('midi-led');
    const audioStatusSpan = document.getElementById('audio-status');
    
    const noteNames = ['Do', 'Do#', 'Re', 'Re#', 'Mi', 'Fa', 'Fa#', 'Sol', 'Sol#', 'La', 'La#', 'Si'];
    const simpleNames = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
    
    // ========== CADENA DE EFECTOS ==========
    function buildEffectChain() {
        if (!audioReady) return;
        
        reverbNode = new Tone.Reverb({ decay: 1.6, wet: 0.32, preDelay: 0.04 });
        chorusNode = new Tone.Chorus({ frequency: 1.2, delayTime: 3.2, depth: 0.18, wet: 0.18 });
        filterNode = new Tone.Filter(2000, "lowpass");
        volumeNode = new Tone.Gain(0.75);
        compressorNode = new Tone.Compressor({ threshold: -18, ratio: 2.5, attack: 0.01, release: 0.12 });
        
        if (currentSynth) {
            currentSynth.disconnect();
            currentSynth.connect(filterNode);
            filterNode.connect(chorusNode);
            chorusNode.connect(reverbNode);
            reverbNode.connect(compressorNode);
            compressorNode.connect(volumeNode);
            volumeNode.toDestination();
        }
    }
    
    function updateEffects() {
        if (!reverbNode) return;
        reverbNode.wet.value = parseFloat(document.getElementById('reverb-val').textContent) / 100;
        chorusNode.wet.value = parseFloat(document.getElementById('chorus-val').textContent) / 100;
        filterNode.frequency.value = 600 + (parseFloat(document.getElementById('bright-val').textContent) / 100) * 10000;
        volumeNode.gain.value = parseFloat(document.getElementById('volume-val').textContent) / 100;
    }
    
    // ========== KNOBS FUNCIONALES ==========
    function initKnobs() {
        const knobs = document.querySelectorAll('.pro-knob');
        
        knobs.forEach(knob => {
            const valSpan = knob.nextElementSibling;
            const minVal = parseFloat(knob.getAttribute('data-min') || 0);
            const maxVal = parseFloat(knob.getAttribute('data-max') || 100);
            let currentVal = parseFloat(knob.getAttribute('data-value') || valSpan.textContent);
            let dragging = false;
            let startY = 0;
            let startVal = currentVal;
            
            // Inicializar valor visual
            valSpan.textContent = Math.round(currentVal) + '%';
            const rotation = (currentVal - minVal) / (maxVal - minVal) * 270 - 135;
            knob.style.transform = `rotate(${rotation}deg)`;
            
            knob.addEventListener('mousedown', (e) => {
                e.preventDefault();
                dragging = true;
                startY = e.clientY;
                startVal = currentVal;
                knob.style.cursor = 'ns-resize';
                document.body.style.cursor = 'ns-resize';
            });
            
            window.addEventListener('mousemove', (e) => {
                if (!dragging) return;
                const delta = (startY - e.clientY) * 0.6;
                let newVal = Math.min(maxVal, Math.max(minVal, startVal + delta));
                if (Math.abs(newVal - currentVal) < 0.5) return;
                currentVal = newVal;
                valSpan.textContent = Math.round(currentVal) + '%';
                const newRotation = (currentVal - minVal) / (maxVal - minVal) * 270 - 135;
                knob.style.transform = `rotate(${newRotation}deg)`;
                updateEffects();
            });
            
            window.addEventListener('mouseup', () => {
                dragging = false;
                knob.style.cursor = '';
                document.body.style.cursor = '';
            });
        });
    }
    
    // ========== INSTRUMENTOS ==========
    function createGrand() {
        const s = new Tone.PolySynth(Tone.Synth).toDestination();
        s.set({ oscillator: { type: "sine" }, envelope: { attack: 0.006, decay: 0.28, sustain: 0.32, release: 1.6 } });
        return s;
    }
    function createUpright() {
        const s = new Tone.PolySynth(Tone.Synth).toDestination();
        s.set({ oscillator: { type: "triangle" }, envelope: { attack: 0.012, decay: 0.32, sustain: 0.26, release: 1.3 } });
        return s;
    }
    function createElectric() {
        const s = new Tone.PolySynth(Tone.Synth).toDestination();
        s.set({ oscillator: { type: "square" }, envelope: { attack: 0.003, decay: 0.35, sustain: 0.18, release: 0.9 } });
        return s;
    }
    function createHonky() {
        const s = new Tone.PolySynth(Tone.Synth).toDestination();
        s.set({ oscillator: { type: "sawtooth" }, envelope: { attack: 0.005, decay: 0.22, sustain: 0.22, release: 1.0 } });
        return s;
    }
    function createCentury() {
        const s = new Tone.PolySynth(Tone.Synth).toDestination();
        s.set({ oscillator: { type: "sine" }, envelope: { attack: 0.018, decay: 0.42, sustain: 0.22, release: 0.95 } });
        return s;
    }
    function createOrgan() {
        const s = new Tone.PolySynth(Tone.Synth).toDestination();
        s.set({ oscillator: { type: "sine" }, envelope: { attack: 0.08, decay: 0.15, sustain: 0.7, release: 1.2 } });
        return s;
    }
    
    function changeInstrument(inst) {
        if (!audioReady) return;
        if (currentSynth) { try { currentSynth.releaseAll(); } catch(e) {} }
        switch(inst) {
            case 'grand': currentSynth = createGrand(); break;
            case 'upright': currentSynth = createUpright(); break;
            case 'electric': currentSynth = createElectric(); break;
            case 'honky': currentSynth = createHonky(); break;
            case 'century': currentSynth = createCentury(); break;
            case 'organ': currentSynth = createOrgan(); break;
            default: currentSynth = createGrand();
        }
        if (filterNode && currentSynth) {
            currentSynth.connect(filterNode);
        }
        activeNotes.forEach(midi => { currentSynth.triggerAttack(midiToNote(midi), undefined, 0.8); });
    }
    
    function midiToNote(midi) { return simpleNames[midi % 12] + (Math.floor(midi / 12) - 1); }
    
    function noteOn(midi, vel) {
        if (!audioReady || !currentSynth) return;
        if (activeNotes.has(midi)) return;
        activeNotes.add(midi);
        try { currentSynth.triggerAttack(midiToNote(midi), undefined, vel / 127); } catch(e) {}
        const key = document.getElementById(`k${midi}`);
        if (key) key.classList.add('active');
        updateChord();
    }
    
    function noteOff(midi) {
        if (!audioReady || !currentSynth) return;
        if (!activeNotes.has(midi)) return;
        activeNotes.delete(midi);
        if (sustainOn) {
            sustainedNotes.add(midi);
        } else {
            try { currentSynth.triggerRelease(midiToNote(midi)); } catch(e) {}
            const key = document.getElementById(`k${midi}`);
            if (key) key.classList.remove('active');
        }
        updateChord();
    }
    
    function clearSustained() {
        sustainedNotes.forEach(midi => {
            if (!activeNotes.has(midi)) {
                try { currentSynth.triggerRelease(midiToNote(midi)); } catch(e) {}
                const key = document.getElementById(`k${midi}`);
                if (key) key.classList.remove('active');
            }
        });
        sustainedNotes.clear();
    }
    
    const chordDB = {
        '4,7': '', '3,7': 'm', '4,8': 'aug', '3,6': 'dim', '2,7': 'sus2', '5,7': 'sus4',
        '4,7,11': 'maj7', '3,7,10': 'm7', '4,7,10': '7', '3,6,10': 'm7b5', '3,6,9': 'dim7',
        '4,7,9': '6', '3,7,9': 'm6', '2,4,7': 'add9', '2,4,7,10': '9', '2,3,7,10': 'm9',
        '2,4,7,11': 'maj9', '2,4,7,10,9': '13', '2,4,7,11,9': 'maj13'
    };
    
    function updateChord() {
        const all = new Set([...activeNotes, ...sustainedNotes]);
        if (all.size === 0) {
            chordNameEl.textContent = '—';
            chordDetailEl.textContent = '🎹 Esperando notas...';
            return;
        }
        const sorted = Array.from(all).sort((a,b)=>a-b);
        const pcs = [...new Set(sorted.map(n=>n%12))].sort((a,b)=>a-b);
        if (pcs.length > 7) {
            chordNameEl.textContent = 'COMPLEJO';
            chordDetailEl.textContent = sorted.map(n=>noteNames[n%12]+(Math.floor(n/12)-1)).join(' ');
            return;
        }
        const bassPC = sorted[0] % 12;
        let best = null, bestScore = -1;
        for (let i = 0; i < pcs.length; i++) {
            const root = pcs[i];
            const intervals = pcs.map(p => (p - root + 12) % 12).filter(x=>x!==0).sort((a,b)=>a-b).join(',');
            if (chordDB[intervals]) {
                const score = bassPC === root ? 3 : 1;
                if (score > bestScore) { bestScore = score; best = { root, suffix: chordDB[intervals] }; }
            }
        }
        const detail = sorted.map(n => noteNames[n%12] + (Math.floor(n/12)-1)).join(' · ');
        if (!best) { chordNameEl.textContent = '—'; chordDetailEl.textContent = detail; return; }
        let name = noteNames[best.root] + best.suffix;
        if (bassPC !== best.root) name += ' / ' + noteNames[bassPC];
        chordNameEl.textContent = name;
        chordDetailEl.textContent = detail;
    }
    
    // ========== TECLADO ==========
    const keyboard = document.getElementById('keyboard');
    keyboard.innerHTML = '';
    const startMidi = 24, endMidi = 108;
    function isBlack(m) { const pc = m % 12; return pc === 1 || pc === 3 || pc === 6 || pc === 8 || pc === 10; }
    
    for (let m = startMidi; m <= endMidi; m++) {
        const black = isBlack(m);
        const key = document.createElement('div');
        key.className = black ? 'black' : 'white';
        key.id = `k${m}`;
        const oct = Math.floor(m / 12) - 1;
        key.setAttribute('data-note', simpleNames[m % 12] + oct);
        key.addEventListener('mousedown', (e) => { e.preventDefault(); if (!audioReady) return; mouseDown = true; if (lastMouseNote !== null && lastMouseNote !== m) noteOff(lastMouseNote); noteOn(m, 95); lastMouseNote = m; });
        key.addEventListener('mouseenter', () => { if (mouseDown && audioReady && lastMouseNote !== m) { if (lastMouseNote !== null) noteOff(lastMouseNote); noteOn(m, 90); lastMouseNote = m; } });
        keyboard.appendChild(key);
    }
    
    document.addEventListener('mouseup', () => { if (mouseDown) { mouseDown = false; if (lastMouseNote !== null) { noteOff(lastMouseNote); lastMouseNote = null; } } });
    
    // ========== MIDI ==========
    function flashMIDI() { 
        midiLed.style.background = '#00ff80'; 
        midiLed.style.boxShadow = '0 0 8px #00ff80';
        setTimeout(() => { 
            if (midiAccess && midiAccess.inputs.size > 0) {
                midiLed.style.background = '#00ff80';
            } else {
                midiLed.style.background = '#ff6640';
                midiLed.style.boxShadow = '0 0 5px #ff6640';
            }
        }, 200); 
    }
    
    function onMIDI(msg) { 
        if (!audioReady) return; 
        flashMIDI(); 
        const [cmd, note, vel] = msg.data; 
        if (cmd >= 144 && cmd <= 159 && vel > 0) { 
            noteOn(note, vel); 
        } else if ((cmd >= 128 && cmd <= 143) || (cmd >= 144 && cmd <= 159 && vel === 0)) { 
            noteOff(note); 
        } else if ((cmd & 0xF0) === 0xB0 && note === 64) { 
            if (vel >= 64 && !sustainOn) { 
                sustainOn = true; 
                sustainBtn.textContent = '🔘 SUSTAIN ON'; 
                sustainBtn.style.background = '#2a4a6a'; 
            } else if (vel < 64 && sustainOn) { 
                sustainOn = false; 
                clearSustained(); 
                sustainBtn.textContent = '♮ SUSTAIN'; 
                sustainBtn.style.background = '#15181f'; 
            } 
        } 
    }
    
    async function connectMIDI() { 
        if (!navigator.requestMIDIAccess) { 
            midiStatusSpan.textContent = 'NO SOPORTADO'; 
            return; 
        } 
        midiStatusSpan.textContent = 'BUSCANDO...'; 
        try { 
            midiAccess = await navigator.requestMIDIAccess(); 
            const inputs = midiAccess.inputs; 
            if (inputs.size === 0) { 
                midiStatusSpan.textContent = 'SIN DISPOSITIVOS'; 
                midiLed.style.background = '#ff4440'; 
            } else { 
                inputs.forEach(input => { 
                    input.onmidimessage = onMIDI; 
                    console.log('MIDI conectado:', input.name);
                }); 
                midiStatusSpan.textContent = `${inputs.size} DISPOSITIVO${inputs.size > 1 ? 'S' : ''}`; 
                midiLed.style.background = '#00ff80'; 
                midiLed.style.boxShadow = '0 0 8px #00ff80';
            } 
        } catch(e) { 
            console.error('MIDI error:', e);
            midiStatusSpan.textContent = 'ERROR'; 
            midiLed.style.background = '#ff4440'; 
        } 
    }
    
    // ========== PRESETS ==========
    document.querySelectorAll('.preset').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.preset').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            changeInstrument(btn.getAttribute('data-preset'));
            chordDetailEl.textContent = `🎹 ${btn.textContent} - Listo`;
        });
    });
    
    // ========== VU METER ==========
    function startVUMeter() {
        if (meterInterval) clearInterval(meterInterval);
        meterInterval = setInterval(() => {
            if (!audioReady) return;
            const activity = Math.min(1, activeNotes.size / 12);
            const bars = document.querySelectorAll('.vu-bar');
            for (let i = 0; i < bars.length; i++) {
                const height = Math.min(28, activity * 28 * (1 - i / bars.length * 0.5));
                bars[i].style.height = height + 'px';
            }
        }, 50);
    }
    
    // ========== INICIAR ==========
    async function startAudio() {
        if (audioReady) return;
        chordDetailEl.textContent = '🔄 Iniciando motor profesional...';
        await Tone.start();
        currentSynth = createGrand();
        audioReady = true;
        buildEffectChain();
        updateEffects();
        startVUMeter();
        startBtn.textContent = '✅ ACTIVO';
        startBtn.style.background = '#3a6a4a';
        audioStatusSpan.textContent = 'ACTIVO';
        chordDetailEl.textContent = '🎹 88 TECLAS | FX EN TIEMPO REAL | MIDI LISTO';
        const welcome = [60, 64, 67, 72];
        welcome.forEach((n, i) => setTimeout(() => { if (audioReady && currentSynth) currentSynth.triggerAttackRelease(midiToNote(n), "1n"); }, i * 200));
        connectMIDI();
    }
    
    startBtn.addEventListener('click', startAudio);
    midiBtn.addEventListener('click', connectMIDI);
    sustainBtn.addEventListener('click', () => { if (!audioReady) { startAudio(); return; } if (sustainOn) { sustainOn = false; clearSustained(); sustainBtn.textContent = '♮ SUSTAIN'; sustainBtn.style.background = '#15181f'; } else { sustainOn = true; sustainBtn.textContent = '🔘 SUSTAIN ON'; sustainBtn.style.background = '#2a4a6a'; } });
    
    initKnobs();
    updateChord();
})();
</script>
</body>
</html>
