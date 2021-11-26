function setLocalStorage(key, value) {
    window.localStorage.setItem(key, value)
};

function getLocalStorage(key) {
    return window.localStorage.getItem(key)
};

function setLocalStorage(key, value) {
    window.localStorage.setItem(key, value)
};

function clearLocalStorage(key) {
    window.localStorage.removeItem(key);
};

function checkIfLocalStorageExists(key) {
    if (window.localStorage.getItem(key) === undefined) {
        return false;
    } else {
        return true;
    };
};

setTimeout(function() {
    editor.getModel().setValue(getLocalStorage("js"));
    editor1.getModel().setValue(getLocalStorage("html"));
    editor2.getModel().setValue(getLocalStorage("css"));



}, 1800)