// const friends = ['Melissa', 'Marc', 'Andrew', 'Nick'];

// friends.forEach((friend) => {
//         console.log(`I have a friend named ${friend.toLowerCase()}`);
// }) 

// const nums = [1, 2, 3];

// const squared = nums.map(num => {
//     return num * num;
// });

const people = [
    {name: 'Fred', town: 'Bedrock'},
    {name: 'Susan', town: 'Miami'},
    {name: 'John', town: 'Arcadia'}
  ];

// Create an array of HTML elements to display each person in li

const liPeopleEls = people.map((person) => {
    //create HTML, edit text, return to new array
    const liEl = document.createElement('li');
    liEl.innerHTML = `${person.name} <span>${person.town}</span>`;
    return liEl;
})

const ulEl = document.querySelector('ul');

liPeopleEls.forEach(li => {
    ulEl.appendChild(li);
})