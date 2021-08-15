import { App, Modal, Notice, Plugin } from 'obsidian';
import { ReloaderSettings } from './settings';
import { Settings } from './types';
import { Reloader } from './ws';

const DEFAULT_SETTINGS: Settings = {
	port: 8080
}

export default class ObsidianReloader extends Plugin {
	settings: Settings;
	reloader: Reloader

	async onload() {
		await this.loadSettings();
		this.reloader = new Reloader({
			port: this.settings.port,
			onConnect: this.connected
		})

		this.addSettingTab(new ReloaderSettings(this.app, this));
	}

	onunload() {
		this.reloader.kill()
	}

	connected() {
		this.addStatusBarItem().setText('⚡ Obsidian Reloader Ready! ⚡');
	}

	async loadSettings() {
		this.settings = {...DEFAULT_SETTINGS, ...await this.loadData()};
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}
}