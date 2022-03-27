

document.getElementById("backgroundBtn1").addEventListener("click",function() {
    console.log("button clicked")
    document.getElementById("cardTitel1").style.color="red"
    /* document.getElementById("pastaTitel").style.fontSize="12px" */
    /*document.getElementById("backgroundColor").style.backgroundColor="red" */
} )

document.getElementById("closeModal").addEventListener("click",function() {
    console.log("button clicked")
    document.getElementById("pastaTitel").style.display="none"

} )
function imgClickChange() {
 if (document.getElementById("fox1").src == "iceland-g95b1620b9_1920.jpg") 
{
    document.getElementById("fox1").src = "iceland-g95b1620b9_1920.jpg";
  }
else 
{
     document.getElementById("fox1").src = "howling-red-OU2vFQCwCD0-unsplash.jpg";
 }
}
/*
function imgClickChange() {
    if (document.getElementById("fox1").src == "howling-red-OU2vFQCwCD0-unsplash.jpg") 
   {
       document.getElementById("fox1").src = "howling-red-OU2vFQCwCD0-unsplash.jpg";
     }
   else 
   {
        document.getElementById("fox1").src = "iceland-g95b1620b9_1920.jpg";
    }
   }
*/


function Test1Function() {
    var A = document.getElementById("videoFrame");
    A.style.display = "none";}

function Test2Function() {
    var B = document.getElementById("videoFrame");
    B.style.display = "block";}