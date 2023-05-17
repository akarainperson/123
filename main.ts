input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . # . # .
        . . . . .
        . # . # .
        . . . . .
        . # . # .
        `)
})
basic.showString("3")
basic.showString("2")
basic.showString("1")
basic.forever(function () {
	
})
