const niceList = document.getElementById("nice-list")
const naughtyList = document.getElementById("naughty-list")
const btn = document.getElementById("btn")
// btn.addEventListener("click", sort)

const people = [
    {
        name: "David",
        hasBeenGood: false
    },
    {
        name: "Del",
        hasBeenGood: true
    },
    {
        name: "Valerie",
        hasBeenGood: false
    },
    {
        name: "Astrid",
        hasBeenGood: true
    }
]

/** Challenge: 
  - Write the JavaScript to sort the people in sorteesArr into the naughty and nice lists, according to whether they have been good or not. Then display the names in the relevant place in the DOM.
**/

/** Stretch goals:
  - Add the option to add new names to the sorteesArr.
  - Make it possible to switch people to the other list.
**/
function sortPeople() {
  const naughty = people.filter((person) => !person.hasBeenGood);
  const nice = people.filter((person) => person.hasBeenGood);
  return { naughty, nice };
}

function displayLists() {
  const { naughty, nice } = sortPeople();

  naughtyList.innerHTML = ""; // Clear previous content
  naughty.forEach((person) => {
    const item = document.createElement("li");
    item.textContent = person.name;
    naughtyList.appendChild(item);
  });

  niceList.innerHTML = ""; // Clear previous content
  nice.forEach((person) => {
    const item = document.createElement("li");
    item.textContent = person.name;
    niceList.appendChild(item);
  });
}

function addPerson(name, isGood) {
  people.push({ name, hasBeenGood: isGood });
  displayLists();
}

function switchPerson(name, newList) {
  const personIndex = people.findIndex((person) => person.name === name);
  people[personIndex].hasBeenGood = newList === "nice";
  displayLists();
}

// Initial display
btn.addEventListener('click', (event) => {
    event.preventDefault();
    displayLists();
})

// Add event listeners for adding and switching people
// (Example using buttons with IDs "add-button" and "switch-button")
const addButton = document.getElementById("add-button");
addButton.addEventListener("click", () => {
  // Get name and isGood values from input fields
  const newName = document.getElementById("new-name").value;
  const isGood = document.getElementById("is-good").checked;
  addPerson(newName, isGood);
});

const switchButton = document.getElementById("switch-button");
switchButton.addEventListener("click", () => {
  // Get name and new list from input fields
  const switchName = document.getElementById("switch-name").value;
  const newList = document.getElementById("new-list").value;
  switchPerson(switchName, newList);
});