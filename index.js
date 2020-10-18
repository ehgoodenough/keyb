const vkey = require("vkey")
const now = window.performance.now

const DEFAULT_DELTA = 1000 / 60

const Keyb = {"data": {}}

Keyb.isPressed = function(key) {
    return this.data[key] != undefined
        && this.data[key].state == "pressed"
}

Keyb.isUnpressed = function(key) {
    return this.data[key] == undefined
        || this.data[key].state == "unpressed"
}

Keyb.wasJustPressed = function(key, delta) {
    return this.data[key] != undefined
        && this.data[key].state == "pressed"
        && now() - this.data[key].time < (delta || DEFAULT_DELTA)
}

Keyb.wasJustUnpressed = function(key, delta) {
    return this.data[key] != undefined
        && this.data[key].state == "unpressed"
        && now() - this.data[key].time < (delta || DEFAULT_DELTA)
}

Keyb.setPressed = function(keycode) {
    const key = vkey[keycode]
    if(this.isPressed(key) == false) {
        this.data[key] = {"time": now(), "state": "pressed"}
    }
}

Keyb.setNotPressed = function(keycode) {
    const key = vkey[keycode]
    this.data[key] = {"time": now(), "state": "unpressed"}
}

Keyb.isDown = Keyb.isPressed
Keyb.isJustDown = Keyb.wasJustPressed
Keyb.isUp = Keyb.isNotPressed
Keyb.isNotPressed = Keyb.isUnpressed

document.addEventListener("keydown", (event) => Keyb.setPressed(event.keyCode))
document.addEventListener("keyup", (event) => Keyb.setNotPressed(event.keyCode))

module.exports = Keyb
