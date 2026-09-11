<script lang="ts">
  import type { Project } from "$lib/interfaces/projects";
  import { SquareArrowOutUpRight, HistoryIcon } from "@lucide/svelte";
  import { m } from "$lib/paraglide/messages.js";

  let projects: Project[] = [
    {
      id: "VIB-007",
      title: "VIBE",
      description: m.projects_vibe_description(),
      stack: ["Svelte", "Capacitor", "Android"],
      status: "SUCCESS",
      github_link: "https://github.com/fiedri/vibe-player",
      view_link: "https://f-droid.org/packages/dev.fiedri.vibe/",
    },
    {
      id: "ANM-001",
      title: "ANIME_BEATS",
      description: m.projects_anime_beats_description(),
      stack: ["SvelteKit", "MongoDB"],
      status: "SUCCESS",
      github_link: "https://github.com/fiedri/AnimeBeats",
      view_link: "https://animebeats.netlify.app/",
    },
    {
      id: "BBH-002",
      title: "BARBER_HERO",
      description: m.projects_barber_hero_description(),
      stack: ["JavaScript", "Svelte", "CSS"],
      status: "SUCCESS",
      github_link: "https://github.com/fiedri/barberHero.git",
      view_link: "https://barberhero.netlify.app/",
    },
    {
      id: "SPT-003",
      title: "SPOTIFY_CLONE",
      description: m.projects_spotify_clone_description(),
      stack: ["SvelteKit", "TypeScript", "Tailwind"],
      status: "SUCCESS",
      github_link: "https://github.com/fiedri/spotify_clone",
      view_link: "https://clone-spo-friedrich.netlify.app/",
    },
    {
      id: "PKD-004",
      title: "POKEDEX",
      description: m.projects_pokedex_description(),
      stack: ["JavaScript", "HTML", "CSS"],
      status: "SUCCESS",
      github_link: "https://github.com/fiedri/pokedex.git",
      view_link: "https://pokephiexd.netlify.app/",
    },
    {
      id: "RTB-005",
      title: "ROOT_BLOCKER",
      description: m.projects_root_blocker_description(),
      stack: ["JavaScript", "extension"],
      status: "NO_DEPLOY",
      github_link: "https://github.com/fiedri/root-blocker.git",
      view_link: undefined,
    },
    {
      id: "SNK-006",
      title: "SNAKE_GAME",
      description: m.projects_snake_game_description(),
      stack: ["JavaScript", "game"],
      status: "SUCCESS",
      github_link: "https://github.com/fiedri/Juego-snake.git",
      view_link: "https://cyberworm.netlify.app/",
    },
  ];
</script>

<div class="flex flex-col min-h-full p-5 gap-5">
  <div class="bg-surface-container relative">
    <div class="sm:absolute right-0 flex flex-col text-[8px] text-right mt-1 mr-1">
      <span>REF: PX-990</span>
    </div>
    <div class="pl-5 py-2 flex flex-col gap-2">
      <h2 class="uppercase text-xl font-bold">{m.projects_title()}</h2>
      <p class="text-xs">
        {m.projects_intro()}
        <span
          class="w-2 h-4 bg-primary-fixed-dim animate-blink flex-shrink-0 inline-block"
        ></span>
      </p>
    </div>
  </div>
  <div>
    <div class="md:hidden flex flex-col gap-4">
      {#each projects as project (project.id)}
        <div class="border border-outline-variant bg-surface-container-low p-4 flex flex-col gap-3">
          <div class="flex justify-between items-start gap-2">
            <div>
              <span class="block text-sm font-semibold tracking-wide uppercase">{project.title}</span>
              <span class="block text-[10px] opacity-70 font-light mt-0.5">{project.description}</span>
            </div>
            <div class="flex items-center gap-2 font-medium tracking-wider text-[10px]">
              <span class="h-2 w-2 inline-block {project.status === 'SUCCESS' ? 'bg-green-500' : 'bg-amber-500 animate-pulse'}"></span>
              <span class="{project.status === 'SUCCESS' ? 'text-green-500' : 'text-amber-500'}">{project.status}</span>
            </div>
          </div>
          <div class="flex flex-row flex-wrap gap-1.5">
            {#each project.stack as tech}
              <span class="border border-outline-variant bg-white/5 px-1.5 py-0.5 text-[9px] uppercase tracking-wide rounded-none">{tech}</span>
            {/each}
          </div>
          <div class="flex justify-end gap-2 border-t border-outline-variant pt-3">
            <a href={project.github_link} target="_blank" class="inline-flex items-center justify-center px-3 py-2 border border-outline-variant hover:bg-white/10 text-primary-fixed-dim hover:text-primary transition-colors rounded-none outline-none focus:outline-none text-[9px] font-bold tracking-widest" title={m.projects_tooltip_src()}>[SRC]</a>
            {#if project.view_link}
              <a href={project.view_link} target="_blank" class="inline-flex items-center justify-center p-2 border border-outline-variant hover:bg-white/10 text-white transition-colors rounded-none outline-none focus:outline-none" title={m.projects_tooltip_live()}>
                {#if project.status === 'SUCCESS'}<SquareArrowOutUpRight class="h-4 w-4" />{:else}<HistoryIcon class="h-4 w-4" />{/if}
              </a>
            {:else}
              <span class="inline-flex items-center justify-center p-2 border border-outline-variant/30 text-white/30 cursor-not-allowed select-none">
                {#if project.status === 'SUCCESS'}<SquareArrowOutUpRight class="h-4 w-4" />{:else}<HistoryIcon class="h-4 w-4" />{/if}
              </span>
            {/if}
          </div>
        </div>
      {/each}
    </div>
    <table class="hidden md:table w-full border-t border-x border-outline-variant">
      <thead>
        <tr
          class="border-b border-outline-variant tracking-wider uppercase opacity-80 text-[10px]
          text-left bg-primary/10
          "
        >
          <th class="font-extrabold pl-3.5">{m.projects_table_id()}</th>
          <th class="font-extrabold py-1">{m.projects_table_stack()}</th>
          <th class="font-extrabold py-1">{m.projects_table_status()}</th>
          <th class="font-extrabold py-1 text-right pr-3.5">{m.projects_table_action()}</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-outline-variant">
        {#each projects as project (project.id)}
          <tr class="border-b-2 border-outline-variant">
            <td class="pl-3.5 py-2.5">
              <span class="block text-sm font-semibold tracking-wide uppercase"
                >{project.title}</span
              >
              <span class="block text-[10px] opacity-70 font-light mt-0.5"
                >{project.description}</span
              >
            </td>
            <td class="">
              <div class="flex flex-row gap-1.5">
                {#each project.stack as tech}
                  <span
                    class="border border-outline-variant bg-white/5 px-1.5 py-0.5 text-[9px] uppercase tracking-wide rounded-none"
                  >
                    {tech}
                  </span>
                {/each}
              </div>
            </td>

            <td class="">
            <div class="flex items-center gap-2 font-medium tracking-wider text-[10px]">
              <!-- Cuadrito de estado animado u opaco -->
              <span class="h-2 w-2 inline-block {project.status === 'SUCCESS' ? 'bg-green-500' : 'bg-amber-500 animate-pulse'}"></span>
              <span class="{project.status === 'SUCCESS' ? 'text-green-500' : 'text-amber-500'}">
                {project.status}
              </span>
            </div>
          </td>

          <td class="text-right pr-3.5">
            <div class="inline-flex gap-2 items-center justify-end">
              <a 
                href={project.github_link} 
                target="_blank" 
                class="inline-flex items-center justify-center px-2 py-1.5 border border-outline-variant hover:bg-white/10 text-primary-fixed-dim hover:text-primary transition-colors rounded-none outline-none focus:outline-none text-[9px] font-bold tracking-widest"
                title={m.projects_tooltip_src()}
              >
                [SRC]
              </a>
              
              {#if project.view_link}
                <a 
                  href={project.view_link} 
                  target="_blank" 
                  class="inline-flex items-center justify-center p-2 border border-outline-variant hover:bg-white/10 text-white transition-colors rounded-none outline-none focus:outline-none"
                  title={m.projects_tooltip_live()}
                >
                  <!-- Icono dinámico según el estado (External Link o History) -->
                  {#if project.status === 'SUCCESS'}
                    <SquareArrowOutUpRight class="h-4 w-4" />
                  {:else}
                    <HistoryIcon class="h-4 w-4" />
                  {/if}
                </a>
              {:else}
                <span 
                  class="inline-flex items-center justify-center p-2 border border-outline-variant/30 text-white/30 cursor-not-allowed select-none"
                  title={m.projects_tooltip_no_deploy()}
                >
                  {#if project.status === 'SUCCESS'}
                    <SquareArrowOutUpRight class="h-4 w-4" />
                  {:else}
                    <HistoryIcon class="h-4 w-4" />
                  {/if}
                </span>
              {/if}
            </div>
          </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</div>
