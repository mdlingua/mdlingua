# MDLingua

## Overview
`mdlingua` is an AngularJS-based web application for multilingual medical communication. It allows patients to interact with medical questionnaires in their preferred language, with support for text-to-speech and structured reporting.

---

## Top-Level Files

| File | Purpose |
|------|---------|
| `README.md` | Project documentation and getting started guide |
| `package.json` | Node.js dependencies and npm scripts |
| `bower.json` | Front-end package dependencies (Bower) |
| `Gruntfile.js` | Grunt task runner configuration (build, test, serve) |
| `config.json` | Application-level configuration |
| `.travis.yml` | CI/CD pipeline configuration (Travis CI) |
| `.yo-rc.json` | Yeoman generator configuration |
| `.editorconfig` | Editor formatting standards |
| `.jshintrc` | JavaScript linting rules |
| `.jscsrc` | JavaScript code style rules |
| `.bowerrc` | Bower directory configuration |
| `.gitignore` | Git ignored files |
| `.gitattributes` | Git file attribute settings |

---

## Directory Layout

### `app/` – Main Application Source
The core front-end application built with AngularJS.

| Path | Description |
|------|-------------|
| `app/index.html` | Main entry point / SPA shell |
| `app/404.html` | Custom 404 error page |
| `app/favicon.ico` | Browser tab icon |
| `app/robots.txt` | Search engine crawler rules |

#### `app/scripts/` – JavaScript Logic
| Path | Description |
|------|-------------|
| `app/scripts/app.js` | AngularJS app module definition and routing |
| `app/scripts/controllers/complaint.js` | Controller for the complaint entry screen |
| `app/scripts/controllers/conclusion.js` | Controller for the conclusion/summary screen |
| `app/scripts/controllers/get-ready.js` | Controller for the preparation/intro screen |
| `app/scripts/controllers/intro.js` | Controller for the app introduction |
| `app/scripts/controllers/language.js` | Controller for language selection |
| `app/scripts/controllers/patient-details.js` | Controller for capturing patient information |
| `app/scripts/controllers/question.js` | Controller for questionnaire interaction |
| `app/scripts/controllers/report.js` | Controller for generating the medical report |
| `app/scripts/services/questionService.js` | Service for managing questions logic |
| `app/scripts/services/state.js` | Service for managing application state |
| `app/scripts/services/tts.js` | Text-to-speech service |

#### `app/filters/`
| Path | Description |
|------|-------------|
| `app/filters/chooseLang.js` | AngularJS filter for language selection logic |

#### `app/views/` – HTML Templates
| Path | Description |
|------|-------------|
| `app/views/complaint.html` | Complaint entry screen template |
| `app/views/conclusion.html` | Conclusion screen template |
| `app/views/get-ready.html` | Get ready screen template |
| `app/views/intro.html` | Introduction screen template |
| `app/views/language.html` | Language selection screen template |
| `app/views/patient-details.html` | Patient details form template |
| `app/views/question.html` | Question/questionnaire screen template |
| `app/views/report.html` | Medical report screen template |

#### `app/styles/` – SCSS Stylesheets
| Path | Description |
|------|-------------|
| `app/styles/main.scss` | Primary stylesheet entry point |
| `app/styles/index.scss` | Index/home screen styles |
| `app/styles/complaint.scss` | Complaint screen styles |
| `app/styles/get-ready.scss` | Get ready screen styles |
| `app/styles/patient-details.scss` | Patient details screen styles |
| `app/styles/question.scss` | Question screen styles |
| `app/styles/buttons.scss` | Shared button component styles |
| `app/styles/scale.scss` | Scale/rating component styles |
| `app/styles/fragments/_language.scss` | Language fragment partial styles |

#### `app/images/` – Static Assets
| Path | Description |
|------|-------------|
| `app/images/logo.png` | Application logo |
| `app/images/doctor.png` | Doctor illustration |
| `app/images/man.png` | Patient/person illustration |
| `app/images/HELLO.png` | Welcome screen graphic |
| `app/images/sound.png` / `sound-icon.png` | Audio/TTS icons |
| `app/images/page_3-8.png` | Page illustration |
| `app/images/yeoman.png` | Yeoman scaffolding artifact |

#### `app/presets/` – Data Presets
| Path | Description |
|------|-------------|
| `app/presets/questions.js` | Predefined medical questions dataset |
| `app/presets/translations.js` | Multilingual translation strings |

---

### `test/` – Test Suite
Unit tests using Karma and Jasmine.

| Path | Description |
|------|-------------|
| `test/karma.conf.js` | Karma test runner configuration |
| `test/.jshintrc` | Linting rules for test files |
| `test/spec/controllers/about.js` | Tests for about controller |
| `test/spec/controllers/complaint.js` | Tests for complaint controller |
| `test/spec/controllers/conclusion.js` | Tests for conclusion controller |
| `test/spec/controllers/get-ready.js` | Tests for get-ready controller |
| `test/spec/controllers/intro.js` | Tests for intro controller |
| `test/spec/controllers/language.js` | Tests for language controller |
| `test/spec/controllers/main.js` | Tests for main controller |
| `test/spec/controllers/patient-details.js` | Tests for patient-details controller |
| `test/spec/controllers/question.js` | Tests for question controller |
| `test/spec/controllers/report.js` | Tests for report controller |

---

## Key Architectural Patterns
- **Framework**: AngularJS (MVC)
- **Build Tool**: Grunt
- **Package Management**: npm + Bower
- **Styling**: SCSS (compiled via Grunt)
- **Testing**: Karma + Jasmine
- **CI**: Travis CI
- **TTS**: Text-to-speech support via dedicated service
- **i18n**: Multilingual support via translations preset and language filter
