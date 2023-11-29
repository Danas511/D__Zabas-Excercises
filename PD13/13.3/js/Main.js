let n1 = [2, -2, 4]
let lowest_num = 999
let middle_num = 999
let highest_num = 999
for(let i = 0; i < n1.length; i += 1){if(lowest_num > n1[i]){lowest_num = n1[i]}}
for(let i = 0; i < n1.length; i += 1){if(middle_num > n1[i] && n1[i] != lowest_num ){middle_num = n1[i]}}
for(let i = 0; i < n1.length; i += 1){if(n1[i] > middle_num){highest_num = n1[i]}}
console.log(lowest_num, middle_num, highest_num)