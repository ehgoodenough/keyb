# Keyb #

A javascript utility for polling the state of the keyboard.

### Usage ###

For any given frame of your game loop, you can poll if a key is being pressed using `Keyb.isPressed(keyname)`:

```js
if(Keyb.isPressed("W")) {
    player.position.y -= 1
}
if(Keyb.isPressed("S")) {
    player.position.y += 1
}
if(Keyb.isPressed("A")) {
    player.position.x -= 1
}
if(Keyb.isPressed("D")) {
    player.position.x += 1
}
```

All methods accept a `keyname` as defined in [vkey](https://github.com/chrisdickinson/vkey), such as `1` or `A` or `<enter>`. Visit their [test page](http://didact.us/vkey) to identify what keyname to use for each key on the keyboard.

### License ###

This project is licensed under the MIT license.
