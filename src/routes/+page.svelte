<script lang="ts">
  import { DownloadIcon } from "@lucide/svelte";
  import { m } from "$lib/paraglide/messages.js";

  interface LogEntry {
    time: string;
    message: string;
  }

  let specs = [
    { title: m.dashboard_spec_name(), value: "Friedrich Ruiz", style: "font-extrabold" },
    { title: m.dashboard_spec_role(), value: "junior_full_stack_dev" },
    { title: m.dashboard_spec_location(), value: "coro_vz" },
    { title: m.dashboard_spec_core_stack(), value: "sveltekit // tailwind // drizzle" },
    {
      title: m.dashboard_spec_status(),
      value: "Active_Code_evolution",
      style: "text-primary-container",
    },
  ];

  const messages = [
    m.dashboard_log_lines_0(),
    m.dashboard_log_lines_1(),
    m.dashboard_log_lines_2(),
    m.dashboard_log_lines_3(),
    m.dashboard_log_lines_4(),
    m.dashboard_log_lines_5(),
    m.dashboard_log_lines_6(),
    m.dashboard_log_lines_7(),
    m.dashboard_log_lines_8(),
    m.dashboard_log_lines_9(),
    m.dashboard_log_lines_10(),
    m.dashboard_log_lines_11(),
    m.dashboard_log_lines_12(),
    m.dashboard_log_lines_13(),
  ];

  function getFormattedTime(date: Date) {
    const hh = String(date.getHours()).padStart(2, "0");
    const mm = String(date.getMinutes()).padStart(2, "0");
    const ss = String(date.getSeconds()).padStart(2, "0");
    return `${hh}:${mm}:${ss}`;
  }

  const initialLogs: LogEntry[] = [];
  const now = new Date();
  for (let i = 3; i >= 0; i--) {
    const time = new Date(now.getTime() - i * 4000);
    const randomMsg = messages[Math.floor(Math.random() * messages.length)];
    initialLogs.push({
      time: getFormattedTime(time),
      message: randomMsg,
    });
  }

  let logs = $state<LogEntry[]>(initialLogs);

  function addLog() {
    const randomMsg = messages[Math.floor(Math.random() * messages.length)];
    const newLog = {
      time: getFormattedTime(new Date()),
      message: randomMsg,
    };
    logs = [...logs, newLog].slice(-8);
  }

  $effect(() => {
    const interval = setInterval(() => {
      addLog();
    }, 4000);
    return () => {
      clearInterval(interval);
    };
  });
</script>

<div class="flex flex-col h-full">
  <div class="px-5 relative py-1">
    <span class="absolute right-0 text-[8px] text-outline-variant mt-1.5 mr-1.5"
      >SEC_LEVEL_01</span
    >
    <div class="w-full md:w-3/4">
      <h1 class="text-2xl leading-tight break-words md:text-4xl font-bold">
        NEURAL_LINK_ESTABLISHED // ACCESS_GRANTED
      </h1>
      <p class="text-xs">
        <span class="animate-pulse text-primary-fixed-dim"
          >TO OPERATOR_ID: FRIEDRICH. Awaiting system command secuences for
          structural diagnostics.</span
        ><span
          class="w-2 h-4 bg-primary-fixed-dim animate-blink flex-shrink-0 inline-block"
        ></span>
      </p>
    </div>
  </div>

  <div
    class="grid grid-cols-1 md:grid-cols-2 grid-rows-1 gap-0 border-t-3 border-outline-variant flex-grow"
  >
    <section class="border-b md:border-b-0 md:border-r border-outline-variant flex flex-col">
      <span
        class="bg-outline-variant text-background font-normal px-2 text-[10px] font-bold inline-block self-start"
      >
        // OPERATOR_SPECS
      </span>
      <div class="px-5 py-2 flex flex-col gap-2.5">
        {#each specs as spec}
          <div
            class="uppercase flex flex-col border-l border-primary-fixed-dim p-1.5"
          >
            <span class="text-xs text-primary/70">{spec.title}:</span>
            <span class="{spec.style} text-xs font-bold">{spec.value}</span>
          </div>
        {/each}
        <a
          href="/Friedrich_Ruiz-Curriculum.pdf"
          download
          aria-label="Download CV"
          class="inline-flex items-center gap-1.5 self-start mt-1.5 px-2.5 py-1.5 border border-primary-fixed-dim bg-primary text-background hover:bg-primary-fixed-dim hover:text-on-primary transition-colors rounded-none outline-none focus:outline-none text-[10px] font-bold tracking-widest uppercase"
        >
          <DownloadIcon class="h-3.5 w-3.5" />
          CV
        </a>
      </div>
    </section>

    <section
      class="md:border-r border-outline-variant flex flex-col bg-surface-container-lowest overflow-hidden min-h-40 md:min-h-0"
    >
      <span
        class="bg-outline-variant text-background font-normal px-2 text-[10px] font-bold inline-block self-start"
      >
        // LIVE_TELEMETRY_STREAM
      </span>
      <div
        class="px-5 py-3 flex flex-col gap-1 font-mono text-xs flex-grow overflow-y-auto"
      >
        {#each logs as log}
          <p class="whitespace-pre-wrap leading-relaxed">
            <span class=" font-semibold">[{log.time}]</span>
            <span class="text-primary-fixed-dim uppercase">inf:</span>
            <span class=" flex-grow">{log.message}.</span>
          </p>
        {/each}
        <div class="flex items-center gap-1.5 text-primary-fixed-dim mt-1">
          <span class="animate-pulse">></span>
          <span
            class="animate-blink bg-primary-fixed-dim h-4 w-1.5 inline-block"
          ></span>
        </div>
      </div>
    </section>
  </div>
</div>
