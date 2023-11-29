let steps_forward = 5
let steps_back = 3
let times = 3
let forward_distance = 50
let back_distance = 45
let time_taken = 5
let total_distance = ((steps_forward*forward_distance)-(steps_back*back_distance))*times
let speed2 = (((steps_forward*forward_distance)+(steps_back*back_distance))*times)/(time_taken* 100)
console.log("traveled a total distance of"+total_distance+"cm with a speed of"+speed2+"m/s")