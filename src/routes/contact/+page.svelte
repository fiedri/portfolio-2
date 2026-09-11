<script lang="ts">
  import { onMount } from "svelte";
  import {
    RadioIcon,
    FileUpIcon,
    AtSignIcon,
    LockIcon,
  } from "@lucide/svelte";
  import { m } from "$lib/paraglide/messages.js";

  interface TransmissionChannel {
    channel: string;
    value: string;
    href: string;
  }

  const transmissionChannels: TransmissionChannel[] = [
    { channel: "EMAIL_ADDR", value: "ruizfriedrich904@gmail.com", href: "" },
    {
      channel: "GITHUB_NODE",
      value: "github.com/fiedri",
      href: "https://github.com/fiedri",
    },
    {
      channel: "LINKEDIN_AUTH",
      value: "linkedin.com/in/friedrich-ruiz",
      href: "https://www.linkedin.com/in/friedrich-ruiz/",
    },
  ];

  interface GridCell {
    char: string;
    opacity: number;
    highlight: number;
    changeSpeed: number;
  }

  let canvasElement = $state<HTMLCanvasElement>();
  let grid: GridCell[][] = [];

  // Variables reactivas de telemetría (Svelte 5 Runes)
  let rsaProgress = $state(0);
  let currentHash = $state("SHA-512/INIT");
  let statusLog = $state("STANDBY");
  let entropyBuffer = $state("");

  function injectEntropy() {
    if (!grid || grid.length === 0) return;
    const colsCount = grid.length;
    const rowsCount = grid[0] ? grid[0].length : 0;

    // Generar ráfagas de caracteres activos al escribir o hacer focus
    for (let i = 0; i < 40; i++) {
      const c = Math.floor(Math.random() * colsCount);
      const r = Math.floor(Math.random() * rowsCount);
      if (grid[c] && grid[c][r]) {
        grid[c][r].highlight = 1.0;
        grid[c][r].changeSpeed = 0.5;
      }
    }
  }

  onMount(() => {
    if (!canvasElement) return;
    const ctx = canvasElement.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvasElement.width = canvasElement.offsetWidth);
    let height = (canvasElement.height = canvasElement.offsetHeight);

    const fontSize = 10;
    const chars = "0123456789ABCDEF$#@%&+*=[]{}<>?/_";

    // Inicializar la grilla del canvas
    const initGrid = () => {
      const cols = Math.ceil(width / fontSize);
      const rows = Math.ceil(height / fontSize);
      grid = [];
      for (let c = 0; c < cols; c++) {
        grid[c] = [];
        for (let r = 0; r < rows; r++) {
          grid[c][r] = {
            char: chars[Math.floor(Math.random() * chars.length)],
            opacity: Math.random() * 0.05 + 0.01, // Extremadamente sutil por defecto
            highlight: 0,
            changeSpeed: Math.random() * 0.05 + 0.01,
          };
        }
      }
    };

    initGrid();

    const handleResize = () => {
      if (!canvasElement) return;
      width = canvasElement.width = canvasElement.offsetWidth;
      height = canvasElement.height = canvasElement.offsetHeight;
      initGrid();
    };

    window.addEventListener("resize", handleResize);

    let lastTime = 0;
    const fps = 24;
    const interval = 1000 / fps;

    const draw = (timestamp: number) => {
      animationFrameId = requestAnimationFrame(draw);

      const delta = timestamp - lastTime;
      if (delta < interval) return;
      lastTime = timestamp - (delta % interval);

      ctx.clearRect(0, 0, width, height);
      ctx.font = `${fontSize}px "JetBrains Mono", monospace`;

      const colsCount = Math.ceil(width / fontSize);
      const rowsCount = Math.ceil(height / fontSize);

      for (let c = 0; c < colsCount; c++) {
        if (!grid[c]) grid[c] = [];
        for (let r = 0; r < rowsCount; r++) {
          if (!grid[c][r]) {
            grid[c][r] = {
              char: chars[Math.floor(Math.random() * chars.length)],
              opacity: Math.random() * 0.05 + 0.01,
              highlight: 0,
              changeSpeed: Math.random() * 0.05 + 0.01,
            };
          }

          const cell = grid[c][r];

          // Mutación aleatoria de caracteres
          if (Math.random() < cell.changeSpeed) {
            cell.char = chars[Math.floor(Math.random() * chars.length)];
          }

          // Decaer destello
          if (cell.highlight > 0) {
            cell.highlight -= 0.06;
            if (cell.highlight < 0) cell.highlight = 0;
            if (cell.highlight === 0) {
              cell.changeSpeed = Math.random() * 0.05 + 0.01;
            }
          }

          const baseOpacity = cell.opacity;
          const currentOpacity = baseOpacity + cell.highlight * 0.12;

          if (currentOpacity > 0.005) {
            ctx.fillStyle = `rgba(0, 230, 57, ${currentOpacity * 0.3})`;
            ctx.fillText(cell.char, c * fontSize, r * fontSize + fontSize);
          }
        }
      }
    };

    animationFrameId = requestAnimationFrame(draw);

    const telemetryInterval = setInterval(() => {
      if (rsaProgress < 100) {
        rsaProgress = +(rsaProgress + Math.random() * 2.5).toFixed(1);
        if (rsaProgress > 100) rsaProgress = 100;
      } else {
        rsaProgress = 0;
      }

      const hexChars = "0123456789abcdef";
      let hash = "";
      for (let i = 0; i < 16; i++) {
        hash += hexChars[Math.floor(Math.random() * 16)];
      }
      currentHash = `0x${hash.toUpperCase()}...`;

      const logs = [
        "GENERATING_PRIME_P",
        "GENERATING_PRIME_Q",
        "CALCULATING_MODULUS_N",
        "COMPUTING_TOTIENT",
        "VALIDATING_COPRIMES",
        "PERFORMING_MILLER_RABIN",
        "ESTABLISHING_SECURE_TUNNEL",
        "EXCHANGING_DIFFIE_HELLMAN",
        "AES_KEY_EXPANSION",
      ];
      statusLog = logs[Math.floor(Math.random() * logs.length)];

      let entropy = "";
      for (let i = 0; i < 35; i++) {
        entropy += chars[Math.floor(Math.random() * chars.length)];
      }
      entropyBuffer = entropy;
    }, 150);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      clearInterval(telemetryInterval);
    };
  });
</script>

<div class="flex flex-col min-h-full p-5 gap-5">
  <div class="bg-surface-container relative">
    <div class="sm:absolute right-0 flex flex-col text-[8px] text-right mt-1 mr-1">
      <span class="font-bold">STATUS: ONLINE</span>
      <span>NODE_ID: 192.168.1.104</span>
    </div>
    <div class="pl-5 py-1 sm:py-2">
      <h2 class="uppercase text-xl font-bold">{m.contact_title()}</h2>
      <p class="text-sm">
        {m.contact_intro()}
        <span
          class="w-2 h-4 bg-primary-fixed-dim animate-blink flex-shrink-0 inline-block"
        ></span>
      </p>
    </div>
  </div>
  <div class="flex flex-col lg:flex-row gap-5">
    <section class="border border-outline-variant lg:w-1/3 flex flex-col">
      <div class="flex flex-col h-full">
        <div
          class="flex flex-row items-center justify-between px-4 py-2 border-b border-outline-variant"
        >
          <h3 class="uppercase font-light">{m.contact_channels_title()}</h3>
          <RadioIcon class="h-4 w-4" />
        </div>

        <div class="p-4 flex flex-col gap-5">
          {#each transmissionChannels as tChannel, i}
            <div class="flex flex-col gap-1">
              <h4 class="text-[10px] tracking-wider uppercase opacity-80">
                {tChannel.channel}
              </h4>
              <p class="flex items-baseline gap-2">
                <span class="text-[9px] font-mono opacity-60">
                  0x{(i + 1).toString().padStart(2, "0")}
                </span>
                <a
                  href={tChannel.href}
                  class="font-light text-xs hover:underline break-all"
                >
                  {tChannel.value}
                </a>
              </p>
            </div>
          {/each}
        </div>

        <div
          class="mt-auto flex flex-row items-center justify-between px-4 py-2 border-t text-[10px] border-outline-variant font-mono"
        >
          <span>SIGNAL_STRENGTH</span>
          <span>98% (ENCRYPTED)</span>
        </div>
      </div>
    </section>
    <section
      class="border border-outline-variant relative overflow-hidden bg-surface-container-lowest flex-1"
    >
      <canvas
        bind:this={canvasElement}
        class="absolute inset-0 w-full h-full pointer-events-none z-0"
      ></canvas>

      <div
        class="relative z-10 flex flex-col h-full bg-surface-container-lowest/80 backdrop-blur-xs"
      >
        <div
          class="flex flex-row items-center justify-between px-2 py-2 border-b border-outline-variant"
        >
          <h3 class="uppercase font-light">//DATA_PACKET_TRANSFER</h3>
          <FileUpIcon class="h-4 w-4" />
        </div>
        <form action="" class="p-5 md:p-6 flex flex-col gap-5 relative z-10">
          <fieldset class="flex flex-col md:flex-row gap-5">
            <div class="flex flex-col gap-1 w-full md:w-1/2">
              <label for="sender_id" class="text-[10px] text-on-surface"
                >{m.contact_form_sender_label()}</label
              >
              <div class="relative flex items-center">
                <span class="absolute left-3.5 font-mono text-sm pointer-events-none text-primary-fixed-dim select-none">&gt;</span>
                <input
                  type="text"
                  placeholder={m.contact_form_sender_placeholder()}
                  id="sender_id"
                  name="sender_id"
                  oninput={injectEntropy}
                  onfocus={injectEntropy}
                  class="w-full border focus:border-primary-fixed-dim py-2 pl-8 pr-3 text-sm rounded-none outline-none focus:outline-none border-outline-variant bg-surface-container-lowest/70 transition-all font-mono text-primary placeholder-primary/30"
                />
              </div>
            </div>
            <div class="flex flex-col gap-1 w-full md:w-1/2">
              <label for="return_path" class="text-[10px] text-on-surface"
                >{m.contact_form_email_label()}</label
              >
              <div class="relative flex items-center">
                <AtSignIcon
                  class="absolute left-3 h-3.5 w-3.5 pointer-events-none text-primary-fixed-dim"
                />
                <input
                  type="email"
                  placeholder={m.contact_form_email_placeholder()}
                  id="return_path"
                  name="return_path"
                  oninput={injectEntropy}
                  onfocus={injectEntropy}
                  class="w-full border focus:border-primary-fixed-dim py-2 pl-9 pr-3 text-sm rounded-none outline-none focus:outline-none border-outline-variant bg-surface-container-lowest/70 transition-all font-mono text-primary placeholder-primary/30"
                />
              </div>
            </div>
          </fieldset>
          <fieldset class="flex flex-col gap-1">
            <label for="message_payload" class="text-[10px] text-on-surface"
              >{m.contact_form_message_label()}</label
            >
            <textarea
              name="message_payload"
              id="message_payload"
              placeholder={m.contact_form_message_placeholder()}
              oninput={injectEntropy}
              onfocus={injectEntropy}
              class="border bg-surface-container-lowest/70 resize-none focus:border-primary-fixed-dim py-2 px-3 h-32 text-sm rounded-none outline-none focus:outline-none border-outline-variant transition-all font-mono text-primary placeholder-primary/30"
            ></textarea>
          </fieldset>
          <fieldset class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div
              class="uppercase flex flex-col text-[10px] opacity-75 font-mono text-on-surface-variant"
            >
              <span>{m.contact_form_attachment_ready()}</span>
              <span>{m.contact_form_compression_active()}</span>
              <span>{m.contact_form_packet_priority()}</span>
            </div>
            <button
              class="w-full md:w-auto p-2.5 cursor-pointer border border-outline-variant bg-transparent text-primary-fixed-dim hover:bg-white/10 hover:text-primary active:translate-x-px active:translate-y-px transition-all font-mono uppercase text-xs rounded-none outline-none focus:outline-none"
              >{m.contact_form_submit()}</button
            >
          </fieldset>
        </form>
      </div>
    </section>
  </div>
  <div
    class="border border-outline-variant w-full h-75 flex flex-col bg-surface-container-lowest relative overflow-hidden"
  >
    <div
      class="p-2.5 flex flex-row justify-between border-b border-outline-variant relative z-10 bg-surface-container-lowest/80 backdrop-blur-xs"
    >
      <div class="flex flex-row items-center gap-1.5">
        <h3 class="uppercase font-light">// ENCRYPTION_TELEMETRY</h3>
        <span
          class="border border-outline-variant text-[10px] px-1 bg-surface-container"
          >aes-256-gcm</span
        >
      </div>
      <LockIcon class="h-4 w-4 text-primary-fixed-dim animate-pulse" />
    </div>

    <div
      class="p-4 flex-1 flex flex-col gap-3 font-mono text-xs relative z-10 bg-transparent"
    >
      <div class="flex flex-col gap-1">
        <div class="flex justify-between text-[11px] label-caps">
          <span>RSA_KEY_GENERATION_PROGRESS</span>
          <span class="text-primary-fixed-dim">{rsaProgress}%</span>
        </div>
        <div
          class="w-full h-3 border border-outline-variant bg-surface-container flex p-[1px] gap-[1px]"
        >
          {#each Array(20) as _, i}
            <div
              class="h-full flex-1 transition-all duration-150 {rsaProgress >=
              (i + 1) * 5
                ? 'bg-primary-fixed-dim'
                : 'bg-outline-variant/20'}"
            ></div>
          {/each}
        </div>
      </div>

      <div class="grid grid-cols-2 gap-4 mt-2">
        <div
          class="flex flex-col gap-1 border border-outline-variant p-2 bg-surface-container-lowest/55"
        >
          <span class="text-[9px] opacity-60">CIPHER_STATUS</span>
          <span
            class="text-primary-fixed-dim uppercase tracking-wider text-[10px] truncate"
            >{statusLog}</span
          >
        </div>
        <div
          class="flex flex-col gap-1 border border-outline-variant p-2 bg-surface-container-lowest/55"
        >
          <span class="text-[9px] opacity-60">DYNAMIC_HASH</span>
          <span class="text-primary-fixed-dim text-[10px] truncate font-mono"
            >{currentHash}</span
          >
        </div>
      </div>

      <div
        class="border border-outline-variant p-2 flex flex-col gap-1 bg-surface-container-lowest/55 flex-1 min-h-0"
      >
        <span class="text-[9px] opacity-60">ENTROPY_BUFFER_STREAM</span>
        <div
          class="text-[10px] text-primary/60 font-mono break-all line-clamp-2 select-none overflow-hidden h-full"
        >
          {entropyBuffer}
        </div>
      </div>

      <div
        class="flex flex-row justify-between text-[9px] opacity-60 border-t border-outline-variant pt-2 mt-auto"
      >
        <span>INIT_START: 0.00ms</span>
        <span>Buffer: 4096kb</span>
        <span>hash: sha-512</span>
      </div>
    </div>
  </div>
</div>
