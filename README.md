# keyb #

A javascript utility for polling the state of the keyboard.

## Installation ##

```
npm install keyb
```

## Usage ##

All methods accept strings from [vkey](https://github.com/chrisdickinson/vkey), such as `1` or `A` or `<enter>`.

### `keyb.isDown(key)` ###

Returns true if the key is pushed.

### `keyb.isUp(key)` ###

Returns true if the key is not pushed.

### `keyb.isJustDown(key)` ###

Returns true only once since the key has been pushed.

### `keyb.isJustUp(key)` ###

Returns true only once since the key has been released.

### `keyb.setDown(key)` ###

Mocks a key being pushed.

### `keyb.setUp(key)` ###

Mocks a key being released.
