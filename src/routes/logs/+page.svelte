<script lang="ts">
  import { SquareArrowOutUpRight } from "@lucide/svelte";
  import { m } from "$lib/paraglide/messages.js";

  const certificates = [
    {
      title: "Legacy Responsive Web Design",
      date: 2024,
      issuer: "freeCodeCamp",
      issuerLogo: "/certificates/logo.webp",
      verifyLink: "https://www.freecodecamp.org/certification/friedrichruiz/responsive-web-design",
    },
    {
      title: "Relational Databases",
      date: 2026,
      issuer: "freeCodeCamp",
      issuerLogo: "/certificates/logo.webp",
      verifyLink: "https://www.freecodecamp.org/certification/friedrichruiz/relational-database-v8",
    },
    {
      title: "Solana LATAM Builders Bootcamp",
      date: 2026,
      issuer: "Way Learn",
      issuerLogo: "https://images.seeklogo.com/logo-png/42/2/solana-sol-logo-png_seeklogo-423095.png",
      verifyLink: "/certificates/certificado_solana.png",
    },
    {
      title: "Servicio Tecnico a equipos y usuario",
      date: 2026,
      issuer: "Universidad Politécnica Territorial de Falcón 'Alonso Gamero'",
      issuerLogo: "",
      verifyLink: "/certificates/certificacion_servicio_tecnico.jpeg",
    },
  ];
</script>

<div class="flex flex-col min-h-full p-5 gap-5">
  <div class="bg-surface-container relative">
    <div class="absolute right-0 flex flex-col text-[8px] text-right mt-1 mr-1">
      <span>REF: CRT-901</span>
    </div>
    <div class="pl-5 py-2 flex flex-col gap-2">
      <h2 class="uppercase text-xl font-bold">{m.logs_title()}</h2>
      <p class="text-xs">
        {m.logs_intro()}
        <span class="w-2 h-4 bg-primary-fixed-dim animate-blink flex-shrink-0 inline-block"></span>
      </p>
    </div>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    {#each certificates as cert (cert.title)}
      <div class="border border-outline-variant bg-surface-container-low p-4 flex flex-col gap-3">
        <div class="flex items-start gap-3">
          {#if cert.issuerLogo}
            <img
              src={cert.issuerLogo}
              alt={cert.issuer}
              class="w-10 h-10 border border-outline-variant bg-white object-contain shrink-0"
            />
          {:else}
            <div class="w-10 h-10 border border-outline-variant bg-surface-container-highest flex items-center justify-center shrink-0">
              <span class="text-[10px] text-on-surface-variant font-bold">{cert.issuer.slice(0,2).toUpperCase()}</span>
            </div>
          {/if}
          <div class="flex flex-col gap-0.5 min-w-0">
            <span class="block text-sm font-semibold tracking-wide uppercase">{cert.title}</span>
            <span class="block text-[10px] text-on-surface-variant">{cert.issuer}</span>
            <span class="block text-[9px] opacity-50">{cert.date}</span>
          </div>
        </div>
        <div class="flex justify-end border-t border-outline-variant pt-3">
          <a
            href={cert.verifyLink}
            target="_blank"
            class="inline-flex items-center gap-1.5 px-3 py-2 border border-outline-variant hover:bg-white/10 text-primary-fixed-dim hover:text-primary transition-colors rounded-none outline-none focus:outline-none text-[9px] font-bold tracking-widest"
            title={m.logs_tooltip_verify()}
          >
            [VERIFY]<SquareArrowOutUpRight class="h-4 w-4" />
          </a>
        </div>
      </div>
    {/each}
  </div>
  <div class="flex flex-col gap-5">
    <span class="bg-outline-variant text-background px-2 text-[10px] font-bold inline-block self-start">// CORE_BENEFITS</span>
    <div class="flex flex-col gap-3">
      {#each [1, 2, 3] as n}
        <div class="border border-outline-variant bg-surface-container-low p-4 flex flex-col gap-1.5">
          <span class="text-[9px] font-mono opacity-60">0x0{n}</span>
          <span class="text-sm font-semibold text-primary-fixed-dim">
            {#if n === 1}{m.logs_benefit_1_name()}{:else if n === 2}{m.logs_benefit_2_name()}{:else}{m.logs_benefit_3_name()}{/if}
          </span>
          <p class="text-xs text-on-surface-variant">
            {#if n === 1}{m.logs_benefit_1_desc()}{:else if n === 2}{m.logs_benefit_2_desc()}{:else}{m.logs_benefit_3_desc()}{/if}
          </p>
        </div>
      {/each}
    </div>
  </div>
</div>
