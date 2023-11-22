let lenght = 4
let height = 3
let cost_per_brick = 0.5
let brick_height = 0.1
let brick_lenght = 0.2
let bricks_needed = ((height / brick_height) * (lenght / brick_lenght))
let total_brick_cost = bricks_needed * cost_per_brick
console.log("it will take a total of " + bricks_needed + " bricks. and it will cost " + total_brick_cost  )