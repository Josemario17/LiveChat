/* Os scripts da Página */

/* Efeitos de ROlagem */
let sPef = document.getElementById("super-effects")
let nav = document.getElementById("background-otions")
let btClose = document.getElementById("btn-to-close")
let bd = document.getElementById("root")
let shDow = document.querySelectorAll("#shadow")[0]
let btnToUp = document.querySelectorAll("#btn-to-up")[0]
let fProfile = document.querySelectorAll("#f-profile")[0]
let fCover = document.querySelectorAll("#f-cover")[0]
let QuitClose = document.getElementById("QuitClose")
let btnDate = document.querySelectorAll("#addTIme")[0]
 
let c = 0

function roll()
    {
        if(c==0)
        {        
            sPef.href = "assets/css/scroll.css"
            c = 2
        }
    }

    // chamada da nav direita
    let bTchamada = document.getElementById("btn")
    bTchamada.addEventListener("click", function()
    {
        nav.style.display = "grid"
        bd.style.backgroundColor = "gray"
        bd.style.cursor = "none"
        nav.style.cursor = "auto"
    })

    btClose.addEventListener("click", function()
    {
        nav.style.display = "none"
        bd.style.backgroundColor = "aliceblue"
        bd.style.cursor = "auto"
        nav.style.cursor = "auto"
        
    })

function openHide(In){
         let col = document.querySelectorAll("#collapse")
        if(col[In].style.display == "" || col[In].style.display == "none")
        { 
            for(let i=0; i<col.length; i++)
            {
                col[i].style.display = "none"
            }
            col[In].style.display = "block"  
           
        }

        else
        {
            col[In].style.display = "none"
        }
    }



function change(){
    let reader = new FileReader();
    reader.readAsDataURL(fProfile.files[0]);
    reader.onload = () => {
        let profilePhoto = document.querySelectorAll("#profile-photo")
        for(let i =0; i<profilePhoto.length; i++)
        {
            profilePhoto[i].setAttribute("src", reader.result);
        }
        
    }
}



function CoverNew(){
    let reader = new FileReader();
    reader.readAsDataURL(fCover.files[0]);
    reader.onload = () => {
        let profilePhoto = document.getElementById("coverPhoto")
        profilePhoto.style.backgroundImage = "url(" + reader.result + ")"
    }
}


function pub()
{
    document.getElementById("popUpPost").style.display = "grid"
    let toAfterHide = document.getElementById("to-after-hide")
    toAfterHide.children[0].style.display = "block"
    toAfterHide.children[1].style.display = "block"
    toAfterHide.children[2].style.display = "none"
    toAfterHide.style.justifyContent= "unset"
}
function closePOPUP()
{
    document.getElementById("popUpPost").style.display = "none"
}

function aplydata(){
    const data = new Date()
    btnDate.textContent = "" + data.getDate() + " - " + (data.getMonth()+1) + " - " + data.getFullYear()
}

btnToUp.onclick = function(){
    let xl = document.querySelectorAll(".xl-nav")[0]
    xl.scrollIntoView();
}

