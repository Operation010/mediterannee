const $ = sel => document.querySelector(sel);
const $$ = sel => document.querySelectorAll(sel);

(function() {
  const menu = document.querySelector(".menu-list");
  
  // Alleen uitvoeren als menu carousel bestaat (alleen op home page)
  if (!menu) {
    console.log('No menu carousel found, skipping carousel setup');
    return;
  }
  
  const items = menu.children;
  let selected = items[2]; // standaard het 3e item centreren

  function reorder() {
    for (let i = 0; i < items.length; i++) {
      items[i].dataset.pos = i;
    }
  }

  function moveTo(newSelected) {
    const total = items.length;
    const newIndex = [...items].indexOf(newSelected);

    // Verwijder oude klassen
    [...items].forEach(item => item.className = "menu-img-item");

    // Voeg nieuwe klassen toe op basis van positie
    selected = newSelected;
    selected.classList.add("selected");

    const prev = selected.previousElementSibling;
    const next = selected.nextElementSibling;
    const prev2 = prev?.previousElementSibling;
    const next2 = next?.nextElementSibling;

    if (prev) prev.classList.add("prev");
    if (next) next.classList.add("next");
    if (prev2) prev2.classList.add("prevLeftSecond");
    if (next2) next2.classList.add("nextRightSecond");

    // Hide de rest
    let hideLeft = prev2?.previousElementSibling;
    while (hideLeft) {
      hideLeft.classList.add("hideLeft");
      hideLeft = hideLeft.previousElementSibling;
    }

    let hideRight = next2?.nextElementSibling;
    while (hideRight) {
      hideRight.classList.add("hideRight");
      hideRight = hideRight.nextElementSibling;
    }
    
    // Update klikbaarheid na positie wijziging
    updateClickability();
  }

  function goNext() {
    const next = selected.nextElementSibling || items[0];
    moveTo(next);
  }

  function goPrev() {
    const prev = selected.previousElementSibling || items[items.length - 1];
    moveTo(prev);
  }

  reorder();
  moveTo(selected);

  // Maak alleen het geselecteerde item klikbaar
  function updateClickability() {
    [...items].forEach(item => {
      // Verwijder alle click events en reset cursor
      item.style.cursor = 'default';
      item.onclick = null;
    });
    
    // Maak alleen het geselecteerde item klikbaar
    if (selected) {
      const target = selected.getAttribute('data-menu-target');
      if (target) {
        selected.style.cursor = 'pointer';
        selected.onclick = () => {
          window.location.href = `menu.html#${target}`;
        };
      }
    }
  }

  // Voeg knoppen toe alleen als populair sectie bestaat
  const populairSection = document.querySelector("#populair");
  if (populairSection) {
    const btnContainer = document.createElement("div");
    btnContainer.classList.add("buttons");
    btnContainer.innerHTML = `
      <button id="prev" class="btn-primary">Vorige</button>
      <button id="next" class="btn-primary">Volgende</button>
    `;
    populairSection.appendChild(btnContainer);

    $("#next").addEventListener("click", goNext);
    $("#prev").addEventListener("click", goPrev);
  }
})();
