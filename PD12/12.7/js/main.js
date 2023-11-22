let runner_times = [22,20,25,25]
let runner_total = 0
let top_speed = runner_times[0]
for (let i=0;i < runner_times.length; i += 1) {runner_total += runner_times[i]; if(top_speed > runner_times[i]){top_speed = runner_times[i]} }
let average_time = runner_total / runner_times.length
console.log("fastest runner finished in "+top_speed+"s "+(average_time-top_speed)+"s faster than avarage")