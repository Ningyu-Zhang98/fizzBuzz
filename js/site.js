//Get the values from the user
function getValues(){
    fNum = document.getElementById("firstNumber").value;
    sNum = document.getElementById("secondNumber").value;
    fNum = parseInt(fNum)
    sNum = parseInt(sNum)
    //Generate all of the numbers or FizzBuzz
    if (Number.isInteger(fNum) && Number.isInteger(sNum)) {
        let generatedList = generateNumbers(fNum, sNum)
        //Display the results 
        displayNumbers(generatedList)   
    }
    else {
        alert("You must enter an Integer")
    }
    
}
//Generate all of the numbers
function generateNumbers(n1, n2){
    let res = []
    for (let num = 1; num <= 100; num++) {
        if (num % n1 == 0 && num%n2 == 0){
            res.push('FizzBuzz')
        }
        else if (num%n1 == 0) {
            res.push('Fizz')
        }
        else if (num%n2==0) {
            res.push('Buzz')
        }
        else {
            res.push(num)
        }   
        
    }
    return res
}
//Display all of the numbers
function displayNumbers(numList) {

    let tableBody = document.getElementById("results");
    let templateRow = document.getElementById("tmpResults")
    tableBody.innerHTML = ""
    for (let i = 0; i < numList.length; i+=5) {
        let tableRow =  document.importNode(templateRow.content, true);
        let rowCols = tableRow.querySelectorAll("td");

        rowCols[0].classList.add(numList[i])
        rowCols[0].textContent = numList[i]

        rowCols[1].classList.add(numList[i+1])
        rowCols[1].textContent = numList[i+1]

        rowCols[2].classList.add(numList[i+2])
        rowCols[2].textContent = numList[i+2]

        rowCols[3].classList.add(numList[i+3])
        rowCols[3].textContent = numList[i+3]

        rowCols[4].classList.add(numList[i+4])
        rowCols[4].textContent = numList[i+4]

        tableBody.appendChild(tableRow)
    }
}