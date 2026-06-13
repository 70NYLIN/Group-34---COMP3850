# Group 34 – COMP3850 Prototype

## Project Overview

This repository contains the D5 prototype for the Group 34 COMP3850 project.  
The prototype consists of three Claude-generated HTML code blocks built for the ThriveTogether Squarespace website.

## File Structure

```
Group-34----COMP3850/
├── 01_home_codeblock.html       ← Home page: featured programs + resource highlights + CTA
├── 02_faq_codeblock.html        ← FAQ page: accordion with 8 questions
├── 03_contact_codeblock.html    ← Contact page: 3-step program enquiry form
└── README.md
```

## Key Features

- Home page content block with 4 program cards, resource highlights, and CTA strip
- FAQ accordion — click to expand/collapse, 8 questions
- 3-step contact form with email validation, date and age group fields, and auto-generated reference number on submission
- ThriveTogether branding (navy, cream, sage) applied consistently across all 3 blocks
- Mobile responsive layout

## How to Use

Each `.html` file is a self-contained Squarespace Code Block — paste the full contents of each file into a Code Block on the corresponding Squarespace page.

> ⚠️ JavaScript is disabled on the free-plan published site. Demo in Squarespace **editor preview mode** instead.

## D4 → D5 Changes

| | D4 | D5 |
|---|---|---|
| File structure | Single file (index.html + CSS + JS) | 3 separate code blocks |
| FAQ questions | 4 | 8 |
| Contact form | Basic role/interest selection | 3-step flow with date, age group, email validation |
| Reference number | Hardcoded (#TT2026) | Auto-generated (#TT-YYMMDD-XXX) |
| Branding | Not unified | Consistent across all 3 blocks |

## Built With

- HTML / CSS / JavaScript
- Claude (Anthropic) — code generation
- Squarespace 7.1 — deployment platform