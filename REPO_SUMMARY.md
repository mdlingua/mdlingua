# Repository Summary — mdlingua/mdlingua

## Project Overview
mdlingua is an AngularJS web application scaffolded using the Yeoman Angular Generator (v0.14.0). It is a language/translation quiz or learning tool, based on the presence of questions.js and translations.js presets.

## Repository Structure

| Path | Description |
|------|-------------|
| app/ | Main application source — controllers, views, services, styles, images, presets |
| app/scripts/ | AngularJS JavaScript source — controllers, services, filters |
| app/views/ | HTML view fragments |
| app/styles/ | SCSS stylesheets |
| app/presets/ | questions.js and translations.js — core data/config for the app |
| test/ | Unit test specs and Karma configuration |
| Gruntfile.js | Build, serve, and test task configuration |
| package.json | Node.js project metadata and dev dependencies |
| bower.json | Frontend dependency management |
| config.json | Application configuration |
| README.md | Project documentation |

## Tech Stack
- Framework: AngularJS
- Build Tool: Grunt
- Testing: Karma
- Package Managers: npm + Bower
- Styles: SCSS/Sass
- CI: Travis CI

## Getting Started
Run npm install and bower install to install dependencies, grunt serve to build and preview, grunt test to run unit tests.

## Key Files
- README.md — Minimal docs covering build, preview, and testing.
- Gruntfile.js — Orchestrates build pipeline, live-reload, and test runner.
- app/presets/questions.js and translations.js — Core data driving the app's language/quiz functionality.
- test/ — Karma-based specs for AngularJS controllers.
