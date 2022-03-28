

document.getElementById("backgroundBtn1").addEventListener("click",function() {
    console.log("button clicked")
    document.getElementById("cardTitel1").style.color="red"
    /* document.getElementById("pastaTitel").style.fontSize="12px" */
    /*document.getElementById("backgroundColor").style.backgroundColor="red" */
} )

document.getElementById("backgroundBtn3").addEventListener("click",function() {
    console.log("clicking the button")
    console.log(document.getElementById("fox1").src)
    if (document.getElementById("fox1").src == "http://127.0.0.1:5500/iceland-g95b1620b9_1920.jpg") 
    {
        console.log("images are the same")
        document.getElementById("fox1").src = "http://127.0.0.1:5500/howling-red-OU2vFQCwCD0-unsplash.jpg";
      }
    else 
    {
        console.log("images are different")
         document.getElementById("fox1").src = "http://127.0.0.1:5500/iceland-g95b1620b9_1920.jpg";
     }
} )




function Test1Function() {
    var A = document.getElementById("videoFrame");
    A.style.display = "none";}

function Test2Function() {
    var B = document.getElementById("videoFrame");
    B.style.display = "block";}