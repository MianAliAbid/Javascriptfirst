document.getElementById("btn1").onclick = function(){
    alert("Muhammad Ali")

    let fullname = "Muhammad Ali"
    console.log(fullname)

let statement = "alert(Muhammad Ali)"
document.getElementById("statement").innerHTML = statement;

document.getElementById("output").innerHTML = "";
}

    
document.getElementById("btn2").onclick = function(){
    alert("123")

    let fullname1 = "123"
    console.log(fullname1)

 let statement = "alert(123)"
document.getElementById("statement").innerHTML = statement;

document.getElementById("output").innerHTML = "123";
}


document.getElementById("btn3").onclick = function(){

document.getElementById("statement").innerHTML=""
document.getElementById("output").innerHTML= ""

let html = "<ul><li> A variable name can't contain any spaces. </li><li> A variable name can contain only letters, number, dollar signs, and underscores. </li><li> Thouhg a variable name can't be any of JavaScript's keywords, it can  contain keywords. For example, <code>userAlert</code> and <code>myVar</code> are legal. </li></ul>";
document.getElementById("output").innerHTML= html
    
}


document.getElementById("btn4").onclick = function(){

 document.getElementById("statement").innerHTML=""
 document.getElementById("output").innerHTML= ""

 let html1 = " <h3>Examples <ul><li> <code>user</code> </li><li> <code>userResponse</code> </li><li> <code>userResponseTime</code> </li><li> <code>userResponseTimeLimit</code> </li></ul> "
 document.getElementById("output").innerHTML= html1

}

document.getElementById("btn5").onclick = function(){

let num1 = 5
let num2 = 10
sum = num1 + num2


 document.getElementById("statement").innerHTML =
   "let num1=15<br> let num2=10 <br> sum=num1+num2"

 document.getElementById("output").innerHTML= sum

}


document.getElementById("btn6").onclick = function(){

    let num1 = 15
    let num2 = 10
    subtract = num1 - num2
    
    
     document.getElementById("statement").innerHTML =
    "let num1=15<br> let num2=10 <br> subtract=num1-num2"
     document.getElementById("output").innerHTML= subtract
    
    }

    document.getElementById("btn7").onclick = function(){

        let num1 = 15
        let num2 = 10
        Mutliply = num1 * num2
        
        
         document.getElementById("statement").innerHTML =
        "let num1=15<br> let num2=10 <br>  Mutliply=num1*num2"
         document.getElementById("output").innerHTML=  Mutliply
        
        }

        document.getElementById("btn8").onclick = function(){

            let num1 = 100
            let num2 = 5
            Divide = num1 / num2
            
            
             document.getElementById("statement").innerHTML =
            "let num1=15<br> let num2=10 <br> divide=num1-num2"
             document.getElementById("output").innerHTML= divide
            
            }

            document.getElementById("btn9").onclick = function(){

                let somecalculation= 36/6*3+2**4-(3+5)
                
                
                 document.getElementById("statement").innerHTML =
                "let somecalculation= 36/6*3+2**4-(3+4)"
                 document.getElementById("output").innerHTML= somecalculation
                
                }
