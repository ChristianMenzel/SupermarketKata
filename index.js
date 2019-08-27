// https://www.codewars.com/kata/the-supermarket-queue
var _ = require('underscore')

console.log(queueTime([5,3,4], 1))
console.log(queueTime([10,2,3,3], 2))
console.log(queueTime([2,3,10], 2))

function queueTime(queue, tills){
	// queues for the tills
    let singleQueues = new Array()
	
    // init to them so can use _.min
    for (i = 0; i < tills; i++ ){ singleQueues[i] = 0}
    
    // as long as there is something in queue
	while (queue.length > 0){
        
		// which singleQueue is shortest?
		var maxKey = _.min(Object.keys(singleQueues),function(o){return singleQueues[o]})
        
        // add time from queue to shortest singleQueue
		singleQueues[maxKey] += queue.shift()
	}
    
	return _.max(singleQueues)
}
