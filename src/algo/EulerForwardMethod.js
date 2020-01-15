import { evaluate, round } from 'mathjs'

function EFM(fxy, h, lowerLimit, upperLimit, initialValue) {
    let count = Math.round((upperLimit - lowerLimit) / h)
    let endX = lowerLimit;
    let endY = initialValue;
    let XB = 0,
        YB = 0,
        i = 1;

    let xval = []
    let yval = []

    console.log('Inside function')
    console.log(count)

    while (i <= count) {
        XB = endX
        YB = endY

        xval.push(round(XB, 4))
        yval.push(round(YB, 4))

        endX = XB + h
        endY = YB + h * evaluate(fxy, { x: XB, y: YB })
        console.log(`At i = ${i} : endX = ${endX} || endY = ${endY}`)
        i++
    }

    xval.push(round(endX, 4))
    yval.push(round(endY, 4))

    return { xval, yval };
}

export default EFM;