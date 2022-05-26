const recettePreview = document.querySelectorAll(".recettePreview");
let myId = 0; //défini une valeur id

recettePreview.forEach(rec=>{   //Boucle dans les previews
    console.log("loop2");
    rec.setAttribute("ID",myId ) //ajoute l'attribut ID a chaque élément
    window["bAppear"+myId] = false; //creation de boulean avec ID
    myId++;
    rec.addEventListener("click",function handleClick(event) {
        let currentID = rec.getAttribute("ID");//récupere l'id de l'element
        if (window["bAppear"+currentID] === false){
            rec.classList.add("displayRecette");
            let test = rec.lastElementChild; //recupère le dernier enfant de displayRecette
            rec.lastElementChild.classList.remove("recetteFull"); //enlevement de la classe cachant le texte
            window["bAppear"+currentID] = true; //défini la boulean spécifique sur true
        }else{
            rec.classList.remove("displayRecette"); //enlevement de l'affichage complet
            rec.lastElementChild.classList.add("recetteFull"); //recacher le texte
            window["bAppear"+currentID] = false;
}})});


//ZoneBoutonBurger
const btnBurger = document.querySelector(".hamburger");
const btnBlock = document.querySelector(".buttonBlock");
let burgerOpen = false;

btnBurger.addEventListener("click",function handleClick(event){
    if (burgerOpen === false){
        btnBlock.style.display = "flex";
        burgerOpen = true;
    }else{
        btnBlock.style.display = "none";
        burgerOpen = false;
    }
});

//correction d'affichage du menu en cas d'utilisation du burger
const smallDevice = window.matchMedia("(min-width: 700px)");
smallDevice.addEventListener("change",handleDeviceChange);

function handleDeviceChange(e) {
  if (e.matches){ 
      btnBlock.style.display = "flex";
      burgerOpen = true;
    }else{
      btnBlock.style.display = "none";
      burgerOpen = false;
    }
}

// Run it initially
handleDeviceChange(smallDevice);