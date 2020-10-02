function start_screen () {
    Times = []
    ao52 = []
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
    }
}
function ao5 () {
    Times.reverse()
    ao52[0] = Times[0]
    ao52[1] = Times[1]
    ao52[2] = Times[2]
    ao52[3] = Times[3]
    ao52[4] = Times[4]
    ao52.reverse()
    ao5_total = (ao52[0] + ao52[1] + ao52[2] + ao52[3] + ao52[4]) / 5
}
input.onButtonPressed(Button.A, function () {
    let start_delay_check = 0
    Timer_running = 0
    start_delay = 0
    while (start_delay_check) {
        start_delay = start_delay + 0.01
        basic.pause(0.01)
        if (start_delay >= 0.5) {
        	
        }
    }
    while (Timer_running == 0) {
        timing_function()
        stop_timer()
    }
})
function timing_function () {
    Current_time = Current_time + 0.01
    basic.pause(10)
}
input.onButtonPressed(Button.AB, function () {
    let ao12_total = 0
    basic.showString("ao5:")
    basic.showNumber(ao5_total)
    basic.showString("ao12:")
    basic.showNumber(ao12_total)
})
input.onButtonPressed(Button.B, function () {
    Timer_running = 0
    while (Timer_running == 0) {
        timing_function()
        stop_timer()
    }
})
let start_delay = 0
let ao5_total = 0
let Current_time = 0
let Timer_running = 0
let ao52: number[] = []
let Times: number[] = []
start_screen()
control.inBackground(function () {
    ao5()
})
