import { evaluate, round } from 'mathjs'


function RalstonMethod(fxy, h, lowerLimit, upperLimit, initialValue) {
    try {
        let count = Math.round((upperLimit - lowerLimit) / h)
        let endX = lowerLimit;
        let endY = initialValue;
        let beforeX = 0,
            beforeY = 0,
            m1 = 0,
            m2 = 0,
            i;
        let xval = []
        let yval = []
        let aval = []
        let otherInfo = {
            name: "Ralston Method",
            formula: "y<sub>i+1</sub> = y<sub>i</sub> + (h/3)*(m<sub>1</sub> + 2m<sub>2</sub>) i.e y<sub>i+1</sub> = y<sub>i</sub> + A",
            localError: `O(h<sup>3</sup>) = O(${round(h*h*h,4)})`,
            globalError: `O(h<sup>2</sup>) = O(${round(h*h,4)})`,
            substitute: "Where: <br>m<sub>1</sub> = f(x<sub>i</sub> , y<sub>i</sub>) <br> m<sub>2</sub> = f(x<sub>i</sub> + 3h/4 , y<sub>i</sub>+m<sub>1</sub>*3h/4)"
        }

        for (i = 1; i <= count; i++) {
            beforeX = endX
            beforeY = endY

            xval.push(round(beforeX, 5))
            yval.push(round(beforeY, 5))

            m1 = evaluate(fxy, { x: beforeX, y: beforeY })
            m2 = evaluate(fxy, { x: (beforeX + (3 * h / 4)), y: (beforeY + m1 * (3 * h / 4)) })

            endX = beforeX + h
            endY = beforeY + (m1 + 2 * m2) * (h / 3)

            aval.push(round(((m1 + 2 * m2) * (h / 3)), 5))
        }

        xval.push(round(endX, 5))
        yval.push(round(endY, 5))

        return { xval, yval, aval, otherInfo };
    } catch (e) {
        alert("f(x,y) is not a valid function")
        return {}
    }
}

export default RalstonMethod;