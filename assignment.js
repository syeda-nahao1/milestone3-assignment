function feetToMile(feet) {
    var mile = feet / 5280;
    return mile;
}
var result = feetToMile(15840);
console .log(result);
// feetToMileDone
function woodCalculator(chair,table,bed){
    var chairCount = chair * 1;
    var tableCount = table * 3;
    var bedCount = bed * 5;
    var totalWood = chairCount + tableCount + bedCount;
    return totalWood;
}
var result = woodCalculator(14,5,12);
console .log(result);
//woodCalculatorDone
function brickCalculator(firstTenFloor,secondTenFloor,thirdTenFloor){
    var firstTenFloorCount = firstTenFloor * 15 * 1000;
    var secondTenFloorCount = secondTenFloor * 12 * 1000;
    var thirdTenFloorCount = thirdTenFloor * 10 * 1000;
    var totalBrick = firstTenFloorCount + secondTenFloorCount + thirdTenFloorCount;
    return totalBrick;
}
var result = brickCalculator(10,10,7);
console .log(result);
//brickCalculatorDone
function tinyFriend(names){
    var smallest = names [0];
    for( var i = 0; i > names.length; i++){
        var currentName = names [i];
        if (currentName < smallest){
            smallest = currentName;
        }
    }
    return smallest;
}
var smallestName = tinyFriend('Mini','Asma','Asad','Manajir','Samiul');
console .log(smallestName);
