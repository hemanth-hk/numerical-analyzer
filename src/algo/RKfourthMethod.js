import { evaluate, round } from 'mathjs'


function RKfourthMethod(fxy, h, lowerLimit, upperLimit, initialValue) {
    try {
        let count = Math.round((upperLimit - lowerLimit) / h)
        let endX = lowerLimit;
        let endY = initialValue;
        let beforeX = 0,
            beforeY = 0,
            m1 = 0,
            m2 = 0,
            m3 = 0,
            m4 = 0,
            i;
        let xval = []
        let yval = []
        let aval = []
        let otherInfo = {
            name: "Ralston Method",
            formula: "y<sub>i+1</sub> = y<sub>i</sub> + (h/3)*(m<sub>1</sub> + 2m<sub>2</sub>) i.e y<sub>i+1</sub> = y<sub>i</sub> + A",
            localError: `O(h<sup>5</sup>) = O(${round(h*h*h*h*h,4)})`,
            globalError: `O(h<sup>4</sup>) = O(${round(h*h*h*h,4)})`,
            substitute: "Where:  <br>m<sub>1</sub> = f(x<sub>i</sub> , y<sub>i</sub>) <br>m<sub>2</sub> = f(x<sub>i</sub> + h/2 , y<sub>i</sub>+m<sub>1</sub>*h/2 ) <br> m<sub>3</sub> = f(x<sub>i</sub> + h/2 , y<sub>i</sub>+m<sub>2</sub>*h/2 ) <br> m<sub>4</sub> = f(x<sub>i</sub> + h , y<sub>i</sub>+m<sub>3</sub>*h )"
        }

        for (i = 1; i <= count; i++) {
            beforeX = endX
            beforeY = endY

            xval.push(round(beforeX, 5))
            yval.push(round(beforeY, 5))

            m1 = evaluate(fxy, { x: beforeX, y: beforeY })
            m2 = evaluate(fxy, { x: (beforeX + (h / 2)), y: (beforeY + m1 * (h / 2)) })
            m3 = evaluate(fxy, { x: (beforeX + (h / 2)), y: (beforeY + m2 * (h / 2)) })
            m4 = evaluate(fxy, { x: (beforeX + h), y: (beforeY + m3 * h) })

            endX = beforeX + h
            endY = beforeY + (m1 + 2 * m2 + 2 * m3 + m4) * (h / 6)

            aval.push(round(((m1 + 2 * m2 + 2 * m3 + m4) * (h / 6)), 5))
        }

        xval.push(round(endX, 5))
        yval.push(round(endY, 5))

        return { xval, yval, aval, otherInfo };
    } catch (e) {
        alert("f(x,y) is not a valid function")
        return {}
    }
}

export default RKfourthMethod;