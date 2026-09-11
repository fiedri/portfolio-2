<script lang="ts">

  import { navAudioService } from "$lib/ui/components/audio.svelte";
  import { m } from "$lib/paraglide/messages.js";

  interface Props {
    routes: { href: string; label: string }[];
    activePath: string;
    open: boolean;
    onClose: () => void;
    currentLocale: string;
    onToggleLocale: () => void;
  }

  let { routes, activePath, open, onClose, currentLocale, onToggleLocale }: Props = $props();

  function flipDown(
    node: HTMLElement,
    { duration = 300 }: { duration?: number } = {},
  ) {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return { duration: 0 };
    }

    return {
      duration,
      css: (t: number) =>
        `transform: rotateX(${(1 - t) * -90}deg); opacity: ${t};`,
    };
  }

</script>

<div class="absolute inset-0 md:hidden [perspective:600px] pointer-events-none z-50">
  {#if open}
    <div
      class="absolute top-9 inset-x-0 bottom-0 z-40 pointer-events-auto"
      onclick={onClose}
      aria-hidden="true"
    ></div>

    <nav
      transition:flipDown
      onintrostart={() => navAudioService.play()}
      class="absolute top-9 inset-x-0 z-50 bg-background border-b-2 border-outline-variant origin-top will-change-transform pointer-events-auto"
      aria-label={m.main_navigation()}
    >
      <div class="p-3.5">
        <div class="h-16">
          <p class="font-bold text-sm">OPERATOR_ID: FRIEDRICH</p>
          <p class="text-xs font-normal">AUTHENTICATED_SESSION</p>
        </div>
        <nav>
          <ul>
            <li
              class="hover:bg-primary/30 {activePath == '/'
                ? 'bg-primary/30'
                : ''}"
            >
              <a
                href="/"
                class="h-full w-full block py-1"
                onclick={() => {
                  onClose();
                }}
              >
                {#if activePath == "/"}
                  <span class="animate-pulse">> </span>
                {/if}
                /root/dashboard
              </a>
            </li>
            {#each routes as route, i}
              <li
                class="hover:bg-primary/30 {activePath.startsWith(route.href)
                  ? 'bg-primary/30'
                  : ''}"
              >
                <a
                  href={route.href}
                  class="h-full w-full block py-1"
                  onclick={() => {
                    onClose();
                  }}
                >
                  {#if activePath.startsWith(route.href)}
                    <span class="animate-pulse">> </span>
                  {/if}
                  {route.label}
                </a>
              </li>
            {/each}
          </ul>
        </nav>
        <div class="mt-auto border-t border-outline-variant pt-4 flex flex-col gap-3">
          <button
            class="border border-outline-variant hover:bg-primary/30 px-2 py-1 text-xs font-mono tracking-widest flex items-center justify-center gap-1.5 w-fit cursor-pointer"
            aria-label={m.switch_language()}
            onclick={onToggleLocale}
          >
            <span class={currentLocale === "en" ? "text-primary-fixed-dim" : "opacity-40"}>EN</span>
            <span class="opacity-30">|</span>
            <span class={currentLocale === "es" ? "text-primary-fixed-dim" : "opacity-40"}>ES</span>
          </button>
          <div>
            <p class="text-xs text-on-surface-variant">NETWORK_LOAD</p>
          <div class="flex gap-1 h-2">
            <div class="flex-1 bg-primary-container"></div>
            <div class="flex-1 bg-primary-container"></div>
            <div class="flex-1 bg-primary-container"></div>
            <div class="flex-1 bg-surface-variant"></div>
            <div class="flex-1 bg-surface-variant"></div>
          </div>
          </div>
        </div>
      </div>
    </nav>
  {/if}
</div>
