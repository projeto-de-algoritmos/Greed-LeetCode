/**
 * @param {number[][]} courses
 * @return {number}
 */
var scheduleCourse = function(courses) {
    courses.sort((a,b) => a[1] - b[1])
    let days = 0, made = 0, greater = 0

    for(let i = 0; i< courses.length; i++) {
        if(courses[i][0] + days <= courses[i][1]) {
            days += courses[i][0]
            made++
        } else {
            greater = i
            for(let j = 0; j < i; j++){
                if(courses[j][0] > courses[greater][0]) greater = j
            }
            if(courses[greater][0] > courses[i][0]) days += courses[i][0] - courses[greater][0]
            courses[greater][0] = 0
        }
    }


    console.log(made)
};

scheduleCourse(
    [[5,5],[4,6],[2,6]]
)

// [[1,2]]
// [[3,2],[4,3]]
// [[100,200],[200,1300],[1000,1250],[2000,3200]]