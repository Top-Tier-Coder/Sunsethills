document.getElementById("btnSH").addEventListener("click", SunsetHills);
document.getElementById("btnClear").addEventListener("click", Clear);
function SunsetHills(){


    let bldg1 = parseInt(document.getElementById("input1").value);
    let bldg2 = parseInt(document.getElementById("input2").value);
    let bldg3 = parseInt(document.getElementById("input3").value);
    let bldg4 = parseInt(document.getElementById("input4").value);
    let bldg5 = parseInt(document.getElementById("input5").value);
    let bldg6 = parseInt(document.getElementById("input6").value);

    let bldgArray = [bldg1, bldg2, bldg3, bldg4, bldg5, bldg6];
    let viewers = [];
    let count = 1;
    let maxHeight = bldgArray[0];
    viewers.push(maxHeight);

        for (let i = 0; i < bldgArray.length; i++) {

            if (bldgArray[i] > maxHeight) {
                count++;
                viewers.push(bldgArray[i]) ;
                maxHeight = bldgArray[i];
            }
            document.getElementById("output").innerHTML = `${count} buildings can see the sun. These include buildings: [${viewers.join()}]`;
        }
    }