---
name: design-system-anirudh-goel
description: Creates implementation-ready design-system guidance with tokens, component behavior, and accessibility standards. Use when creating or updating UI rules, component specifications, or design-system documentation.
---

<!-- TYPEUI_SH_MANAGED_START -->

# Anirudh Goel

## Mission
Deliver implementation-ready design-system guidance for Anirudh Goel that can be applied consistently across marketing site interfaces.

## Brand
- Product/brand: Anirudh Goel
- URL: https://anirudhgoel.framer.website/
- Audience: buyers, teams, and decision-makers
- Product surface: marketing site

## Style Foundations
- Visual style: structured, accessible, implementation-first
- Main font style: `font.family.primary=Plus Jakarta Sans`, `font.family.stack=Plus Jakarta Sans, Plus Jakarta Sans Placeholder, sans-serif`, `font.size.base=10px`, `font.weight.base=600`, `font.lineHeight.base=11.2px`
- Typography scale: `font.size.xs=10px`, `font.size.sm=12px`, `font.size.md=14px`, `font.size.lg=16px`, `font.size.xl=18px`, `font.size.2xl=22px`, `font.size.3xl=28px`, `font.size.4xl=32px`
- Color palette: `color.surface.base=#000000`, `color.text.secondary=#545454`, `color.text.tertiary=#ffffff`, `color.text.inverse=#0000ee`, `color.surface.raised=#fafafa`, `color.surface.strong=#2b2b2b`
- Spacing scale: `space.1=8px`, `space.2=12px`, `space.3=16px`, `space.4=24px`, `space.5=64px`, `space.6=80px`, `space.7=128px`
- Radius/shadow/motion tokens: `radius.xs=16px`, `radius.sm=24px`, `radius.md=32px`, `radius.lg=48px` | `shadow.1=rgba(255, 255, 255, 0.4) 0px 2px 4px 0px inset, rgba(0, 0, 0, 0.33) 0px 0.740973px 0.740973px -0.75px, rgba(0, 0, 0, 0.32) 0px 2.01787px 2.01787px -1.5px, rgba(0, 0, 0, 0.3) 0px 4.43051px 4.43051px -2.25px, rgba(0, 0, 0, 0.25) 0px 9.83471px 9.83471px -3px, rgba(0, 0, 0, 0.11) 0px 25px 25px -3.75px, rgb(84, 84, 84) 0px 0px 0px 1px`, `shadow.2=rgba(255, 255, 255, 0.4) 0px 2px 4px 0px inset, rgba(0, 0, 0, 0.33) 0px 0.740973px 0.740973px -0.75px, rgba(0, 0, 0, 0.32) 0px 2.01787px 2.01787px -1.5px, rgba(0, 0, 0, 0.3) 0px 4.43051px 4.43051px -2.25px, rgba(0, 0, 0, 0.25) 0px 9.83471px 9.83471px -3px, rgba(0, 0, 0, 0.11) 0px 25px 25px -3.75px, rgb(130, 130, 130) 0px 0px 0px 1px`, `shadow.3=rgba(255, 255, 255, 0.4) 0px 2px 4px 0px inset, rgba(0, 0, 0, 0.07) 0px 0.740973px 0.740973px -0.75px, rgba(0, 0, 0, 0.07) 0px 2.01787px 2.01787px -1.5px, rgba(0, 0, 0, 0.07) 0px 4.43051px 4.43051px -2.25px, rgba(0, 0, 0, 0.06) 0px 9.83471px 9.83471px -3px, rgba(0, 0, 0, 0.03) 0px 25px 25px -3.75px, rgb(240, 240, 240) 0px 0px 0px 1px`, `shadow.4=rgba(0, 0, 0, 0.07) 0px 0.597144px 0.597144px -0.9375px, rgba(0, 0, 0, 0.07) 0px 1.81088px 1.81088px -1.875px, rgba(0, 0, 0, 0.06) 0px 4.78699px 4.78699px -2.8125px, rgba(0, 0, 0, 0.03) 0px 15px 15px -3.75px` | `motion.duration.instant=300ms`, `motion.duration.fast=400ms`

## Accessibility
- Target: WCAG 2.2 AA
- Keyboard-first interactions required.
- Focus-visible rules required.
- Contrast constraints required.

## Writing Tone
concise, confident, implementation-focused

## Rules: Do
- Use semantic tokens, not raw hex values in component guidance.
- Every component must define required states: default, hover, focus-visible, active, disabled, loading, error.
- Responsive behavior and edge-case handling should be specified for every component family.
- Accessibility acceptance criteria must be testable in implementation.

## Rules: Don't
- Do not allow low-contrast text or hidden focus indicators.
- Do not introduce one-off spacing or typography exceptions.
- Do not use ambiguous labels or non-descriptive actions.

## Guideline Authoring Workflow
1. Restate design intent in one sentence.
2. Define foundations and tokens.
3. Define component anatomy, variants, and interactions.
4. Add accessibility acceptance criteria.
5. Add anti-patterns and migration notes.
6. End with QA checklist.

## Required Output Structure
- Context and goals
- Design tokens and foundations
- Component-level rules (anatomy, variants, states, responsive behavior)
- Accessibility requirements and testable acceptance criteria
- Content and tone standards with examples
- Anti-patterns and prohibited implementations
- QA checklist

## Component Rule Expectations
- Include keyboard, pointer, and touch behavior.
- Include spacing and typography token requirements.
- Include long-content, overflow, and empty-state handling.

## Quality Gates
- Every non-negotiable rule must use "must".
- Every recommendation should use "should".
- Every accessibility rule must be testable in implementation.
- Prefer system consistency over local visual exceptions.

<!-- TYPEUI_SH_MANAGED_END -->
