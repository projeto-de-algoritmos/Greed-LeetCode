class MyPriorityQueue {

    constructor(size) {
      this.pq = Array(size)
      this.qtd = 0
    }
  
    exch(a,b) {
      let c = this.pq[a]; 
      this.pq[a] = this.pq[b] ; 
      this.pq[b] = c
    }
  
    insert(item) {
      this.pq[++this.qtd] = item;
      this.fixUp()
    }
  
    fixUp() {
  
      let k = this.qtd 
  
      while(k>1 && this.pq[Math.floor(k/2)][1] > this.pq[k][1]) {
        this.exch(k,Math.floor(k/2))
        k = Math.floor(k/2)
      }
    }
  
    fixDown() {
      
      let j, k = 1
  
      while(k*2<= this.qtd-1) {
        j = k*2;
        if(j < this.qtd - 1 && this.pq[j][1] > this.pq[j+1][1]) j++;
        if(this.pq[j][1] > this.pq[k][1]) break
        this.exch(k,j)
  
        k = j
      }
    }
  
    pqDelMin() {
      this.exch(1,this.qtd)
      this.fixDown()
      return this.pq[this.qtd--]
    }
    
    viewRoot() {
        return this.pq[1]
    }

    isEmpty() {
      return this.qtd == 0
    }
  
}

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minGroups = function(intervals) {
    intervals.sort((a,b) => a[0] - b[0])
    const pq = new MyPriorityQueue(intervals.length)
    
    pq.insert(intervals[0])
    let groups = 1

    for(let i = 1; i< intervals.length; i++){

        if(intervals[i][0] > pq.viewRoot()[1]){
            pq.pqDelMin()
            pq.insert(intervals[i])
        } else {
            groups++
            pq.insert(intervals[i])
        }
    }

    return groups
};

minGroups(
    [[5,10],[6,8],[1,5],[2,3],[1,10]]
)


// casos de teste
// [[5,10],[6,8],[1,5],[2,3],[1,10]]
// [[1,3],[5,6],[8,10],[11,13]]