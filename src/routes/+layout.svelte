<script lang="ts">
  import "./layout.css";
  import TvGlitchOverlay from "$lib/ui/components/TvGlitchOverlay.svelte";
  import { navigating, page } from "$app/stores";
  import { CpuIcon, RadioIcon, Clock4Icon, MenuIcon, XIcon } from "@lucide/svelte";
  import MobileNav from "$lib/ui/components/MobileNav.svelte";
  import { getLocale, setLocale, deLocalizeUrl } from "$lib/paraglide/runtime.js";
  import { m } from "$lib/paraglide/messages.js";
  let { children } = $props();
  let mobileNavOpen = $state(false);
  let ActiveRoute = $derived(deLocalizeUrl($page.url).pathname);
  import { fade } from "svelte/transition";
  const currentLocale = $derived(getLocale());
  const toggleLocale = () => setLocale(currentLocale === "en" ? "es" : "en");
  const routes = [
    { href: "/projects", label: "/root/projects" },
    { href: "/skills", label: "/root/skills" },
    { href: "/logs", label: "/root/logs" },
    { href: "/contact", label: "/root/contact" },
  ];
  $inspect(ActiveRoute);
  const isChangingRoute = $derived(!!$navigating);
</script>

<svelte:head>
  <link rel="icon" type="image/webp" href="/foto.webp" />
  <link rel="icon" href="/foto.webp" />
  <title>{m.seo_title()}</title>
  <meta name="description" content={m.seo_description()} />
  <meta name="theme-color" content="#0c160a" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://friedrichruiz.netlify.app/" />
  <meta property="og:title" content={m.seo_title()} />
  <meta property="og:description" content={m.seo_description()} />
  <meta property="og:image" content="https://friedrichruiz.netlify.app/snapshot.png" />
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content="https://friedrichruiz.netlify.app/" />
  <meta property="twitter:title" content={m.seo_title()} />
  <meta property="twitter:description" content={m.seo_description()} />
  <meta property="twitter:image" content="https://friedrichruiz.netlify.app/snapshot.png" />
</svelte:head>
<div class="h-screen w-screen flex flex-col overflow-hidden relative">
  <header
    class="border-b-2 border-outline-variant h-9 flex flex-row justify-between items-center"
  >
    <div class="flex flex-row gap-3 hover:cursor-alias">
      <h1 class="text-base md:text-xl font-bold">SYS_HUD_v4.0.1</h1>
      <div
        class="border hover:border-primary-fixed-dim border-on-primary text-primary-fixed-dim text-sm flex items-center h-5 px-1.5 my-auto hidden md:flex"
      >
        <div class="bg-primary-fixed-dim p-1 mr-2 my-auto animate-pulse">
          <!--
animate-pulse da un efecto de breathing
-->
        </div>
        <span class="text-xs">SYSTEM_STATUS: OK</span>
      </div>
    </div>
    <div class="flex flex-row gap-3.5 px-2 hidden sm:flex">
      <button
        class="border border-outline-variant hover:bg-primary/30 px-2 text-xs font-mono tracking-widest flex items-center gap-1.5 cursor-pointer"
        aria-label="Switch language"
        onclick={toggleLocale}
      >
        <span class={currentLocale === "en" ? "text-primary-fixed-dim" : "opacity-40"}>EN</span>
        <span class="opacity-30">|</span>
        <span class={currentLocale === "es" ? "text-primary-fixed-dim" : "opacity-40"}>ES</span>
      </button>
      <button class="hover:bg-primary/30 p-1.5" aria-label="Processor status" onclick={() => {}}>
        <CpuIcon />
      </button>
      <button class="hover:bg-primary/30 p-1.5" aria-label="Radio status" onclick={() => {}}>
        <RadioIcon />
      </button>
      <button class="hover:bg-primary/30 p-1.5" aria-label="Clock" onclick={() => {}}>
        <Clock4Icon />
      </button>
    </div>
    <button
      class="md:hidden hover:bg-primary/30 p-1.5"
      aria-label="Toggle navigation menu"
      aria-expanded={mobileNavOpen}
      onclick={() => (mobileNavOpen = !mobileNavOpen)}
    >
      {#if mobileNavOpen}
        <XIcon />
      {:else}
        <MenuIcon />
      {/if}
    </button>
  </header>
  <div class="flex-grow flex flex-row min-h-0">
    <aside class="w-50 h-full p-3.5 flex-shrink-0 hidden md:block">
      <div class="h-16">
        <p class="font-bold text-sm">OPERATOR_ID: FRIEDRICH</p>
        <p class="text-xs font-normal">AUTHENTICATED_SESSION</p>
      </div>
      <nav>
        <ul>
          <li
            class="hover:bg-primary/30 {ActiveRoute == '/'
              ? 'bg-primary/30'
              : ''}"
          >
            <a href="/" class="h-full w-full block py-1">
              {#if ActiveRoute == "/"}
                <span class="animate-pulse" transition:fade>> </span>
              {/if}
              /root/dashboard</a
            >
          </li>
          {#each routes as route}
            <li
              class="hover:bg-primary/30 {ActiveRoute.startsWith(route.href)
                ? 'bg-primary/30'
                : ''}"
            >
              <a href={route.href} class="h-full w-full block py-1">
                {#if ActiveRoute.startsWith(route.href)}
                  <span class="animate-pulse" transition:fade>> </span>
                {/if}
                {route.label}
              </a>
            </li>
          {/each}
        </ul>
      </nav>
    </aside>

    <main
      class="relative flex-grow h-full border-2 border-outline-variant overflow-auto"
    >
      {#if isChangingRoute}
        <!-- AQUI VA EL OVERLAY -->
        <div
          class="absolute inset-0 pointer-events-none z-50"
          out:fade={{ duration: 200 }}
        >
          <TvGlitchOverlay />
        </div>
      {/if}
      {@render children()}
    </main>
  </div>

  <MobileNav {routes} activePath={ActiveRoute} open={mobileNavOpen} onClose={() => (mobileNavOpen = false)} currentLocale={currentLocale} onToggleLocale={toggleLocale} />

  <footer
    class="h-8 text-xs flex-shrink-0 border-t border-outline-variant flex flex-row justify-between items-center"
  >
    <span class="text-secondary">STN_ID: PROT_443 // KERNEL: 6.2.0</span>
    <div class="flex flex-row gap-5">
      <span>LOG_LEVEL: VERBOSE</span>
      <span>ENCODING: UTF-8</span>
      <div class="animate-pulse flex flex-row items-center gap-2">
        <span
          class="rounded-full h-1.5 w-1.5 bg-primary inline-block flex-shrink-0"
        ></span>
        <span>UPTIME: 334:12:09</span>
      </div>
    </div>
  </footer>
</div>
