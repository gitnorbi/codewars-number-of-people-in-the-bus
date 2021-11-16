const number = function(busStops){
    let numberOfPeopleInTheBus=0;
    for (let i=0;i<busStops.length;i++){

        numberOfPeopleInTheBus+=busStops[i][0]-busStops[i][1];
    }
    console.log(numberOfPeopleInTheBus);
    document.getElementById("result").textContent=`${numberOfPeopleInTheBus} are still in the bus`;
    return numberOfPeopleInTheBus;
  }

  //example
  number([[10,0],[3,5],[5,8]]) // expected result 5;

  
  //number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]])// expected result is 17;
  //number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]])// expected result is 21;
  //number([[0,0]])// expected result is 0;