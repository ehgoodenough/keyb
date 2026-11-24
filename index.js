const vkey = require("vkey")

const DEFAULT_DELTA = 1000 / 60

const hasWindow = typeof window !== "undefined"
const hasDocument = typeof document !== "undefined"
function now() {
    if(hasWindow) {
        return window.performance.now()
    } else {
        return 0
    }
}

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
        && now() - this.data[key].time < (delta || Keyb.delta || DEFAULT_DELTA)
}

Keyb.wasJustUnpressed = function(key, delta) {
    return this.data[key] != undefined
        && this.data[key].state == "unpressed"
        && now() - this.data[key].time < (delta || Keyb.delta || DEFAULT_DELTA)
}

Keyb.setPressed = function(keycode) {
    const key = vkey[keycode]
    if(Keyb.isPressed(key)) return
    this.data[key] = {"time": now(), "state": "pressed"}

    if(key == "<meta>") {
        Object.values(this.data).forEach((data) => {
            if(data.state == "pressed") {
                data.state == "unpressed"
            }
        })
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

if(hasDocument) {
    document.addEventListener("keydown", (event) => Keyb.setPressed(event.keyCode))
    document.addEventListener("keyup", (event) => Keyb.setNotPressed(event.keyCode))
}

module.exports = Keyb
