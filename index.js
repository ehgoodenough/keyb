var vkey = require("vkey")

var Keyb = {
    isDown: function(key) {
        return this.data[key] != undefined
    },
    isJustDown: function(key, delta) {
        return window.performance.now() - this.data[key] < (delta || 1000 / 60)
    },
    isUp: function(key) {
        return this.data[key] == undefined
    },
    setDown: function(key) {
        this.data[key] = window.performance.now()
    },
    setUp: function(key) {
        delete this.data[key]
    },
    data: new Object()
}

document.addEventListener("keydown", function(event) {
    if(Keyb.isUp(vkey[event.keyCode])) {
        Keyb.setDown(vkey[event.keyCode])
    }
})

document.addEventListener("keyup", function(event) {
    Keyb.setUp(vkey[event.keyCode])
})

module.exports = Keyb
