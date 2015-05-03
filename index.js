var vkey = require("vkey")

var Keyb = {
    is: function(key) {
        return this.data[key] === true
    },
    down: function(key) {
        this.data[key] = true
    },
    up: function(key) {
        delete this.data[key]
    }
    data: new Object()
}

document.addEventListener("keydown", function(event) {
    if(!Keyb.is(vkey[event.keyCode])) {
        Keyb.down(vkey[event.keyCode])
    }
})

document.addEventListener("keyup", function(event) {
    Keyb.up(vkey[event.keyCode])
})

module.exports = Keyb
