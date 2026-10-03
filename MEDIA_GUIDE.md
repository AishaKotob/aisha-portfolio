# Aisha Kotob Portfolio — Media Integration & Safety Guide

This document specifies the exact directory structure, suggested filenames, dimensions, aspect ratios, surface roles, and confidentiality rules for adding real project media assets to Aisha Kotob's portfolio.

---

## 1. Media Directory Structure

All media assets reside in `/public/media/aisha/` with project-dedicated subdirectories:

```text
public/media/aisha/
├── qanz/
│   ├── qanz-cover.webp
│   ├── qanz-home.webp
│   ├── qanz-courses.webp
│   └── qanz-admin.webp
├── municipality/
│   ├── municipality-citizen-home.webp
│   ├── municipality-request.webp
│   └── municipality-employee.webp
├── car-showroom/
│   ├── car-showroom-prediction.webp
│   └── car-demand-chart.webp
├── job-finder/
│   ├── job-finder-home.webp
│   ├── job-finder-filter.webp
│   └── job-finder-details.webp
├── elevvo/
│   ├── elevvo-component-1.webp
│   └── elevvo-component-2.webp
├── experiments/
│   └── code-bloom-preview.webp
└── profile/
    └── aisha-portrait.webp (optional, About section only)
```

---

## 2. Project Media Specifications

### 01. Qanz Academy
*Type:* Live Educational Platform (`www.qanzacademy.online`)  
*Primary Surface:* Desktop browser captures

| Filename | Recommended Dimensions | Format | Usage Location | Surface Role |
| :--- | :--- | :--- | :--- | :--- |
| `qanz-home.webp` | 1920 × 1080 (or 1600 × 1000) | WebP / PNG | Case Study Hero / BrowserFrame | Public Student Landing |
| `qanz-courses.webp` | 1600 × 1000 | WebP / PNG | Case Study Gallery / Reel | Course Exploration Catalog |
| `qanz-admin.webp` | 1600 × 1000 | WebP / PNG | Administrative Media Slot | **Sanitized** Admin Suite |

> **Safety Notice for Qanz:** Ensure `qanz-admin.webp` displays mock/anonymized student names and dummy email addresses.

---

### 02. Municipality Management Portal
*Type:* Civic Portal & Internal Operations (In Development, Local Demonstration Proven)  
*Primary Surface:* Dual-interface spread (Citizen vs. Staff)

| Filename | Recommended Dimensions | Format | Usage Location | Surface Role |
| :--- | :--- | :--- | :--- | :--- |
| `municipality-citizen-home.webp` | 1920 × 1080 | WebP / PNG | Case Study Hero | Citizen Services Catalog |
| `municipality-request.webp` | 1600 × 1000 | WebP / PNG | Multi-step Form Feature | Citizen Request Wizard |
| `municipality-employee.webp` | 1600 × 1000 | WebP / PNG | Internal Operations Frame | **Sanitized** Employee Triage Queue |

> **Strict Sanitization Notice:** All citizen National IDs, phone numbers, employee names, and residential ticket addresses must be blurred or replaced with synthetic test records before capture.

---

### 03. Car Showroom + ML Intelligence
*Type:* University Project / Smart Product Interface  
*Primary Surface:* Desktop browser with interactive prediction playground

| Filename | Recommended Dimensions | Format | Usage Location | Surface Role |
| :--- | :--- | :--- | :--- | :--- |
| `car-showroom-prediction.webp` | 1920 × 1080 | WebP / PNG | Case Study Hero | Vehicle Filter & Prediction Sliders |
| `car-demand-chart.webp` | 1400 × 900 | WebP / PNG | Under The Interface / Analytics | Chart.js Demand & Feature Importance |

---

### 04. Job Finder Mobile App
*Type:* University Project (Flutter Client)  
*Primary Surface:* 3-Screen Mobile Phone Stack (9:19.5 aspect ratio)

| Filename | Recommended Dimensions | Format | Usage Location | Surface Role |
| :--- | :--- | :--- | :--- | :--- |
| `job-finder-home.webp` | 1170 × 2532 (or 390 × 844 @3x) | WebP / PNG | PhoneStack (Center) | Discovery Feed & Job Cards |
| `job-finder-filter.webp` | 1170 × 2532 (or 390 × 844 @3x) | WebP / PNG | PhoneStack (Left) | Multi-criteria Filter Modal |
| `job-finder-details.webp` | 1170 × 2532 (or 390 × 844 @3x) | WebP / PNG | PhoneStack (Right) | Job Dossier & Quick Apply Modal |

---

### 05. Elevvo Frontend Internship & HYNX
*Type:* Component Design & Frontend QA

- Use code snippets, sanitized storybook screens, or public repository links (`AishaKotob/Elevvo_internship`).
- **HYNX Notice:** Do NOT publish internal company dashboards, private APIs, credentials, or proprietary business metrics.

---

## 3. Confidentiality & Sanitization Rules (Section 59)

### PUBLIC (Safe for unrestricted display)
- Live public website viewports (e.g., `qanzacademy.online`)
- Public GitHub open-source repositories
- Clean component mockups without user data

### SANITIZE BEFORE UPLOAD (Requires redaction)
- Internal administration consoles
- Municipal worker queues
- Database records & table snapshots
- Ensure names, emails, phone numbers, and dates use test aliases (e.g., "Jane Doe", "demo@example.com").

### NEVER SHOW
- Production environment variables (`.env`, API tokens)
- Database credentials or terminal connection strings
- Customer PII or private communications
- Proprietary HYNX trading algorithms or infrastructure configurations
