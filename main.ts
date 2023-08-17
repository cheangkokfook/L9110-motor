enum Motor {
    M1_P8_P1,
    M2_P9_P2
}
enum Motor_dir {
    forward,
    backward
}
namespace L9110_Motor {

    //% blockId="L9110M1" block="M1 (P8, P1)| dir %d"
    export function set_dirM1(d: Motor_dir): void {
        if (Motor_dir.forward) {
            pins.digitalWritePin(DigitalPin.P8, 1)
            pins.digitalWritePin(DigitalPin.P1, 0)
        }
        if (Motor_dir.backward) {
            pins.digitalWritePin(DigitalPin.P8, 0)
            pins.digitalWritePin(DigitalPin.P1, 1)
        }
    }

    //% blockId="L9110M2" block="M2 (P9, P2)| dir %d"
    export function set_dirM2(d: Motor_dir): void {
        if (Motor_dir.forward) {
            pins.digitalWritePin(DigitalPin.P9, 1)
            pins.digitalWritePin(DigitalPin.P2, 0)
        }
        if (Motor_dir.backward) {
            pins.digitalWritePin(DigitalPin.P9, 0)
            pins.digitalWritePin(DigitalPin.P2, 1)
        }
    }

    //% blockId="L9110Stop" block="Motor Stop"
    export function set_stop(): void {
        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P9, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
}
