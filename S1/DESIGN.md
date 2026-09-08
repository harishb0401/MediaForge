---
name: MediaForge
colors:
  surface: '#1b1110'
  surface-dim: '#1b1110'
  surface-bright: '#433635'
  surface-container-lowest: '#160c0b'
  surface-container-low: '#241918'
  surface-container: '#281d1c'
  surface-container-high: '#332727'
  surface-container-highest: '#3f3231'
  on-surface: '#f3dedc'
  on-surface-variant: '#e2beb8'
  inverse-surface: '#f3dedc'
  inverse-on-surface: '#3a2d2d'
  outline: '#a98984'
  outline-variant: '#5a413c'
  surface-tint: '#ffb4a7'
  primary: '#ffb4a7'
  on-primary: '#680300'
  primary-container: '#b42a1a'
  on-primary-container: '#ffcfc6'
  inverse-primary: '#b32919'
  secondary: '#ffb598'
  on-secondary: '#53220c'
  secondary-container: '#713a22'
  on-secondary-container: '#f3a686'
  tertiary: '#dfc0b2'
  on-tertiary: '#3f2c22'
  tertiary-container: '#725a4f'
  on-tertiary-container: '#f3d3c5'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdad4'
  primary-fixed-dim: '#ffb4a7'
  on-primary-fixed: '#400100'
  on-primary-fixed-variant: '#900d03'
  secondary-fixed: '#ffdbce'
  secondary-fixed-dim: '#ffb598'
  on-secondary-fixed: '#370e00'
  on-secondary-fixed-variant: '#6e3820'
  tertiary-fixed: '#fcdccd'
  tertiary-fixed-dim: '#dfc0b2'
  on-tertiary-fixed: '#28180f'
  on-tertiary-fixed-variant: '#584237'
  background: '#1b1110'
  on-background: '#f3dedc'
  surface-variant: '#3f3231'
typography:
  display-hero:
    fontFamily: Space Grotesk
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 68px
    letterSpacing: -0.04em
  display-hero-mobile:
    fontFamily: Space Grotesk
    fontSize: 38px
    fontWeight: '700'
    lineHeight: 42px
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 46px
    letterSpacing: -0.03em
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 34px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 30px
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 18px
    fontWeight: '500'
    lineHeight: 24px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: DM Sans
    fontSize: 17px
    fontWeight: '400'
    lineHeight: 26px
    letterSpacing: -0.01em
  body-md:
    fontFamily: DM Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
    letterSpacing: 0em
  body-sm:
    fontFamily: DM Sans
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: 0.01em
  technical-data:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  technical-badge:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: '700'
    lineHeight: 12px
    letterSpacing: 0.08em
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.06em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  grid-margin-desktop: 3rem
  grid-margin-tablet: 2rem
  grid-margin-mobile: 1.25rem
  gutter-desktop: 1.5rem
  gutter-tablet: 1rem
  gutter-mobile: 0.75rem
  space-2xs: 0.125rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
  space-2xl: 3rem
  space-3xl: 4.5rem
  space-4xl: 6rem
---

## Brand & Style

This design system embodies a dark, warm, cinematic atmosphere calibrated for high-performance creative engineering. It merges the deliberate refinement of high-end editorial layouts with the raw tactical utility of rack-mounted studio hardware and terminal instrumentation.

The brand evokes absolute control, thermal power, and digital mastery. Users should feel as though they are operating an industrial-grade media forge—handling high-bitrate video, multi-track stems, and pristine audio codecs within a controlled, heat-treated processing environment. The interface balances high-density technical readouts with generous, dramatic negative space, establishing prestige through precision.

## Colors

The palette operates on a foundation of obsidian warmth accented by radiant thermal signatures.

- **Base Surfaces**: The deep void canvas sits at `#070202`. Nested layer elevations step up into `#120706` (Surface Base) and `#1A0B0A` (Surface Raised), both infused with deep red undertones.
- **Accents**: The core active accent is `#B42A1A` (Forge Crimson), supported by `#5D170E` (Ember Depth) for depressed states and ambient underglows. `#D48B6D` (Warm Amber Glow) serves as the primary data highlight, active indicator, and high-energy focal point. `#D4B6A8` (Champagne Rose) provides softened secondary emphasis, active tabs, and metallic tactile sheens.
- **Typography & Structure**: High-clarity `#FFFFFF` leads primary messaging and dynamic values, while `#8E8D8D` holds auxiliary context and static labels. Hairline dividers employ directional translucent gradients based on `rgba(212, 139, 109, 0.15)` for ambient structure and `rgba(180, 42, 26, 0.25)` for active bounding zones.

## Typography

The typographic hierarchy balances expressive editorial forms against raw computational readouts:

- **Headings (`Space Grotesk`)**: Geometric, wide proportions convey modern industrial character. Tightly tracked letterforms create bold, editorial compositions across major section anchors and feature titles.
- **Body & UI (`DM Sans`)**: Clean, low-contrast grotesque proportions ensure fatigue-free legibility across complex settings pages and dense media queues.
- **Technical & Telemetry (`JetBrains Mono`)**: Applied to all variable machine outputs: bitrates, FPS meters, processing times, container flags, and terminal streams. Always styled with tabular figures for absolute column alignment.

## Layout & Spacing

The layout is built upon a 12-column responsive fluid grid structured around 4px micro-units and 8px structural intervals:

- **Desktop (≥ 1280px)**: 12 columns, 3rem margins, 1.5rem gutters. Max container width: 1536px. Technical panels, queue monitors, and parameter controls sit side-by-side without horizontal scrolling.
- **Tablet (768px – 1279px)**: 8 columns, 2rem margins, 1rem gutters. Control consoles collapse into stacked contextual drawers; sidebar telemetry moves into expandable sheets.
- **Mobile (< 768px)**: 4 columns, 1.25rem margins, 0.75rem gutters. Horizontal controls shift into vertical segment stacks and swipeable bottom sheets.

Technical grids are reinforced visually by faint axis guidelines and crosshair markings (`+`) at key component intersections to accentuate the precision apparatus aesthetic.

## Elevation & Depth

Visual hierarchy uses physical material staging rather than broad drop shadows, drawing depth from layered opacity, directional border illumination, and radial thermal heat sources:

- **Level 0 (Chassis Ground)**: Pure `#070202` matte base.
- **Level 1 (Docked Surfaces & Grid Panels)**: `#120706` with 1px border `rgba(212, 139, 109, 0.12)`. Subtle linear noise grain overlay at 2% opacity to eliminate sterile digital banding.
- **Level 2 (Floating Consoles & Active Cards)**: `#1A0B0A` with 1px border `rgba(212, 139, 109, 0.22)`. Ambient underglow powered by `0 8px 32px -8px rgba(93, 23, 14, 0.45)`.
- **Level 3 (Modals & Overlays)**: `#1A0B0A` with backdrop-filter blur (16px), bordered by `rgba(180, 42, 26, 0.35)`. Casts a tight thermal halo `0 0 24px rgba(180, 42, 26, 0.20)`.
- **Active State Underglows**: Focused controls emit localized radial gradient blooms (`radial-gradient(circle at center, rgba(212, 139, 109, 0.15) 0%, transparent 70%)`) directly beneath active inputs.

## Shapes

The interface embraces a low-radius, industrial form factor (Level 1 / Soft). 

Elements default to `4px` (`0.25rem`) corner rounding to maintain an instrument-panel feel reminiscent of high-end hardware modules and optical testing tools. Structural cards, panels, and modal containers use `8px` (`0.5rem`), while compact badges, segmented indicators, and status tags retain sharp `2px` corners or flush-cut edges. Fluid pill geometry is intentionally omitted to avoid consumer software conventions.

## Components

### Buttons
- **Primary Forge Action**: Background `#B42A1A` transitioning to `#8E1E12` on hover; foreground `#FFFFFF`; font `JetBrains Mono` 12px uppercase; 1px border `rgba(212, 139, 109, 0.4)`. Box shadow: `0 0 16px rgba(180, 42, 26, 0.4)`. Height: 40px; padding: 0 18px; radius: 4px.
- **Secondary Hardware Outline**: Background `rgba(18, 7, 6, 0.6)`; border 1px solid `rgba(212, 139, 109, 0.25)`; foreground `#D4B6A8`. Hover adds crimson tinting and border illumination (`rgba(212, 139, 109, 0.5)`).
- **Ghost Utility**: Transparent background; foreground `#8E8D8D`; hover brings foreground to `#FFFFFF` with faint `rgba(255, 255, 255, 0.05)` surface wash.

### Input Fields & URL Analysis Terminal
- Dark sunken well `#0C0404` with 1px inset border `rgba(212, 139, 109, 0.15)`.
- Typeface: `JetBrains Mono` 13px. Text color: `#FFFFFF`. Placeholder: `rgba(142, 141, 141, 0.5)`.
- Focus state: Border transitions to `#B42A1A`, paired with an outer edge diffusion: `0 0 0 1px #B42A1A, 0 0 12px rgba(180, 42, 26, 0.3)`. Terminal fields include a flashing amber pulse caret (`#D48B6D`).

### Format Selector & Chips
- Segmented hardware switches set in continuous rail enclosures (`#120706`).
- Inactive segments: Text `#8E8D8D`, background transparent.
- Active segment: Background `#240F0D`, border 1px solid `rgba(212, 139, 109, 0.4)`, text `#FFFFFF`, highlighted by a 2px top indicator line in `#D48B6D`.

### Cards & Media Panels
- Background `#120706` enclosed by hairline border `rgba(212, 139, 109, 0.12)`.
- Upper technical header with micro-telemetry strip (e.g., `SRC: 4K_UHD // CODEC: AV01 // FPS: 59.94`).
- Subtle 1px corner tick marks (`border-corner accents`) placed on top-right and bottom-left bounds for precision visual framing.

### Audio Waveform & Processing Monitors
- Background grid using `rgba(212, 139, 109, 0.04)` line markers.
- Inactive waveform bars: `#5D170E` at 40% opacity.
- Processed waveform bars: `#D48B6D` transitioning to `#B42A1A` with vertical peak meters glowing in `#FFFFFF`.

### Checkboxes & Switches
- Checkboxes: 16x16px square with 2px radius. Background `#0C0404`, border 1px solid `rgba(212, 139, 109, 0.3)`. Checked state displays a solid `#B42A1A` fill with a `#FFFFFF` technical check icon.
- Toggles: Mechanical slide track (36x18px) with `#1A0B0A` surface. Thumb is a 12x12px square `#D4B6A8` block sliding to crimson activation `#B42A1A`.