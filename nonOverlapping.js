/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    intervals.sort((a,b) => a[0] - b[0])

    let overlap = 0, listIndex = 0
    for(let i = 1; i < intervals.length; i++) {

        //verifica se há overlap entre os horários 
        if(intervals[listIndex][1] > intervals[i][0]){
            overlap++

            //verifica qual dos intervalos deve ser ignorado
            listIndex = intervals[listIndex][1] < intervals[i][1] ? listIndex: i
        }else{

            //atualiza a posição do próximo intervalo a ser analisado
            listIndex = i
        }


    }

    console.log(overlap)
};

eraseOverlapIntervals(
    [[1,100],[11,22],[1,11],[2,12]]
)

// casos de teste
// [ [ 0, 2 ], [ 1, 3 ], [ 2, 4 ], [ 3, 5 ], [ 4, 6 ] ]
// [[1,100],[11,22],[1,11],[2,12]]
// [[-52,31],[-73,-26],[82,97],[-65,-11],[-62,-49],[95,99],[58,95],[-31,49],[66,98],[-63,2],[30,47],[-40,-26]]