// ============================================================================
// BOGATO UNIVERSE INTERACTIVE WIKI — FRONTEND ENGINE (js/app.js)
// ============================================================================

(function () {
  const DATA = window.BOGATO_DATA;

  // Application State
  const state = {
    activeTab: "atlas",           // 'atlas' | 'personajes' | 'magia' | 'arsenal' | 'guion' | 'archivo'
    selectedWorld: "bogato",      // 'bogato' | 'tierra'
    selectedPinId: "kharzuun",
    selectedCharId: "leo",
    selectedPhaseIdx: 0,
    duelPhase: 4,                 // 1..5 for Leo vs Marcos side-by-side comparator
    selectedMagicId: "fuego_naranja",
    itemFilter: "Todos",
    selectedChapterId: "prologo",
    selectedEnding: "canon",      // 'canon' | 'turista'
    archiveFilter: "Todos",
    searchQuery: ""
  };

  // Color helper maps
  const COLOR_BADGE = {
    orange: "bg-orange-500/20 text-orange-300 border-orange-500/40",
    green: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
    blue: "bg-sky-500/20 text-sky-300 border-sky-500/40",
    violet: "bg-purple-500/20 text-purple-300 border-purple-500/40"
  };

  const COLOR_PANEL = {
    orange: "glass-panel-orange",
    green: "glass-panel-green",
    blue: "glass-panel-blue",
    violet: "glass-panel-violet"
  };

  const COLOR_DOT = {
    orange: "bg-orange-500 border-amber-200 shadow-orange-500/50",
    green: "bg-emerald-500 border-emerald-200 shadow-emerald-500/50",
    blue: "bg-sky-400 border-sky-100 shadow-sky-400/50",
    violet: "bg-purple-500 border-purple-200 shadow-purple-500/50"
  };

  // Safe HTML escape
  function esc(str) {
    if (str === null || str === undefined) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  // Lightbox Modal for full-size images
  function openLightbox(src, caption) {
    const modal = document.getElementById("lightbox-modal");
    const img = document.getElementById("lightbox-img");
    const cap = document.getElementById("lightbox-caption");
    if (!modal || !img || !cap) return;
    img.src = src;
    cap.textContent = caption || "";
    modal.classList.remove("hidden");
    modal.classList.add("flex");
  }

  function closeLightbox() {
    const modal = document.getElementById("lightbox-modal");
    if (!modal) return;
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }

  window.openBogatoLightbox = openLightbox;
  window.closeBogatoLightbox = closeLightbox;

  // Navigation Switcher
  function setTab(tabName) {
    state.activeTab = tabName;
    renderNav();
    renderMain();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  window.setBogatoTab = setTab;

  // Global Search Handler
  function handleGlobalSearch(query) {
    state.searchQuery = (query || "").trim();
    const resultsBox = document.getElementById("global-search-results");
    if (!resultsBox) return;

    if (!state.searchQuery) {
      resultsBox.classList.add("hidden");
      resultsBox.innerHTML = "";
      return;
    }

    const q = state.searchQuery.toLowerCase();
    const matches = [];

    // 1. Locations
    Object.values(DATA.worlds).forEach((w) => {
      w.pins.forEach((p) => {
        if (
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.region.toLowerCase().includes(q)
        ) {
          matches.push({
            type: "Ubicación (" + (w.id === "bogato" ? "Mundo Bogato" : "Ciudad Bogato") + ")",
            title: p.name,
            subtitle: p.region,
            img: p.img,
            action: () => {
              state.selectedWorld = w.id;
              state.selectedPinId = p.id;
              setTab("atlas");
            }
          });
        }
      });
    });

    // 2. Characters & Phases
    DATA.characters.forEach((c) => {
      if (
        c.name.toLowerCase().includes(q) ||
        c.title.toLowerCase().includes(q) ||
        c.bio.toLowerCase().includes(q)
      ) {
        matches.push({
          type: "Personaje",
          title: c.name + " — " + c.title,
          subtitle: c.faction,
          img: c.phases[0].img,
          action: () => {
            state.selectedCharId = c.id;
            state.selectedPhaseIdx = 0;
            setTab("personajes");
          }
        });
      }
      c.phases.forEach((ph, idx) => {
        if (ph.name.toLowerCase().includes(q) || ph.lore.toLowerCase().includes(q)) {
          matches.push({
            type: "Fase de Personaje",
            title: c.name + ": " + ph.name,
            subtitle: ph.location,
            img: ph.img,
            action: () => {
              state.selectedCharId = c.id;
              state.selectedPhaseIdx = idx;
              setTab("personajes");
            }
          });
        }
      });
    });

    // 3. Items
    DATA.items.forEach((it) => {
      if (
        it.name.toLowerCase().includes(q) ||
        it.description.toLowerCase().includes(q) ||
        it.category.toLowerCase().includes(q)
      ) {
        matches.push({
          type: "Arsenal / Item",
          title: it.name,
          subtitle: it.category,
          img: it.img,
          action: () => {
            state.itemFilter = "Todos";
            setTab("arsenal");
          }
        });
      }
    });

    // 4. Script Chapters
    DATA.scriptChapters.forEach((ch) => {
      const inScenes = ch.scenes.some(
        (s) => s.title.toLowerCase().includes(q) || s.details.toLowerCase().includes(q)
      );
      if (
        ch.title.toLowerCase().includes(q) ||
        ch.summary.toLowerCase().includes(q) ||
        inScenes
      ) {
        matches.push({
          type: "Guion Definitivo",
          title: ch.act + ": " + ch.title,
          subtitle: ch.location,
          img: ch.img,
          action: () => {
            state.selectedChapterId = ch.id;
            setTab("guion");
          }
        });
      }
    });

    // Render dropdown
    resultsBox.classList.remove("hidden");
    if (matches.length === 0) {
      resultsBox.innerHTML = `
        <div class="p-4 text-sm text-slate-400">
          No se encontraron entradas para <span class="text-orange-400 font-semibold">"${esc(state.searchQuery)}"</span>.
        </div>`;
      return;
    }

    window.__searchMatches = matches.slice(0, 10);
    resultsBox.innerHTML = `
      <div class="p-2 divide-y divide-slate-800/80 max-h-96 overflow-y-auto">
        <div class="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-400 flex justify-between items-center">
          <span>Resultados en la Wiki (${matches.length})</span>
          <button type="button" onclick="window.clearBogatoSearch()" class="text-orange-400 hover:underline">Cerrar</button>
        </div>
        ${window.__searchMatches
          .map(
            (m, i) => `
          <button type="button" onclick="window.triggerSearchMatch(${i})" class="w-full text-left px-3 py-2.5 hover:bg-slate-800/70 transition flex items-center gap-3 rounded-lg">
            <img src="${esc(m.img)}" alt="${esc(m.title)}" class="w-11 h-11 rounded-lg object-cover border border-slate-700 shrink-0" />
            <div class="min-w-0 flex-1">
              <div class="text-[11px] font-medium text-orange-400 uppercase tracking-wider">${esc(m.type)}</div>
              <div class="text-sm font-semibold text-white truncate">${esc(m.title)}</div>
              <div class="text-xs text-slate-400 truncate">${esc(m.subtitle)}</div>
            </div>
          </button>`
          )
          .join("")}
      </div>`;
  }

  window.triggerSearchMatch = function (idx) {
    const match = window.__searchMatches && window.__searchMatches[idx];
    const resultsBox = document.getElementById("global-search-results");
    if (resultsBox) resultsBox.classList.add("hidden");
    if (match && typeof match.action === "function") {
      match.action();
    }
  };

  window.clearBogatoSearch = function () {
    const input = document.getElementById("global-search-input");
    const resultsBox = document.getElementById("global-search-results");
    if (input) input.value = "";
    if (resultsBox) resultsBox.classList.add("hidden");
    state.searchQuery = "";
  };

  // Render Top Navigation Tabs
  function renderNav() {
    const tabs = [
      { id: "atlas", label: "🗺️ Atlas Dual (2 Mundos)", badge: "11 Zonas" },
      { id: "personajes", label: "⚔️ Personajes & Fases", badge: "Evolución 1–5" },
      { id: "magia", label: "🔥 Cosmología & Magia", badge: "4 Fuegos" },
      { id: "arsenal", label: "🛡️ Arsenal, Items & Bestiario", badge: "8 Categorías" },
      { id: "guion", label: "📜 Guion Definitivo", badge: "3 Actos + Epílogo" },
      { id: "archivo", label: "🏛️ Archivo HK (2018–2026)", badge: "16 Piezas + Spin-offs" }
    ];

    const navContainer = document.getElementById("wiki-nav-tabs");
    if (!navContainer) return;

    navContainer.innerHTML = tabs
      .map((t) => {
        const active = state.activeTab === t.id;
        return `
          <button
            type="button"
            onclick="window.setBogatoTab('${t.id}')"
            class="px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition flex items-center gap-2 whitespace-nowrap border ${
              active
                ? "bg-gradient-to-r from-orange-500/25 via-amber-500/20 to-purple-500/25 text-white border-orange-500/60 shadow-lg shadow-orange-500/10"
                : "bg-slate-900/70 text-slate-300 border-slate-800 hover:border-slate-700 hover:text-white"
            }"
          >
            <span>${t.label}</span>
            <span class="hidden md:inline-block text-[10px] px-2 py-0.5 rounded-full ${
              active ? "bg-orange-500 text-slate-950 font-bold" : "bg-slate-800 text-slate-400"
            }">${t.badge}</span>
          </button>
        `;
      })
      .join("");
  }

  // ==========================================================================
  // SECTION 1: ATLAS INTERACTIVO DE LOS DOS MUNDOS
  // ==========================================================================
  function renderAtlasSection() {
    const world = DATA.worlds[state.selectedWorld] || DATA.worlds.bogato;
    const selectedPin =
      world.pins.find((p) => p.id === state.selectedPinId) || world.pins[0];

    return `
      <div class="wiki-section space-y-6">
        <!-- World Switcher Banner -->
        <div class="glass-panel rounded-2xl p-4 sm:p-6 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 border border-purple-500/25">
          <div>
            <div class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-orange-400 mb-1">
              <span>Ley de la Resonancia Dual</span>
              <span>•</span>
              <span>Espejo Dimensional</span>
            </div>
            <h2 class="text-xl sm:text-2xl font-bold text-white">${esc(world.name)}</h2>
            <p class="text-sm text-slate-300 mt-1 max-w-3xl">${esc(world.summary)}</p>
          </div>

          <div class="flex flex-wrap sm:flex-nowrap gap-2 shrink-0">
            <button
              type="button"
              onclick="window.switchAtlasWorld('bogato')"
              class="flex-1 sm:flex-initial px-4 py-3 rounded-xl text-xs sm:text-sm font-bold transition border flex items-center justify-center gap-2 ${
                state.selectedWorld === "bogato"
                  ? "bg-gradient-to-r from-purple-600 to-orange-500 text-white border-orange-400 shadow-lg shadow-purple-500/20"
                  : "bg-slate-900/90 text-slate-300 border-slate-700 hover:border-purple-400"
              }"
            >
              <span>🌋 Mundo Bogato (Islas del Fulgor)</span>
            </button>
            <button
              type="button"
              onclick="window.switchAtlasWorld('tierra')"
              class="flex-1 sm:flex-initial px-4 py-3 rounded-xl text-xs sm:text-sm font-bold transition border flex items-center justify-center gap-2 ${
                state.selectedWorld === "tierra"
                  ? "bg-gradient-to-r from-sky-600 to-indigo-600 text-white border-sky-400 shadow-lg shadow-sky-500/20"
                  : "bg-slate-900/90 text-slate-300 border-slate-700 hover:border-sky-400"
              }"
            >
              <span>🏙️ Plano Terrenal (Ciudad Bogato)</span>
            </button>
          </div>
        </div>

        <!-- Interactive Map + Inspector Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <!-- Left: Interactive Map Canvas (7 cols) -->
          <div class="lg:col-span-7 space-y-4">
            <div class="glass-panel rounded-2xl p-3 sm:p-4 border border-slate-800">
              <div class="flex flex-wrap items-center justify-between gap-2 mb-3 px-1">
                <span class="text-xs font-semibold uppercase tracking-wider text-slate-300">
                  📍 Hacé clic en cualquier marcador del mapa para inspeccionar su lore e imágenes
                </span>
                <span class="text-xs text-orange-400 font-medium">
                  ${world.pins.length} nodos activos
                </span>
              </div>

              <!-- Map Container with interactive pins -->
              <div class="relative w-full overflow-hidden rounded-xl border border-slate-700/80 bg-slate-950 aspect-[4/3]">
                <img
                  src="${esc(world.mapImg)}"
                  alt="${esc(world.name)}"
                  class="w-full h-full object-cover opacity-90"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/30 pointer-events-none"></div>

                ${world.pins
                  .map((pin, idx) => {
                    const isSelected = pin.id === selectedPin.id;
                    const dotClass = COLOR_DOT[pin.color] || COLOR_DOT.orange;
                    return `
                      <button
                        type="button"
                        onclick="window.selectAtlasPin('${pin.id}')"
                        style="left: ${pin.x}%; top: ${pin.y}%;"
                        class="map-pin group focus:outline-none"
                        title="${esc(pin.name)}"
                      >
                        ${
                          isSelected
                            ? `<span class="map-pin-ring border-2 border-white bg-orange-400/30"></span>`
                            : ""
                        }
                        <span class="relative flex items-center justify-center w-8 h-8 rounded-full border-2 shadow-lg transition ${dotClass} ${
                      isSelected ? "scale-125 ring-4 ring-white/30" : "opacity-90 hover:opacity-100"
                    }">
                          <span class="text-xs font-black text-slate-950">${idx + 1}</span>
                        </span>
                        <span class="mt-1 px-2 py-0.5 rounded-md text-[11px] font-bold whitespace-nowrap shadow-md block transition ${
                          isSelected
                            ? "bg-white text-slate-950"
                            : "bg-slate-950/90 text-slate-200 border border-slate-700 group-hover:border-orange-400"
                        }">
                          ${esc(pin.name)}
                        </span>
                      </button>
                    `;
                  })
                  .join("")}
              </div>

              <!-- Quick Pin Selector Pills -->
              <div class="mt-4 flex flex-wrap gap-2">
                ${world.pins
                  .map((pin, idx) => {
                    const isSelected = pin.id === selectedPin.id;
                    return `
                      <button
                        type="button"
                        onclick="window.selectAtlasPin('${pin.id}')"
                        class="px-3 py-1.5 rounded-lg text-xs font-semibold transition border ${
                          isSelected
                            ? "bg-orange-500 text-slate-950 border-orange-300 font-bold"
                            : "bg-slate-900/80 text-slate-300 border-slate-800 hover:border-slate-600"
                        }"
                      >
                        ${idx + 1}. ${esc(pin.name)}
                      </button>
                    `;
                  })
                  .join("")}
              </div>
            </div>

            <!-- Secondary Map / Architectural Reference Card -->
            <div class="glass-panel rounded-2xl p-4 border border-slate-800 flex flex-col sm:flex-row items-center gap-4">
              <img
                src="${esc(world.secondaryMapImg)}"
                alt="Referencia secundaria del mapa"
                onclick="window.openBogatoLightbox('${esc(world.secondaryMapImg)}', '${esc(world.secondaryCaption)}')"
                class="w-full sm:w-48 h-32 object-cover rounded-xl border border-slate-700 zoomable-img shrink-0"
              />
              <div class="space-y-1.5">
                <div class="text-xs font-bold uppercase tracking-wider text-purple-400">
                  Documento Cartográfico / Vista de Archivo
                </div>
                <p class="text-xs sm:text-sm text-slate-300">${esc(world.secondaryCaption)}</p>
                <p class="text-xs text-slate-400">
                  Hacé clic en la imagen para ampliarla a pantalla completa.
                </p>
              </div>
            </div>
          </div>

          <!-- Right: Location Detail Inspector (5 cols) -->
          <div class="lg:col-span-5">
            <div class="rounded-2xl p-5 sm:p-6 ${COLOR_PANEL[selectedPin.color] || "glass-panel"} space-y-4">
              <div class="flex flex-wrap items-center justify-between gap-2">
                <span class="px-2.5 py-1 rounded-full text-xs font-bold border ${
                  COLOR_BADGE[selectedPin.color] || COLOR_BADGE.orange
                }">
                  ${esc(selectedPin.region)}
                </span>
                <span class="text-xs text-slate-400 font-mono">
                  Fuente: ${esc(selectedPin.era)}
                </span>
              </div>

              <div>
                <h3 class="text-xl sm:text-2xl font-extrabold text-white">${esc(selectedPin.name)}</h3>
                <blockquote class="mt-2 pl-3 border-l-2 border-orange-400/70 italic text-xs sm:text-sm text-amber-200/90">
                  "${esc(selectedPin.quote)}"
                </blockquote>
              </div>

              <!-- Main Location Image -->
              <div class="relative rounded-xl overflow-hidden border border-slate-700/80 aspect-video bg-slate-950">
                <img
                  src="${esc(selectedPin.img)}"
                  alt="${esc(selectedPin.name)}"
                  onclick="window.openBogatoLightbox('${esc(selectedPin.img)}', '${esc(selectedPin.name)} — ${esc(selectedPin.region)}')"
                  class="w-full h-full object-cover zoomable-img"
                />
                <span class="absolute bottom-2 right-2 bg-slate-950/80 text-[11px] text-slate-200 px-2.5 py-1 rounded-md border border-slate-700 pointer-events-none">
                  🔍 Clic para ampliar
                </span>
              </div>

              <p class="text-sm text-slate-200 leading-relaxed">
                ${esc(selectedPin.description)}
              </p>

              <!-- Sublocations -->
              <div class="space-y-2 pt-1">
                <h4 class="text-xs font-bold uppercase tracking-wider text-orange-300">
                  Puntos Clave y Arquitectura Interna
                </h4>
                <ul class="space-y-1.5 text-xs sm:text-sm text-slate-300">
                  ${selectedPin.sublocations
                    .map(
                      (sub) => `
                    <li class="flex items-start gap-2">
                      <span class="text-orange-400 mt-0.5">◆</span>
                      <span>${esc(sub)}</span>
                    </li>`
                    )
                    .join("")}
                </ul>
              </div>

              <!-- Chapters where it appears -->
              <div class="pt-2 border-t border-slate-800/80">
                <div class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Capítulos Asociados en el Guion
                </div>
                <div class="flex flex-wrap gap-1.5">
                  ${selectedPin.chapters
                    .map(
                      (ch) => `
                    <button
                      type="button"
                      onclick="window.setBogatoTab('guion')"
                      class="px-2.5 py-1 rounded-md bg-slate-900/90 hover:bg-slate-800 text-xs text-slate-200 border border-slate-700 transition"
                    >
                      📜 ${esc(ch)}
                    </button>`
                    )
                    .join("")}
                </div>
              </div>

              <!-- Mini Gallery for this location -->
              ${
                selectedPin.gallery && selectedPin.gallery.length > 1
                  ? `
                <div class="pt-2 border-t border-slate-800/80">
                  <div class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Galería de la Región (${selectedPin.gallery.length} capturas/artes)
                  </div>
                  <div class="grid grid-cols-3 gap-2">
                    ${selectedPin.gallery
                      .map(
                        (gImg) => `
                      <img
                        src="${esc(gImg)}"
                        alt="${esc(selectedPin.name)}"
                        onclick="window.openBogatoLightbox('${esc(gImg)}', '${esc(selectedPin.name)}')"
                        class="h-20 w-full object-cover rounded-lg border border-slate-700 hover:border-orange-400 zoomable-img"
                      />`
                      )
                      .join("")}
                  </div>
                </div>`
                  : ""
              }
            </div>
          </div>
        </div>
      </div>
    `;
  }

  window.switchAtlasWorld = function (worldId) {
    state.selectedWorld = worldId;
    const world = DATA.worlds[worldId];
    if (world && world.pins.length > 0) {
      state.selectedPinId = world.pins[0].id;
    }
    renderMain();
  };

  window.selectAtlasPin = function (pinId) {
    state.selectedPinId = pinId;
    renderMain();
  };

  // ==========================================================================
  // SECTION 2: PERSONAJES Y SIMULADOR DE FASES (1 A 5)
  // ==========================================================================
  function renderCharactersSection() {
    const char =
      DATA.characters.find((c) => c.id === state.selectedCharId) ||
      DATA.characters[0];
    const phaseIdx = Math.min(state.selectedPhaseIdx, char.phases.length - 1);
    const currentPhase = char.phases[phaseIdx];

    // Duel comparator data (Leo vs Marcos Phase 1..5)
    const leoChar = DATA.characters.find((c) => c.id === "leo");
    const marcosChar = DATA.characters.find((c) => c.id === "marcos");
    const duelIdx = Math.max(0, Math.min(4, state.duelPhase - 1));
    const leoDuelPhase = leoChar.phases[duelIdx];
    const marcosDuelPhase = marcosChar.phases[duelIdx];

    return `
      <div class="wiki-section space-y-8">
        <!-- Character Roster Selector -->
        <div class="glass-panel rounded-2xl p-4 sm:p-6 border border-slate-800">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
            <div>
              <span class="text-xs font-bold uppercase tracking-widest text-orange-400">
                Dossiers de Personajes & Transformaciones
              </span>
              <h2 class="text-xl sm:text-2xl font-bold text-white">
                Seleccioná un personaje y explorá sus fases de evolución
              </h2>
            </div>
          </div>

          <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            ${DATA.characters
              .map((c) => {
                const isSelected = c.id === char.id;
                const thumb = c.phases[0].img;
                return `
                  <button
                    type="button"
                    onclick="window.selectBogatoCharacter('${c.id}')"
                    class="group text-left rounded-xl p-2.5 transition border flex flex-col justify-between ${
                      isSelected
                        ? "bg-gradient-to-b from-orange-500/25 to-purple-600/20 border-orange-400 shadow-lg shadow-orange-500/10"
                        : "bg-slate-900/80 border-slate-800 hover:border-slate-600"
                    }"
                  >
                    <div class="relative w-full h-24 rounded-lg overflow-hidden mb-2 bg-slate-950 border border-slate-800">
                      <img src="${esc(thumb)}" alt="${esc(c.name)}" class="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
                      <span class="absolute top-1.5 right-1.5 px-1.5 py-0.5 rounded text-[10px] font-bold bg-slate-950/85 text-slate-200 border border-slate-700">
                        ${c.phases.length} ${c.phases.length === 1 ? "Fase" : "Fases"}
                      </span>
                    </div>
                    <div>
                      <div class="font-bold text-sm text-white truncate">${esc(c.name)}</div>
                      <div class="text-[11px] text-slate-400 truncate">${esc(c.origin)}</div>
                    </div>
                  </button>
                `;
              })
              .join("")}
          </div>
        </div>

        <!-- Active Character Dossier & Interactive Phase Inspector -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <!-- Left: Character Bio, Stats & Full Evolution Sheet (5 cols) -->
          <div class="lg:col-span-5 space-y-5">
            <div class="rounded-2xl p-5 sm:p-6 ${COLOR_PANEL[char.accent] || "glass-panel"} space-y-4">
              <div class="flex items-center justify-between gap-2">
                <span class="px-2.5 py-1 rounded-full text-xs font-bold border ${
                  COLOR_BADGE[char.accent] || COLOR_BADGE.orange
                }">
                  ${esc(char.faction)}
                </span>
                <span class="text-xs text-slate-300 font-medium">
                  Origen: ${esc(char.origin)}
                </span>
              </div>

              <div>
                <h3 class="text-2xl sm:text-3xl font-extrabold text-white">${esc(char.name)}</h3>
                <p class="text-sm font-semibold text-orange-300 mt-0.5">${esc(char.title)}</p>
              </div>

              <p class="text-sm text-slate-200 leading-relaxed">${esc(char.bio)}</p>

              <div class="p-3 rounded-xl bg-slate-950/70 border border-slate-800 text-xs space-y-1">
                <div class="text-slate-400 uppercase font-bold tracking-wider">Afinidad Mágica / Brasa</div>
                <div class="text-white font-semibold text-sm">${esc(char.magic)}</div>
              </div>

              <!-- Stats Bars -->
              <div class="space-y-2.5 pt-1">
                <div class="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Parámetros de Combate y Voluntad
                </div>
                ${Object.entries(char.stats)
                  .map(
                    ([statName, val]) => `
                  <div class="space-y-1">
                    <div class="flex justify-between text-xs">
                      <span class="capitalize text-slate-300 font-medium">${esc(statName)}</span>
                      <span class="font-bold text-orange-300">${val} / 100</span>
                    </div>
                    <div class="w-full h-2 rounded-full bg-slate-950 overflow-hidden border border-slate-800">
                      <div class="h-full rounded-full bg-gradient-to-r from-orange-500 via-amber-400 to-purple-500" style="width: ${val}%"></div>
                    </div>
                  </div>`
                  )
                  .join("")}
              </div>

              <!-- Full Evolution Concept Sheet -->
              <div class="pt-3 border-t border-slate-800/80 space-y-2">
                <div class="flex items-center justify-between">
                  <span class="text-xs font-bold uppercase tracking-wider text-slate-300">
                    Lámina Oficial del Estudio (Concept Art)
                  </span>
                  <span class="text-[11px] text-orange-400">Clic para ampliar</span>
                </div>
                <img
                  src="${esc(char.sheetImg)}"
                  alt="Hoja de diseño de ${esc(char.name)}"
                  onclick="window.openBogatoLightbox('${esc(char.sheetImg)}', 'Hoja de Evolución Oficial — ${esc(char.name)}')"
                  class="w-full h-44 object-cover rounded-xl border border-slate-700 zoomable-img"
                />
              </div>
            </div>
          </div>

          <!-- Right: Interactive Phase Switcher (7 cols) -->
          <div class="lg:col-span-7 space-y-5">
            <div class="glass-panel rounded-2xl p-5 sm:p-6 border border-slate-800 space-y-5">
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span class="text-xs font-bold uppercase tracking-wider text-purple-400">
                    Inspector Interactivo de Transformación
                  </span>
                  <h4 class="text-lg sm:text-xl font-bold text-white">
                    Evolución de ${esc(char.name)} (${char.phases.length} ${char.phases.length === 1 ? "Etapa" : "Fases"})
                  </h4>
                </div>

                <!-- Phase Selector Buttons -->
                <div class="flex flex-wrap gap-1.5">
                  ${char.phases
                    .map((ph, idx) => {
                      const active = idx === phaseIdx;
                      return `
                        <button
                          type="button"
                          onclick="window.selectCharacterPhase(${idx})"
                          class="px-3.5 py-2 rounded-xl text-xs font-bold transition border ${
                            active
                              ? "bg-orange-500 text-slate-950 border-orange-300 shadow-md shadow-orange-500/20"
                              : "bg-slate-900 text-slate-300 border-slate-700 hover:border-orange-400"
                          }"
                        >
                          Fase ${ph.phase}
                        </button>
                      `;
                    })
                    .join("")}
                </div>
              </div>

              <!-- Current Phase Artwork -->
              <div class="relative rounded-2xl overflow-hidden border border-slate-700 bg-slate-950 aspect-[16/10]">
                <img
                  src="${esc(currentPhase.img)}"
                  alt="${esc(currentPhase.name)}"
                  onclick="window.openBogatoLightbox('${esc(currentPhase.img)}', '${esc(char.name)} — ${esc(currentPhase.name)}')"
                  class="w-full h-full object-cover zoomable-img"
                />
                <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent p-4 sm:p-5">
                  <div class="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-orange-500 text-slate-950 mb-1">
                    📍 ${esc(currentPhase.location)}
                  </div>
                  <h5 class="text-lg sm:text-2xl font-extrabold text-white">${esc(currentPhase.name)}</h5>
                </div>
              </div>

              <!-- Phase Details Grid -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
                  <div class="text-xs font-bold uppercase tracking-wider text-orange-400">
                    🛡️ Estado de la Armadura / Cuerpo
                  </div>
                  <p class="text-xs sm:text-sm text-slate-200">${esc(currentPhase.armor)}</p>
                </div>
                <div class="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1">
                  <div class="text-xs font-bold uppercase tracking-wider text-sky-400">
                    ⚔️ Armas y Habilidades Desbloqueadas
                  </div>
                  <p class="text-xs sm:text-sm text-slate-200">${esc(currentPhase.weapons)}</p>
                </div>
              </div>

              <div class="p-4 rounded-xl bg-slate-900/60 border border-purple-500/30 space-y-1">
                <div class="text-xs font-bold uppercase tracking-wider text-purple-300">
                  📖 Contexto Narrativo y Psicológico de esta Fase
                </div>
                <p class="text-sm text-slate-200 leading-relaxed">${esc(currentPhase.lore)}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Interactive Mirror Duel Comparator: LEO vs MARCOS (Fases 1 a 5) -->
        <div class="glass-panel rounded-2xl p-5 sm:p-6 border border-orange-500/30 space-y-5">
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span class="text-xs font-bold uppercase tracking-widest text-amber-400">
                Comparador de Espejo Narrativo
              </span>
              <h3 class="text-xl font-extrabold text-white">
                Duelo de Evolución Paralela: Leo (Fuego Naranja) vs. Marcos (Fuego Verde / Vacío)
              </h3>
              <p class="text-xs sm:text-sm text-slate-300">
                Cambiá de fase (1 a 5) para comparar cómo evolucionan al mismo tiempo el héroe y su mejor amigo vuelto rival.
              </p>
            </div>

            <div class="flex items-center gap-1.5 shrink-0">
              ${[1, 2, 3, 4, 5]
                .map(
                  (num) => `
                <button
                  type="button"
                  onclick="window.setDuelComparePhase(${num})"
                  class="px-3.5 py-2 rounded-xl text-xs font-extrabold transition border ${
                    state.duelPhase === num
                      ? "bg-gradient-to-r from-orange-500 to-emerald-500 text-slate-950 border-white shadow-lg"
                      : "bg-slate-900 text-slate-300 border-slate-700 hover:border-slate-500"
                  }"
                >
                  Fase ${num}
                </button>`
                )
                .join("")}
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
            <!-- Leo Side -->
            <div class="rounded-xl p-4 glass-panel-orange space-y-3">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold uppercase tracking-wider text-orange-300">🔥 LEO — EL GUARDIÁN</span>
                <span class="text-xs font-mono text-amber-200">Fase ${state.duelPhase}/5</span>
              </div>
              <img
                src="${esc(leoDuelPhase.img)}"
                alt="${esc(leoDuelPhase.name)}"
                onclick="window.openBogatoLightbox('${esc(leoDuelPhase.img)}', 'Leo — ${esc(leoDuelPhase.name)}')"
                class="w-full h-52 object-cover rounded-lg border border-orange-500/40 zoomable-img"
              />
              <h4 class="font-bold text-base text-white">${esc(leoDuelPhase.name)}</h4>
              <p class="text-xs text-slate-200">${esc(leoDuelPhase.lore)}</p>
            </div>

            <!-- Marcos Side -->
            <div class="rounded-xl p-4 glass-panel-green space-y-3">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold uppercase tracking-wider text-emerald-300">🟢 MARCOS — EL ECLIPSE</span>
                <span class="text-xs font-mono text-emerald-200">Fase ${state.duelPhase}/5</span>
              </div>
              <img
                src="${esc(marcosDuelPhase.img)}"
                alt="${esc(marcosDuelPhase.name)}"
                onclick="window.openBogatoLightbox('${esc(marcosDuelPhase.img)}', 'Marcos — ${esc(marcosDuelPhase.name)}')"
                class="w-full h-52 object-cover rounded-lg border border-emerald-500/40 zoomable-img"
              />
              <h4 class="font-bold text-base text-white">${esc(marcosDuelPhase.name)}</h4>
              <p class="text-xs text-slate-200">${esc(marcosDuelPhase.lore)}</p>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  window.selectBogatoCharacter = function (charId) {
    state.selectedCharId = charId;
    state.selectedPhaseIdx = 0;
    renderMain();
  };

  window.selectCharacterPhase = function (idx) {
    state.selectedPhaseIdx = idx;
    renderMain();
  };

  window.setDuelComparePhase = function (phaseNum) {
    state.duelPhase = phaseNum;
    renderMain();
  };

  // ==========================================================================
  // SECTION 3: COSMOLOGÍA Y SISTEMA DE MAGIA CROMÁTICA
  // ==========================================================================
  function renderMagicSection() {
    const activeMagic =
      DATA.magicSystem.find((m) => m.id === state.selectedMagicId) ||
      DATA.magicSystem[0];

    return `
      <div class="wiki-section space-y-8">
        <!-- Cosmology Laws Cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="glass-panel rounded-2xl p-5 border border-purple-500/30 space-y-2">
            <div class="text-xs font-bold uppercase tracking-wider text-purple-400">Ley 01 • Cosmología</div>
            <h3 class="text-lg font-bold text-white">La Ley del Espejo y Dilatación Temporal</h3>
            <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Ciudad Bogato (Tierra) y Las Islas del Fulgor (Mundo Bogato) son dos planos espejados. Mientras el Motor de Almas fractura la barrera, semanas enteras de guerra en Bogato transcurren en la fracción de segundo que dura el flash de la selfie en el ático.
            </p>
          </div>

          <div class="glass-panel rounded-2xl p-5 border border-orange-500/30 space-y-2">
            <div class="text-xs font-bold uppercase tracking-wider text-orange-400">Ley 02 • Biología Dracónica</div>
            <h3 class="text-lg font-bold text-white">Los Ecos y el Vínculo Neuronal</h3>
            <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Los huevos de dragón son cristales llamados <strong>Ecos</strong> que solo eclosionan ante la brasa de un portador. El dragón no crece con los años, sino con la madurez espiritual del jinete, compartiendo el dolor físico sin usar silla de montar.
            </p>
          </div>

          <div class="glass-panel rounded-2xl p-5 border border-sky-500/30 space-y-2">
            <div class="text-xs font-bold uppercase tracking-wider text-sky-400">Ley 03 • Geopolítica</div>
            <h3 class="text-lg font-bold text-white">Los Tres Clanes y los Tres Nexos</h3>
            <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
              El equilibrio del mundo depende de tres clanes (<strong>Tierra</strong> en Khar'Zuun, <strong>Cielo</strong> y <strong>Magia</strong> en Elarion) y de los tres Fragmentos de Núcleo (Agua en el Templo Sumergido, Viento en los Picos Aulladores y Sombra en las Minas).
            </p>
          </div>
        </div>

        <!-- Interactive Chromatic Fire Analyzer -->
        <div class="glass-panel rounded-2xl p-5 sm:p-6 border border-slate-800 space-y-6">
          <div>
            <span class="text-xs font-bold uppercase tracking-widest text-orange-400">
              Espectroscopia de la Brasa
            </span>
            <h2 class="text-xl sm:text-2xl font-bold text-white">
              Simulador de los 4 Fuegos Cromáticos del Universo Bogato
            </h2>
            <p class="text-sm text-slate-300 mt-1">
              Seleccioná cada energía para inspeccionar su origen emocional, sus portadores, su estilo de combate y el costo biológico sobre el cuerpo humano.
            </p>
          </div>

          <!-- 4 Fire Selector Buttons -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            ${DATA.magicSystem
              .map((m) => {
                const active = m.id === activeMagic.id;
                return `
                  <button
                    type="button"
                    onclick="window.selectBogatoMagic('${m.id}')"
                    class="p-4 rounded-xl text-left transition border ${
                      active
                        ? COLOR_PANEL[m.colorClass] + " scale-[1.01]"
                        : "bg-slate-900/80 border-slate-800 hover:border-slate-600"
                    }"
                  >
                    <div class="flex items-center gap-2.5 mb-2">
                      <span class="w-3.5 h-3.5 rounded-full shrink-0" style="background-color: ${m.hex}; box-shadow: 0 0 12px ${m.hex};"></span>
                      <span class="font-bold text-sm text-white">${esc(m.name)}</span>
                    </div>
                    <p class="text-xs text-slate-400 line-clamp-2">${esc(m.emotion)}</p>
                  </button>
                `;
              })
              .join("")}
          </div>

          <!-- Selected Fire Detail Card -->
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center rounded-2xl p-5 ${
            COLOR_PANEL[activeMagic.colorClass] || "glass-panel"
          }">
            <div class="lg:col-span-5">
              <img
                src="${esc(activeMagic.img)}"
                alt="${esc(activeMagic.name)}"
                onclick="window.openBogatoLightbox('${esc(activeMagic.img)}', '${esc(activeMagic.name)}')"
                class="w-full h-64 object-cover rounded-xl border border-slate-700 zoomable-img"
              />
            </div>
            <div class="lg:col-span-7 space-y-4">
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold border ${
                COLOR_BADGE[activeMagic.colorClass]
              }">
                <span>Portadores: ${esc(activeMagic.bearers)}</span>
              </div>
              <h3 class="text-2xl font-extrabold text-white">${esc(activeMagic.name)}</h3>
              <blockquote class="pl-3 border-l-2 border-white/50 italic text-sm text-amber-100">
                "${esc(activeMagic.quote)}"
              </blockquote>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div class="p-3.5 rounded-xl bg-slate-950/75 border border-slate-800 space-y-1">
                  <div class="text-xs font-bold uppercase tracking-wider text-orange-300">
                    ⚔️ Propiedades Físicas y de Combate
                  </div>
                  <p class="text-xs sm:text-sm text-slate-200 leading-relaxed">${esc(activeMagic.combatStyle)}</p>
                </div>
                <div class="p-3.5 rounded-xl bg-slate-950/75 border border-slate-800 space-y-1">
                  <div class="text-xs font-bold uppercase tracking-wider text-purple-300">
                    🧬 Efecto Fisiológico en el Portador
                  </div>
                  <p class="text-xs sm:text-sm text-slate-200 leading-relaxed">${esc(activeMagic.physiologicalEffect)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  window.selectBogatoMagic = function (magicId) {
    state.selectedMagicId = magicId;
    renderMain();
  };

  // ==========================================================================
  // SECTION 4: ARSENAL, ITEMS, RELIQUIAS Y BESTIARIO
  // ==========================================================================
  function renderArsenalSection() {
    const categories = [
      "Todos",
      "Arma Legendaria / Bogato",
      "Armas Principales / Bogato",
      "Armadura Simbiótica",
      "Arsenal Terrenal (Ciudad Bogato)",
      "Equipamiento Urbano & Exploración",
      "Artefactos Cosmologicos",
      "Enemigos y Criaturas"
    ];

    const filteredItems =
      state.itemFilter === "Todos"
        ? DATA.items
        : DATA.items.filter((it) => it.category === state.itemFilter);

    return `
      <div class="wiki-section space-y-6">
        <div class="glass-panel rounded-2xl p-5 sm:p-6 border border-slate-800 space-y-4">
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-3">
            <div>
              <span class="text-xs font-bold uppercase tracking-widest text-orange-400">
                Inventario Interdimensional & Bestiario
              </span>
              <h2 class="text-xl sm:text-2xl font-bold text-white">
                Armas, Reliquias, Vehículos y Criaturas del Universo Bogato
              </h2>
            </div>
          </div>

          <!-- Category Filter Pills -->
          <div class="flex flex-wrap gap-2">
            ${categories
              .map((cat) => {
                const active = state.itemFilter === cat;
                return `
                  <button
                    type="button"
                    onclick="window.setBogatoItemFilter('${esc(cat)}')"
                    class="px-3 py-1.5 rounded-xl text-xs font-semibold transition border ${
                      active
                        ? "bg-orange-500 text-slate-950 border-orange-300 font-bold"
                        : "bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-600"
                    }"
                  >
                    ${esc(cat)}
                  </button>
                `;
              })
              .join("")}
          </div>
        </div>

        <!-- Items Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          ${filteredItems
            .map(
              (item) => `
            <div class="glass-panel rounded-2xl overflow-hidden border border-slate-800 hover:border-orange-500/40 transition flex flex-col justify-between">
              <div>
                <div class="grid grid-cols-2 gap-1 bg-slate-950 p-2 border-b border-slate-800">
                  <img
                    src="${esc(item.img)}"
                    alt="${esc(item.name)}"
                    onclick="window.openBogatoLightbox('${esc(item.img)}', '${esc(item.name)} — Vista Principal')"
                    class="w-full h-44 object-cover rounded-lg zoomable-img border border-slate-800"
                  />
                  <img
                    src="${esc(item.secondaryImg)}"
                    alt="${esc(item.name)} secundaria"
                    onclick="window.openBogatoLightbox('${esc(item.secondaryImg)}', '${esc(item.name)} — Boceto y Referencia en Motor')"
                    class="w-full h-44 object-cover rounded-lg zoomable-img border border-slate-800"
                  />
                </div>

                <div class="p-5 space-y-3">
                  <div class="flex flex-wrap items-center justify-between gap-2">
                    <span class="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-orange-500/20 text-orange-300 border border-orange-500/30">
                      ${esc(item.category)}
                    </span>
                    <span class="text-[11px] text-slate-400 font-mono">
                      ${esc(item.era)}
                    </span>
                  </div>

                  <h3 class="text-lg sm:text-xl font-extrabold text-white">${esc(item.name)}</h3>
                  <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">${esc(item.description)}</p>
                </div>
              </div>

              <div class="px-5 py-3 bg-slate-950/80 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2 text-xs">
                <span class="text-slate-400">Portador: <strong class="text-slate-200">${esc(item.holder)}</strong></span>
                <span class="text-amber-300 font-mono font-semibold">${esc(item.stats)}</span>
              </div>
            </div>`
            )
            .join("")}
        </div>
      </div>
    `;
  }

  window.setBogatoItemFilter = function (cat) {
    state.itemFilter = cat;
    renderMain();
  };

  // ==========================================================================
  // SECTION 5: GUIÓN DEFINITIVO INTERACTIVO & SIMULADOR DE FINALES
  // ==========================================================================
  function renderScriptSection() {
    const activeChapter =
      DATA.scriptChapters.find((ch) => ch.id === state.selectedChapterId) ||
      DATA.scriptChapters[0];

    return `
      <div class="wiki-section space-y-8">
        <div class="glass-panel rounded-2xl p-5 sm:p-6 border border-slate-800">
          <div class="max-w-3xl space-y-1">
            <span class="text-xs font-bold uppercase tracking-widest text-orange-400">
              Línea Temporal & Guion Maestro Unificado
            </span>
            <h2 class="text-xl sm:text-2xl font-bold text-white">
              Navegador de Actos, Escenas, Diálogos y Música Oficial
            </h2>
            <p class="text-sm text-slate-300">
              Integra en una sola narrativa continua la etapa clásica de mundo abierto (<em>BibliaBogato.docx</em>) con la versión extendida psicológica (<em>Director's Cut</em> y <em>Crónicas de Bogato</em>).
            </p>
          </div>

          <!-- Timeline Stepper -->
          <div class="mt-5 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
            ${DATA.scriptChapters
              .map((ch, idx) => {
                const active = ch.id === activeChapter.id;
                return `
                  <button
                    type="button"
                    onclick="window.selectBogatoChapter('${ch.id}')"
                    class="p-2.5 rounded-xl text-left transition border flex flex-col justify-between ${
                      active
                        ? "bg-gradient-to-b from-orange-500 to-amber-600 text-slate-950 border-white font-bold shadow-lg"
                        : "bg-slate-900/90 text-slate-300 border-slate-800 hover:border-slate-600"
                    }"
                  >
                    <div class="text-[10px] uppercase tracking-wider opacity-80">${esc(ch.act)}</div>
                    <div class="text-xs font-bold line-clamp-2 mt-1">${idx + 1}. ${esc(ch.title)}</div>
                  </button>
                `;
              })
              .join("")}
          </div>
        </div>

        <!-- Selected Chapter Full View -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div class="lg:col-span-5 space-y-4">
            <div class="glass-panel-orange rounded-2xl p-5 space-y-4">
              <div class="flex items-center justify-between text-xs">
                <span class="px-2.5 py-1 rounded-full font-bold bg-orange-500 text-slate-950">
                  ${esc(activeChapter.act)}
                </span>
                <span class="text-amber-200 font-mono">🎵 ${esc(activeChapter.music)}</span>
              </div>

              <h3 class="text-xl sm:text-2xl font-extrabold text-white">${esc(activeChapter.title)}</h3>
              <div class="text-xs text-slate-300">
                📍 <strong>Escenarios:</strong> ${esc(activeChapter.location)}
              </div>

              <img
                src="${esc(activeChapter.img)}"
                alt="${esc(activeChapter.title)}"
                onclick="window.openBogatoLightbox('${esc(activeChapter.img)}', '${esc(activeChapter.act)} — ${esc(activeChapter.title)}')"
                class="w-full h-56 object-cover rounded-xl border border-orange-500/40 zoomable-img"
              />

              <p class="text-sm text-slate-200 leading-relaxed">${esc(activeChapter.summary)}</p>

              <blockquote class="p-3.5 rounded-xl bg-slate-950/80 border-l-4 border-orange-400 text-xs sm:text-sm italic text-amber-100">
                "${esc(activeChapter.keyQuote)}"
              </blockquote>
            </div>
          </div>

          <div class="lg:col-span-7 space-y-4">
            ${activeChapter.scenes
              .map(
                (sc, i) => `
              <div class="glass-panel rounded-2xl p-5 border border-slate-800 space-y-2">
                <div class="flex items-center gap-2">
                  <span class="w-6 h-6 rounded-full bg-orange-500/20 border border-orange-500/50 text-orange-300 text-xs font-bold flex items-center justify-center">
                    ${i + 1}
                  </span>
                  <h4 class="text-base sm:text-lg font-bold text-white">${esc(sc.title)}</h4>
                </div>
                <p class="text-sm text-slate-300 leading-relaxed pl-8">${esc(sc.details)}</p>
              </div>`
              )
              .join("")}

            <!-- Interactive Ending Decision Simulator -->
            <div class="glass-panel-violet rounded-2xl p-5 sm:p-6 space-y-4">
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span class="text-xs font-bold uppercase tracking-widest text-purple-300">
                    Simulador de Decisión Final (Epílogo en el Portal de Espejo)
                  </span>
                  <h4 class="text-lg font-extrabold text-white">
                    ¿Qué decide hacer Leo frente al espejo que muestra el ático de Ciudad Bogato?
                  </h4>
                </div>
                <div class="flex gap-2 shrink-0">
                  <button
                    type="button"
                    onclick="window.setBogatoEnding('canon')"
                    class="px-3.5 py-2 rounded-xl text-xs font-bold transition border ${
                      state.selectedEnding === "canon"
                        ? "bg-orange-500 text-slate-950 border-white"
                        : "bg-slate-900 text-slate-300 border-slate-700"
                    }"
                  >
                    🔥 Final Canon: Sellar el Espejo
                  </button>
                  <button
                    type="button"
                    onclick="window.setBogatoEnding('turista')"
                    class="px-3.5 py-2 rounded-xl text-xs font-bold transition border ${
                      state.selectedEnding === "turista"
                        ? "bg-sky-400 text-slate-950 border-white"
                        : "bg-slate-900 text-slate-300 border-slate-700"
                    }"
                  >
                    🏙️ Final Alternativo: Volver a la Tierra
                  </button>
                </div>
              </div>

              ${
                state.selectedEnding === "canon"
                  ? `
                <div class="p-4 rounded-xl bg-slate-950/80 border border-orange-500/40 space-y-2">
                  <div class="text-xs font-bold text-orange-400 uppercase tracking-wider">
                    FINAL B (CANON OFICIAL) — "El Amanecer del Guardián" + Escena Post-Créditos
                  </div>
                  <p class="text-sm text-slate-200 leading-relaxed">
                    Leo mira a Ignis, a Kasumi y a los sobrevivientes de Bastión Alto. Retira la mano del cristal y ordena: <strong>"¡Kasumi, cierra el espejo! ¡Bogato necesita un Guardián, no un turista!"</strong>. Kasumi destruye el portal; en Ciudad Bogato Sofía ve solo un destello blanco en la selfie donde estaban Leo y Marcos. En la escena post-créditos, en el fondo del volcán colapsado, la mano de Marcos emerge de la roca encendiendo la <strong>Energía Violeta del Vacío (Fase 5)</strong>.
                  </p>
                </div>`
                  : `
                <div class="p-4 rounded-xl bg-slate-950/80 border border-sky-500/40 space-y-2">
                  <div class="text-xs font-bold text-sky-400 uppercase tracking-wider">
                    FINAL A (ALTERNATIVO) — "El Reflejo Vacío"
                  </div>
                  <p class="text-sm text-slate-200 leading-relaxed">
                    Leo cruza el cristal de regreso al ático de Ciudad Bogato. El flash de la cámara de Sofía termina un milisegundo después y la música electrónica vuelve a sonar. El vínculo con Ignis se rompe y Leo olvida todo como si hubiera sido un sueño, salvo por una cicatriz apagada en su muñeca derecha y el hecho inquietante de que Marcos desapareció de la foto y de la realidad.
                  </p>
                </div>`
              }
            </div>
          </div>
        </div>
      </div>
    `;
  }

  window.selectBogatoChapter = function (chId) {
    state.selectedChapterId = chId;
    renderMain();
  };

  window.setBogatoEnding = function (endingKey) {
    state.selectedEnding = endingKey;
    renderMain();
  };

  // ==========================================================================
  // SECTION 6: ARCHIVO HISTÓRICO (2018–2026) & ROADMAP HK ENTERTAINMENT
  // ==========================================================================
  function renderArchiveSection() {
    const categories = [
      "Todos",
      "Key Art",
      "Personajes",
      "Unreal Engine",
      "Concept Art a Mano",
      "Lost Media (2018-2021)"
    ];

    const filteredGallery =
      state.archiveFilter === "Todos"
        ? DATA.archiveGallery
        : DATA.archiveGallery.filter((g) => g.category === state.archiveFilter);

    return `
      <div class="wiki-section space-y-8">
        <!-- Evolution Comparative Table (2018-2021 vs 2025-2026) -->
        <div class="glass-panel rounded-2xl p-5 sm:p-6 border border-slate-800 space-y-4">
          <div>
            <span class="text-xs font-bold uppercase tracking-widest text-orange-400">
              Arqueología del Proyecto (2018–2026)
            </span>
            <h2 class="text-xl sm:text-2xl font-bold text-white">
              Síntesis Evolutiva: De <em>BogatoLostMedia</em> a <em>Bogato Director's Cut</em>
            </h2>
          </div>

          <div class="overflow-x-auto rounded-xl border border-slate-800">
            <table class="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr class="bg-slate-900/95 text-slate-300 border-b border-slate-800">
                  <th class="p-3.5 font-bold">Eje del Universo</th>
                  <th class="p-3.5 font-bold text-sky-300">Etapa Clásica (2018–2021: BogatoLostMedia)</th>
                  <th class="p-3.5 font-bold text-purple-300">Etapa Actual (2025–2026: Bogato posta xd)</th>
                  <th class="p-3.5 font-bold text-orange-300">Unificación en el Canon Definitivo</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-800/80 bg-slate-950/50">
                <tr>
                  <td class="p-3.5 font-bold text-white">Ciudad Bogato (Tierra)</td>
                  <td class="p-3.5 text-slate-300">Mapa jugable de dos islas con puentes, misión "Ir de compras", autos, motos y armas tácticas.</td>
                  <td class="p-3.5 text-slate-300">Fiesta en el ático con Leo, Marcos y Sofía; flash de la selfie (Portal de Espejo) y caja del padre con mapa hacia "EL ORIGEN".</td>
                  <td class="p-3.5 text-slate-200">El flash de la selfie marca a Leo y Marcos en la fiesta; al día siguiente se juega el tramo urbano en Ciudad Bogato antes de viajar al Templo del Lago.</td>
                </tr>
                <tr>
                  <td class="p-3.5 font-bold text-white">El Padre de Leo</td>
                  <td class="p-3.5 text-slate-300">Interludio jugable manejando al padre en un pueblo pacífico rodeado de dragones.</td>
                  <td class="p-3.5 text-slate-300">El Guardián Anterior de hace 20 ciclos cuyos restos fueron usados en los cimientos de la Fortaleza del Tirano.</td>
                  <td class="p-3.5 text-slate-200">Se conserva el Interludio Jugable del Padre al hundirse Leo en el lago para mostrar Bogato en paz antes de la ruina actual.</td>
                </tr>
                <tr>
                  <td class="p-3.5 font-bold text-white">Geografía de Bogato</td>
                  <td class="p-3.5 text-slate-300">Cueva del lago, valle con pueblo, volcán activo y templo del lago.</td>
                  <td class="p-3.5 text-slate-300">Las Islas del Fulgor: Draktharia (Khar'Zuun / Bastión Alto, volcán Vorth'Kar), Sylpharia (Elarion, Bosque de los Susurros) y Canal de Zar'Mekhul.</td>
                  <td class="p-3.5 text-slate-200">Las dos islas de Ciudad Bogato son el reflejo terrenal exacto de Draktharia y Sylpharia separadas por el Océano de Vapor.</td>
                </tr>
                <tr>
                  <td class="p-3.5 font-bold text-white">Rivalidad y Clímax</td>
                  <td class="p-3.5 text-slate-300">Amigo celoso con fuego verde mutilado en el río de lava; rescate de la amiga con alas de fuego; mano saliendo de la lava.</td>
                  <td class="p-3.5 text-slate-300">5 Fases de Leo y Marcos; sacrificio de Kael; Motor de Almas; Marcos renaciendo con Energía del Vacío (Fuego Violeta).</td>
                  <td class="p-3.5 text-slate-200">Duelo en el volcán donde Marcos rechaza la mano de Leo, rescate de Kasumi en Fase 5 y post-créditos con Marcos Fase 5 (Vacío).</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Visual Archive Gallery with Filters -->
        <div class="glass-panel rounded-2xl p-5 sm:p-6 border border-slate-800 space-y-5">
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-3">
            <div>
              <span class="text-xs font-bold uppercase tracking-widest text-purple-400">
                Bóveda Visual Completa (16 Archivos Originales)
              </span>
              <h3 class="text-xl font-bold text-white">
                Galería de Arte Conceptual, Capturas de Unreal Engine y Bocetos a Mano
              </h3>
            </div>

            <div class="flex flex-wrap gap-1.5">
              ${categories
                .map((cat) => {
                  const active = state.archiveFilter === cat;
                  return `
                    <button
                      type="button"
                      onclick="window.setBogatoArchiveFilter('${esc(cat)}')"
                      class="px-3 py-1.5 rounded-xl text-xs font-semibold transition border ${
                        active
                          ? "bg-purple-500 text-white border-purple-300 font-bold"
                          : "bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-600"
                      }"
                    >
                      ${esc(cat)}
                    </button>
                  `;
                })
                .join("")}
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            ${filteredGallery
              .map(
                (g) => `
              <div class="rounded-xl overflow-hidden bg-slate-900/90 border border-slate-800 hover:border-purple-400/50 transition flex flex-col justify-between">
                <div>
                  <div class="relative aspect-video bg-slate-950 overflow-hidden">
                    <img
                      src="${esc(g.img)}"
                      alt="${esc(g.title)}"
                      onclick="window.openBogatoLightbox('${esc(g.img)}', '${esc(g.title)} — ${esc(g.era)}')"
                      class="w-full h-full object-cover zoomable-img"
                    />
                    <span class="absolute top-2 left-2 px-2 py-0.5 rounded text-[10px] font-bold bg-slate-950/85 text-purple-300 border border-purple-500/30">
                      ${esc(g.category)}
                    </span>
                  </div>
                  <div class="p-3.5 space-y-1">
                    <div class="text-[11px] text-slate-400 font-mono">${esc(g.era)}</div>
                    <h4 class="text-sm font-bold text-white">${esc(g.title)}</h4>
                    <p class="text-xs text-slate-300 leading-relaxed">${esc(g.desc)}</p>
                  </div>
                </div>
              </div>`
              )
              .join("")}
          </div>
        </div>

        <!-- Transmedia & Spin-offs Roadmap for HK Entertainment -->
        <div class="glass-panel rounded-2xl p-5 sm:p-6 border border-orange-500/30 space-y-4">
          <div>
            <span class="text-xs font-bold uppercase tracking-widest text-orange-400">
              Estrategia de IP para HK Entertainment
            </span>
            <h3 class="text-xl font-bold text-white">
              Hoja de Ruta de 5 Proyectos y Spin-offs Conectados al Universo Bogato
            </h3>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            ${DATA.roadmap
              .map(
                (r) => `
              <div class="rounded-xl p-4 ${COLOR_PANEL[r.color] || "glass-panel"} space-y-2.5 flex flex-col justify-between">
                <div class="space-y-2">
                  <span class="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${
                    COLOR_BADGE[r.color]
                  }">
                    ${esc(r.status)}
                  </span>
                  <h4 class="text-base font-extrabold text-white">${esc(r.title)}</h4>
                  <div class="text-xs font-semibold text-amber-200">${esc(r.type)}</div>
                  <p class="text-xs text-slate-200 leading-relaxed">${esc(r.pitch)}</p>
                </div>
                <div class="pt-2 border-t border-slate-800/80 text-[11px] text-slate-300">
                  <strong class="text-orange-300">Activos Reutilizables:</strong> ${esc(r.reusableAssets)}
                </div>
              </div>`
              )
              .join("")}
          </div>
        </div>
      </div>
    `;
  }

  window.setBogatoArchiveFilter = function (cat) {
    state.archiveFilter = cat;
    renderMain();
  };

  // Master Render Dispatcher
  function renderMain() {
    const container = document.getElementById("wiki-main-content");
    if (!container) return;

    if (state.activeTab === "atlas") {
      container.innerHTML = renderAtlasSection();
    } else if (state.activeTab === "personajes") {
      container.innerHTML = renderCharactersSection();
    } else if (state.activeTab === "magia") {
      container.innerHTML = renderMagicSection();
    } else if (state.activeTab === "arsenal") {
      container.innerHTML = renderArsenalSection();
    } else if (state.activeTab === "guion") {
      container.innerHTML = renderScriptSection();
    } else if (state.activeTab === "archivo") {
      container.innerHTML = renderArchiveSection();
    }
  }

  // Initialize on DOMContentLoaded
  function initWiki() {
    renderNav();
    renderMain();

    const searchInput = document.getElementById("global-search-input");
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        handleGlobalSearch(e.target.value);
      });
    }

    // Close lightbox on Escape
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeLightbox();
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initWiki);
  } else {
    initWiki();
  }
})();
