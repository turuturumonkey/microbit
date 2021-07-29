input.onLogoEvent(TouchButtonEvent.Touched, function () {
    basic.showString("START")
    Get = 0
    Player = 2
    Array2 = [0]
    for (let index = 0; index < 14; index++) {
        Array2.push(0)
    }
    配列[randint(0, 4)] = 1
    View()
    for (let index = 0; index < 20; index++) {
        for (let index = 0; index < 4; index++) {
            basic.pause(100)
            落下()
            View()
            判定()
        }
    }
    soundExpression.happy.play()
    basic.showString("FINISH")
    basic.showString("RESULT")
    basic.showString("" + (Get))
})
function 落下 () {
    カウンター = 14
    for (let index = 0; index < 10; index++) {
        if (配列[カウンター - 5] == 1) {
            配列[カウンター] = 1
            配列[カウンター - 5] = 0
            break;
        }
    }
}
function 判定 () {
    if (配列[Player + 20] == 1) {
        Get += 1
        music.playTone(523, music.beat(BeatFraction.Whole))
        配列[Player + 20] = 0
    }
}
function View () {
    led.plot(Player, 4)
    for (let カウンター = 0; カウンター <= 14; カウンター++) {
        if (配列[カウンター] == 1) {
            led.plot(カウンター % Math.floor(カウンター / 5), 0)
        }
    }
}
input.onButtonPressed(Button.A, function () {
    if (Player >= 1) {
        Player += -1
    } else {
        music.playTone(131, music.beat(BeatFraction.Eighth))
    }
    View()
    判定()
})
input.onButtonPressed(Button.B, function () {
    if (Player <= 3) {
        Player += 1
    } else {
        music.playTone(131, music.beat(BeatFraction.Eighth))
    }
    View()
    判定()
})
let カウンター = 0
let 配列: number[] = []
let Array2: number[] = []
let Player = 0
let Get = 0
music.playMelody("C D E F G - A G ", 170)
music.playMelody("F E F E - - - - ", 170)
basic.showIcon(IconNames.Heart)
basic.pause(100)
basic.clearScreen()
