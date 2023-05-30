/**
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function(cost) {
    cost.sort((a,b) => b - a)
    let sum = 0, isThird = 0
    cost.forEach(candy => {
        isThird = ++isThird%3
        sum += isThird != 0 ? candy : 0
    });

    console.log(sum)
};

minimumCost(
    [6,5,7,9,2,2]
)