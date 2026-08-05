var GLOBAL_LANG = 'en';
let listeners = [];

const GlobalState = {
    changeLang(lang) {
        GLOBAL_LANG = lang;
        emitChange();
    },
    subscribe(listener) {
        listeners = [...listeners, listener];
        return () => {
            listeners = listeners.filter((l) => l !== listener);
        };
    },
    getSnapshot() {
        return GLOBAL_LANG;
    }
};

function emitChange() {
    for (let listener of listeners) {
        listener(GLOBAL_LANG);
    }
}
