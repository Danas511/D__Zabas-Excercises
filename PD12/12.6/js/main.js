let tree_heights = [167, 134, 145, 156, 155, 176]
let total_height = 0
for (let i = 0; i < tree_heights.length; i += 1) {total_height += tree_heights[i] }
let average_height = total_height / tree_heights.length
console.log("the average height is "+average_height+"cm" )