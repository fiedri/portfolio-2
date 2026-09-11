---
name: Svelte System HUD
colors:
  surface: '#0c160a' # este color lo vas a usar para las superficies base y contenedores de fondo
  surface-dim: '#0c160a' # este color lo vas a usar para superficies de tono más apagado u opaco
  surface-bright: '#313c2e' # este color lo vas a usar para superficies resaltadas o más brillantes
  surface-container-lowest: '#071106' # este color lo vas a usar para el fondo de contenedor con menor elevación visual
  surface-container-low: '#141e12' # este color lo vas a usar para contenedores de baja elevación visual
  surface-container: '#182216' # este color lo vas a usar para el fondo de contenedores estándar
  surface-container-high: '#222d20' # este color lo vas a usar para contenedores de elevación alta
  surface-container-highest: '#2d382a' # este color lo vas a usar para contenedores de máxima elevación visual
  on-surface: '#dae6d2' # este color lo vas a usar para textos o elementos sobre la superficie
  on-surface-variant: '#b9ccb2' # este color lo vas a usar para textos o elementos secundarios sobre la superficie
  inverse-surface: '#dae6d2' # este color lo vas a usar para superficies que requieran un contraste invertido
  inverse-on-surface: '#283326' # este color lo vas a usar para textos sobre superficies inversas
  outline: '#84967e' # este color lo vas a usar para bordes y contornos importantes
  outline-variant: '#3b4b37' # este color lo vas a usar para bordes y contornos secundarios o sutiles
  surface-tint: '#00e639' # este color se usará para aplicar un matiz o tinte de color sobre las superficies
  primary: '#ebffe2' # este color lo vas a usar para el color primario de los textos u otros elementos destacados
  on-primary: '#003907' # este color lo vas a usar para textos o iconos sobre fondos de color primario
  primary-container: '#00ff41' # este color lo vas a usar para fondos de contenedores de importancia primaria (verde fósforo)
  on-primary-container: '#007117' # este color lo vas a usar para textos que vayan dentro de contenedores primarios
  inverse-primary: '#006e16' # este color lo vas a usar como versión invertida del primario en situaciones de alto contraste
  secondary: '#ffdb9d' # este color secundario lo usarás para alertas secundarias o acentos intermedios
  on-secondary: '#412d00' # este color lo vas a usar para textos sobre fondos de color secundario
  secondary-container: '#feb700' # este color lo vas a usar para contenedores secundarios (ámbar industrial)
  on-secondary-container: '#6b4b00' # este color lo vas a usar para textos dentro de contenedores secundarios
  tertiary: '#fff8f4' # este color terciario lo usarás para acentos adicionales o menor jerarquía
  on-tertiary: '#442b10' # este color lo vas a usar para textos sobre fondos de color terciario
  tertiary-container: '#ffd5ae' # este color lo vas a usar para contenedores terciarios
  on-tertiary-container: '#7a5b3c' # este color lo vas a usar para textos dentro de contenedores terciarios
  error: '#ffb4ab' # este color lo vas a usar para indicar errores críticos o textos de fallas
  on-error: '#690005' # este color lo vas a usar para textos o elementos sobre fondos de error
  error-container: '#93000a' # este color lo vas a usar para el fondo de contenedores de error crítico
  on-error-container: '#ffdad6' # este color lo vas a usar para textos o elementos dentro de contenedores de error
  primary-fixed: '#72ff70' # este color lo vas a usar para elementos primarios con un contraste fijo
  primary-fixed-dim: '#00e639' # este color lo vas a usar para elementos primarios con contraste fijo de tono apagado
  on-primary-fixed: '#002203' # este color lo vas a usar para textos sobre fondos de color primario fijo
  on-primary-fixed-variant: '#00530e' # este color lo vas a usar para textos secundarios sobre fondos de color primario fijo
  secondary-fixed: '#ffdea8' # este color lo vas a usar para elementos secundarios con un contraste fijo
  secondary-fixed-dim: '#ffba20' # este color lo vas a usar para elementos secundarios con contraste fijo de tono apagado
  on-secondary-fixed: '#271900' # este color lo vas a usar para textos sobre fondos de color secundario fijo
  on-secondary-fixed-variant: '#5e4200' # este color lo vas a usar para textos secundarios sobre fondos de color secundario fijo
  tertiary-fixed: '#ffdcbd' # este color lo vas a usar para elementos terciarios con un contraste fijo
  tertiary-fixed-dim: '#e7bf99' # este color lo vas a usar para elementos terciarios con contraste fijo de tono apagado
  on-tertiary-fixed: '#2c1701' # este color lo vas a usar para textos sobre fondos de color terciario fijo
  on-tertiary-fixed-variant: '#5d4124' # este color lo vas a usar para textos secundarios sobre fondos de color terciario fijo
  background: '#0c160a' # este color lo vas a usar para el fondo de pantalla principal (casi negro)
  on-background: '#dae6d2' # este color lo vas a usar para textos que vayan directamente sobre el fondo principal
  surface-variant: '#2d382a' # este color lo vas a usar como variante de fondo para paneles o elementos de la interfaz
typography:
  display:
    fontFamily: JetBrains Mono # esta fuente la usarás para todo el HUD (fuente monoespaciada)
    fontSize: 48px # este tamaño de fuente lo usarás para visualizaciones de datos gigantescas o pantallas principales (display)
    fontWeight: '700' # este peso de fuente (negrita) lo usarás para dar máxima importancia visual
    lineHeight: '1.1' # esta altura de línea la usarás para textos de visualización muy juntos
    letterSpacing: -0.05em # este espaciado entre letras se usará para contraer el texto de visualización
  headline-lg:
    fontFamily: JetBrains Mono
    fontSize: 24px # este tamaño de fuente lo usarás para encabezados grandes (H1)
    fontWeight: '600' # este peso de fuente semi-negrita lo usarás para destacar encabezados
    lineHeight: 32px # esta altura de línea la usarás para dar espacio de lectura en encabezados grandes
  headline-md:
    fontFamily: JetBrains Mono
    fontSize: 18px # este tamaño de fuente lo usarás para encabezados medianos (H2)
    fontWeight: '600'
    lineHeight: 24px # esta altura de línea se aplicará a los encabezados medianos
  body-lg:
    fontFamily: JetBrains Mono
    fontSize: 16px # este tamaño de fuente lo usarás para el texto de cuerpo principal grande
    fontWeight: '400' # este peso de fuente regular lo usarás para texto de lectura estándar
    lineHeight: 24px # esta altura de línea garantizará una buena legibilidad en el texto de cuerpo grande
  body-md:
    fontFamily: JetBrains Mono
    fontSize: 14px # este tamaño de fuente lo usarás para el texto de cuerpo estándar o secundario
    fontWeight: '400'
    lineHeight: 20px # esta altura de línea se usará para el texto de cuerpo estándar
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px # este tamaño de fuente lo usarás para metadatos pequeños, código, marcas de tiempo y logs
    fontWeight: '400'
    lineHeight: 16px # esta altura de línea mantendrá compactos los datos técnicos
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 11px # este tamaño de fuente lo usarás para etiquetas en mayúsculas y encabezados de tablas
    fontWeight: '700' # este peso de fuente negrita dará un aspecto de terminal industrial
    lineHeight: 12px # esta altura de línea mantendrá las etiquetas ultra-compactas
    letterSpacing: 0.1em # este espaciado expandirá ligeramente las letras para mayor legibilidad en mayúsculas pequeñas
spacing:
  unit: 4px # esta unidad base la usarás para construir la grilla y el espaciado interno (padding/margin)
  gutter: 16px # este tamaño de canaleta se usará para el espacio entre columnas o bloques principales
  margin-page: 24px # este margen lo usarás para el espaciado en los bordes exteriores de la página
  container-max: 100% # este ancho máximo lo usarás para que el contenedor ocupe todo el ancho de pantalla (HUD)
  border-width: 1px # este ancho lo usarás para todos los bordes de la interfaz (estilo industrial de 1 píxel)
---

## Marca y Estilo

El sistema de diseño es una interfaz de diagnóstico industrial diseñada para el monitoreo de datos de alta densidad y precisión técnica. Está dirigido a ingenieros y administradores de sistemas que requieren una jerarquía visual inmediata en entornos con poca luz.

El estilo es **Minimalismo de Bordes Duros (Hard-Edge Minimalism)** con un núcleo **Técnico/Industrial**. Rechaza la suavidad del diseño web moderno de consumo a favor de un brutalismo funcional. La interfaz se basa en bordes nítidos de 1px, distribuciones estructurales basadas en CSS Grid y una estética de "línea de escaneo" (scanline) que evoca los diagnósticos de terminales CRT. Hay cero degradados, cero sombras y cero esquinas redondeadas. Cada píxel cumple un propósito.

## Colores

Este sistema de diseño utiliza una paleta de modo oscuro de alto contraste diseñada para la legibilidad y el reconocimiento de estados de alerta.

- **Fondo (#0a0a0a):** Una base casi negra para minimizar la fatiga visual y maximizar el "brillo" de los elementos de fósforo. `# este color lo vas a usar para los fondos principales`
- **Texto (#e0e0e0):** Un tono neutro blanquecino que evita la estridencia del blanco puro manteniendo una alta legibilidad. `# este color lo usarás para el texto principal`
- **Acento Primario (#00ff41):** "Verde Fósforo". Usado para estados activos, diagnósticos positivos e indicadores de "Sistema OK". `# este color lo vas a usar para elementos activos, éxitos y acentos principales`
- **Acento Secundario (#ffb800):** "Ámbar Industrial". Reservado para advertencias, estados de precaución y flujos de datos secundarios. `# este color lo usarás para estados de advertencia y atención`
- **IU Sutil (#333333):** Usado strictly para líneas de cuadrícula y bordes inactivos para mantener el enfoque en los datos en tiempo real. `# este color lo usarás para bordes y líneas secundarias`

## Tipografía

La tipografía es estrictamente monoespaciada para asegurar la alineación vertical y horizontal de los datos, algo crítico para las vistas de diagnóstico tabulares. **JetBrains Mono** es la tipografía principal debido a su mayor altura de x y una clara distinción de caracteres (0 frente a O, l frente a 1).

Los titulares y las etiquetas deben usar `text-transform: uppercase` para reforzar la estética HUD industrial. Para lograr una alta densidad de datos, utilizá los roles `code-sm` o `label-caps` para metadatos, marcas de tiempo y direcciones de hardware.

## Distribución y Espaciado

Este sistema de diseño emplea una **Cuadrícula Fluida Rígida**. Aunque la maquetación se estira para llenar la pantalla (estilo HUD), los elementos internos se rigen por una cuadrícula de línea de base estricta de 4px. `# este tamaño lo usarás como incremento básico para espaciados (padding/margin)`

- **La Cuadrícula (Grid):** Usar distribuciones de CSS Grid de 12 columnas con líneas de 1px como canaletas visibles (`gap: 1px; background: #333`). `# este tamaño de 1px se usará para líneas divisorias y bordes`
- **Líneas de Escaneo (Scanlines):** Aplicar una capa superpuesta fija y global usando un gradiente lineal (linear-gradient: transparent 50%, rgba(0,0,0,0.1) 50%) con un `background-size` de 100% 4px para simular una pantalla de terminal. `# este tamaño de 4px definirá el patrón repetitivo de líneas de escaneo`
- **Puntos de Interrupción (Breakpoints):**
  - **Móvil:** Una sola columna, la navegación se colapsa en un conmutador de directorio de nivel superior.
  - **Escritorio:** Tablero de múltiples paneles con navegación vertical de ancho fijo a la izquierda y un registro de diagnóstico colapsable a la derecha.

## Elevación y Profundidad

La profundidad se transmite mediante **Enmarcado Tonal (Tonal Framing)** en lugar de sombras. En un HUD industrial, no hay una "fuente de luz", sino únicamente datos autoiluminados.

- **Nivel 0 (Base):** Fondo (#0a0a0a). `# este color se usará como base para el fondo del sistema`
- **Nivel 1 (Paneles):** Definido por bordes sólidos de 1px (#333). Sin cambio de fondo a menos que el área sea interactiva. `# este color y grosor se usará para delinear los paneles del HUD`
- **Nivel 2 (Activo/En Foco):** Los elementos adquieren un borde de 1px del Acento Primario (#00ff41). `# este color de acento se usará para resaltar visualmente el foco activo`
- **Efecto de Escaneo:** Las áreas activas pueden presentar una animación de "pulso" sutil en el color del borde en lugar de una sombra. Utilizar `backdrop-filter: brightness(1.2)` para superposiciones de modales con el fin de mantener visible pero atenuado el texto subyacente.

## Formas

El lenguaje de las formas es **Estrictamente Geométrico**. Todas las esquinas son ángulos de 90 grados. Esto incluye botones, campos de entrada, contenedores y etiquetas.

Evitar cualquier elemento circular. Incluso las casillas de verificación (checkboxes) y los botones de opción (radio buttons) deben ser cuadrados (los botones de opción se distinguen por tener un cuadrado interno más comprender cuando están activos).

## Componentes

- **Cajas de Terminal (Terminal Boxes):** Contenedores con un borde de 1px (#333). Los encabezados deben tener un fondo sólido de #333 con texto #e0e0e0 en formato `label-caps`. `# este color #333 se usará para el fondo de las cabeceras de paneles`
- **Barras de Estado (Status Bars):** Medidores horizontales que utilizan bloques segmentados. Los segmentos vacíos usan `#1a1a1a`, mientras que los segmentos llenos usan el Acento Primario. `# este color oscuro #1a1a1a se usará para los bloques de estado inactivos`
- **Botones:** Borde de 1px. Sin fondo en estado inactivo (idle). Al pasar el cursor (hover), el fondo se convierte en el Acento Primario y el texto en el Color de Fondo. Utilizar una animación de "clic" que desplace el contenido 1px hacia abajo y a la derecha. `# este desplazamiento de 1px dará la sensación física de presionar un botón`
- **Tablas de Datos (Data Tables):** Sin líneas verticales. Divisores horizontales de 1px. Las celdas de `thead` van en `label-caps`. Las filas se resaltan con un fondo sutil de #141414 al pasar el cursor (hover). `# este color oscuro #141414 se usará para el sombreado de filas activas en tablas`
- **Directorio Vertical (Vertical Directory):** Una navegación de tipo árbol a la izquierda. Los enlaces activos se preceden con el carácter `>` y se colorean con el Acento Primario.
- **Entradas de Texto (Inputs):** Cajas simples con bordes de 1px. El cursor debe ser un bloque verde sólido que parpadee (en intervalos de 0.5s). `# este intervalo de 0.5s recreará el clásico cursor de terminal parpadeante`
- **Alertas:** Bordes parpadeantes de 1px que utilizan el Acento Secundario (#ffb800) para advertencias o Rojo (#ff4141) para fallas críticas. `# este color rojo #ff4141 se usará exclusivamente para estados de error de máxima gravedad`
