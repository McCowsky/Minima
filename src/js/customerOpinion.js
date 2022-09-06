const opinions = [
  {
    id: 1,
    photo: "src/img/customer.png",
    name: "Shalima Hayden",
    job: "Product Designer",
    opinion:
      "ReachCircle is the friendliest and most efficient company I have ever used. The whole thing takes time to introduce the product and as a result puts forward only the best opportunities that really suit you. They help from start to finish tocreate a great product identity for your company",
  },
  {
    id: 2,
    photo: "src/img/customer2.jpg",
    name: "John Doe",
    job: "Manager",
    opinion:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos vel quam laboriosam id accusantium fugit neque autem delectus rerum facere mollitia ea, molestiae maiores ut, ipsum accusamus nobis, repudiandae minima quasi dignissimos praesentium nesciunt quas officiis. Nulla, ipsum dignissimos, sequi, sapiente placeat id dolor ducimus sed fugit excepturi voluptatibus doloribus.",
  },
  {
    id: 3,
    photo: "src/img/customer3.jpg",
    name: "Jan Kowalski",
    job: "CEO",
    opinion:
      "nibh nisl condimentum id venenatis a condimentum vitae sapien pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas sed tempus urna et pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna eget est lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant morbi tristique",
  },
];

// ----------------------------------------------

const customerPhoto = document.getElementById("customerPhoto");
const customerName = document.getElementById("customerName");
const customerJob = document.getElementById("customerJob");
const customerOpinion = document.getElementById("customerOpinion");
const prevBtn = document.getElementById("customerPrevBtn");
const nextBtn = document.getElementById("customerNextBtn");
const prevBtn2 = document.getElementById("customerPrevBtn2");
const nextBtn2 = document.getElementById("customerNextBtn2");
let currentOpinion = 0;

//----AUTOMATYCZNE GENEROWANIE WSKAZNIKOW ILOSCI OPINII------
function createColorIndicators() {
  for (let i = 0; i <= opinions.length - 1; i++) {
    let li = document.createElement("li");
    li.classList.add("bg-black", "px-3", "h-1.5", "ml-4", "listItem");
    document.getElementById("liContainer").appendChild(li);
  }
}
createColorIndicators();

// PODSWIETLENIE WSKAZNIKA AKTUALNEJ OPINII

let colorIndicator = document.getElementById("liContainer").children;
colorIndicatorCurrent = colorIndicator.item(currentOpinion);
colorIndicatorCurrent.style.backgroundColor = "#FF8811";

// ----ZMIANA OPINII--------

function whichOpinion(prevNext) {
  let colorIndicator = document.getElementById("liContainer").children;

  switch (prevNext) {
    case "prev":
      currentOpinion--;
      let nextOpinion = currentOpinion + 1;
      if (currentOpinion < 0) {
        colorIndicatorCurrent = colorIndicator.item(0);
        colorIndicatorCurrent.style.backgroundColor = "black";
        currentOpinion = opinions.length - 1;
      } else {
        let colorIndicatorNext = colorIndicator.item(nextOpinion);
        colorIndicatorNext.style.backgroundColor = "black";
      }
      colorIndicatorCurrent = colorIndicator.item(currentOpinion);
      colorIndicatorCurrent.style.backgroundColor = "#FF8811";
      getOpinion(currentOpinion);

      break;
    case "next":
      currentOpinion++;
      let prevOpinion = currentOpinion - 1;
      if (currentOpinion > opinions.length - 1) {
        colorIndicatorCurrent = colorIndicator.item(opinions.length - 1);
        colorIndicatorCurrent.style.backgroundColor = "black";
        currentOpinion = 0;
      } else {
        let colorIndicatorPrev = colorIndicator.item(prevOpinion);
        colorIndicatorPrev.style.backgroundColor = "black";
      }
      colorIndicatorCurrent = colorIndicator.item(currentOpinion);
      colorIndicatorCurrent.style.backgroundColor = "#FF8811";

      getOpinion(currentOpinion);
      break;
  }
}

function getOpinion(opinionNumber) {
  customerPhoto.src = opinions[opinionNumber].photo;
  customerName.innerHTML = opinions[opinionNumber].name;
  customerJob.innerHTML = opinions[opinionNumber].job;
  customerOpinion.innerHTML = opinions[opinionNumber].opinion;
}

prevBtn.onclick = function () {
  whichOpinion("prev");
};
nextBtn.onclick = function () {
  whichOpinion("next");
};
prevBtn2.onclick = function () {
  whichOpinion("prev");
};
nextBtn2.onclick = function () {
  whichOpinion("next");
};
