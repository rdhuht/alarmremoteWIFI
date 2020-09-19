/**
 * 使用obstacle sensor检测是否打开抽屉了，如果打开了，那么就报警。
 * 
 * 使用AB控制是否打开报警。
 */
/**
 * 下一版本：
 * 
 * 检测打开时，如果有打开抽屉，拍照并发送照片到手机上
 */
input.onButtonPressed(Button.A, function () {
    on = true
    basic.showIcon(IconNames.Yes)
})
input.onButtonPressed(Button.B, function () {
    on = false
    basic.showIcon(IconNames.No)
})
let on = false
pins.setPull(DigitalPin.P1, PinPullMode.PullUp)
on = false
basic.forever(function () {
    while (on) {
        if (pins.digitalReadPin(DigitalPin.P1) == 1) {
            music.playTone(262, music.beat(BeatFraction.Whole))
        }
    }
})
