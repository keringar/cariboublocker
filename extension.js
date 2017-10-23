const KeyboardUI = imports.ui.keyboard;

let _originalLastDeviceIsTouchscreen;

function _modifiedLastDeviceIsTouchscreen() {
    return false;
}

function init() {

}

function enable() {
    _originalLastDeviceIsTouchscreen = KeyboardUI.Keyboard.prototype._lastDeviceIsTouchscreen;
    KeyboardUI.Keyboard.prototype._lastDeviceIsTouchscreen = _modifiedLastDeviceIsTouchscreen;
}

function disable() {
    KeyboardUI.Keyboard.prototype._lastDeviceIsTouchscreen = _originalLastDeviceIsTouchscreen;
    _originalLastDeviceIsTouchscreen = null;
}
