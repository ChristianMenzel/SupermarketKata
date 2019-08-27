// https://www.codewars.com/kata/the-supermarket-queue
var _ = require('underscore')

console.log(queueTime([5,3,4], 1))
console.log(queueTime([10,2,3,3], 2))
console.log(queueTime([2,3,10], 2))

function queueTime(queue, tills){
	let singleQueues = new Array()
	for (i = 0; i < tills; i++ ){ singleQueues[i] = 0}
	while (queue.length > 0){
		// which singleQueue is shortest?
		var maxKey = _.min(Object.keys(singleQueues),function(o){return singleQueues[o]})
		singleQueues[maxKey] += queue.shift()
	}
	return _.max(singleQueues)
}
