---
name: Svelte System HUD
colors:
  surface: '#0c160a'
  surface-dim: '#0c160a'
  surface-bright: '#313c2e'
  surface-container-lowest: '#071106'
  surface-container-low: '#141e12'
  surface-container: '#182216'
  surface-container-high: '#222d20'
  surface-container-highest: '#2d382a'
  on-surface: '#dae6d2'
  on-surface-variant: '#b9ccb2'
  inverse-surface: '#dae6d2'
  inverse-on-surface: '#283326'
  outline: '#84967e'
  outline-variant: '#3b4b37'
  surface-tint: '#00e639'
  primary: '#ebffe2'
  on-primary: '#003907'
  primary-container: '#00ff41'
  on-primary-container: '#007117'
  inverse-primary: '#006e16'
  secondary: '#ffdb9d'
  on-secondary: '#412d00'
  secondary-container: '#feb700'
  on-secondary-container: '#6b4b00'
  tertiary: '#fff8f4'
  on-tertiary: '#442b10'
  tertiary-container: '#ffd5ae'
  on-tertiary-container: '#7a5b3c'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#72ff70'
  primary-fixed-dim: '#00e639'
  on-primary-fixed: '#002203'
  on-primary-fixed-variant: '#00530e'
  secondary-fixed: '#ffdea8'
  secondary-fixed-dim: '#ffba20'
  on-secondary-fixed: '#271900'
  on-secondary-fixed-variant: '#5e4200'
  tertiary-fixed: '#ffdcbd'
  tertiary-fixed-dim: '#e7bf99'
  on-tertiary-fixed: '#2c1701'
  on-tertiary-fixed-variant: '#5d4124'
  background: '#0c160a'
  on-background: '#dae6d2'
  surface-variant: '#2d382a'
typography:
  display:
    fontFamily: JetBrains Mono
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.05em
  headline-lg:
    fontFamily: JetBrains Mono
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-md:
    fontFamily: JetBrains Mono
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: JetBrains Mono
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 12px
    letterSpacing: 0.1em
spacing:
  unit: 4px
  gutter: 16px
  margin-page: 24px
  container-max: 100%
  border-width: 1px
---

## Brand & Style

The design system is an industrial diagnostic interface designed for high-density data monitoring and technical precision. It targets engineers and system administrators who require immediate visual hierarchy in low-light environments. 

The style is **Hard-Edge Minimalism** with a **Technical/Industrial** core. It rejects the softness of modern consumer web design in favor of functional brutalism. The interface relies on crisp 1px borders, CSS grid-based structural layouts, and a "scanline" aesthetic that evokes CRT terminal diagnostics. There are zero gradients, zero shadows, and zero rounded corners. Every pixel serves a purpose.

## Colors

This design system uses a high-contrast dark-mode palette designed for legibility and alert-state recognition.

- **Background (#0a0a0a):** A near-black foundation to minimize eye strain and maximize the "glow" of phosphor elements.
- **Text (#e0e0e0):** An off-white neutral that avoids the harshness of pure white while maintaining high readability.
- **Primary Accent (#00ff41):** "Phosphor Green." Used for active states, positive diagnostics, and "System OK" indicators.
- **Secondary Accent (#ffb800):** "Industrial Amber." Reserved for warnings, caution states, and secondary data streams.
- **Subtle UI (#333333):** Used strictly for grid lines and inactive borders to keep the focus on live data.

## Typography

The typography is strictly monospaced to ensure vertical and horizontal data alignment, critical for tabular diagnostic views. **JetBrains Mono** is the primary typeface for its increased x-height and clear character distinction (0 vs O, l vs 1).

Headlines and labels must use `text-transform: uppercase` to reinforce the industrial HUD aesthetic. For data density, use the `code-sm` or `label-caps` roles for metadata, timestamps, and hardware addresses.

## Layout & Spacing

This design system employs a **Rigid Fluid Grid**. While the layout stretches to fill the screen (HUD-style), internal elements are governed by a strict 4px baseline grid.

- **The Grid:** Use 12-column CSS Grid layouts with 1px lines as visible gutters (`gap: 1px; background: #333`).
- **Scanlines:** Apply a global fixed overlay using a linear-gradient (transparent 50%, rgba(0,0,0,0.1) 50%) with a `background-size` of 100% 4px to simulate a terminal screen.
- **Breakpoints:**
  - **Mobile:** Single column, navigation collapses to a top-level directory toggle.
  - **Desktop:** Multi-pane dashboard with fixed-width vertical navigation on the left and a collapsible diagnostic log on the right.

## Elevation & Depth

Depth is conveyed through **Tonal Framing** rather than shadows. In an industrial HUD, there is no "light source"—only self-illuminating data.

- **Level 0 (Base):** Background (#0a0a0a).
- **Level 1 (Panels):** Defined by 1px solid borders (#333). No background change unless the area is interactive.
- **Level 2 (Active/Focus):** Elements gain a 1px border of the Primary Accent (#00ff41). 
- **Scanning Effect:** Active areas may feature a subtle "pulse" animation on the border-color rather than a shadow. Use `backdrop-filter: brightness(1.2)` for modal overlays to keep the text underneath visible but dimmed.

## Shapes

The shape language is **Strict Geometric**. All corners are 90-degree angles. This includes buttons, input fields, containers, and tags. 

Avoid any circular elements. Even checkboxes and radio buttons must be square (Radio buttons are distinguished by a smaller internal square when active).

## Components

- **Terminal Boxes:** Containers with a 1px border (#333). Headers should have a solid #333 background with #e0e0e0 text in `label-caps`.
- **Status Bars:** Horizontal meters using segmented blocks. Empty segments use `#1a1a1a`, filled segments use the Primary Accent.
- **Buttons:** 1px border. No background on idle. On hover, background becomes Primary Accent and text becomes Background Color. Use a "click" animation that shifts the content 1px down and right.
- **Data Tables:** No vertical lines. 1px horizontal dividers. `thead` cells are `label-caps`. Rows highlight with a subtle #141414 background on hover.
- **Vertical Directory:** A tree-style navigation on the left. Active links are prefixed with a `>` character and colored in the Primary Accent.
- **Inputs:** Simple boxes with 1px borders. The cursor should be a solid green block that blinks (0.5s intervals).
- **Alerts:** Flashing 1px borders using the Secondary Accent (#ffb800) for warnings or Red (#ff4141) for critical failures.