import { evaluate, round } from 'mathjs'

function EFM(fxy, h, lowerLimit, upperLimit, initialValue) {
    try {
        let count = Math.round((upperLimit - lowerLimit) / h)
        let endX = lowerLimit;
        let endY = initialValue;
        let beforeX = 0,
            beforeY = 0,
            i;
        let xval = []
        let yval = []
        let fval = []
        let otherInfo = {
            name: "Euler's Forward Method",
            formula: "y<sub>i+1</sub> = y<sub>i</sub> + h*f(x<sub>i</sub>,y<sub>i</sub>)",
            localError: `O(h<sup>2</sup>) = O(${round(h*h,4)})`,
            globalError: `O(h) = O(${round(h,4)})`
        }

        for (i = 1; i <= count; i++) {
            beforeX = endX
            beforeY = endY

            xval.push(round(beforeX, 4))
            yval.push(round(beforeY, 4))

            endX = beforeX + h
            endY = beforeY + h * evaluate(fxy, { x: beforeX, y: beforeY })

            fval.push(round(evaluate(fxy, { x: beforeX, y: beforeY }), 4))
        }

        xval.push(round(endX, 4))
        yval.push(round(endY, 4))

        return { xval, yval, fval, otherInfo };
    } catch (e) {
        alert("f(x,y) is not a valid function")
        return {}
    }
}

export default EFM;