

let data2, user, privace, text, postBtn;
data2 = document.querySelectorAll("#addTIme")[0]
user = document.getElementById("userName")
privace = document.getElementById("select")
text = document.getElementById("textPost")
postBtn = document.getElementById("btnPost")
let num, privaceTip,dating = new Date, dataTip = "" + dating.getDate() + " - " + (dating.getMonth()+1) + " - " + dating.getFullYear();
let v = 0;
let fcs = document.getElementById("content-end")
let profPic = document.querySelectorAll("#profile-photo")[0]

function verifyContents()
{
    if(text.value == "")
    {
        text.style.border = "1px solid red"
        text.focus()
    }

    else
    {
        text.style.border = "1px solid rgb(66, 63, 63)";
        for(let i = 0; i<privace.length; i++)
        {
            if(i == privace.selectedIndex)
            {
                num = i;
            }
        }

        //for choose the private tipe
        switch (num) {
            case 1:
                privaceTip = "Amigos"
                break;
            case 2:
                privaceTip = "Apenas para mim"
                break;

            default:
                privaceTip = "Todos"
                break;
        }
        
        if(data2.textContent == dataTip)
        {
            dataTip;
        }

        else{
            dataTip = "day"
        }
        //aply loader first
            let toAfterHide = document.getElementById("to-after-hide")
            toAfterHide.children[0].style.display = "none"
            toAfterHide.children[1].style.display = "none"
            toAfterHide.children[2].style.display = "flex"
            toAfterHide.style.justifyContent= "center"
            setTimeout(function() { createPost(dataTip, user.textContent, privaceTip, text.value) }, 2000);        
    }

}

function createPost(postTime, user, priv, postText)
{
    document.getElementById("popUpPost").style.display = "none"
    text.value = ""
    try {
        
    v = v + 1
    //initialization for elements
    let sectionPost = document.getElementById("sectionPost")
    let postH, header, mainText, footerPost
    let profilePhoto, idfUserDad, idfUser, nameUser, privace, dataD, dataD2, textContent, btnStar, btnSave, btnShare;
    let icone1, icone2, icone3;
    //Creating new elements
    postH = document.createElement("div")
    header = document.createElement("div")
    mainText = document.createElement("div")
    footerPost = document.createElement("div")
    profilePhoto = document.createElement("img")
    idfUserDad = document.createElement("div")
    idfUser = document.createElement("div")
    nameUser = document.createElement("span")
    privace = document.createElement("span")
    dataD = document.createElement("div")
    dataD2 = document.createElement("span")
    textContent = document.createElement("p")
    btnSave = document.createElement("button")
    btnStar = document.createElement("button")
    btnShare = document.createElement("button")
    icone1 = document.createElement("i")
    icone2 = document.createElement("i")
    icone3 = document.createElement("i")

    //aply the attributes to all new elements
    postH.className = "post-h"
    header.className = "header"
    profilePhoto.id = "profile-photo"
    profilePhoto.alt = "profile-photo"
    profilePhoto.src = profPic.src
    idfUserDad.className = "idfUserDad"
    idfUser.className = "idfUser"
    nameUser.id = "nameUser"
    nameUser.textContent = "" + user
    privace.id = "privace"
    privace.textContent = "" + priv
    dataD.className = "data"
    dataD2.id = "data"
    dataD2.textContent = postTime 
    mainText.className = "mainText"
    textContent.id = "textContent"
    textContent.textContent = "" + postText
    footerPost.className = "footerPost"
    btnStar.id = "starGive"
    btnStar.onclick = function(){
    let oo = btnStar.children[0]
    if(oo.className != "fa-solid fa-star")
    {
        oo.className = "fa-solid fa-star"
    }

    else
    {
        oo.className = "fa-regular fa-star"
    }
    }
    btnSave.id = "SaveBtn"
    btnSave.onclick = function(){
        let oo = btnSave.children[0]
        if(oo.className != "fa-solid fa-bookmark")
        {
            oo.className = "fa-solid fa-bookmark"
        }
    
        else
        {
            oo.className = "fa-regular fa-bookmark"
        }}
    btnShare.id = "ShareBtn"
    icone1.className = "fa-regular fa-star"
    icone2.className = "fa-regular fa-bookmark"
    icone3.className = "fa-solid fa-share-from-square"
    fcs.scrollIntoView();

    //show all new elements    
    sectionPost.appendChild(postH)
    postH.appendChild(header)
    postH.appendChild(mainText)
    postH.appendChild(footerPost)

    header.appendChild(profilePhoto)
    header.appendChild(idfUserDad)

    idfUserDad.appendChild(idfUser)
    idfUserDad.appendChild(dataD)

    idfUser.appendChild(nameUser)
    idfUser.appendChild(privace)

    dataD.appendChild(dataD2)

    mainText.appendChild(textContent)
    footerPost.appendChild(btnStar)
    footerPost.appendChild(btnSave)
    footerPost.appendChild(btnShare)

    btnStar.appendChild(icone1)
    btnSave.appendChild(icone2)
    btnShare.appendChild(icone3)
    } catch (error) {
        
    }

}
