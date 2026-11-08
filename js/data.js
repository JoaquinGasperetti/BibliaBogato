// ============================================================================
// BOGATO UNIVERSE — BASE DE DATOS CANÓNICA (HK ENTERTAINMENT)
// Fuentes unificadas: BogatoLostMedia (2018-2021) + Bogato posta xd (2025-2026)
// ============================================================================

window.BOGATO_DATA = {
  meta: {
    title: "BOGATO: El Reflejo y la Corona",
    subtitle: "Wiki Interactiva & Biblia de Desarrollo Unificada (2018–2026)",
    studio: "HK Entertainment",
    studioUrl: "https://hkentertainment.com.ar/",
    tagline: "Dos islas. Dos linajes. Un mapa que no debió ser abierto.",
    logo: "assets/img/logo_bogato.png",
    heroImg: "assets/img/thumbnail_0.jpg",
    links: {
      lostMedia: "https://drive.google.com/drive/folders/1JsHfuNa2AceZlYUhtG-v6vNXsmyjL0HX",
      bogatoPosta: "https://drive.google.com/drive/folders/1yogKMNIvd3bzypH_tDlZkpHz8B_b5Wf3",
      builds: "https://drive.google.com/drive/folders/1y3Tu1XK6CscKASbbiaPcCfdPOsVKqpu6",
      bibliaExtendida: "https://docs.google.com/document/d/1dbI5BaPjfl0Oh3k-jhJMbZ3h8KNKQS9u_XVdW4p58I8/edit?usp=drivesdk",
      cronicas: "https://docs.google.com/document/d/1UiXLu3K_Q4LBggPLFZ4v6G0glwBWHtX2kcxh6Zriips/edit?usp=drivesdk",
      guionCompleto: "https://docs.google.com/document/d/1JALMn1tcc86C-KVsn1qczpHWMji1GEPtnF4-XITNjqY/edit?usp=drivesdk",
      bibliaLegacy: "https://drive.google.com/file/d/1lAqNALn32s4DfjNvMvrgQJ-lCeUCmley/view?usp=drivesdk",
      loreIslas: "https://drive.google.com/file/d/1rQ08D_sTu2BIVCjuolWx_FFRnCBiYps2/view?usp=drivesdk",
      kharzuunTxt: "https://drive.google.com/file/d/1U-qGm7MX0KlybFGG2ooyJyg6tDLJj7KH/view?usp=drivesdk"
    }
  },

  // --------------------------------------------------------------------------
  // 1. ATLAS INTERACTIVO: DOS MUNDOS ESPEJADOS
  // --------------------------------------------------------------------------
  worlds: {
    bogato: {
      id: "bogato",
      name: "Plano Primordial: Mundo Bogato (Las Islas del Fulgor)",
      subtitle: "Cielo violeta eléctrico, eclipses parciales, obsidiana volcánica y selvas bioluminiscentes",
      mapImg: "assets/img/bogato_map.jpg",
      secondaryMapImg: "assets/img/teleferico.jpg",
      secondaryCaption: "Vista desde la red de teleféricos de cabezas de dragón conectando las alturas de Bogato",
      summary: "Dimensión paralela fundada por dragones ancestrales que dividieron el mundo entre el fuego y el viento. Está compuesta por dos grandes masas insulares —Draktharia al Norte y Sylpharia al Sur— separadas por el hirviente Canal de Zar'Mekhul (El Océano de Vapor).",
      pins: [
        {
          id: "kharzuun",
          name: "Khar'Zuun / Bastión Alto",
          region: "Draktharia (Isla del Norte)",
          x: 42,
          y: 26,
          color: "orange",
          era: "Unificado (2025-2026)",
          img: "assets/img/kharzuun.jpg",
          gallery: ["assets/img/kharzuun.jpg", "assets/img/draktharia.jpg", "assets/img/teleferico.jpg"],
          quote: "Construida sobre las faldas del volcán Vorth'Kar, no por necesidad, sino por desafío.",
          description: "Capital de Draktharia y último gran bastión de la resistencia liderada por Kael y la Guardia Ígnea. Es una ciudad-fortaleza vertical tallada directamente en obsidiana negra y reforzada con metales volcánicos que solo se forjan durante las erupciones. Sus torres se alzan como lanzas y sus puentes colgantes cruzan ríos de magma.",
          sublocations: [
            "Templo del Núcleo: Sede del Cónclave del Núcleo (cinco figuras encapuchadas marcadas por el volcán que interpretan los rugidos del dios dormido Zuun-Kar).",
            "Armería de la Vanguardia & Mercado de la Llama: Donde se templan armaduras en lava y Kael entrega la Lanza de Obsidiana a Leo.",
            "Red de Teleféricos Dracónicos: Cabinas de hierro forjado con cabezas de dragón que cruzan los abismos volcánicos.",
            "Muro Norte: Escenario del gran asedio de los Susurradores de Ceniza y Gárgolas en el Capítulo 5."
          ],
          chapters: ["Capítulo 4: La Ciudad Dividida", "Capítulo 5: La Batalla de los Muros", "Capítulo 7: La Traición en el Bastión", "Epílogo: La Corona y el Espejo"]
        },
        {
          id: "vorthkar",
          name: "Volcán Sagrado Vorth'Kar & Fortaleza Flotante",
          region: "Draktharia (Extremo Norte)",
          x: 56,
          y: 16,
          color: "violet",
          era: "2018–2026 (Clímax Canónico)",
          img: "assets/img/draktharia.jpg",
          gallery: ["assets/img/draktharia.jpg", "assets/img/leo_fase4.jpg", "assets/img/marcos_fase4.jpg", "assets/img/leo_fase5.jpg"],
          quote: "Donde el fuego del mundo duerme y las cadenas del Motor de Almas desgarran el cielo.",
          description: "El cráter activo más colosal de Draktharia, venerado como el cuerpo del dios dormido Zuun-Kar. Sobre su caldera asciende la Fortaleza Flotante de Obsidiana del Lord Tirano, anclada mediante cadenas kilométricas a las Minas de Almas. En sus puentes sobre ríos de lava ocurre el duelo definitivo entre el Fuego Naranja de Leo y el Fuego Verde de Marcos.",
          sublocations: [
            "Puentes del Cráter Interior: Escenario del duelo final entre Leo (Fase 4) y Marcos (Fase 4).",
            "Fortaleza Flotante de Obsidiana: Trono de huesos de dragón del Lord Tirano, cuyos cimientos guardan los restos del Padre de Leo.",
            "El Motor de Almas: Reactor arcano que drena la voluntad de los prisioneros para abrir la brecha hacia la Tierra."
          ],
          chapters: ["Capítulo 2: El Beso de la Corrupción", "Capítulo 8: Ecos en el Abismo", "Capítulo 9: El Cielo Arde", "Escena Post-Créditos"]
        },
        {
          id: "forja_ancestros",
          name: "La Forja de los Ancestros & Cueva de los Ecos",
          region: "Frontera Montañosa / Draktharia Sur",
          x: 31,
          y: 38,
          color: "orange",
          era: "Unificado (2019 Sequencer + 2026 Director's Cut)",
          img: "assets/img/prota_fuego_cueva.jpg",
          gallery: ["assets/img/prota_fuego_cueva.jpg", "assets/img/ue4_pesadilla_sequencer.jpg", "assets/img/leo_fase2.jpg", "assets/img/sketch_armadura.jpg"],
          quote: "El fuego sin control es solo ceniza esperando caer. Entra a la cueva sin tu llama.",
          description: "Catedral subterránea alimentada por canales de magma donde trabaja Gorin, el Maestro Herrero gólem de tres metros. Para que Gorin acepte estabilizar su armadura, Leo debe adentrarse en la Cueva de los Ecos —plagada de arañas de cristal— sin usar su fuego, enfrentando la secuencia de 'Pesadilla' contra su propio reflejo arrogante.",
          sublocations: [
            "Yunque Estelar de Gorin: Donde se forjan los guanteletes y la pechera de Leo (Fase 2).",
            "Nido de Arañas de Cristal: Caverna de cuarzo resonante donde se extrae el Metal Estelar.",
            "Cámara del Espejo Oscuro: Donde ocurre la cinemática 'Pesadilla' creada en Unreal Engine."
          ],
          chapters: ["Capítulo 2: La Forja de los Ancestros"]
        },
        {
          id: "canada_lamentos",
          name: "Cañada de los Lamentos & Minas de Almas",
          region: "Draktharia Oriental",
          x: 68,
          y: 34,
          color: "green",
          era: "2025–2026 (Arco de Marcos & Survival Horror)",
          img: "assets/img/marcos_fase2.jpg",
          gallery: ["assets/img/marcos_fase2.jpg", "assets/img/visor_runico.jpg", "assets/img/kasumi_evolution.jpg"],
          quote: "Un páramo de barro negro ácido donde el miedo de Marcos se transformó en fuego esmeralda.",
          description: "Zona desolada de lluvia ácida grisácea y roca porosa negra al este de Draktharia. Aquí cae Marcos solo tras el cruce del portal, siendo capturado por esclavistas hasta despertar su Fuego Verde salvaje. Bajo la cañada se extienden las Minas de Almas (Tierras de Cristal), donde los prisioneros —incluidos invitados de la fiesta de Ciudad Bogato— son drenados de su brasa.",
          sublocations: [
            "Páramo de Ceniza: Donde Marcos mata a sus captores y es reclutado por las Gárgolas del Tirano.",
            "Sector 4 (Laberinto de los Lamentos): Nivel de Survival Horror en oscuridad total donde Leo usa la Visión Rúnica / Térmica contra los Acechadores del Vacío.",
            "Pozo de Cadenas & Devorador de Ecos: Ascensor colosal hacia la Fortaleza Flotante donde Kasumi es capturada."
          ],
          chapters: ["Capítulo 1: El Despertar (POV Marcos)", "Capítulo 7: Las Minas de Almas"]
        },
        {
          id: "zarmekhul",
          name: "Canal de Zar'Mekhul (El Océano de Vapor)",
          region: "Mar Interior entre Draktharia y Sylpharia",
          x: 49,
          y: 51,
          color: "blue",
          era: "Lore Islas + Crónicas de Bogato",
          img: "assets/img/zarmekhul.jpg",
          gallery: ["assets/img/zarmekhul.jpg", "assets/img/arma_kraken_ai.jpg", "assets/img/arma_kraken.jpg", "assets/img/leo_fase3.jpg"],
          quote: "Un estado intermedio de la materia donde el mar hierve, las brújulas enloquecen y la Tormenta del Silencio apaga los sentidos.",
          description: "Estrecho marítimo envuelto en el 'Velo Blanco', formado por el choque térmico entre los ríos de lava del norte y las corrientes mágicas del sur. En su fosa abisal descansa el Templo Sumergido (Nexo del Agua) con un corazón de zafiro gigantesco que purifica la atmósfera de Bogato, además de la Isla del Exilio y la reliquia abisal del Kraken.",
          sublocations: [
            "Templo Sumergido / Nexo del Agua: Torre subacuática de coral blanco donde Leo transforma su fuego en vapor sónico a presión (Fase 3: Sinfonía de Vapor).",
            "La Tormenta del Silencio: Anomalía arcana que anula la vista y el oído en medio de los géiseres.",
            "Isla del Exilio & Fuertes Navales: Prisiones insulares olvidadas en el centro del canal."
          ],
          chapters: ["Capítulo 6: El Mar de las Sombras Blancas"]
        },
        {
          id: "elarion",
          name: "Elarion (La Ciudad Suspendida)",
          region: "Sylpharia (Isla del Sur)",
          x: 44,
          y: 72,
          color: "blue",
          era: "Lore Islas + Director's Cut",
          img: "assets/img/elarion.jpg",
          gallery: ["assets/img/elarion.jpg", "assets/img/elarion_1.jpg", "assets/img/kasumi_fase1.jpg"],
          quote: "Erigida entre las copas de árboles colosales, donde los puentes están tejidos de luz y viento.",
          description: "Capital mágica y cultural de Sylpharia, hogar de los Guardianes del Azur (la orden de Kasumi / Elara) y del Clan del Cielo. Sus cúpulas de cristal y plataformas flotantes conviven en simbiosis con dragones de viento. Khar'Zuun la considera arrogante por 'vivir suspendida en ramas lejos del suelo', sin saber que las raíces de Sylpharia alimentan el volcán del norte.",
          sublocations: [
            "Academia de los Sueños: Centro de estudio arcano de Kasumi donde se preservan los tomos del primer Guardián.",
            "Plaza del Viento: Corona central con una fuente de energía dracónica que regula el clima de la isla.",
            "Archipiélago de las Nubes & Picos Aulladores: Riscos de tormentas perpetuas donde Leo aprende a volar sobre Ignis y recupera el Fragmento del Viento."
          ],
          chapters: ["Interludio del Padre", "Capítulo 3: El Vuelo del Destino", "Capítulo 6: Los Tres Fragmentos"]
        },
        {
          id: "bosque_susurros",
          name: "Bosque de los Susurros & Cueva del Lago",
          region: "Sylpharia Meridional",
          x: 62,
          y: 81,
          color: "violet",
          era: "2018–2026 (Punto de Llegada)",
          img: "assets/img/cueva_dragon.jpg",
          gallery: ["assets/img/cueva_dragon.jpg", "assets/img/cueva_lago_01.jpg", "assets/img/sylpharia.jpg", "assets/img/fuego_naranja_azul.jpg"],
          quote: "Árboles de troncos blancos como el mármol y hojas plateadas bajo un cielo violeta eléctrico.",
          description: "El nodo dimensional donde despierta Leo tras caer en el lago del templo terrenal. Es una selva bioluminiscente de hongos gigantes y musgo azul reactivo cuyos árboles absorben los sonidos y los devuelven como ecos distorsionados. Allí Kasumi cura las quemaduras de Leo y allí encuentran el Eco (huevo de cristal) del que nace el dragón Ignis.",
          sublocations: [
            "Cueva del Lago Primordial: Contraparte exacta del Templo del Lago de Ciudad Bogato.",
            "Claro del Eco: Raíces milenarias donde el huevo de Ignis esperó durante 20 ciclos el regreso de la sangre del Guardián."
          ],
          chapters: ["Interludio Jugable", "Capítulo 1: El Despertar en el Bosque de los Susurros"]
        }
      ]
    },

    tierra: {
      id: "tierra",
      name: "Plano Terrenal: Ciudad de Bogato (El Mundo de Arriba)",
      subtitle: "Metrópolis contemporánea de dos islas unidas por puentes, luces de neón y secretos enterrados",
      mapImg: "assets/img/ciudad_bogato_mapa.jpg",
      secondaryMapImg: "assets/img/ciudad_bogato_sketch.jpg",
      secondaryCaption: "Plano original a mano de Ciudad Bogato (2021): cuadrícula urbana, puentes gemelos y templo octogonal en la costa",
      summary: "El mundo humano moderno donde nacieron Leo y Marcos. Su geografía urbana de dos grandes islas conectadas por dos puentes paralelos es el reflejo físico de Las Islas del Fulgor. Incluye mecánicas de mundo abierto urbano: celular interactivo, conducción de autos y motos, locales comerciales y armería oculta.",
      pins: [
        {
          id: "atico_leo",
          name: "El Ático de Diseño & Residencia de Leo",
          region: "Isla Occidental (Distrito Financiero)",
          x: 28,
          y: 42,
          color: "orange",
          era: "Prólogo (2018–2026)",
          img: "assets/img/leo_fase1.jpg",
          gallery: ["assets/img/leo_fase1.jpg", "assets/img/marcos_fase1.jpg", "assets/img/metahuman_face.jpg"],
          quote: "El mundo es tuyo, Leo.",
          description: "Rascacielos de lujo en el corazón de la Isla Occidental. En su baño de mármol comienza el juego en primera persona antes de salir a la fiesta electrónica con Marcos y Sofía. Cuando Sofía toma la selfie grupal, el flash provoca la primera grieta del Portal de Espejo. En la habitación de Leo se encuentra la caja vieja de su padre con bocetos de dragones y el mapa hacia 'EL ORIGEN'.",
          sublocations: [
            "Baño de Mármol: Escena introductoria frente al espejo.",
            "Salón Principal del Ático: Pista de baile estroboscópica donde se toma la selfie que marca a Leo y Marcos.",
            "Habitación de Leo: Donde despierta a la mañana siguiente, usa el celular (Flecha Arriba) y descubre los papeles de su padre."
          ],
          chapters: ["Prólogo — Escena 1: El Baño de Mármol y la Fiesta", "Prólogo — Escena 2: La Mañana Siguiente"]
        },
        {
          id: "distrito_comercial",
          name: "Distrito Comercial & Concesionaria ('Ir de Compras')",
          region: "Isla Occidental Centro",
          x: 35,
          y: 64,
          color: "blue",
          era: "Mundo Abierto Clásico + Build UE5",
          img: "assets/img/auto_bogato.jpg",
          gallery: ["assets/img/auto_bogato.jpg", "assets/img/miniatura_moto_dragon.jpg", "assets/img/sketch_pistola.jpg", "assets/img/sketch_rifle.jpg"],
          quote: "Misión inicial para introducir al jugador en el mundo abierto, los locales accesibles y el sistema de compra/venta.",
          description: "Avenida principal con rotonda, tiendas de ropa, concesionaria de autos y motos, y armería subterránea. Cumple la función de tutorial jugable ('Ir de compras') antes de que la trama dé su giro oscuro hacia el Mundo Bogato.",
          sublocations: [
            "Concesionaria & Garaje: Vehículos conducibles (sedán urbano y motocicleta deportiva).",
            "Armería Táctica Oculta: Donde se obtiene la pistola de 12 balas con silenciador y mira térmica."
          ],
          chapters: ["Prólogo — Escena 2: Misión 'Ir de Compras'"]
        },
        {
          id: "puentes_gemelos",
          name: "Puentes Paralelos del Canal Urbano",
          region: "Conexión Interinsular",
          x: 52,
          y: 53,
          color: "violet",
          era: "Mapa 2021 + Guion Completo",
          img: "assets/img/ciudad_bogato_mapa.jpg",
          gallery: ["assets/img/ciudad_bogato_mapa.jpg", "assets/img/ciudad_bogato_sketch.jpg"],
          quote: "El equivalente terrenal del Canal de Zar'Mekhul.",
          description: "Dos grandes viaductos que unen la Isla Occidental densamente urbanizada con la Isla Oriental y la periferia boscosa. Leo y Marcos los cruzan a toda velocidad en moto/auto el domingo por la mañana siguiendo la coordenada roja dejada por el padre de Leo.",
          sublocations: [
            "Viaducto Norte y Sur: Rutas de alta velocidad sobre el brazo de mar urbano.",
            "Control Perimetral: Límite entre la zona céntrica y la autopista de circunvalación oriental."
          ],
          chapters: ["Prólogo — Escena 3: Viaje hacia El Origen"]
        },
        {
          id: "templo_lago",
          name: "Templo del Lago Negro ('EL ORIGEN')",
          region: "Límite Oriental del Mapa (Bosque Periférico)",
          x: 82,
          y: 28,
          color: "green",
          era: "Biblia 2018 + Guion 2025",
          img: "assets/img/cueva_lago_01.jpg",
          gallery: ["assets/img/cueva_lago_01.jpg", "assets/img/dragon_usurper_ue4.jpg", "assets/img/ciudad_bogato_sketch.jpg"],
          quote: "En esos papeles había una ubicación en el límite de la ciudad... un templo con un lago en el centro.",
          description: "Santuario octogonal de piedra ancestral oculto tras la espesura en el extremo oriental de Ciudad Bogato. En su centro reposa un lago de aguas negras que funciona como el Portal de Espejo físico principal entre la Tierra y Bogato. Allí los cultistas encapuchados realizan el ritual que emerge al dragón y arrastra a Leo y Marcos hacia la otra dimensión.",
          sublocations: [
            "Altar del Lago Negro: Nodo donde el Padre de Leo cruzó hace 20 ciclos en el Interludio jugable.",
            "Anillo de los Encapuchados: Posición de los sectarios del Cónclave del Núcleo que fuerzan la brecha."
          ],
          chapters: ["Prólogo — Escena 3: El Ritual en el Templo del Lago", "Interludio Jugable: El Recuerdo del Padre"]
        }
      ]
    }
  },

  // --------------------------------------------------------------------------
  // 2. COSMOLOGÍA Y SISTEMA DE MAGIA (ESPECTROSCOPIA DE LA BRASA)
  // --------------------------------------------------------------------------
  magicSystem: [
    {
      id: "fuego_naranja",
      name: "Fuego Naranja / Ámbar (Fuego del Guardián)",
      emotion: "Voluntad, Propósito, Humildad y Sacrificio",
      colorClass: "orange",
      hex: "#f97316",
      bearers: "Leo, el Padre de Leo e Ignis",
      img: "assets/img/prota_fuego_mano.jpg",
      quote: "El fuego naranja no quema la carne, quema la duda.",
      combatStyle: "Calor denso y templado capaz de adaptarse a los estados de la materia: se funde con roca rúnica (Tierra), calienta el agua desde dentro creando propulsión y ondas sónicas (Vapor), solidifica magma vivo (Señor del Magma) y se expande en Alas de Fuego supersónicas.",
      physiologicalEffect: "Cuando el portador es arrogante o duda (Fase 1), el fuego nace desde sus venas y carboniza su propia piel y ropa. Al templarse en la Forja de los Ancestros, tiñe la piel de un matiz broncíneo y los ojos de color ámbar brillante."
    },
    {
      id: "fuego_verde",
      name: "Fuego Verde (Fuego Vil / Esencia de la Envidia)",
      emotion: "Envidia, Resentimiento Silencioso y Hambre de Reconocimiento",
      colorClass: "green",
      hex: "#10b981",
      bearers: "Marcos (El Eclipse Esmeralda) y Huestes del Tirano",
      img: "assets/img/marcos_fase3.jpg",
      quote: "En tu mundo, eras su sombra. Aquí, te ofrezco ser el eclipse.",
      combatStyle: "Llamas esmeralda rápidas, líquidas y corrosivas. Marchita la vegetación en ceniza negra al contacto, flota sobre el agua como aceite hirviendo, anima estatuas de piedra (Gárgolas de Sangre) y controla a los Susurradores de Ceniza.",
      physiologicalEffect: "Actúa como un parásito espiritual que Marcos confunde con 'evolución': vuelve su piel grisácea, cristaliza sus pupilas en verde tóxico, muta su brazo izquierdo en roca y magma verde con garras de obsidiana y le provoca tos de brea y sangre negra."
    },
    {
      id: "fuego_azul",
      name: "Fuego Azul (Azur Puro vs. Fuego Azul del Tirano)",
      emotion: "Sabiduría Arcana y Calma Gélida (Kasumi) vs. Dominio Absoluto (Lord Tirano)",
      colorClass: "blue",
      hex: "#38bdf8",
      bearers: "Kasumi (Guardianes del Azur) y el Lord Tirano",
      img: "assets/img/fuego_naranja_azul.jpg",
      quote: "No quemes el aire, Leo; siente el pulso del agua y deja que el Azur guíe tu brasa.",
      combatStyle: "En manos de Kasumi se manifiesta como escarcha curativa, escudos de vapor frío, rayos de zafiro y, en su Fase 4 (Archimaga Desatada), una armadura de magma azul agrietada sin restricciones. En el Lord Tirano es un fuego azul incandescente y gélido que succiona las almas para el Motor.",
      physiologicalEffect: "Exige sincronía mental absoluta; permite estabilizar quemaduras rúnicas de otros portadores y abrir o sellar definitivamente los Portales de Espejo."
    },
    {
      id: "energia_vacio",
      name: "Energía del Vacío (La Chispa Violeta Oscura)",
      emotion: "Ruptura Total del Reflejo, Abismo Post-Muerte y Nihilismo",
      colorClass: "violet",
      hex: "#a855f7",
      bearers: "Marcos en Fase 5 (Escena Post-Créditos) y Criaturas del Abismo",
      img: "assets/img/marcos_fase5.jpg",
      quote: "No hay vuelta atrás para los reflejos rotos, Leo.",
      combatStyle: "Anula las leyes elementales de Draktharia y Sylpharia. Desintegra la materia, distorsiona la gravedad y permite existir entre los pliegues dimensionales una vez destruido el Motor de Almas.",
      physiologicalEffect: "Cuando el fuego verde de Marcos se apaga en el fondo del cráter colapsado, la Energía del Vacío reconstruye sus miembros amputados con obsidiana abisal y enciende una llama violeta fría y silenciosa en su interior."
    }
  ],

  // --------------------------------------------------------------------------
  // 3. PERSONAJES Y MATRIZ INTERACTIVA DE EVOLUCIÓN POR FASES
  // --------------------------------------------------------------------------
  characters: [
    {
      id: "leo",
      name: "Leo",
      title: "El Heredero del Guardián / Portador del Fuego Naranja",
      faction: "Alianza de las Islas del Fulgor (Draktharia & Sylpharia)",
      origin: "Ciudad de Bogato (Plano Terrenal)",
      magic: "Fuego Naranja / Ámbar + Simbiosis con Ignis",
      accent: "orange",
      sheetImg: "assets/img/leo_evolution.jpg",
      bio: "Joven carismático, adinerado y magnético de Ciudad Bogato que vivía como el centro de gravedad de todas las fiestas sin notar el resentimiento de su mejor amigo Marcos. Al cruzar el portal hacia Bogato, descubre que su padre desaparecido fue el antiguo Guardián del reino. Su arco narrativo consiste en quemar su propia vanidad para convertirse en el escudo de un mundo en ruinas.",
      stats: { ataque: 95, defensa: 90, magia: 88, movilidad: 98, voluntad: 100 },
      phases: [
        {
          phase: 1,
          name: "Fase 1 — Inicio: Fiesta / Llegada",
          img: "assets/img/leo_fase1.jpg",
          location: "Ático de Ciudad Bogato → Bosque de los Susurros",
          armor: "Chaqueta urbana de diseño con la manga derecha carbonizada.",
          weapons: "Pistola táctica de 12 balas (mira térmica) y Fuego Naranja descontrolado.",
          lore: "Su cuerpo no soporta el legado de su padre: cada vez que invoca el fuego naranja para defenderse de la fauna de Sylpharia, las llamas nacen de sus venas y le queman su propia piel."
        },
        {
          phase: 2,
          name: "Fase 2 — Llegada: Primer Control en la Forja",
          img: "assets/img/leo_fase2.jpg",
          location: "La Forja de los Ancestros & Cueva de los Ecos",
          armor: "Pechera ligera de cuero/obsidiana y Guanteletes de Metal Estelar forjados por Gorin.",
          weapons: "Guanteletes canalizadores, espada rúnica corta y primeros vuelos con Ignis joven.",
          lore: "Tras vencer a su propio reflejo arrogante en la Cueva de los Ecos sin usar magia, Gorin estabiliza su brasa. Ya puede lanzar ráfagas de fuego naranja sin herirse."
        },
        {
          phase: 3,
          name: "Fase 3 — Control: Resiliencia de Tierra & Sinfonía de Vapor",
          img: "assets/img/leo_fase3.jpg",
          location: "Muro Norte de Bastión Alto → Templo Sumergido (Océano de Vapor)",
          armor: "Armadura estabilizada de placas rúnicas con válvulas de escape de vapor sónico y propulsores dorsales.",
          weapons: "Lanza de Obsidiana (entregada por Kael), ondas de choque de vapor a presión y Arma Kraken.",
          lore: "Combina la defensa sísmica despertada al salvar a Kael en las murallas con la agilidad hidrotérmica aprendida junto a Kasumi bajo las aguas del Canal de Zar'Mekhul."
        },
        {
          phase: 4,
          name: "Fase 4 — Quiebre: Señor del Magma",
          img: "assets/img/leo_fase4.jpg",
          location: "Minas de Almas → Cráter del Volcán Sagrado Vorth'Kar",
          armor: "Armadura pesada de magma vivo y sólido contenida por runas incandescentes.",
          weapons: "Mandoble/Lanza del Guardián bañada en magma solar y Visión Rúnica.",
          lore: "Desbloqueada tras la muerte de su hermanastro Kael y su compañera Lyra. El dolor y la responsabilidad del mando funden el metal estelar en roca ígnea viviente capaz de resistir el Fuego Vil de Marcos."
        },
        {
          phase: 5,
          name: "Fase 5 — Ascensión Final: El Guardián Desatado",
          img: "assets/img/leo_fase5.jpg",
          location: "Cielo del Volcán Vorth'Kar & Fortaleza Flotante",
          armor: "Supernova de oro líquido, bronce divino y luz blanca con colosales Alas de Fuego.",
          weapons: "Alas de Fuego supersónicas y Lanza Solar sincronizada con Ignis ancestral.",
          lore: "Cuando el Lord Tirano arroja a Kasumi desde la Fortaleza Flotante, Leo rompe todos los límites de su brasa, despliega alas de fuego puro, la rescata rompiendo la barrera del sonido y derrota al Tirano."
        }
      ]
    },

    {
      id: "marcos",
      name: "Marcos",
      title: "El Eclipse Esmeralda / El Señor del Magma Verde",
      faction: "Imperio del Lord Tirano → Entidad del Vacío",
      origin: "Ciudad de Bogato (Plano Terrenal)",
      magic: "Fuego Verde (Envidia) → Energía Violeta del Vacío",
      accent: "green",
      sheetImg: "assets/img/marcos_fase3.jpg",
      bio: "El mejor amigo de toda la vida de Leo en Ciudad Bogato, pero condenado siempre al rol de actor secundario: el que sostenía los vasos en las fiestas, caminaba un paso atrás y salía cortado en el borde de las selfies. Al caer solo en la Cañada de los Lamentos, su resentimiento acumulado durante años despierta el Fuego Verde y es seducido por el Lord Tirano con la promesa de dejar de ser la sombra para convertirse en el eclipse.",
      stats: { ataque: 97, defensa: 84, magia: 96, movilidad: 92, voluntad: 78 },
      phases: [
        {
          phase: 1,
          name: "Fase 1 — Inicio: El Segundón",
          img: "assets/img/marcos_fase1.jpg",
          location: "Ático de Ciudad Bogato & Templo del Lago",
          armor: "Camisa y chaqueta oscura de fiesta urbana.",
          weapons: "Ninguna (resentimiento reprimido y anomalía esmeralda en el flash de la selfie).",
          lore: "Sonríe para complacer a Leo mientras Sofía lo ignora. En el instante del flash fotográfico, el espejo ya revela la chispa verde en sus pupilas."
        },
        {
          phase: 2,
          name: "Fase 2 — Llegada a Páramo Desolado",
          img: "assets/img/marcos_fase2.jpg",
          location: "Cañada de los Lamentos (Draktharia Oriental)",
          armor: "Ropa terrenal desgarrada y cubierta de barro negro ácido.",
          weapons: "Fuego Verde salvaje e instintivo que brota de sus manos.",
          lore: "Despierta solo, asustado y rodeado de esclavistas. Al recordar cómo Leo siempre lo tuvo todo, su pánico se transforma en furia letal e incinera a sus captores bajo la mirada del Lord Tirano."
        },
        {
          phase: 3,
          name: "Fase 3 — Corrupción: Caballero Verde",
          img: "assets/img/marcos_fase3.jpg",
          location: "Cielos de Elarion, Ciudad Vecina y Muro Norte",
          armor: "Armadura fina de placas verdes y obsidiana pulida con máscara de hierro negro.",
          weapons: "Espada de Arrogancia Creciente (Fuego Vil) y mando sobre las Gárgolas de Sangre.",
          lore: "Impone ley marcial ejecutando criminales con fuego verde y humilla a Leo en su primer reencuentro: 'Tú sigues jugando a las aventuras con palos y piedras; yo he traído orden a este caos'."
        },
        {
          phase: 4,
          name: "Fase 4 — Tiranía: Señor del Magma Verde",
          img: "assets/img/marcos_fase4.jpg",
          location: "Minas de Almas & Cráter del Volcán Sagrado Vorth'Kar",
          armor: "Roca vil agrietada fusionada biológicamente a su piel grisácea.",
          weapons: "Brazo izquierdo mutado en Magma Verde con garras de obsidiana y coro de almas.",
          lore: "Tras sumergirse en el tanque de la 'Esencia de la Envidia' y matar a Kael en la emboscada nocturna, su propia armadura lo envenena haciéndole toser brea negra mientras lucha a muerte contra Leo en el volcán."
        },
        {
          phase: 5,
          name: "Fase 5 — Caída: El Vacío (Post-Créditos)",
          img: "assets/img/marcos_fase5.jpg",
          location: "Fosa Abisal bajo el Volcán Vorth'Kar Colapsado",
          armor: "Cuerpo reconstruido con obsidiana abisal y venas de luz violeta oscura.",
          weapons: "Energía pura del Vacío (desintegración interdimensional).",
          lore: "Derrotado, mutilado a orillas del río de lava y tras soltarse de la mano de Leo ('No hay vuelta atrás para los reflejos rotos'), su fuego verde muere y renace en la escena post-créditos como el heraldo del Vacío."
        }
      ]
    },

    {
      id: "kasumi",
      name: "Kasumi (Elara)",
      title: "Vigilante del Bosque & Archimaga de los Guardianes del Azur",
      faction: "Academia de los Sueños (Elarion / Sylpharia)",
      origin: "Elarion, Isla de Sylpharia",
      magic: "Fuego Azul Puro (Azur, Escarcha Sanadora y Magma Azul)",
      accent: "blue",
      sheetImg: "assets/img/kasumi_evolution.jpg",
      bio: "Hechicera prodigio de la orden de los Guardianes del Azur en Elarion (conocida en los cánticos antiguos como 'Elara', Hija de Elarion). Encuentra a Leo moribundo en el Bosque de los Susurros, estabiliza su brazo carbonizado y lo guía hacia el huevo de Ignis y la Forja de Gorin. Es el ancla estratégica, espiritual y emocional de Leo durante toda la guerra.",
      stats: { ataque: 86, defensa: 82, magia: 100, movilidad: 89, voluntad: 96 },
      phases: [
        {
          phase: 1,
          name: "Fase 1 — Vigilante del Bosque",
          img: "assets/img/kasumi_fase1.jpg",
          location: "Bosque de los Susurros (Sylpharia)",
          armor: "Túnica ligera de camuflaje bioluminiscente azul profundo con morral de hierbas.",
          weapons: "Bastón de madera blanca de Sylpharia con cristal tenue y magia de escarcha.",
          lore: "Patrulla las fronteras del bosque buscando señales del regreso del Guardián. Salva la vida de Leo enfriando la fiebre ígnea de sus venas."
        },
        {
          phase: 2,
          name: "Fase 2 — Compañera de Viaje",
          img: "assets/img/kasumi_evolution.jpg",
          location: "Bastión Alto (Khar'Zuun) & Océano de Vapor",
          armor: "Túnica de combate reforzada con placas rúnicas plateadas y grabados arcanos brillantes.",
          weapons: "Báculo de Zafiro facetado capaz de invocar muros de vapor frío y rayos azules.",
          lore: "Lucha codo a codo con Leo y Kael en la defensa de Bastión Alto y guía la inmersión abisal hacia el Templo Sumergido del Canal de Zar'Mekhul."
        },
        {
          phase: 3,
          name: "Fase 3 — La Cautiva de las Minas",
          img: "assets/img/kasumi_evolution.jpg",
          location: "Sector 4 de las Minas de Almas → Fortaleza Flotante",
          armor: "Túnica rasgada y manchada de hollín tras el combate contra el Devorador de Ecos.",
          weapons: "Canalización rúnica manual para proteger a los prisioneros drenados.",
          lore: "Durante el ascenso violento por las cadenas gigantes hacia la Fortaleza Flotante, es derribada por una ráfaga de Marcos y tomada como rehén por el Lord Tirano."
        },
        {
          phase: 4,
          name: "Fase 4 — Archimaga Desatada",
          img: "assets/img/kasumi_evolution.jpg",
          location: "Fortaleza Flotante & Plaza del Espejo en Bastión Alto",
          armor: "Armadura de Magma Azul agrietada con escudo arcano de alta densidad.",
          weapons: "Fuego Azul Azur sin restricciones y sello dimensional definitivo.",
          lore: "Tras ser rescatada en el aire por las Alas de Fuego de Leo, libera el poder prohibido de la Academia de los Sueños para destruir los anclajes del Motor de Almas y sellar el Portal de Espejo en el final canónico."
        }
      ]
    },

    {
      id: "kael",
      name: "Kael & Lyra",
      title: "Comandante de Bastión Alto (Hermanastro de Leo) & Capitana de la Guardia Ígnea",
      faction: "Clan de la Tierra / Guardia Ígnea de Khar'Zuun",
      origin: "Khar'Zuun, Isla de Draktharia",
      magic: "Resonancia Telúrica de Obsidiana y Espadón Templado en Lava",
      accent: "orange",
      sheetImg: "assets/img/kharzuun.jpg",
      bio: "Kael es el hijo mayor que el Padre de Leo tuvo en el Mundo Bogato antes de quedar separado entre dimensiones. Más alto y corpulento que Leo, con una cicatriz en la ceja, sostuvo durante veinte años la defensa de Bastión Alto junto a su pareja y capitana de armas, Lyra. Aunque al principio desconfía de Leo creyendo que viene a robar la gloria de su padre, termina reconociéndolo como su hermano y sacrificando su vida para salvarlo de la emboscada de Marcos.",
      stats: { ataque: 92, defensa: 95, magia: 70, movilidad: 75, voluntad: 98 },
      phases: [
        {
          phase: 1,
          name: "Comandante del Muro Norte & Sacrificio Heroico",
          img: "assets/img/kharzuun.jpg",
          location: "Bastión Alto (Khar'Zuun)",
          armor: "Armadura pesada del Clan de la Tierra y cuero volcánico templado en lava.",
          weapons: "Espadón de obsidiana a dos manos y Lanza de Obsidiana heredada a Leo.",
          lore: "Lidera la resistencia contra el asedio de Marcos en el Capítulo 5 y cae como mártir junto a Lyra en la traición nocturna del Capítulo 7, detonando el despertar de Leo como Señor del Magma."
        }
      ]
    },

    {
      id: "ignis",
      name: "Ignis (El Dragón del Guardián)",
      title: "Último Eco del Linaje Solar",
      faction: "Vínculo Simbiótico con Leo",
      origin: "Bosque de los Susurros / Cuna Dracónica de Sylpharia",
      magic: "Aliento de Fuego Naranja Denso y Escamas de Cristal Iridiscente",
      accent: "orange",
      sheetImg: "assets/img/cueva_dragon.jpg",
      bio: "Nacido de un 'Eco' (huevo de cristal translúcido) que esperó veinte ciclos entre las raíces del Bosque de los Susurros. Su crecimiento no depende del tiempo, sino de la madurez espiritual de Leo: evoluciona desde una cría del tamaño de un gato hasta un coloso alado de escamas de cobre y cristal iridiscente que combate sin silla de montar mediante conexión neuronal directa.",
      stats: { ataque: 96, defensa: 92, magia: 94, movilidad: 100, voluntad: 100 },
      phases: [
        {
          phase: 1,
          name: "Etapa 1 — El Eco Recién Nacido",
          img: "assets/img/sketch_escala_dragon.jpg",
          location: "Bosque de los Susurros",
          armor: "Escamas suaves de color brasa encendida.",
          weapons: "Pequeñas llamaradas que estabilizan el pulso de Leo.",
          lore: "Reconoce la sangre del Padre de Leo al instante y se posa sobre su hombro herido."
        },
        {
          phase: 2,
          name: "Etapa 2 — Cazador de los Picos Aulladores",
          img: "assets/img/desert_dragon_ue4.jpg",
          location: "Riscos de Elarion & Muro Norte",
          armor: "Escamas de cobre pulido a las que se acopla magnéticamente la armadura de Leo.",
          weapons: "Vuelo acrobático en tormentas y bolas de fuego naranja denso contra Gárgolas.",
          lore: "Alcanza el tamaño de una montura de guerra en el Capítulo 3 y protagoniza el primer duelo aéreo contra Marcos."
        },
        {
          phase: 3,
          name: "Etapa 3 — Dragón Ancestral de Cristal Iridiscente",
          img: "assets/img/cueva_dragon.jpg",
          location: "Volcán Sagrado Vorth'Kar & Fortaleza Flotante",
          armor: "Placas dracónicas de cristal iridiscente y magma solar.",
          weapons: "Torrente ígneo capaz de fundir el blindaje del Motor de Almas.",
          lore: "En el clímax vuela en formación con Leo Fase 5 para derribar al Lord Tirano y apoya su hocico en el pecho de Leo frente al Portal de Espejo."
        }
      ]
    },

    {
      id: "tirano_gorin_padre",
      name: "Lord Tirano, Gorin & El Padre",
      title: "Las Tres Columnas del Pasado de Bogato",
      faction: "Trono de Huesos / Forja de los Ancestros / Antiguo Guardián",
      origin: "Era de los Veinte Ciclos",
      magic: "Fuego Azul Corrupto / Forja Estelar / Fuego Solar Primordial",
      accent: "violet",
      sheetImg: "assets/img/dragon_usurper_ue4.jpg",
      bio: "Tríada que define el conflicto heredado por Leo: su Padre (el Guardián Anterior que dejó el mapa de 'EL ORIGEN' en Ciudad Bogato y fue convertido en los cimientos de la Fortaleza tras negarse a entregar la Tierra), Gorin (el gólem herrero de tres metros que forjó las armas de ambos) y el Lord Tirano (la entidad de Fuego Azul Oscuro que construyó el Motor de Almas y corrompió a Marcos).",
      stats: { ataque: 99, defensa: 96, magia: 99, movilidad: 88, voluntad: 95 },
      phases: [
        {
          phase: 1,
          name: "El Padre de Leo (Interludio Jugable — 20 Ciclos Atrás)",
          img: "assets/img/prota_fuego_closeup.jpg",
          location: "Templo del Lago → Antiguo Mundo Bogato",
          armor: "Armadura Solar original del Primer Guardián.",
          weapons: "Espada Rúnica del Origen.",
          lore: "Protagonista del Interludio jugable: permite al jugador ver la paz de Bogato y los dragones en libertad antes de la ruina."
        },
        {
          phase: 2,
          name: "Gorin (El Maestro Herrero Gólem)",
          img: "assets/img/sketch_armadura.jpg",
          location: "La Forja de los Ancestros",
          armor: "Cuerpo viviente de tres metros de roca volcánica y ojos de lava estancada.",
          weapons: "Martillo Estelar de los Ancestros.",
          lore: "Somete a Leo a la prueba de humildad en la Cueva de los Ecos y forja sus guanteletes de Fase 2."
        },
        {
          phase: 3,
          name: "El Lord Tirano (Señor de la Fortaleza Flotante)",
          img: "assets/img/dragon_usurper_ue4.jpg",
          location: "Fortaleza de Obsidiana & Motor de Almas",
          armor: "Manto imperial de obsidiana y Fuego Azul Gélido.",
          weapons: "Fuego Azul devorador de almas, Dragón Usurpador y el Motor de Almas.",
          lore: "Manipula la envidia de Marcos para dividir a los héroes y planea usar las almas humanas y dracónicas para invadir el Plano Terrenal."
        }
      ]
    }
  ],

  // --------------------------------------------------------------------------
  // 4. ARSENAL, ITEMS, BESTIARIO Y MECÁNICAS
  // --------------------------------------------------------------------------
  items: [
    {
      id: "arma_kraken",
      name: "Reliquia Abisal: Arma Kraken",
      category: "Arma Legendaria / Bogato",
      era: "Concept Art 2021 + Lore Canal de Zar'Mekhul",
      holder: "Leo (Fase 3 en adelante)",
      img: "assets/img/arma_kraken_ai.jpg",
      secondaryImg: "assets/img/arma_kraken.jpg",
      stats: "Daño Hidrotérmico +85 | Penetración de Armadura Vil +60%",
      description: "Espada orgánica-abisal forjada con restos de una bestia colosal del Canal de Zar'Mekhul, con empuñadura de tentáculos petrificados y filo turquesa bioluminiscente. Se obtiene al purificar el Templo Sumergido y permite canalizar cortes de vapor a alta presión."
    },
    {
      id: "espada_lanza_guardian",
      name: "Espada de Fuego & Lanza de Obsidiana",
      category: "Armas Principales / Bogato",
      era: "Prototipo UE5 (2024) + Guiones Extendidos",
      holder: "Leo & Kael",
      img: "assets/img/espada_fuego_ue5.jpg",
      secondaryImg: "assets/img/prota_fuego_cueva.jpg",
      stats: "Daño Ígneo Solar +95 | Sincronía Dracónica +100%",
      description: "Armas insignia del linaje del Guardián. La espada canaliza directamente el Fuego Naranja de las venas de Leo (vista en el prototipo jugable de UE5), mientras que la Lanza de Obsidiana es entregada por Kael en Bastión Alto y se utiliza en el golpe final contra el núcleo del Lord Tirano."
    },
    {
      id: "guanteletes_gorin",
      name: "Guanteletes y Pechera de Metal Estelar",
      category: "Armadura Simbiótica",
      era: "Bocetos 2021 + Capítulo 2",
      holder: "Leo (Fase 2–5)",
      img: "assets/img/sketch_armadura.jpg",
      secondaryImg: "assets/img/leo_fase2.jpg",
      stats: "Estabilidad Térmica +100% | Válvulas de Vapor y Magma",
      description: "Forjados por el gólem Gorin con el Metal Estelar extraído de la Cueva de los Ecos. Actúan como reguladores térmicos que impiden que el Fuego Naranja queme el brazo de Leo y evolucionan junto con su voluntad a través de las 5 Fases."
    },
    {
      id: "pistola_termica",
      name: "Pistola Táctica 12 Balas (Silenciador & Mira Térmica)",
      category: "Arsenal Terrenal (Ciudad Bogato)",
      era: "Concept Art 2021 (BogatoLostMedia)",
      holder: "Leo (Prólogo & Cueva de los Ecos)",
      img: "assets/img/sketch_pistola.jpg",
      secondaryImg: "assets/img/visor_runico.jpg",
      stats: "Cargador: 12 balas | Óptica: Visión Térmica Infrarroja",
      description: "Adquirida durante las misiones urbanas en Ciudad Bogato. Cuando se agota su munición en el Mundo Bogato, su mira térmica sirve de base mecánica y narrativa para que Kasumi y Gorin adapten la 'Visión Rúnica' que Leo usa a oscuras en el Sector 4 de las Minas de Almas."
    },
    {
      id: "rifle_tactico",
      name: "Rifle de Asalto Modular (Ciudad Bogato)",
      category: "Arsenal Terrenal (Ciudad Bogato)",
      era: "Concept Art 2021 (BogatoLostMedia)",
      holder: "Fuerzas de Ciudad Bogato / Arsenal Inicial",
      img: "assets/img/sketch_rifle.jpg",
      secondaryImg: "assets/img/ciudad_bogato_mapa.jpg",
      stats: "Alcance Medio-Alto | Munición Terrenal 5.56mm",
      description: "Diseñado en los bocetos originales de 2021 para el combate de acción en tercera persona en las dos islas de Ciudad Bogato antes del cruce dimensional."
    },
    {
      id: "vehiculos_celular",
      name: "Celular Interactivo, Sedán Urbano y Motocicleta",
      category: "Equipamiento Urbano & Exploración",
      era: "Builds 2019–2025 (Lean esto putxs.txt)",
      holder: "Leo, Marcos y Sofía",
      img: "assets/img/miniatura_moto_dragon.jpg",
      secondaryImg: "assets/img/auto_bogato.jpg",
      stats: "Atajo: Flecha Arriba (Celular) | Conducción Urbana en 2 Islas",
      description: "Elementos clave del mundo abierto terrenal: el teléfono móvil (que dispara la grieta dimensional con el flash de la selfie y recibe la llamada de Marcos el domingo) y los vehículos con los que recorren los puentes de Ciudad Bogato rumbo al Templo del Lago."
    },
    {
      id: "eco_motor_llave",
      name: "El Eco Dracónico, la Llave del Vacío y el Motor de Almas",
      category: "Artefactos Cosmologicos",
      era: "Director's Cut 2026",
      holder: "Leo / Marcos / Lord Tirano",
      img: "assets/img/visor_runico.jpg",
      secondaryImg: "assets/img/fuego_naranja_azul.jpg",
      stats: "Resonancia Interdimensional Nivel Omega",
      description: "Los tres artefactos que mueven la trama: el Eco (huevo de cristal que reacciona a la sangre del Guardián), la Llave del Vacío (daga negra con la que Marcos envenena el Nexo del Agua) y el Motor de Almas (reactor de la Fortaleza Flotante que al ser destruido libera la 'Lluvia de Estrellas')."
    },
    {
      id: "bestiario_bogato",
      name: "Bestiario: Gárgolas de Sangre, Susurradores y Devorador de Ecos",
      category: "Enemigos y Criaturas",
      era: "Unificado 2018–2026",
      holder: "Huestes del Lord Tirano & Fauna Abisal",
      img: "assets/img/dragon_usurper_ue4.jpg",
      secondaryImg: "assets/img/desert_dragon_ue4.jpg",
      stats: "Amenaza: Media a Extrema (Jefes de Mazmorra)",
      description: "Incluye a las Arañas de Cristal (Cueva de los Ecos), Gárgolas de Sangre (piedra animada que gotea brea verde), Susurradores de Ceniza (humanos y habitantes drenados de su alma), Acechadores de Vapor/Vacío (invisibles sin Visión Rúnica) y el colosal Devorador de Ecos en las Minas."
    }
  ],

  // --------------------------------------------------------------------------
  // 5. GUIÓN DEFINITIVO INTERACTIVO (ACTOS, CAPÍTULOS, DIÁLOGOS Y MÚSICA)
  // --------------------------------------------------------------------------
  scriptChapters: [
    {
      id: "prologo",
      act: "PRÓLOGO",
      title: "El Reflejo en el Ático, Ciudad Bogato y el Templo del Lago",
      location: "Ciudad de Bogato (Isla Occidental → Puentes → Límite Oriental)",
      music: "Pulso Electrónico Urbano → SadTheme1Bogato.mp3",
      img: "assets/img/leo_fase1.jpg",
      summary: "Unifica el inicio clásico en mundo abierto de BibliaBogato.docx con el prólogo psicológico del Director's Cut.",
      scenes: [
        {
          title: "Escena 1: El Baño de Mármol y el Flash de la Selfie",
          details: "En primera persona, Leo se arroja agua fría frente al espejo del baño de mármol y murmura: 'El mundo es tuyo, Leo'. Al abrir la puerta, la cámara pasa a tercera persona en medio de la fiesta del ático. Marcos aparece un paso atrás con dos vasos ('Todo el mundo pregunta por vos, Leo. Sos el alma de la fiesta'). Sofía ignora a Marcos, arrastra a Leo a la pista y saca su celular para una selfie. En el instante del CLIC, el flash blanco abre una micro-fisura en el espejo: se ve un cielo violeta, Marcos refleja pupilas verdes y un corte de tensión apaga el teléfono mientras Leo siente un ardor en su muñeca derecha."
        },
        {
          title: "Escena 2: La Mañana Siguiente y Misión 'Ir de Compras' (Mundo Abierto)",
          details: "Leo despierta con resaca en su habitación desordenada. Al buscar su celular (Flecha Arriba), encuentra una caja caída con viejos dibujos de dragones de su padre desaparecido. Sale a recorrer Ciudad Bogato (tutorial de mundo abierto: tránsito, tiendas, conducción de auto/moto y armería donde consigue la pistola de 12 balas con mira térmica). Al regresar y ordenar los papeles al compás de SadTheme1Bogato.mp3, halla un mapa con una coordenada roja en el límite oriental: 'EL ORIGEN'. Llama a Marcos y ambos viajan hacia allí."
        },
        {
          title: "Escena 3: El Ritual en el Templo del Lago Negro",
          details: "En el bosque periférico descubren un Templo de Piedra Antigua con un lago negro central donde sectarios encapuchados realizan un ritual. Del agua emerge un Dragón colosal que se altera al sentir la sangre de Leo; el ritual estalla con la misma luz blanca del flash y tanto Leo como Marcos caen al abismo violeta del lago."
        }
      ],
      keyQuote: "—El mundo es tuyo, Leo. —Todo el mundo pregunta por vos... sos el alma de la fiesta."
    },
    {
      id: "interludio",
      act: "INTERLUDIO JUGABLE",
      title: "El Recuerdo del Padre (20 Ciclos Atrás)",
      location: "Templo del Lago → Antiguo Mundo Bogato en Paz",
      music: "SadTheme1Bogato.mp3 → MainThemeBogato.mp3",
      img: "assets/img/prota_fuego_closeup.jpg",
      summary: "Secuencia jugable rescatada íntegramente de BibliaBogato.docx que conecta el pasado del Padre con el presente.",
      scenes: [
        {
          title: "El Guardián Anterior y el Valle de los Dragones",
          details: "Mientras Leo se hunde en el lago, el jugador pasa a controlar al Padre de Leo 20 ciclos atrás. El Padre entra al lago sabiendo exactamente qué ocurre y emerge en un Mundo Bogato luminoso y en paz: manadas de dragones conviven pacíficamente en el valle y vuelan sobre Elarion. El jugador camina por el pueblo, visita la taberna, conversa con Gorin y se despide de un pequeño Kael antes de montar al gran dragón del templo para enfrentar la primera invasión del Lord Tirano."
        }
      ],
      keyQuote: "Un vistazo al mundo que su padre intentó proteger antes de que el cielo se tiñera de ceniza."
    },
    {
      id: "cap1",
      act: "ACTO I — CAPÍTULO 1",
      title: "El Despertar en el Bosque de los Susurros y la Cañada de los Lamentos",
      location: "Sylpharia (Bosque de los Susurros) // Draktharia (Cañada de los Lamentos)",
      music: "Ambientación Bioluminiscente & Tormenta Ácida",
      img: "assets/img/fuego_naranja_azul.jpg",
      summary: "Doble despertar contrastado: la brasa inestable de Leo frente al nacimiento del Fuego Verde en Marcos.",
      scenes: [
        {
          title: "Leo, Kasumi y el Nacimiento de Ignis",
          details: "Leo despierta en la cueva del lago e intenta volver por el agua sin éxito. Al salir al Bosque de los Susurros bajo el cielo violeta, su brazo derecho arde desde las venas quemándole su propia piel (Fase 1). Kasumi (Vigilante de los Guardianes del Azur) estabiliza sus heridas con escarcha azul. Juntos descubren el Eco (huevo de cristal) entre las raíces milenarias; al tocarlo Leo, nace el dragón Ignis."
        },
        {
          title: "Corte Paralelo: El Despertar de Marcos en el Barro Ácido",
          details: "Marcos cae solo y sin lujos en la Cañada de los Lamentos (Fase 2). Es capturado por esclavistas; cuando el terror se convierte en odio puro por haber sido siempre la sombra de Leo, desata un Fuego Verde salvaje que calcina a sus captores. Las Gárgolas del Lord Tirano se inclinan ante él y lo llevan a la Fortaleza de Obsidiana."
        }
      ],
      keyQuote: "KASUMI: 'El fuego naranja no quema la carne, quema la duda. Y tú, Leo, estás lleno de ella.'"
    },
    {
      id: "cap2",
      act: "ACTO I — CAPÍTULO 2",
      title: "La Forja de los Ancestros y el Beso de la Corrupción",
      location: "Cueva de los Ecos & Fortaleza de Obsidiana",
      music: "Secuencia 'Pesadilla' → Tambores de Forja",
      img: "assets/img/leo_fase2.jpg",
      summary: "Leo supera su arrogancia para obtener su primera armadura mientras Marcos acepta ser el Caballero Verde.",
      scenes: [
        {
          title: "Gorin y la Prueba sin Fuego en la Cueva de los Ecos",
          details: "El gólem herrero Gorin exige que Leo demuestre no ser un niño arrogante de 'Arriba': debe entrar a la Cueva de los Ecos y extraer Metal Estelar entre arañas de cristal sin usar su fuego, solo su ingenio. En la oscuridad vive la alucinación 'Pesadilla' contra su propio reflejo fiestero. Al aceptarse y vencer, Gorin le forja la pechera y los guanteletes estabilizados (Leo Fase 2)."
        },
        {
          title: "El Pacto del Eclipse Esmeralda",
          details: "En la Fortaleza de Obsidiana, el Lord Tirano muestra a Marcos en un estanque cómo Leo ya tiene armadura y dragón, ofreciéndole dejar de ser la sombra para ser el eclipse. Marcos recibe la marca del Tirano y la armadura del Caballero Verde (Marcos Fase 3)."
        }
      ],
      keyQuote: "LORD TIRANO: 'En tu mundo, eras su sombra. Aquí, te ofrezco ser el eclipse.'"
    },
    {
      id: "cap3",
      act: "ACTO I — CAPÍTULO 3",
      title: "El Vuelo del Destino y el Primer Choque en el Cielo",
      location: "Riscos de Elarion & Archipiélago de las Nubes",
      music: "MainThemeBogato.mp3",
      img: "assets/img/elarion.jpg",
      summary: "Adrenalina aérea con Ignis y primer combate directo contra Marcos enmascarado.",
      scenes: [
        {
          title: "Sincronía Dracónica y Emboscada de Gárgolas",
          details: "Ignis crece al tamaño de una montura joven y Leo aprende a volar acoplando su armadura a las escamas calientes sin silla de montar. En pleno vuelo triunfal, el cielo se oscurece con un escuadrón de Gárgolas de Sangre liderado por Marcos (Fase 3). Marcos humilla técnicamente a Leo en el aire revelando su identidad tras la máscara de hierro, pero Ignis y Kasumi logran cubrir la retirada hacia el norte."
        }
      ],
      keyQuote: "MARCOS: '¡Aquí no soy tu sombra, Leo! ¡Aquí soy el que te va a enterrar!'"
    },
    {
      id: "cap4_5",
      act: "ACTO II — CAPÍTULOS 4 Y 5",
      title: "Khar'Zuun / Bastión Alto y la Batalla de los Muros",
      location: "Isla de Draktharia (Ciudad de Obsidiana Khar'Zuun)",
      music: "MainThemeBogatoepic.mp3",
      img: "assets/img/kharzuun.jpg",
      summary: "Alianza con su hermanastro Kael, ley marcial de Marcos y despertar de la Armadura de Tierra.",
      scenes: [
        {
          title: "El Encuentro con Kael y la Ciudad bajo Ley Marcial",
          details: "Leo y Kasumi cruzan en los teleféricos dracónicos hacia Khar'Zuun / Bastión Alto, donde conocen a Kael (el hermanastro de Leo) y a su compañera Lyra. Investigan juntos una ciudad vecina 'liberada' y descubren a Marcos ejecutando criminales con fuego verde bajo una dictadura implacable. Tras un breve duelo donde Marcos deja vivir a Leo por 'lástima', la determinación de Leo hace que Kael lo acepte como hermano y le entregue la Lanza de Obsidiana."
        },
        {
          title: "El Asedio de los Susurradores y el Despertar de la Resiliencia",
          details: "Marcos se sumerge en el tanque de la 'Esencia de la Envidia' y ataca el Muro Norte con miles de Susurradores de Ceniza. Cuando Kael cae herido por una gárgola y Marcos va a ejecutar a Leo bajo el portón, la montaña responde al deseo de Leo de proteger a su hermano: placas de obsidiana rúnica se funden en su cuerpo y repelen al ejército enemigo con una onda sísmica."
        }
      ],
      keyQuote: "KAEL: '¿Vienes a robar la gloria de nuestro padre... o a sangrar con nosotros en el muro?'"
    },
    {
      id: "cap6_7",
      act: "ACTO II — CAPÍTULOS 6 Y 7",
      title: "Los Tres Fragmentos, el Sacrificio de Kael y las Minas de Almas",
      location: "Canal de Zar'Mekhul → Bastión Alto → Minas de Almas (Sector 4)",
      music: "SadTheme2Bogato.mp3 → Tensión Survival Horror",
      img: "assets/img/leo_fase3.jpg",
      summary: "Evolución a Sinfonía de Vapor (Fase 3), muerte trágica de Kael y Lyra (Fase 4: Señor del Magma) e infiltración nocturna en las Minas.",
      scenes: [
        {
          title: "El Templo Sumergido y la Sinfonía de Vapor (Fase 3)",
          details: "Para desactivar el escudo de la Fortaleza del Tirano deben reunir los tres Fragmentos de Núcleo (Agua, Viento y Sombra). En el fondo del Canal de Zar'Mekhul, Leo combate bajo el agua contra Marcos y los Acechadores de Vapor calentando el océano desde dentro, evolucionando su armadura a Fase 3 (válvulas y propulsores de vapor sónico) y obteniendo el Arma Kraken."
        },
        {
          title: "La Traición en el Bastión y las Minas de Almas (Fase 4)",
          details: "De regreso en Bastión Alto, un espía abre paso a Marcos (Fase 4: Señor del Magma Verde). Kael y Lyra se interponen ante un ataque letal dirigido a Leo y mueren como héroes. El dolor transforma la armadura de Leo en Fase 4 (Señor del Magma). Al infiltrarse en el Sector 4 de las Minas de Almas usando la Visión Rúnica en la oscuridad, descubren a invitados de la fiesta de Ciudad Bogato drenados por el Motor de Almas. Tras vencer al Devorador de Ecos en el pozo de cadenas, Kasumi es capturada y llevada a la Fortaleza Flotante."
        }
      ],
      keyQuote: "KAEL (Moribundo): 'No dejes que apague la última brasa, hermano...'"
    },
    {
      id: "cap8_9_epilogo",
      act: "ACTO III — CAPÍTULOS 8, 9 Y EPÍLOGO",
      title: "El Volcán Sagrado, las Alas de Fuego y el Espejo Roto",
      location: "Cráter del Volcán Vorth'Kar → Fortaleza Flotante → Portal de Espejo",
      music: "MainThemeBogatoepic.mp3 → SadTheme2Bogato.mp3",
      img: "assets/img/leo_fase5.jpg",
      summary: "Duelo final contra Marcos en la lava, rescate de Kasumi con Alas de Fuego (Fase 5), caída del Tirano, elección final y despertar del Vacío.",
      scenes: [
        {
          title: "Capítulo 8: Fuego Naranja vs. Fuego Verde en el Volcán",
          details: "En los puentes sobre el magma de Vorth'Kar, Leo (Fase 4) y Marcos (Fase 4) chocan por última vez. Marcos confiesa su odio hacia las sonrisas falsas de la fiesta y lanza un ataque sobrecargado. Leo lo derrota cercenando su armadura corrupta al borde del río de lava. Leo corre y le tiende la mano para salvarlo, pero Marcos se ve reflejado como un monstruo en el casco dorado de Leo, llora una lágrima de brea negra y se suelta hacia el abismo de magma."
        },
        {
          title: "Capítulo 9: El Cielo Arde (Alas de Fuego y el Lord Tirano)",
          details: "El Lord Tirano arroja a Kasumi desde la Fortaleza Flotante. El grito de Leo detona su Fase 5 (El Guardián Desatado): despliega inmensas Alas de Fuego de oro líquido, rompe la barrera del sonido, atrapa a Kasumi en el aire (despertando la Fase 4 de ella como Archimaga) y juntos, con Ignis ancestral, destruyen al Lord Tirano y al Motor de Almas en una Lluvia de Estrellas que devuelve las almas al mundo."
        },
        {
          title: "Epílogo y Escena Post-Créditos: La Elección en el Espejo y Marcos Fase 5",
          details: "Tras el funeral de Kael y los caídos, Leo se para frente al Portal de Espejo que muestra el ático de Ciudad Bogato congelado en el flash de la selfie. El jugador elige: volver a una vida vacía en la Tierra (Final A) o el Canon Oficial (Final B), donde Leo ordena a Kasumi romper el espejo para quedarse como el nuevo Guardián de Bogato. En la escena post-créditos, en el fondo del volcán colapsado, la mano quemada de Marcos emerge de la roca: su fuego verde se apaga y despierta la llama Violeta Oscura del Vacío (Marcos Fase 5)."
        }
      ],
      keyQuote: "MARCOS: 'No hay vuelta atrás para los reflejos rotos, Leo.' / LEO: '¡Kasumi, cierra el espejo! ¡Bogato necesita un Guardián, no un turista!'"
    }
  ],

  // --------------------------------------------------------------------------
  // 6. ARCHIVO HISTÓRICO DEL ESTUDIO (2018–2026) Y GALERÍA DE DESARROLLO
  // --------------------------------------------------------------------------
  archiveGallery: [
    {
      id: "arch_1",
      title: "Key Art Oficial: Las Dos Islas y el Guardián",
      era: "2025–2026 (Bogato posta xd)",
      category: "Key Art",
      img: "assets/img/thumbnail_0.jpg",
      desc: "Arte principal de presentación de la nueva etapa de Bogato con el contraste entre el fuego del Guardián y las tierras divididas."
    },
    {
      id: "arch_2",
      title: "Variante Key Art II: El Horizonte de Draktharia",
      era: "2025–2026 (Bogato posta xd)",
      category: "Key Art",
      img: "assets/img/thumbnail_1.jpg",
      desc: "Composición conceptual de las Islas del Fulgor bajo la tormenta arcana."
    },
    {
      id: "arch_3",
      title: "Variante Key Art III: Duelo de Linajes",
      era: "2025–2026 (Bogato posta xd)",
      category: "Key Art",
      img: "assets/img/thumbnail_2.jpg",
      desc: "Tercera miniatura oficial producida para el pitch visual del proyecto."
    },
    {
      id: "arch_4",
      title: "Hoja de Diseño Completa: Las 5 Fases de Leo",
      era: "2025–2026 (Bogato posta xd)",
      category: "Personajes",
      img: "assets/img/leo_evolution.jpg",
      desc: "Lámina maestra de progresión visual de Leo desde la fiesta en el ático hasta la Ascensión Final con Alas de Fuego."
    },
    {
      id: "arch_5",
      title: "Hoja de Diseño Completa: Las 4 Fases de Kasumi",
      era: "2025–2026 (Bogato posta xd)",
      category: "Personajes",
      img: "assets/img/kasumi_evolution.jpg",
      desc: "Progresión de Kasumi desde Vigilante del Bosque de los Susurros hasta Archimaga Desatada con armadura de magma azul."
    },
    {
      id: "arch_6",
      title: "Prototipo UE5: MetaHuman & Rig Facial de Leo",
      era: "2024 (BogatoBuilds / Some Pictures)",
      category: "Unreal Engine",
      img: "assets/img/metahuman_rig.jpg",
      desc: "Configuración del controlador esquelético y facial MetaHuman en Unreal Engine 5 para el protagonista."
    },
    {
      id: "arch_7",
      title: "Primer Plano en Motor: Rostro de Leo con Fuego Naranja",
      era: "2024 (Some Pictures)",
      category: "Unreal Engine",
      img: "assets/img/prota_fuego_closeup.jpg",
      desc: "Render en tiempo real mostrando la iluminación de las partículas de fuego reflejadas en los ojos del protagonista."
    },
    {
      id: "arch_8",
      title: "Prototipo de Visión Rúnica / Térmica en Cueva Oscura",
      era: "2024 (Some Pictures)",
      category: "Unreal Engine",
      img: "assets/img/visor_runico.jpg",
      desc: "Prueba de shader post-proceso azul/naranja utilizado para detectar siluetas de calor en el Sector 4 de las Minas de Almas."
    },
    {
      id: "arch_9",
      title: "Secuencia 'Pesadilla' en Unreal Engine Sequencer",
      era: "2019–2020 (BogatoLostMedia)",
      category: "Lost Media (2018-2021)",
      img: "assets/img/ue4_pesadilla_sequencer.jpg",
      desc: "Captura histórica del editor de cinemáticas de Unreal Engine 4 durante el montaje de la secuencia 'Pesadilla'."
    },
    {
      id: "arch_10",
      title: "Modelado Original del Protagonista en Cinema 4D",
      era: "2019 (BogatoLostMedia)",
      category: "Lost Media (2018-2021)",
      img: "assets/img/c4d_prota_2019.jpg",
      desc: "Malla base del primer protagonista modelada en Cinema 4D R19 antes de la migración a MetaHuman."
    },
    {
      id: "arch_11",
      title: "Prototipo de Menú Cooperativo (1 Player / 2 Players)",
      era: "2019 (BogatoLostMedia)",
      category: "Lost Media (2018-2021)",
      img: "assets/img/menu_2jugadores_2019.jpg",
      desc: "Interfaz temprana en Unreal Engine que contemplaba un modo para 2 jugadores (semilla de la dualidad Leo / Marcos)."
    },
    {
      id: "arch_12",
      title: "Comunicado de Presentación Oficial de Bogato",
      era: "2021 (BogatoLostMedia)",
      category: "Lost Media (2018-2021)",
      img: "assets/img/post_presentacion_2021.jpg",
      desc: "Pieza gráfica promocional con la premisa fundacional: 'Un mundo donde la humanidad olvidó la existencia de los dragones'."
    },
    {
      id: "arch_13",
      title: "Boceto Original a Mano: Escala Humana vs. Dragón",
      era: "Marzo 2021 (ConceptArts)",
      category: "Concept Art a Mano",
      img: "assets/img/sketch_escala_dragon.jpg",
      desc: "Estudio en papel cuadriculado comparando la estatura del protagonista frente a la cabeza colosal del dragón."
    },
    {
      id: "arch_14",
      title: "Boceto Original a Mano: Plano Urbano de Ciudad Bogato",
      era: "Abril 2021 (Mapa)",
      category: "Concept Art a Mano",
      img: "assets/img/ciudad_bogato_sketch.jpg",
      desc: "Diseño original de las manzanas, puentes dobles, rotonda central y templo octogonal costero de Ciudad Bogato."
    },
    {
      id: "arch_15",
      title: "Render en Motor: Dragón Usurpador (DragonTheUsurperSK)",
      era: "2020 (Dragones)",
      category: "Unreal Engine",
      img: "assets/img/dragon_usurper_ue4.jpg",
      desc: "Malla esquelética y texturas del gran dragón cuadrúpedo alado importado en Unreal Engine."
    },
    {
      id: "arch_16",
      title: "Render en Motor: Dragón del Desierto / Draktharia",
      era: "2020 (Dragones)",
      category: "Unreal Engine",
      img: "assets/img/desert_dragon_ue4.jpg",
      desc: "Variante dracónica de escamas cobrizas y astas curvas utilizada en las pruebas de vuelo."
    }
  ],

  // --------------------------------------------------------------------------
  // 7. HOJA DE RUTA TRANSMEDIA & SPIN-OFFS (HK ENTERTAINMENT)
  // --------------------------------------------------------------------------
  roadmap: [
    {
      title: "1. BOGATO: El Reflejo y la Corona",
      type: "Juego Principal (Action-RPG en 3ra Persona — PC / Consolas en UE5)",
      status: "En Desarrollo Principal (Guion y Worldbuilding Unificados)",
      color: "orange",
      pitch: "La campaña completa de Leo y Marcos desde la noche de la fiesta en Ciudad Bogato hasta la batalla sobre el Volcán Vorth'Kar y la decisión frente al Portal de Espejo.",
      reusableAssets: "Build BogatoDX12Ultra, hojas de evolución de 5 fases (Leo, Marcos, Kasumi), mapas de las dos islas y OST de 4 temas."
    },
    {
      title: "2. BOGATO: Crónicas del Vacío",
      type: "Secuela / Spin-off Oscuro (Hack & Slash — PC / Consolas)",
      status: "Concepto Desbloqueado por Escena Post-Créditos",
      color: "violet",
      pitch: "Continúa segundos después de la escena post-créditos: Marcos en Fase 5 (Energía Violeta del Vacío) emerge en las profundidades bajo el Canal de Zar'Mekhul y la Isla del Exilio, enfrentando a la entidad primordial que corrompió al Lord Tirano.",
      reusableAssets: "Diseño de Marcos Fase 5, lore de la Isla del Exilio y mecánicas de corrupción abisal."
    },
    {
      title: "3. BOGATO: El Primer Guardián (20 Ciclos Antes)",
      type: "Precuela Narrativa / Action-Adventure",
      status: "Expansión del Interludio Clásico",
      color: "blue",
      pitch: "Expande el Interludio jugable de BibliaBogato.docx: la juventud del Padre de Leo, su alianza con Gorin y la madre de Kael en Draktharia, la primera guerra contra el Tirano y cómo escondió el mapa de 'EL ORIGEN' en Ciudad Bogato.",
      reusableAssets: "Modelos de dragones en libertad, Elarion antes de la guerra y sistema de combate solar."
    },
    {
      title: "4. Khar'Zuun Idle Forge: La Forja de Gorin",
      type: "Juego Móvil / YouTube Playables (Idle Tycoon)",
      status: "Oportunidad Ágil para Financiamiento de HK Entertainment",
      color: "orange",
      pitch: "Siguiendo la línea de juegos ágiles del estudio, el jugador gestiona junto al gólem Gorin la Forja de los Ancestros y el Mercado de la Llama en Khar'Zuun: extrae Metal Estelar en la Cueva de los Ecos, templa espadas en lava y equipa a la Guardia Ígnea de Kael.",
      reusableAssets: "Lore de Khar'Zuun, progresión de armaduras por fases y experiencia previa del estudio en mecánicas Tycoon/Idle."
    },
    {
      title: "5. Elarion Sky Rush: Jinetes del Fulgor",
      type: "Juego Móvil / Arcade de Vuelo Dracónico",
      status: "Prototipo Rápido Reutilizando Mecánicas Arcade",
      color: "green",
      pitch: "Experiencia de acción rápida donde los iniciados del Clan del Cielo entrenan con sus dragones jóvenes atravesando los Picos Aulladores, esquivando géiseres en la Tormenta del Silencio y derribando patrullas de Gárgolas de Sangre.",
      reusableAssets: "Biomas de Sylpharia y Canal de Zar'Mekhul, modelos de dragones y tema musical MainThemeBogato.mp3."
    }
  ]
};
