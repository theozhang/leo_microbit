input.onButtonPressed(Button.A, function () {
    while (true) {
        basic.showIcon(IconNames.Surprised)
        basic.showString("Hello!")
        basic.showIcon(IconNames.TShirt)
        basic.showLeds(`
            . . . # .
            . . . # .
            . . . # .
            . . # # #
            # # # # #
            `)
        basic.showLeds(`
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            # . # . .
            `)
        basic.showLeds(`
            . # . . .
            # # # # #
            . # # # #
            . . . # #
            . . # # #
            `)
        basic.showLeds(`
            . # . . .
            # # # # #
            . # . . .
            . . . . .
            . . . . .
            `)
        basic.showIcon(IconNames.Skull)
        basic.showIcon(IconNames.Ghost)
    }
})
