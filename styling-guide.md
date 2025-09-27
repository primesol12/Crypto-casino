# Styling Guide

This document outlines the visual styling, color palette, typography, and component design for the crypto casino website. The overall aesthetic should be modern, clean, and trustworthy, with a dark theme that incorporates crypto-inspired elements.

## Overall Theme
- **Primary Theme:** Dark
- **Atmosphere:** Professional, secure, modern, and user-friendly.
- **Inspiration:** The design should feel at home in the crypto space, using clean lines, clear typography, and a high-contrast palette.

---

## Color Palette

The dark theme is designed to be easy on the eyes while making key information and calls-to-action stand out.

- **Background (Primary):** A deep, dark charcoal.
  - `oklch(0.145 0 0)` / `#202020`
- **Background (Secondary / Card):** A slightly lighter dark gray to create subtle depth for components.
  - `oklch(0.205 0 0)` / `#2E2E2E`
- **Accent (Primary):** A vibrant purple for primary buttons, highlighted text, and key branding elements.
  - `oklch(0.6 0.118 184.704)` / `#5D5FEF`
- **Accent (Secondary / "NEW" Tag):** A bright magenta/pink for secondary tags and highlights.
  - `oklch(0.704 0.191 22.216)` / `#D946EF`
- **Text (Primary):** Off-white for body copy and headings for better readability.
  - `oklch(0.985 0 0)` / `#FAFAFA`
- **Text (Secondary):** A light gray for metadata, subtitles, and less important text.
  - `oklch(0.708 0 0)` / `#B3B3B3`
- **Borders & Dividers:** A subtle dark gray to separate elements without being distracting.
  - `oklch(1 0 0 / 10%)` / `#FFFFFF1A`

---

## Typography

We will use a clean, modern, and highly readable sans-serif font family. **Inter** is recommended and can be sourced from Google Fonts.

- **Font Family:** `Inter`, `sans-serif`

### Headings
- **H1 (Main Page Title):**
  - **Font Weight:** 700 (Bold)
  - **Font Size:** 2.25rem (36px)
- **H2 (Card Titles):**
  - **Font Weight:** 600 (Semi-Bold)
  - **Font Size:** 1.5rem (24px)
- **H3 (Subheadings):**
  - **Font Weight:** 600 (Semi-Bold)
  - **Font Size:** 1.25rem (20px)

### Body & Other Text
- **Body / Paragraphs:**
  - **Font Weight:** 400 (Regular)
  - **Font Size:** 1rem (16px)
- **Meta Text (e.g., "Written by...", "Accepts from..."):**
  - **Font Weight:** 400 (Regular)
  - **Font Size:** 0.875rem (14px)
  - **Color:** Text Secondary
- **Button Text:**
  - **Font Weight:** 600 (Semi-Bold)
  - **Font Size:** 1rem (16px)
  - **Casing:** Uppercase

---

## Layout & Components

### General Layout
- The main content area should have a maximum width of `1120px` and be centered on the page.
- Use a consistent spacing system based on a `0.25rem` (4px) scale for padding, margins, and gaps.

### Header
- **Layout:** Logo on the left, icon buttons (Search, Menu) on the right.
- **Background:** Primary Background color.
- **Border:** A 1px bottom border using the Borders color.

### Buttons & Tags
- **Primary CTA Button ("VISIT NOW"):**
  - **Background:** Primary Text color.
  - **Text Color:** Primary Background color.
  - **Padding:** `0.75rem 1.5rem` (12px 24px)
  - **Border Radius:** `0.5rem` (8px)
  - **Hover State:** Subtle scale or brightness effect.
- **Filter Tags (e.g., "Crypto Bonuses"):**
  - **Background:** Secondary Background color.
  - **Text Color:** Primary Text color.
  - **Padding:** `0.5rem 1rem` (8px 16px)
  - **Border Radius:** `9999px` (pill-shaped)
  - **State:** The active/selected tag should use the Primary Accent color for its background.

### Casino Offer Card
- **Structure:** A two-column layout on desktop, stacking to a single column on mobile.
- **Padding:** `1.5rem` (24px)
- **Border Radius:** `1rem` (16px)
- **Background:** Primary Background color.
- **Left Column (Details):**
  - Contains the casino logo (in a rounded square), title, "NEW" tag, and feature tags.
- **Right Column (Offer):**
  - **Background:** Secondary Background color.
  - **Layout:** Vertically centered content.
  - Contains the bonus offer text, "VISIT NOW" button, and "Accepts from..." text.

---

## Responsiveness

The website must be fully responsive and adapt gracefully to all screen sizes.

- **Mobile (< 768px):**
  - The main offer card should stack into a single column. The "Offer" section (right column) should appear below the "Details" section (left column).
  - The header may collapse into a hamburger menu.
  - Font sizes may need to be slightly reduced for readability.
- **Tablet (768px - 1024px):**
  - The two-column layout for the offer card should be maintained, but with adjusted spacing.
- **Desktop (> 1024px):**
  - The full two-column design as seen in the reference image.
