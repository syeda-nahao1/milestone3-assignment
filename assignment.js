//--------feetToMile--------
function feetToMile(feet) {
    var mile = feet / 5280;
    return mile;
}
var result = feetToMile(15840);
console .log(result);


//--------woodCalculator------
function woodCalculator(chair,table,bed){
    var chairCount = chair * 1;
    var tableCount = table * 3;
    var bedCount = bed * 5;
    var totalWood = chairCount + tableCount + bedCount;
    return totalWood;
}
var result = woodCalculator(1,1,1);
console .log(result);



//------brickCalculator-------
function brickCalculator(floorCount){
    var bricks = 1000;
    var bricksNeeded = floorCount * bricks;
    if(floorCount < 0){
        return "You can't get result for negative input.It's absurd!";
    }
    else if(floorCount <= 10){
        var result1 = 15 * bricksNeeded;
        return result1;
    }
    else if(floorCount <= 20){
        var result2 = 150000 + (floorCount - 10) * 12 * bricks;
        return result2;
    }
    else{
        var result3 = 270000 + (floorCount - 20) * 10 * bricks;
        return result3;
    }
}
var output = brickCalculator(25);
console .log("Total number of bricks:", output);



//-----------tinyFriend------------------
function tinyFriend(names){
    var smallest = names [0];
    for( var i = 0; i < names.length; i++){
        if(names[i]==""){
            return 'there is a null value in the array';
        }
        else{
          var currentName = names [i];
          if (currentName.length <= smallest.length){
            smallest = currentName;
        }
        else{
            smallest = smallest;
        }
    }


}

    return smallest;
}
var names = ['Ayan','Asmany','Mini','Marjan','Badhon'];
var output = tinyFriend(names);
console .log(output);
