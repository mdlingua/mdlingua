# mdlingua – Repository Summary

## Overview

*mdlingua* is a multi-step, multilingual interactive web application built with *AngularJS*, scaffolded using the [Yeoman Angular Generator](https://github.com/yeoman/generator-angular) (v0.14.0). It is designed for structured *medical question-and-answer sessions*, supporting multiple languages and producing summarized reports.

---

## Repository Structure

```
├── app/                   # Main application source
├── filters/               # AngularJS filters (e.g., language chooser)
├── images/                # Image assets
├── presets/               # Predefined questions and translations
├── scripts/
│   ├── app.js             # Main AngularJS module & route definitions
│   ├── controllers/       # Route controllers (intro, language, complaint, question, report, etc.)
│   ├── services/          # Shared services (state, question service, TTS)
│   ├── styles/            # SCSS stylesheet
│   ├── views/             # HTML templates for each route
│   ├── index.html         # App entry point
│   ├── 404.html           # Error page
│   ├── test/              # Unit tests (Karma + Jasmine)
│   └── spec/controllers/  # Controller test specs
├── config.json            # Question/answer configuration and app state defaults
├── Gruntfile.js           # Grunt build, serve, test, and lint automation
├── bower.json             # Frontend dependencies (Bower)
├── package.json           # Node/dev dependencies and scripts
├── .travis.yml            # CI configuration (Travis CI)
└── README.md              # Project readme
```

---

## Key Components

### Application Flow (Routes)
The app guides users through a structured workflow:
1.  /intro      🟢 Introduction screen
2.  /language   🟢 Language selection
3.  /patient-details 🟢 Enter patient information
4.  /complaint  🟢 Select medical complaint
5.  /get-ready  🟢 Preparation step
6.  /question   🟢 Dynamic medical Q&A
7.  /conclusion 🟢 Session conclusion
8.  /report     🟢 Final summary/report

### Controllers (app/scripts/controllers/)
| Controller           | Purpose                                        |
|----------------------|------------------------------------------------|
| intro.js             | Handles the intro/welcome screen               |
| language.js          | Language selection logic                       |
| patient-details.js   | Captures patient information                   |
| complaint.js         | Complaint selection                            |
| get-ready.js         | Pre-question preparation                       |
| question.js          | Drives the Q&A session                         |
| conclusion.js        | Wraps up the session                           |
| report.js            | Generates the final report                     |

### Services (app/scripts/services/)
| Service              | Purpose                                        |
|----------------------|------------------------------------------------|
| state.js             | Manages shared application state               |
| questionService.js   | Handles question logic and flow                |
| tts.js               | Text-to-speech support                         |

### Configuration (config.json)
Defines the full set of medical questions, their types, categories (e.g., Chest pain, Vomiting, Fever), possible answers, and default application state.

### Presets (app/presets/)
- questions.js    🟢 Predefined question sets
- translations.js 🟢 Internationalization/translation strings

---

## Tech Stack
| Layer          | Technology               |
|----------------|-------------------------|
| Framework      | AngularJS               |
| Build Tool     | Grunt                   |
| Package Manager| npm + Bower             |
| Testing        | Karma + Jasmine         |
| CI             | Travis CI               |
| Scaffolding    | Yeoman (generator-angular v0.14.0) |

---

## Build & Development

```bash
# Install dependencies
npm install && bower install

# Start development server
grunt serve

# Build for production
grunt

# Run unit tests
grunt test
```

---

*This summary was auto-generated based on the repository file structure and content.*
