# mdlingua — Repository Summary

## Overview
**mdlingua** is an AngularJS web application scaffolded with [Yeoman's Angular Generator](https://github.com/yeoman/generator-angular) (v0.14.0). It appears to be a multilingual, multi-step interactive application designed to facilitate structured medical question-and-answer sessions — supporting communication between patients and doctors across different languages.

---

## Tech Stack
| Technology | Purpose |
|---|---|
| AngularJS | Frontend MVC framework |
| Yeoman (yo angular) | Project scaffolding |
| Grunt | Build, serve, and test automation |
| Karma | Unit test runner |
| Bower | Frontend dependency management |
| SCSS | Stylesheet preprocessing |

---

## Repository Structure

```
mdlingua/
├── app/                        # Main application source
│   ├── index.html              # App entry point
│   ├── 404.html                # Not-found page
│   ├── favicon.ico
│   ├── robots.txt
│   ├── filters/
│   │   └── chooseLang.js       # Angular filter for language selection
│   ├── images/                 # Static image assets (logo, doctor, etc.)
│   ├── presets/
│   │   ├── questions.js        # Predefined question data
│   │   └── translations.js     # Language translation strings
│   ├── scripts/
│   │   ├── app.js              # Main Angular module & route config
│   │   ├── controllers/        # Page-level controllers
│   │   │   ├── intro.js
│   │   │   ├── language.js
│   │   │   ├── patient-details.js
│   │   │   ├── complaint.js
│   │   │   ├── question.js
│   │   │   ├── get-ready.js
│   │   │   ├── conclusion.js
│   │   │   └── report.js
│   │   └── services/
│   │       ├── questionServie.js  # Question management service
│   │       ├── state.js           # App state management
│   │       └── tts.js             # Text-to-speech service
│   ├── styles/                 # SCSS stylesheets
│   └── views/                  # HTML view templates (one per route)
├── test/                       # Unit tests (Karma + Jasmine)
├── config.json                 # Question definitions & app configuration
├── Gruntfile.js                # Grunt task configuration
├── package.json                # Node.js dev dependencies
├── bower.json                  # Frontend dependencies
├── .travis.yml                 # CI configuration (Travis CI)
└── README.md                   # Project documentation
```

---

## Application Flow
The app follows a step-by-step workflow guiding a user (doctor/patient) through:
1. **Intro** — Welcome screen
2. **Language** — Select patient and doctor languages
3. **Patient Details** — Collect patient information
4. **Complaint** — Select or describe the medical complaint
5. **Question** — Structured Q&A based on complaint category
6. **Get Ready** — Transition/preparation screen
7. **Conclusion** — Summary of the session
8. **Report** — Final output/report generation

---

## Configuration
`config.json` defines:
- **Question definitions** — Each question has an `id`, `type`, `title`, and array of `answers`
- **Categories** — Medical symptom/topic categories
- **Initial state** — Default `patientLanguage`, `doctorLanguage`, `categories`, and `answered` state

---

## Build & Development

```bash
# Install dependencies
npm install && bower install

# Serve locally with live reload
grunt serve

# Build for production
grunt

# Run unit tests
grunt test
```

---

*This summary was auto-generated based on the repository structure and file contents.*
