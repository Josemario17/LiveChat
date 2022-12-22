/* Here has the code for chat realtime  */
/***************************************/


/* Set variables */
let op = document.getElementById("mini-OP")
let Other = document.getElementById("extraSection")
let callSerach = document.querySelectorAll("#btn-to-call-sr")
let mBoxSearch = document.querySelectorAll("#md-box")
let btnG = document.querySelectorAll("#btn-group-md")
let mark = document.querySelectorAll("#btn-mark")
let arq = document.querySelectorAll("#btn-arquive")
let LatestMessage = document.querySelectorAll("#message-latest")
let TheLMessage = document.querySelectorAll("#msgItem")
let inputBox = document.getElementById("msg-inpt")
let btnInbox = document.getElementById("msg-btn")
let AlfaDivToInNewContent = document.getElementById("recive-now")
let number = document.getElementById("matches-number")
let inpImage = document.getElementById("for-images")
let inpAssets = document.getElementById("for-assets")
let reader


/* creating elements to insert after */
// let btnGeral = document.createElement("button")

/* show the input tips*/
op.addEventListener("click", function(){
        Other.style.display = "block"
        Other.addEventListener("mouseleave", function(){
            Other.style.display = "none"
        })
})

/* to show inpt search in left side */
if(callSerach.length == 1)
{
    let callNew = document.getElementById("btn-to-call-sr")
    callNew.addEventListener("click", function()
    {
        if(mBoxSearch.length == 1)
        {
            let mBoxNew = document.getElementById("md-box")
            if(mBoxNew.style.display == "" || mBoxNew.style.display == "none")
            {
                mBoxNew.style.display = "block"
            }
            
            else{
                mBoxNew.style.display = "none"
                let lookingForReslt = document.querySelectorAll(".looking-for-result")
                lookingForReslt[0].style.display = "none"
            }
        }

        
    })
}


/* searching words or number by inpt search */
function goAndTake()
{
    //recive first
    let lookingForReslt = document.querySelectorAll(".looking-for-result")
    areSearch = document.getElementById("inptforGo")
    lookingForReslt[0].style.display = "grid"

    let valors = new Array
    valors = areSearch.value
    let count = 0
    let ar
    var regex = new RegExp(valors);

    //looking for how many messages has with that value
    if(valors == "")
    {
        count = 0
    }
    else
    {
        for(let i = 0; i<LatestMessage.length; i++)
        {
            ar = LatestMessage[i].textContent          
                count = ar.match(regex).length
        }
    }
    number.textContent = "" + count
}


/* for check the btn in the btnGroup */
btnG[0].addEventListener("click", function()
{
    let elementos = document.querySelectorAll("#btn-group-md")
    for(let i=0; i<elementos.length; i++)
    {
        elementos[i].className = "" 
    }

    let div = document.querySelectorAll("#cff")   
    for(let ii=0; ii<div.length; ii++)
        {
            div[ii].style.display = "none"
        }
    div[0].style.display = "block"
    btnG[0].className = "actived"
})



btnG[1].addEventListener("click", function()
{
    let elementos = document.querySelectorAll("#btn-group-md")
    for(let i=0; i<elementos.length; i++)
    {
        elementos[i].className = ""
    }

    let div = document.querySelectorAll("#cff")   
    for(let ii=0; ii<div.length; ii++)
        {
            div[ii].style.display = "none"
        }
    div[1].style.display = "block"
    btnG[1].className = "actived"
})



btnG[2].addEventListener("click", function()
{
    let elementos = document.querySelectorAll("#btn-group-md")
    for(let i=0; i<elementos.length; i++)
    {
        elementos[i].className = ""
    }
    let div = document.querySelectorAll("#cff")   
    for(let ii=0; ii<div.length; ii++)
        {
            div[ii].style.display = "none"
        }
    div[2].style.display = "block"
    btnG[2].className = "actived"
})



/* Function inner chat area */
var DadArq = arq[0].parentNode
var BigDad = DadArq.parentNode
var theText = BigDad.children[0].textContent

var DadArq2 = arq[1].parentNode
var BigDad2 = DadArq2.parentNode
var theText2 = BigDad2.children[0].textContent

function addText(messageText, btn)
 {
    let cff = document.querySelectorAll("#cff")
    let elementDad = cff[1].children[1]
    if(elementDad.children.length > 1)
    {
        alert("tem mais de um")
    }

    else
    {   
        btn.className = "btn-md-actived"
        let elementDadFilho = elementDad.children[0]
        let TextDad = elementDadFilho.children[1]
        let spanText = TextDad.children[1]
        spanText.textContent = messageText
    }
}


var mDad = mark[0].parentNode
var mBigDad = mDad.parentNode
var mThetext = mBigDad.children[0]
var mtext = mThetext.textContent

var mDad2 = mark[1].parentNode
var mBigDad2 = mDad2.parentNode
var mThetext2 = mBigDad2.children[0]
var mtext2 = mThetext2.textContent

function addText2(messageText, btn)
 {
    let cff = document.querySelectorAll("#cff")
    let elementDad = cff[2].children[1]
    if(elementDad.children.length > 1)
    {
        alert("tem mais de um")
    }

    else
    {   
        btn.className = "btn-md-actived"
        let elementDadFilho = elementDad.children[0]
        let TextDad = elementDadFilho.children[1]
        let spanText = TextDad.children[1]
        spanText.textContent = messageText
    }
}
 
//configurar o btn para quando clicado, limpar tudo
btnInbox.onclick = function(){verify()}

function verify()
{
    if(inputBox.value == "")
    {
        inputBox.focus()
        inputBox.style.border = "1px solid red"
    }


    else{
        inputBox.style.border = "1px solid #7c637c"
        let text = inputBox.value
        CreatAreaMessage(text)
        inputBox.value = ""
    }
}

function CreatAreaMessage(messageText)
{
   try {
     //creating the new elements
     let div = document.createElement("div")
     let SpanMsg = document.createElement("span")
     let divMsOption = document.createElement("div")
     let divMoptions_H = document.createElement("div")
     //elements to the footer area 
     let span1 = document.createElement("span")
     let span2 = document.createElement("span")
     let icon = document.createElement("i")
 
     //giving attributes on elements
     div.className = "rn-Stage"
     SpanMsg.id = "msgItem"
     SpanMsg.textContent = "" + messageText
     divMsOption.id = "msgOptions-recive"
     divMsOption.className = "msgOptions"
     span1.id = "time"
     span1.textContent = "há minutos"
     span2.id = "read-unread"
     icon.className = "fa-solid fa-check-double"
 
     //add to the document
     AlfaDivToInNewContent.appendChild(div)
     div.appendChild(SpanMsg)
     div.appendChild(divMsOption)
     div.appendChild(divMoptions_H)
     divMsOption.appendChild(span1)
     divMsOption.appendChild(span2)
     span2.appendChild(icon)
 
     
     for(let i=0; i<LatestMessage.length-2; i++)
     {
         LatestMessage[i].textContent = messageText; 
 
     }
   } catch (error) {
        alert("erro de Envio, tente novamente")
   }
}


//input File To tip Image

function ImageVlue()
{
    let reader = new FileReader()
    if(inpImage.value == "")
    {
        //nothing yet
    }

    else
    {

        let reader = new FileReader();
        reader.readAsDataURL(inpImage.files[0]);
        reader.onload = () => {
            goToAfix(reader.result)
        }
    }
       
}

function goToAfix (imagesource){
    try {
        //creating the new elements
        let div = document.createElement("div")
        let SpanMsg = document.createElement("span")
        let imgMsg = document.createElement("img")
        let divMsOption = document.createElement("div")
        let divMoptions_H = document.createElement("div")
        //elements to the footer area 
        let span1 = document.createElement("span")
        let span2 = document.createElement("span")
        let icon = document.createElement("i")
    
        //giving attributes on elements
        div.className = "rn-Stage"
        imgMsg.id = "msgImage"
        SpanMsg.id = "msgItem2"
        imgMsg.setAttribute("src",imagesource);
        divMsOption.id = "msgOptions-recive"
        divMsOption.className = "msgOptions"
        span1.id = "time"
        span1.textContent = "há minutos"
        span2.id = "read-unread"
        icon.className = "fa-solid fa-check-double"
    
        //add to the document
        AlfaDivToInNewContent.appendChild(div)
        div.appendChild(SpanMsg)
        SpanMsg.appendChild(imgMsg)
        div.appendChild(divMsOption)
        div.appendChild(divMoptions_H)
        divMsOption.appendChild(span1)
        divMsOption.appendChild(span2)
        span2.appendChild(icon)
    
        
        for(let i=0; i<LatestMessage.length-2; i++)
        {
            LatestMessage[i].textContent = "imageSend"; 
    
        }
      } catch (error) {
           alert("erro de Envio, tente novamente")
      } 
      
}

function ficheiroVlue()
{
    
    let reader = new FileReader()
    if(inpAssets.value == "")
    {
        //nothing yet
    }

    else
    {

    }
}


function widthControler()
{
    var x = window.matchMedia("(max-width: 900px)")
    if (x.matches) { 
   while(x.matches)
   {
    alert("A area do chat apenas funciona em dispostivos com telas maiores que 900px")
   }  
} else {
  }
  setInterval(function(){widthControler()}, 5000)
}


widthControler()