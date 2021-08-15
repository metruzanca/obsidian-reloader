## Obsidian Plugin Template

This is a plugin template for Obsidian (https://obsidian.md).

Based on [obsidian-sample-plugin](https://github.com/obsidianmd/obsidian-sample-plugin) with added automation and slightly better defaults. 

### First time developing plugins?

Quick starting guide for new plugin devs:

- Make a copy of this repo as a template with the "Use this template" button (login to GitHub if you don't see it).
- Clone your repo to a local development folder. Then for convenience, you can symlink (virtual link on windows) the generated `build` folder to `.obsidian/plugins/your-plugin-name` in your vault folder.
- Install NodeJS, then run `npm i` in the command line under your repo folder.
- Run `npm run dev` to compile your plugin.
- Make changes to `main.ts` (or create new `.ts` files). Those changes will be automatically compiled into the `build` folder (if it doesn't exist, it will get created automatically).
- Reload Obsidian to load the new version of your plugin.
- Enable plugin in settings window.
- For updates to the Obsidian API run `npm update` in the command line under your repo folder.

### Releasing new releases

Releases should be as simple as pushing a big red button. I've managed to get it down to 2 simple steps (with the first in the process of being automated)


> You should commit all your code before proceeding with step 1. This will result in cleaner git history.  


1. Update the `body.md` file with the latest release notes. (Idealy, should correspond to the most recent entry in `CHANGELOG.md`)
2. Run `npm run release <patch|minor|major> [<optional release message>]`. Following the semver standard:
    - patch is for backward-compatible bug fixes/improvements
    - minor is for when you add functionality in a backwards compatible way
    - major is when you make changes to the API (only important if your app has e.g. settings and you change a setting's name/usage resulting in your users having to update their settings)

If your app uses a new obsidian API feature you'll need to do the following:
- Update your `manifest.json` with the minimum Obsidian version required for your latest release.
- Update your `versions.json` file with `"new-plugin-version": "minimum-obsidian-version"` so older versions of Obsidian can download an older version of your plugin that's compatible.
### Adding your plugin to the community plugin list

- Publish an initial version.
- Make sure you have a `README.md` file in the root of your repo.
- Make a pull request at https://github.com/obsidianmd/obsidian-releases to add your plugin.

### Manually installing the plugin

- Copy over `build/` to your vault `VaultFolder/.obsidian/plugins/your-plugin-id/`.

### Obsidian API Documentation

See https://github.com/obsidianmd/obsidian-api
