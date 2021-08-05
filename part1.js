/* In Part 1, we're going to create a Superhero list! Think back to previous
 * lessons, help your classmates if things are going smoothly, and ask for help
 * if you need it!
 */


// 1. create three superheroes with the same format as Nobody Man

const nobodyMan = {
  name: "Nobody Man",
  secretIdentity: "Bob Fakeman",
  powers: ['invisibility', 'can erase your memory of him'],
  team: 'The Randos',
  saying: "You don't know me!",
}

// Add your heroes here
const fireStorm = {
  name: "Fire Storm", 
  secretIdentity: "Lebron James", 
  powers: ['can fire bend', 'can turn into a dragon'],
  team: 'The Randos',
  saying: "Bruhhhh",
}

const blazer = {
  name: "Blazer",
  secretIdentity: "Velvet", 
  powers: ['super speed', 'flight'],
  team: 'The Randos',
  saying: "WOW!!!",
}

const agentX = {
  name: "Agent X",
  secretIdentity: "unknown",
  powers: ['unknown', 'unknown'],
  team: 'unknown',
  saying: "Cereal is the best breakfast food",
}

// 2. Create an array called "heroes" and put your hero objects in it
let superheros = [nobodyMan, fireStorm, blazer, agentX];



/* 3. Create a loop that makes a <div> element for each hero in the array. The
 * div should contain the following:
 *    a. An <h2> element that contains the hero's name at the top
 *    b. <p> elements that contain the hero's team and secret identity with
 *    labels
 *    c. An <ul> element that contains an <h3> element that contains "Powers:"
 *    and an <li> element that contains each of hero's powers
 *    d. A <p> element that has the hero's saying in quotes
 *
 *  The final product should look like this:
 *
 *  <div>
 *    <h2>Nobody Man</h2>
 *    <p>Team: The Randos</p>
 *    <p>Secret Identity: Bob Fakeman</p>
 *    <ul>
 *      <h3>Powers:</h3>
 *      <li>invisibility</li>
 *      <li>can erase your memory of him</li>
 *    </ul>
 *    <p>"You don't know me!"</p>
 *  </div>
 *
 * Finally, the loop should append the created div to the #hero-list element in
 * the index.html.
 */

// Part 1 complete!
let heroList = document.querySelector("#hero-list");
for(let i = 0; i < superheros.length; i++)
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