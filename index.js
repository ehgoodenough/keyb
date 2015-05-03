var vkey = require("vkey")

var Keyb = {
    isDown: function(key) {
        return this.data[key] === true
    },
    isUp: function(key) {
        return this.data[key] !== true
    },
    setDown: function(key) {
        this.data[key] = true
    },
    setUp: function(key) {
        delete this.data[key]
    }
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
