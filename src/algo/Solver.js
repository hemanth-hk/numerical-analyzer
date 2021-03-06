import { evaluate, round } from 'mathjs'

function Solver(xArray, analyticalFunction) {
    let yArray = []
    if (!analyticalFunction) return [];
    try {
        xArray.forEach(xPoint => {
            yArray.push(round(evaluate(analyticalFunction, { x: xPoint }), 4))
        });
    } catch (e) {
        alert("Not a valid optional function")
        return []
    }

    if (yArray) {
        return yArray
    } else {
        return []
    }
}

export default Solver;