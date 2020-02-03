const STORAGE_KEY = 'hunger-game-settings';

export const localSettings = {
    fetch: function () {
        return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}')
    },
    save: function (settings) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(settings))
    },
    update: function (key, value) {
        const settings = this.fetch();
        settings[key] = value
        this.save(settings);
    }
}