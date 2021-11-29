function setLocalStorage(key, value) {
    window.localStorage.setItem(key, value)
};

function getLocalStorage(key) {
    return window.localStorage.getItem(key)
};

function setLocalStorage(key, value) {
    window.localStorage.setItem(key, value)
};

function clearLocalStorage() {
    var clear = confirm('Are you sure you want to clear your saves?');
    if (clear) {
        localStorage.clear();
        alert('Saves cleared');
    } else {
        alert('No saves cleared');
    }
}

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

//function to prompt user to save before leaving page if there are unsaved changes
window.onbeforeunload = function() {
    if (editor.getModel().getValue() != getLocalStorage("js") || editor1.getModel().getValue() != getLocalStorage("html") || editor2.getModel().getValue() != getLocalStorage("css")) {
        return "You have unsaved changes. Are you sure you want to leave?";
    }
}