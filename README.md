# Keyb #

A javascript utility for polling the state of the keyboard.

### Usage ###

For any given frame of your game, you can check to see if a key is pressed using `Keyb.isPressed(keyname)`:

```js
if(Keyb.isPressed("D") || Keyb.isPressed("<right>") {
    player.position.x += 1
}
```

All methods accept a `keyname` as defined in [vkey](https://github.com/chrisdickinson/vkey), such as `1` or `A` or `<enter>`. Go to their [test page](http://didact.us/vkey) to experiment with how the keyboard is mapped.

You can also check if a key was just pressed down using `Keyb.wasJustPressed(keyname, delta)`:

```js
if(Keyb.wasJustPressed("<space>")) {
    player.throwPunch()
}
```

The older API is still supported, including `isDown` and `isJustDown`.

## License ##

This project is licensed under the MIT license.
