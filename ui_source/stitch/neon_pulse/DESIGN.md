# Design System Document: The Neon Nocturne

## 1. Overview & Creative North Star

### Creative North Star: "The Digital Muse"
This design system is not a utility; it is an immersion. Inspired by the cinematic depth of neo-noir and the fluid intimacy of high-end AI interactions, the Creative North Star is **The Digital Muse**. It moves away from the "SaaS dashboard" aesthetic toward a luxury, editorial experience. 

We break the "template" look through **Intentional Asymmetry** and **Tonal Depth**. By utilizing wide gutters, staggered card placements, and extreme typographic contrast, we create a layout that feels curated and alive. The UI should feel like a dark room illuminated only by the glow of the screen—focused, intimate, and premium.

---

## 2. Colors

The palette is anchored in deep obsidian and charcoal to provide a void-like backdrop, allowing the neon accents to vibrate with energy.

*   **Primary (`#ffb0c9` / `primary`):** A softened neon pink used for high-impact brand moments and active states.
*   **Secondary (`#9ccaff` / `secondary`):** An electric, airy blue for functional interactions and secondary information.
*   **Surface Hierarchy:** We utilize a "Dark-on-Dark" strategy to define space.
    *   **Background (`#131313`):** The foundation.
    *   **Surface Container Lowest (`#0e0e0e`):** Used for recessed areas like search bars or inactive zones.
    *   **Surface Container High (`#2a2a2a`):** Used for elevated interactive cards.

### The "No-Line" Rule
**Prohibit 1px solid borders for sectioning.** Structural separation must be achieved through background shifts. If two sections meet, use the transition from `surface` to `surface-container-low`. Lines create visual noise; tonal shifts create atmosphere.

### The "Glass & Gradient" Rule
Floating elements (modals, dropdowns, sticky navs) must use **Glassmorphism**. Apply `surface-container-high` at 60% opacity with a `20px` backdrop blur. Enhance main CTAs with a subtle linear gradient from `primary` (#ffb0c9) to `primary-container` (#ff4898) at a 135-degree angle to add "soul" and dimension.

---

## 3. Typography

The system pairs **Plus Jakarta Sans** for high-impact editorial moments with **Inter** for precision and readability.

*   **Display & Headline (Plus Jakarta Sans):** These are your "Statement" tiers. Use `display-lg` (3.5rem) with tight letter-spacing (-0.02em) to create an authoritative, cinematic feel.
*   **Title & Body (Inter):** Inter provides a technical, clean contrast to the expressive headlines. Use `title-md` for user-generated content and `body-md` for AI responses to maintain a high-contrast, readable flow.
*   **The Editorial Scale:** Do not be afraid of "wasted" space. Pair a `display-sm` headline with a `label-sm` metadata tag to create an intentional high-low aesthetic that feels designed, not just "filled."

---

## 4. Elevation & Depth

We eschew traditional shadows in favor of **Tonal Layering** and **Ambient Glow.**

*   **The Layering Principle:** Depth is a physical stack. Place a `surface-container-highest` card on top of a `surface-container-low` background. The delta in luminance creates the "lift."
*   **Ambient Shadows:** For floating elements like the AI chat bubble, use a diffuse shadow: `0px 20px 40px rgba(0, 0, 0, 0.4)`. The shadow should feel like a soft cloud, not a hard edge.
*   **The "Ghost Border":** When accessibility requires a container edge, use the `outline-variant` token at **15% opacity**. This creates a "suggestion" of a border that disappears into the dark aesthetic.
*   **Glassmorphism Depth:** When a card is hovered, increase the backdrop-blur from `10px` to `20px` and slightly increase the `surface-bright` opacity. This mimics the physical sensation of an object moving closer to the light source.

---

## 5. Components

### Buttons
*   **Primary:** Gradient fill (`primary` to `primary-container`), `rounded-full`, `title-sm` (bold). No border.
*   **Secondary:** Ghost style. `outline` token at 20% opacity. On hover, fill with `secondary-container` at 10% opacity.
*   **Tertiary:** Text-only using `secondary` color, with a subtle underline appearing only on hover.

### Input Fields
*   **Container:** `surface-container-lowest`, `rounded-md`. 
*   **State:** On focus, the "Ghost Border" transitions from 15% opacity to 100% `primary` color, creating a glowing ring effect.

### Cards & Lists
*   **The No-Divider Rule:** Forbid the use of horizontal rules (`<hr>`). Separate list items using `spacing-4` (1rem) of vertical white space or by alternating between `surface` and `surface-container-low` backgrounds.
*   **Cards:** Use `rounded-xl` (1.5rem) for a modern, friendly hand-feel. Content should be padded with `spacing-6` (1.5rem) to ensure the layout "breathes."

### AI Chat Bubbles
*   **User:** `surface-container-highest`, aligned right, `rounded-xl` with the bottom-right corner set to `rounded-sm`.
*   **AI:** Glassmorphic `surface-variant` (40% opacity), aligned left, featuring a subtle glow-border using the `secondary` token at 20% opacity.

---

## 6. Do's and Don'ts

### Do
*   **Do** use extreme vertical spacing. If you think there is enough space, add `spacing-4` more.
*   **Do** use `primary-fixed` for small highlights (like "New" badges) to make them pop against the dark background.
*   **Do** treat images and avatars as part of the "Glass" stack—use subtle inner glows on circular avatars.

### Don't
*   **Don't** use pure white (`#FFFFFF`) for body text. Use `on-surface-variant` (#e2bdc7) to reduce eye strain and maintain the moody atmosphere.
*   **Don't** use standard "drop shadows" with grey or black. If a shadow is on a purple section, tint the shadow purple.
*   **Don't** use sharp corners. The minimum radius should be `rounded-sm` (0.25rem), but the preference is always `md` or higher.
*   **Don't** use more than three levels of surface nesting. If you need more, your information architecture is too complex.