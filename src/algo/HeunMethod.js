import { evaluate, round } from 'mathjs'


function HeunMethod(fxy, h, lowerLimit, upperLimit, initialValue) {
    try {
        let count = Math.round((upperLimit - lowerLimit) / h)
        let endX = lowerLimit;
        let endY = initialValue;
        let beforeX = 0,
            beforeY = 0,
            i;
        let xval = []
        let yval = []
        let aval = []
        let otherInfo = {
            name: "Heun's Method",
            formula: "y<sub>i+1</sub> = y<sub>i</sub> + 0.5*h{ f(x<sub>i</sub>,y<sub>i</sub>) + f(x<sub>i</sub>+h,y<sub>i</sub>+h*f(x<sub>i</sub>,y<sub>i</sub>) ) } i.e y<sub>i+1</sub> = y<sub>i</sub> + A",
            localError: `O(h<sup>3</sup>) = O(${round(h*h*h,4)})`,
            globalError: `O(h<sup>2</sup>) = O(${round(h*h,4)})`
        }

        for (i = 1; i <= count; i++) {
            beforeX = endX
            beforeY = endY

            xval.push(round(beforeX, 5))
            yval.push(round(beforeY, 5))

            endX = beforeX + h
            endY = beforeY + 0.5 * h * (evaluate(fxy, { x: beforeX, y: beforeY }) + evaluate(fxy, { x: (beforeX + h), y: (beforeY + h * evaluate(fxy, { x: beforeX, y: beforeY })) }))

            aval.push(round((0.5 * h * (evaluate(fxy, { x: beforeX, y: beforeY }) + evaluate(fxy, { x: (beforeX + h), y: (beforeY + h * evaluate(fxy, { x: beforeX, y: beforeY })) }))), 5))
        }

        xval.push(round(endX, 5))
        yval.push(round(endY, 5))

        return { xval, yval, aval, otherInfo };
    } catch (e) {
        alert("f(x,y) is not a valid function")
        return {}
    }
}

export default HeunMethod;