# keyb #

A javascript utility for polling the state of the keyboard.

## Installation ##

```
npm install keyb
```

## Usage ##

All methods accept `key` as strings from [vkey](https://github.com/chrisdickinson/vkey), such as `1` or `A` or `<enter>`. Go to their [test page](http://didact.us/vkey) to experiment with how the keyboard is mapped.

### `keyb.isDown(key)` ###

Returns true if the key is pushed.

### `keyb.isUp(key)` ###

Returns true if the key is not pushed.

### `keyb.isJustDown(key, [delta])` ###

Returns true if the key was pushed within the last few milliseconds, given as `delta`. If the `delta` is not given, the range is assumed to be 16.667ms, or 60fps.

### `keyb.setDown(key)` ###

Mocks a key being pushed.

### `keyb.setUp(key)` ###

Mocks a key being released.

## License ##

This project is licensed under the MIT license.
