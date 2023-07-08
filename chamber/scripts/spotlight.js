const requestURL = 'json/data.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const members = jsonObject['members'];
    chooseHighlights(members);
  });


  function chooseHighlights(members){

    const filteredMembership = members.filter(function (member) {
        return member.membership == "Gold" ||
            member.membership == "Silver";
    });

    const shuffledMembership = filteredMembership.sort(() => 0.5 - Math.random());

    displayHighlight(shuffledMembership[0], "#spotlight1");
    displayHighlight(shuffledMembership[1], "#spotlight2");
    displayHighlight(shuffledMembership[2], "#spotlight3");
  }

  function displayHighlight(member, elementID) {

    let pName = document.createElement('p');
    let logoImg = document.createElement('img');
    let pSlogan = document.createElement('p');
    let hr = document.createElement('hr');
    let pSpotinfo = document.createElement('p');
    let a = document.createElement('a');

    pName.innerHTML = `${member.name}`;
    pName.setAttribute('class', 'large');

    logoImg.setAttribute('src', member.img);
    logoImg.setAttribute('class', 'spotlightImg');  
    logoImg.setAttribute('alt', `Logo image for ${member.name}`);
    logoImg.setAttribute('loading', 'lazy');
  


    pSlogan.textContent = `"${member.slogan}"`;
    pSlogan.setAttribute('class', 'small bold italic');   
 

    hr.style.margin = "2px";

    pSpotinfo.innerHTML += member.phone + " | ";
    pSpotinfo.classList.add('spotinfo');

    a.textContent = "website";
    a.setAttribute('href', "#");
  
    pSpotinfo.appendChild(a);

    const spotlightContainer = document.querySelector(elementID)

    spotlightContainer.removeChild(spotlightContainer.firstElementChild);
  
    spotlightContainer.appendChild(logoImg);
    spotlightContainer.appendChild(pName);
    spotlightContainer.appendChild(pSlogan);
    spotlightContainer.appendChild(hr);
    spotlightContainer.appendChild(pSpotinfo);



  }
 


