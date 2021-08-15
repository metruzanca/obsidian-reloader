# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.0.1] - 2021-08-15
### Added 
- Github Actions workflow for auto-releases on annotated tag creation.
- CHANGELOG.md file that follows the keepachangelog convention. The most recent version from this file should be copied over to body.md which is used for releases.
- `gh-tagger` package for quickly creating releases via command line.
### Changed
- Moved all code to `src`
- Moved rollup output to `build/`
- Split `main.ts` into `main.ts`, `types.ts` & `settings.ts` to give a better example of how to organize code. 

## [0.0.0] - 2021-08-14
- init