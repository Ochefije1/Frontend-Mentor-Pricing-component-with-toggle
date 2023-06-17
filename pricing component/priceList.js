
const switchToggle = document.getElementById("switchToggle");
      const nuts = document.getElementById("nuts");
      const monthly = document.getElementsByClassName("show-price");
      const annually = document.getElementsByClassName("hide-price");

      switchToggle.addEventListener("click", () => {
        nuts.classList.toggle("toggle");
        for (let i = 0; i < annually.length; i++) {
          annually[i].classList.toggle("show-price");
        }
        for (let i = 0; i < monthly.length; i++) {
          monthly[i].classList.toggle("hide-price");
        }
      });