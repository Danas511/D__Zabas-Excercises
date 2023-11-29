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