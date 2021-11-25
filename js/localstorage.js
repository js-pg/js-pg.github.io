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
    if (window.localStorage(key) === undefined) {

    } else {
        console.log("localStorage not found: " + key);
    };
};

function displayLocalStorage() {
    editor.getModel().setValue(getLocalStorage("js"));
    editor1.getModel().setValue(getLocalStorage("html"));
    editor2.getModel().setValue(getLocalStorage("css"));
};



setTimeout(() => {

    setLocalStorage("js", editor.getValue());
    setLocalStorage("html", editor1.getValue());
    setLocalStorage("css", editor2.getValue());

}, 1500);