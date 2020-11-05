//% weight=0 color=#FFBA3B icon="\uf0ad" block="microbitusarthmi"
namespace microbitusarthmi {
         export enum color {
        WHITE = 1,
        BLACK = 2
     }
    //% group="1.Basic"  
    //% blockId=cls block="Clear screen color %color1"
    //% weight=101
    export function cls(color1: color):void {
       serial.writeLine("cls "+color1.toString())
       basic.pause(100)
    }
}
