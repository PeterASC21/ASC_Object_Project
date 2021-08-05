/* In Part 2 we will create a form that will allow the user to create a new
 * superhero to add to our list. You can do this!
 */

// 1. Create a form that has an input for the hero's name, secret identity,
// powers, team, and their saying. Give the form a button that says "Add Hero" and append it to the #form-box div
let formBox = document.querySelector("#form-box");

let form0 = document.createElement("form");
let div0 = document.createElement("div");
let label0 = document.createElement("label");
let input0 = document.createElement("input");
div0.appendChild(label0);
div0.appendChild(input0);
form0.appendChild(div0);
let form1 = document.createElement("form");
let div1 = document.createElement("div");
let label1 = document.createElement("label");
let input1 = document.createElement("input");
div1.appendChild(label1);
div1.appendChild(input1);
form1.appendChild(div1);
let form2 = document.createElement("form");
let div2 = document.createElement("div");
let label2 = document.createElement("label");
let input2 = document.createElement("input");
div2.appendChild(label2);
div2.appendChild(input2);
form2.appendChild(div2);
let form3 = document.createElement("form");
let div3 = document.createElement("div");
let label3 = document.createElement("label");
let input3 = document.createElement("input");
div3.appendChild(label3);
div3.appendChild(input3);
form3.appendChild(div3);
let form4 = document.createElement("form");
let div4 = document.createElement("div");
let label4 = document.createElement("label");
let input4 = document.createElement("input");
div4.appendChild(label4);
div4.appendChild(input4);
form4.appendChild(div4);
let form5 = document.createElement("form");
let div5 = document.createElement("div");
let label5 = document.createElement("label");
let input5 = document.createElement("input");
div5.appendChild(label5);
div5.appendChild(input5);
form5.appendChild(div5);


let button = document.createElement("button");
button.innerText = "Add Hero";

formBox.appendChild(form0);
formBox.appendChild(form1);
formBox.appendChild(form2);
formBox.appendChild(form3);
formBox.appendChild(form4);
formBox.appendChild(form5);
formBox.appendChild(button);

label0.innerText = "Hero's name: ";
label1.innerText = "Secret Identity: ";
label2.innerText = "Power: ";
label3.innerText = "Power 2: ";
label4.innerText = "Team: ";
label5.innerText = "Saying: ";
input0.setAttribute('id', 'heroName');
input1.setAttribute('id', 'secretIdentity');
input2.setAttribute('id', 'power');
input3.setAttribute('id', 'power2');
input4.setAttribute('id', 'team');
input5.setAttribute('id', 'saying');
input0.setAttribute('type', 'text');
input1.setAttribute('type', 'text');
input2.setAttribute('type', 'text');
input3.setAttribute('type', 'text');
input4.setAttribute('type', 'text');
input5.setAttribute('type', 'text');

// 2. Add an event listener to the form's button that checks for a click, then
// calls a function called "addHero."
button.addEventListener("click", addHero);


/* 3. Modify the addHero function so that it creates an object using the values
 * in the form, then adds it to the hero array created in part1. Here is a reminder of
 * what our hero objects from part 1 looked like:
 *
 * {
 * name: "Nobody Man",
 * secretIdentity: "Bob Fakeman",
 * powers: ['invisibility', 'can erase your memory of him'],
 * team: 'The Randos',
 * saying: "You don't know me!",
 * }
 *
 * After the addHero function adds our new hero to the array, rewrite the
 * contents of the #hero-list div so that it includes the hero that's been just
 * added
 */

let newCount = 4;
function addHero() {
    let n = document.getElementById("heroName").value;
    let sI = document.getElementById("secretIdentity").value;
    let p = document.getElementById("power").value;
    let p2 = document.getElementById("power2").value;
    let t = document.getElementById("team").value;
    let s = document.getElementById("saying").value;
    const newHero = {
        name: n,
        secretIdentity: sI,
        powers: [p, p2],
        team: t,
        saying: s,
    }
    superheros.push(newHero);
    let heroList = document.querySelector("#hero-list");
    for(let i = newCount; i < superheros.length; i++)
    {
        let div = document.createElement('div');
        let h2 = document.createElement('h2');
        let p = document.createElement('p');
        let p2 = document.createElement('p');
        let ul = document.createElement('ul');
        let h3 = document.createElement('h3')
        let li = document.createElement('li');
        let li2 = document.createElement('li');
        let p3 = document.createElement('p');
        div.appendChild(h2);
        div.appendChild(p);
        div.appendChild(p2);
        ul.appendChild(h3);
        ul.appendChild(li);
        ul.appendChild(li2);
        div.appendChild(ul);
        div.appendChild(p3);
        h2.innerText = superheros[i].name;
        p.innerText = "Team: " + superheros[i].team;
        p2.innerText = "Secret Identity: " + superheros[i].secretIdentity;
        h3.innerText = "Powers:";
        li.innerText = superheros[i].powers[0];
        li2.innerText = superheros[i].powers[1];
        p3.innerText = superheros[i].saying;
        heroList.appendChild(div);
    }
    newCount = newCount + 1;
}
// Part 2 complete!

/* Bonus Ideas:
 * Add images for your heroes
 * style up the page so it looks puuuuurty
 */