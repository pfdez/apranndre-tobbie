input.onButtonPressed(Button.A, function () {
    conter = conter + 1
    basic.showNumber(conter)
})
input.onButtonPressed(Button.AB, function () {
    conter = conter * 2
    basic.showNumber(conter)
})
input.onButtonPressed(Button.B, function () {
    conter = conter - 1
    basic.showNumber(conter)
})
let conter = 0
conter = 0
basic.showNumber(conter)
loops.everyInterval(500, function () {
    if (conter >= 10) {
        basic.showLeds(`
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
            `)
    }
})
