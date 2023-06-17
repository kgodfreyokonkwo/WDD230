const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

async function getProphets() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        // console.table(data.prophets);
        displayProphets(data.prophets);
    } catch (error) {
        console.error('Error:', error);
    }
}

getProphets();

const displayProphets = (prophets) => {
    const cards = document.querySelector('.cards');
    prophets.forEach((prophet) => {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let portrait = document.createElement('img');

        let birthplace = document.createElement('p');
        let birthdate = document.createElement('p');
        let deathdate = document.createElement('p');

        // build the h2 content to show the prophet's full name
        h2.textContent = `${prophet.name} ${prophet.lastname}`;

        birthplace.textContent = `Place of Birth: ${prophet.birthplace}`;
        birthdate.textContent = `Date of Birth: ${prophet.birthdate}`;
        deathdate.textContent = `Date of Death: ${prophet.death}`;

        // build the image portrait by setting all the relevant attributes
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');
        card.setAttribute('class', 'portrait');

        card.appendChild(h2);
        card.appendChild(birthplace);
        card.appendChild(birthdate);
        card.appendChild(deathdate);
        card.appendChild(portrait);

        cards.appendChild(card);
    });
};
