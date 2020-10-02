function start_screen () {
    Times = []
    ao5 = []
    basic.showLeds(`
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # . . . .
        . # . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # . . . .
        . # . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # . . . .
        . # . . .
        . . # . .
        . . . # .
        . . . . .
        `)
    basic.showLeds(`
        # . . . .
        . # . . .
        . . # . .
        . . . # .
        . . . . #
        `)
    basic.showLeds(`
        # . . . #
        . # . . .
        . . # . .
        . . . # .
        . . . . #
        `)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . . . # .
        . . . . #
        `)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        . . . . #
        `)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.clearScreen()
    basic.showLeds(`
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # # . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # # # .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        # # . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        # # # . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        # # # # .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # . . .
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # . .
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # .
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # . . . .
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # . . .
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # . .
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # .
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.clearScreen()
}
function stop_timer () {
    if (input.isGesture(Gesture.Shake)) {
        Timer_running = 1
        Times.push(Current_time)
        basic.showNumber(Current_time)
        Current_time = 0
    }
}
function ao5_function () {
    Times.reverse()
    ao5[0] = Times[0]
    ao5[1] = Times[1]
    ao5[2] = Times[2]
    ao5[3] = Times[3]
    ao5[4] = Times[4]
    Times.reverse()
    ao5_total = (ao5[0] + ao5[1] + ao5[2] + ao5[3] + ao5[4]) / 5
}
input.onButtonPressed(Button.A, function () {
    Timer_running = 0
    Delay()
    while (Timer_running == 0) {
        timing_function()
        stop_timer()
    }
    ao5_function()
})
function timing_function () {
    Current_time = Current_time + 0.01
    basic.pause(10)
}
input.onButtonPressed(Button.B, function () {
    let ao12_total = 0
    basic.showString("ao5:")
    basic.showNumber(ao5_total)
    basic.showString("ao12:")
    basic.showNumber(ao12_total)
    basic.clearScreen()
})
function Delay () {
    start_delay = 0
    start_delay_check = 0
    while (start_delay_check == 0) {
        if (input.buttonIsPressed(Button.AB)) {
            while (input.buttonIsPressed(Button.AB) || start_delay_check == 0) {
                start_delay = start_delay + 0.1
                if (start_delay > 0.5) {
                    start_delay_check = 1
                } else {
                    basic.pause(0.10)
                }
            }
            basic.showLeds(`
                # . # . #
                . # . # .
                # . # . #
                . # . # .
                # . # . #
                `)
            basic.clearScreen()
        }
    }
}
let start_delay_check = 0
let start_delay = 0
let ao5_total = 0
let Current_time = 0
let Timer_running = 0
let ao5: number[] = []
let Times: number[] = []
start_screen()
control.inBackground(function () {
	
})
