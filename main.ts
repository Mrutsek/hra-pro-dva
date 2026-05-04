

enum State {
    Passive,
    Started,
    Running
}

let state = State.Passive

basic.forever(function () {
    if (state == State.Passive) {
        input.onButtonPressed(Button.AB, function () {
            if (state == State.Passive) {
                state = State.Started
            }
        }
    }
    
    else if (state == State.Started) {
        let waitTime = randit (3, 6)
        basic.pause (waitTime*1000)
        control.runInBackground (() => music.playTone(440, 250))
        if (state = State.Started) {
            state = State.Running
        }
    }

    else if (state == State.Running) {
        control.runInBackground (() => music.playTone (880, 200))
        let pressedA = input.ButtonIsPressed(Button.A)
        let pressedB = input.ButtonIsPressed(Button.B)
        if (pressedA && pressedB) {
            control.runInBackground (() => music.playTone (220, 300))
            basic.showIcon (AB)
        }
        else if (pressedA) {
            control.runInBackground(() => music.playTone(660, 300))
            basic.showIcon (A)
        }
        else if (pressedB) {
            control.runInBackground(() => music.playTone(660, 300))
            basic.showIcon (B)
        }
    }
})

