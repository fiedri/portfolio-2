<svelte:head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" />
</svelte:head>

<script lang="ts">
  import { m } from "$lib/paraglide/messages.js";

  interface SkillItem {
    icon: string;
    name: string;
  }

  interface SkillGroup {
    skillsTitle: string;
    skillsList: SkillItem[];
  }

  const skills: SkillGroup[] = [
    {
      skillsTitle: m.skills_group_frontend(),
      skillsList: [
        { icon: "devicon-html5-plain", name: "HTML5" },
        { icon: "devicon-css3-plain", name: "CSS3" },
        { icon: "devicon-javascript-plain", name: "JavaScript" },
        { icon: "devicon-typescript-plain", name: "TypeScript" },
        { icon: "devicon-svelte-plain", name: "Svelte / SvelteKit" },
        { icon: "devicon-react-original", name: "React" },
        { icon: "devicon-tailwindcss-plain", name: "Tailwind CSS" },
      ],
    },
    {
      skillsTitle: m.skills_group_backend(),
      skillsList: [
        { icon: "devicon-nodejs-plain", name: "Node.js" },
        { icon: "devicon-express-original", name: "Express.js" },
        { icon: "devicon-mongodb-plain", name: "MongoDB" },
        { icon: "devicon-postgresql-plain", name: "PostgreSQL/SQL" },
        { icon: "fa-solid fa-database", name: "Drizzle ORM" },
      ],
    },
    {
      skillsTitle: m.skills_group_other(),
      skillsList: [{ icon: "devicon-git-plain", name: "Git" }],
    },
  ];
</script>

<div class="flex flex-col min-h-full p-5 gap-5">
  <div class="bg-surface-container relative">
    <div class="absolute right-0 flex flex-col text-[8px] text-right mt-1 mr-1">
      <span>REF: SKL-333</span>
    </div>
    <div class="pl-5 py-2 flex flex-col gap-2">
      <h2 class="uppercase text-xl font-bold">{m.skills_title()}</h2>
      <p class="text-xs">
        {m.skills_intro()}
        <span class="w-2 h-4 bg-primary-fixed-dim animate-blink flex-shrink-0 inline-block"></span>
      </p>
    </div>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    {#each skills as group (group.skillsTitle)}
      <div class="border border-outline-variant bg-surface-container-low flex flex-col overflow-hidden h-fit">
        <div class="bg-surface-variant px-4 py-2 border-b border-outline-variant text-[10px] font-bold tracking-widest uppercase">
          // {group.skillsTitle.toUpperCase()}
        </div>
        <div class="p-4 flex flex-wrap gap-2">
          {#each group.skillsList as skill (skill.name)}
            <div class="border border-outline-variant bg-surface-container-lowest p-2 flex items-center gap-2">
              <i class="{skill.icon} text-xl text-primary-fixed-dim shrink-0"></i>
              <span class="text-[10px] uppercase tracking-wide">{skill.name}</span>
            </div>
          {/each}
        </div>
      </div>
    {/each}
  </div>
</div>
