<script>
  let canvas;

  $effect(() => {
    const audio = new Audio("/sounds/tv-static.mp3");
    audio.volume = 0.2;

    audio.play().catch((err) => {
      console.warn(
        "La reproducción de audio fue bloqueada por el navegador:",
        err,
      );
    });
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const width = (canvas.width = 128);
    const height = (canvas.height = 128);
    const imgData = ctx.createImageData(width, height);
    const data = imgData.data;
    let animationFrameId;

    function loop() {
      for (let i = 0; i < data.length; i += 4) {
        const val = Math.floor(Math.random() * 255);
        data[i] = val;
        data[i + 1] = val;
        data[i + 2] = val;
        data[i + 3] = 255;
      }
      ctx.putImageData(imgData, 0, 0);
      animationFrameId = requestAnimationFrame(loop);
    }

    loop();

    // Esta es la función de limpieza que Svelte llama al desmontar el componente
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  });
</script>

<div class="tv-glitch-overlay">
  <canvas bind:this={canvas}></canvas>
</div>

<style>
  .tv-glitch-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 9999;
    animation: flicker 0.15s infinite;
    pointer-events: none;
  }

  canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%; /* Cambiamos el calc por 100% */
    opacity: 0.08;
    pointer-events: none;
  }

  .tv-glitch-overlay::after {
    content: " ";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        rgba(18, 16, 16, 0) 50%,
        rgba(0, 0, 0, 0.25) 50%
      ),
      linear-gradient(
        90deg,
        rgba(255, 0, 0, 0.06),
        rgba(0, 255, 0, 0.02),
        rgba(0, 0, 255, 0.06)
      );
    background-size:
      100% 4px,
      6px 100%;
    z-index: 2;
    pointer-events: none;
  }
  @keyframes flicker {
    0% {
      opacity: 0.95;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0.93;
    }
  }
</style>
