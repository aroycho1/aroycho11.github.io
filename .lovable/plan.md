
# Plan: Add "Building Custom GPTs for Higher Ed" Project and Conferences Section

## Overview
This plan adds a new project showcasing your conference presentation on AI-powered innovations for educators, plus a dedicated Conferences section highlighting your speaking engagements at MDCLCA and ACTLA.

---

## Part 1: Add New Project

### File: `src/components/sections/ProjectsSection.tsx`

Add a third project to the `projects` array:

**Project Details:**
- **Title:** Building Custom GPTs for Higher Ed
- **Description:** Presented AI-powered innovations for modernizing assessments in higher education, demonstrating how custom GPTs can enhance learning center operations and student support.
- **Type:** Video (using the uploaded MP4 file)
- **Purpose:** Empower educators with practical AI tools to modernize assessment methods, improve tutoring efficiency, and enhance student learning outcomes through custom GPT implementations.
- **Tools/Methods:** Custom GPT development, prompt engineering, educational technology integration, assessment automation strategies
- **Highlights:** 
  - AI Assessment (Modernized evaluation methods)
  - Custom GPTs (Tailored for education)
  - Learning Centers (Enhanced support)
  - Educator Tools (Practical implementation)

### Asset to Copy:
- Copy `user-uploads://MDCLCA_2025_-_Modernizing_Assessments_AI-Powered_Innovations_for_Educators_1_1_1.mp4` to `src/assets/gpt-higher-ed-video.mp4`

**Note:** Since HTML5 video element will be used instead of iframe (it's an MP4, not a Loom embed), the rendering logic will be updated to support local video files.

---

## Part 2: Create Conferences Section

### New File: `src/components/sections/ConferencesSection.tsx`

Create a new section displaying your conference presentations with:

**Data Structure:**
```text
conferences = [
  {
    name: "Maryland College Learning Center Association (MDCLCA)",
    date: "March 2025",
    location: "Towson University",
    logo: (uploaded MDCLCA logo)
  },
  {
    name: "Association of Colleges for Tutoring and Learning Assistance (ACTLA)",
    date: "April 2025",
    location: "National Conference",
    logo: (uploaded ACTLA logo)
  }
]
```

**Design:**
- Section title: "Conferences"
- Subtitle: "Speaking Engagements"
- Card-based layout similar to EducationSection styling
- Each card displays: conference logo, name, date, and location
- Framer Motion animations for entrance effects
- Hover effects with border highlight

### Assets to Copy:
- Copy `user-uploads://Screenshot_2026-02-06_at_12.59.51 PM.png` to `src/assets/mdclca-logo.png`
- Copy `user-uploads://High_Res_Logo.webp` to `src/assets/actla-logo.webp`

---

## Part 3: Integration

### File: `src/pages/Index.tsx`

Add the new ConferencesSection import and place it in the page layout (after Projects or after Education based on flow):

```text
import ConferencesSection from "@/components/sections/ConferencesSection";

// In the return statement, add after EducationSection:
<ConferencesSection />
```

### File: `src/components/Navigation.tsx`

Add "Conferences" to the navigation menu:

```text
const navItems = [
  { label: "Projects", href: "#projects" },
  { label: "Op-Ed", href: "#op-ed" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Conferences", href: "#conferences" },  // NEW
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
```

---

## Technical Notes

- The MP4 video will use an HTML5 `<video>` element with controls, autoplay disabled, and poster frame support
- Conference logos will be imported as ES6 modules from `src/assets`
- All components follow existing patterns: framer-motion for animations, Tailwind for styling
- Responsive grid layouts will adapt to mobile (single column) and desktop (multi-column)
