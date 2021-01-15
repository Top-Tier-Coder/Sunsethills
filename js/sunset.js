document.getElementById("btnSH").addEventListener("click", SunsetHills);
document.getElementById("btnClear").addEventListener("click", Clear);
function SunsetHills(){
    //Step 1: Get all the user data
    let bldg1 = parseInt(document.getElementById("input1").value);
    let bldg2 = parseInt(document.getElementById("input2").value);
    let bldg3 = parseInt(document.getElementById("input3").value);
    let bldg4 = parseInt(document.getElementById("input4").value);
    let bldg5 = parseInt(document.getElementById("input5").value);
    let bldg6 = parseInt(document.getElementById("input6").value);
    //Step 2: Turn the user data into an array
    let bldgArray = new Array();
    bldgArray.push(bldg1);
    bldgArray.push(bldg2);
    bldgArray.push(bldg3);
    bldgArray.push(bldg4);
    bldgArray.push(bldg5);
    bldgArray.push(bldg6);

    //Step 3: Create a new array who's job it is to record ascending numbers
    //By default the first number will be the max number
    let maxHeight = bldgArray[0];
    let viewers = new Array();
    viewers.push(maxHeight);
    //Step 4: Cycle through the array and always add the largest numbers
    // If and only if the current number is larger than the largest previous number will I add it to the ascendingArray array
    for(let loop=1; loop < bldgArray.length; loop++){
        if(bldgArray[loop] > maxHeight ){
            maxHeight = bldgArray[loop]
            viewers.push(maxHeight);
        }
    }
    //Step 5: Output results to the user
    // Output to id="output" innerText or innerHTML
    document.getElementById("output").innerText = `The Ascending array is [${viewers.join(', ')}]`;
}
function Clear(){
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
    document.getElementById("input3").value = "";
    document.getElementById("input4").value = "";
    document.getElementById("input5").value = "";
    document.getElementById("input6").value = "";
    
}