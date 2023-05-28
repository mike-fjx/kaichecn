let gas = 0
pins.digitalWritePin(DigitalPin.P5, 1)
basic.forever(function () {
    gas = pins.digitalReadPin(DigitalPin.P1)
    if (gas == 0) {
        basic.showNumber(0)
    } else {
        basic.showNumber(1)
    }
})
