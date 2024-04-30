// const body =document.queryselector("body"),
//         sidebar=body.querySelector(".sidebar"),
//         toggle=body.querySelector(".toggle"),
//         modeSwitch=body.querySelector(".toggle-switch"),
//         modeText=body.querySelector(".mode-text");

//         toggle.addEventListener("click", () =>{
//             sidebar.classList.toggle("close");
//         });



//         modeSwitch.addEventListener("click", () =>{
//             body.classList.toggle("dark");
//         });
// const body = document.querySelector('body'),
//       sidebar = body.querySelector('nav'),
//       toggle = body.querySelector(".toggle"),
//       modeSwitch = body.querySelector(".toggle-switch"),
//       modeText = body.querySelector(".mode-text");


//     toggle.addEventListener("click" , () =>{
//         sidebar.classList.toggle("close");
//     })

//     modeSwitch.addEventListener("click" , () =>{
//         body.classList.toggle("dark");
        
//         if(body.classList.contains("dark")){
//             modeText.innerText = "Light mode";
//         }else{
//             modeText.innerText = "Dark mode";
            
//         }
//     });
const body = document.querySelector('body'),
      sidebar = body.querySelector('nav'),
      toggle = body.querySelector(".toggle");
      modeSwitch = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text");
     joincontent=body.querySelector("join-container");
      
      
     toggle.addEventListener("click" , () =>{
        sidebar.classList.toggle("close");
        joincontent.classList.toggle("close");
    })
    
    const theme=localStorage.getItem("theme") || "light" ;
    if(theme==="dark"){
      body.classList.toggle("dark");
    }
  
    modeSwitch.addEventListener("click" , () =>{
        body.classList.toggle("dark");
        

        if(body.classList.contains("dark")){
            modeText.innerText = "Light mode";
            localStorage.setItem("theme","dark");
        }else{
            modeText.innerText = "Dark mode";
            localStorage.setItem("theme","light");         
        }
    });



    /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

const menuBtn = document.querySelector(".menu-icon span");
          const searchBtn = document.querySelector(".search-icon");
          const cancelBtn = document.querySelector(".cancel-icon");
          const items = document.querySelector(".nav-items");
          const form = document.querySelector("form");

          menuBtn.onclick = ()=>{
            items.classList.add("active");
            menuBtn.classList.add("hide");
            searchBtn.classList.add("hide");
            cancelBtn.classList.add("show");
          }
          cancelBtn.onclick = ()=>{
            items.classList.remove("active");
            menuBtn.classList.remove("hide");
            searchBtn.classList.remove("hide");
            cancelBtn.classList.remove("show");
            form.classList.remove("active");
            cancelBtn.style.color = "#ff3d00";
          }
          searchBtn.onclick = ()=>{
            form.classList.add("active");
            searchBtn.classList.add("hide");
            cancelBtn.classList.add("show");
          }




          // const swiper = new swiper(".slide-content", {
          //   slidesPerView: 3,
          //   spaceBetween: 25,
          //   loop: true,
          //   centerSlide: 'true',
          //   fade: 'true',
          //   grabCursor: 'true',
          //   pagination: {
          //     el: ".swiper-pagination",
          //     clickable: true,
          //     dynamicBullets: true,
          //   },
          //   navigation: {
          //     nextEl: ".swiper-button-next",
          //     prevEl: ".swiper-button-prev",
          //   },
        
          //   breakpoints:{
          //       0: {
          //           slidesPerView: 1,
          //       },
          //       520: {
          //           slidesPerView: 2,
          //       },
          //       950: {
          //           slidesPerView: 3,
          //       },
          //   },
          // });





          let names = [
            "Surender kiryan store",
            "Shreyas Medical Store",
            "Arun Medical Store",
            "genricaushadhi ",
            "Ambika Medical Store",
            "Patanjali Store",
            "Arun medical Store",
            "Surrender Kiryana",
          ];
          //Sort names in ascending order
          let sortedNames = names.sort();
          
          //reference
          let input = document.getElementById("input");
          
          //Execute function on keyup
          input.addEventListener("keyup", (e) => {
            //loop through above array
            //Initially remove all elements ( so if user erases a letter or adds new letter then clean previous outputs)
            removeElements();
            for (let i of sortedNames) {
              //convert input to lowercase and compare with each string
          
              if (
                i.toLowerCase().startsWith(input.value.toLowerCase()) &&
                input.value != ""
              ) {
                //create li element
                let listItem = document.createElement("li");
                //One common class name
                listItem.classList.add("list-items");
                listItem.style.cursor = "pointer";
                listItem.setAttribute("onclick", "displayNames('" + i + "')");
                //Display matched part in bold
                let word = "<b>" + i.substr(0, input.value.length) + "</b>";
                word += i.substr(input.value.length);
                //display the value in array
                listItem.innerHTML = word;
                document.querySelector(".list").appendChild(listItem);
              }
            }
          });
          function displayNames(value) {
            input.value = value;
            removeElements();
          }
          function removeElements() {
            //clear all the item
            let items = document.querySelectorAll(".list-items");
            items.forEach((item) => {
              item.remove();
            });
          }