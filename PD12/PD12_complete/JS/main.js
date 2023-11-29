let week = [5, 6, 4, 5, 4]
let amount =  week[0] + week[1] + week[2] + week[3] + week[4]
let totaltime = amount * 45
console.log(amount+" per week taking a total of "+totaltime+" seconds")

let total_items = 7
let leftover_items = 7 % 3
let boxed_items = (total_items - leftover_items) / 3
console.log(boxed_items + " boxed. " + leftover_items + " leftover.")

let lenght = 4
let height = 3
let cost_per_brick = 0.5
let brick_height = 0.1
let brick_lenght = 0.2
let bricks_needed = ((height / brick_height) * (lenght / brick_lenght))
let total_brick_cost = bricks_needed * cost_per_brick
console.log("it will take a total of " + bricks_needed + " bricks. and it will cost " + total_brick_cost  )

let distance = 264
let speed = (60 * 1000) / (60 * 60)
let time = (distance / speed).toFixed(2)
console.log("it will take "+time+" seconds" )

let base_FISH = 5
let added_per_day = 3
let days = 3
let total_FISH = base_FISH + (added_per_day * days)
console.log("after "+days+" days there will be a total of " +total_FISH+" FISH")

let tree_heights = [167, 134, 145, 156, 155, 176]
let total_height = 0
for (let i = 0; i < tree_heights.length; i += 1) {total_height += tree_heights[i] }
let average_height = total_height / tree_heights.length
console.log("the average height is "+average_height+"cm" )

let runner_times = [22,20,25,25]
let runner_total = 0
let top_speed = runner_times[0]
for (let i=0;i < runner_times.length; i += 1) {runner_total += runner_times[i]; if(top_speed > runner_times[i]){top_speed = runner_times[i]} }
let average_time = runner_total / runner_times.length
console.log("fastest runner finished in "+top_speed+"s "+(average_time-top_speed)+"s faster than avarage")

let something = 112
let other_thing = 11
let days2 = (something / (other_thing*2))*1.5
days2 = Math.floor(days2)
console.log("it has "+days2+" days of fuel")
 
let bus1_passengers = 17
let bus1_traveltime = 110
let bus2_passengers = 25
let bus2_traveltime = 120
let total_capacity = bus1_passengers + bus2_passengers
let average_traveltime = (bus1_traveltime + bus2_traveltime) / 2
let low_passenger_busses = 0
if(bus1_passengers <= 10 ){low_passenger_busses += 1}
if(bus2_passengers <= 10 ){low_passenger_busses += 1}
console.log("total bus capacity is "+total_capacity+" passengers with an avarage traveltime of "+average_traveltime+" minutes and there are "+low_passenger_busses+" busses with less than 10 passengers")

let steps_forward = 5
let steps_back = 3
let times = 3
let forward_distance = 50
let back_distance = 45
let time_taken = 5
let total_distance = ((steps_forward*forward_distance)-(steps_back*back_distance))*times
let speed2 = (((steps_forward*forward_distance)+(steps_back*back_distance))*times)/(time_taken* 100)
console.log("traveled a total distance of"+total_distance+"cm with a speed of"+speed2+"m/s")

