import { App, PluginSettingTab, Setting } from "obsidian";
import ObsidianReloader from "./main";

export class ReloaderSettings extends PluginSettingTab {
	plugin: ObsidianReloader;

	constructor(app: App, plugin: ObsidianReloader) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		let {containerEl} = this;
		containerEl.empty();
		containerEl.createEl('h2', {text: 'Obsidian Reloader Settings'});

		new Setting(containerEl)
			.setName('Port')
			.setDesc('Port used by the websocket server')
			.addText(text => text
				.setPlaceholder('8080')
				.setValue(this.plugin.settings.port.toFixed())
				.onChange(async (value) => {
					this.plugin.settings.port = parseInt(value);
					await this.plugin.saveSettings();
				}));
	}
}
