const vkey = require("vkey")

const Keyb = {
    "data": {},
    "isPressed": function(key) {
        return this.data[key] != undefined
    },
    "wasJustPressed": function(key, delta) {
        return window.performance.now() - this.data[key] < (delta || 1000 / 60)
    },
    "isNotPressed": function(key) {
        return this.data[key] == undefined
    },
    "setPressed": function(keycode) {
        const key = vkey[keycode]
        if(this.isPressed(key) == false) {
            this.data[key] = window.performance.now()
        }
    },
    "setNotPressed": function(keycode) {
        const key = vkey[keycode]
        delete this.data[key]
    },
}

Keyb.isDown = Keyb.isPressed
Keyb.isJustDown = Keyb.wasJustPressed
Keyb.isUp = Keyb.isNotPressed

document.addEventListener("keydown", (event) => Keyb.setPressed(event.keyCode))
document.addEventListener("keyup", (event) => Keyb.setNotPressed(event.keyCode))

module.exports = Keyb
