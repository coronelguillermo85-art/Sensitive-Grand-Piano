# 🎹 Sensitive Grand Piano · Professional Edition

Instrumento virtual de piano diseñado para ofrecer alta fidelidad sonora y respuesta táctil inmediata. Este proyecto está optimizado para entornos de producción musical basados en web, garantizando una latencia mínima y una integración fluida con hardware externo.

---

## 📦 Versión Standalone (Desktop)

Esta versión empaqueta la aplicación web como una app de escritorio nativa para Windows usando **Electron**, eliminando la necesidad de un navegador. La app corre de forma completamente independiente, con instancia única y sin acceso a herramientas de desarrollo.

### Requisitos
- Windows 10 / 11 (x64)
- Node.js v16 o superior
- Conexión a internet (la app carga desde `https://sensitive-grand-piano.vercel.app/`)

### Instalación y uso

```bash
git clone https://github.com/coronelguillermo85-art/Sensitive-Grand-Piano
cd Sensitive-Grand-Piano
npm install
npx electron .
```

### Generar ejecutable `.exe`

```bash
npx electron-builder --win --dir
```

El ejecutable se genera en `dist/win-unpacked/sensitive-grand-piano-app.exe`.

Para generar un instalador:

```bash
npx electron-builder --win --target nsis
```

---

## 🎹 Especificaciones Técnicas

- **Core Engine:** Integración nativa con `Tone.js` (Web Audio API)
- **Latencia:** Motor optimizado para una respuesta de ejecución inmediata (Near-Zero Latency)
- **Entrada MIDI:** Soporte para detección automática de controladores MIDI externos
- **Cadena de efectos:** Procesamiento de señal integrado para modelado de sonido tipo estudio
- **Visualización:** Monitor VU en tiempo real para análisis de salida de audio

---

## 🛠 Instrucciones de uso

1. Abrir la aplicación (browser o versión standalone)
2. Hacer clic en **"Iniciando motor"** para habilitar la síntesis de audio
3. El sistema reconocerá automáticamente cualquier controlador MIDI conectado
4. Utilizar la interfaz en pantalla o el dispositivo MIDI para la ejecución

---

## 🔗 Links

- **Web:** https://sensitive-grand-piano.vercel.app/
- **GitHub:** https://github.com/coronelguillermo85-art/Sensitive-Grand-Piano

---

> Proyecto optimizado para Web Audio API · Desarrollado por [Sensitive Lab](https://github.com/coronelguillermo85-art)

<img width="1600" height="1105" alt="image" src="https://github.com/user-attachments/assets/ad0d6b83-4f6f-4c3a-840e-67ff58aadab4" />

https://sensitive-grand-piano.vercel.app/



---
*Proyecto optimizado para Web Audio API.*
