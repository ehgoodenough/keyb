const vkey = require("vkey")

const Keyb = {
    isPressed: function(key) {
        return this.data[key] != undefined
    },
    wasJustPressed: function(key, delta) {
        return window.performance.now() - this.data[key] < (delta || 1000 / 60)
    },
    isNotPressed: function(key) {
        return this.data[key] == undefined
    },
    setPressed: function(key) {
        this.data[key] = window.performance.now()
    },
    setNotPressed: function(key) {
        delete this.data[key]
    },
    data: new Object()
}

Keyb.isDown = Keyb.isPressed
Keyb.isJustDown = Keyb.wasJustPressed
Keyb.isUp = Keyb.isNotPressed

document.addEventListener("keydown", function(event) {
    if(Keyb.isNotPressed(vkey[event.keyCode])) {
        Keyb.setPressed(vkey[event.keyCode])
    }
})

document.addEventListener("keyup", function(event) {
    Keyb.setNotPressed(vkey[event.keyCode])
})

module.exports = Keyb
