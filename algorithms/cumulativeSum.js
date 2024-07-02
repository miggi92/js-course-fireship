
// given an array of numbers, return an array of cumulative sum
const sum = [1,3,5,7]


function calcSum(arr) {
    return arr.reduce((accumulated, current) => {
        return accumulated + current
    })
}


console.log('sum:', calcSum(sum))