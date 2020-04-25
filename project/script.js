var images = document.querySelectorAll("img");
var sticky = document.querySelector(".sticky-top")

for (i=1;i<images.length;i++){
    let modal = document.createElement("div");
    modal.class="modal";
    modal.style.display="none";
    modal.style.position= "fixed"; /* Stay in place */
    modal.style.zIndex="1"; /* Sit on top */
    modal.style.paddingTop="300px"; /* Location of the box */
    modal.style.left="0";
    modal.style.top="0";
    modal.style.width="100%"; /* Full width */
    modal.style.height="100%"; /* Full height */
    modal.style.overflow= "auto"; /* Enable scroll if needed */
    modal.style.backgroundColor= 'rgb(0,0,0)'; /* Fallback color */
    modal.style.backgroundColor= 'rgba(0,0,0,0.9)'; /* Black w/ opacity */

    let sp = document.createElement("span");
    sp.class="close";
    sp.textContent="X";
    sp.style.position= "absolute";
    sp.style.top= "250px";
    sp.style.right="100px";
    sp.style.color= "#f1f1f1";
    sp.style.fontSize= "40px";
    sp.style.fontWeight= "bold";
    sp.style.transition= "0.3s"
    sp.style.cursor= "pointer";
    console.log(sp);

    sp.onclick = function() { 
        modal.style.display = "none";
        sticky.class="sticky-top";
      }


    let img = document.createElement("img");
    img.src =images[i].src ;
    img.style.margin= 'auto';
    img.style.display= "block";
    img.style.width= "80%";
    img.style.maxWidth= "700px";
  

    let cap = document.createElement("div");
    cap.textContent=images[i].alt
    cap.style.margin= "auto";
    cap.style.display= "block";
    cap.style.width="80%";
    cap.style.maxWidth="700px";
    cap.style.textAlign="center";
    cap.style.color= "#ccc";
    cap.style.padding= "10px 0";
    cap.style.height= "150px";

    modal.appendChild(sp);
    modal.appendChild(img);
    modal.appendChild(cap);
    sticky.appendChild(modal);

    images[i].onclick = function(){
        console.log("douleyw");
        modal.style.display = "block";
        sticky.class="none";
    }
    console.log("ekana");

}