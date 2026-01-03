const container = document.getElementById('cards-container');

fetch("http://localhost:3000/api/characters")
    .then(response => response.json())
    .then(characters => {
        characters.forEach(character => {
            const card = document.createElement("div");
            card.classList.add("card");

            const img = document.createElement("img");
            img.src = character.image;
            img.alt = character.name;

            const content = document.createElement("div");
            content.classList.add("card-content");

            const name = document.createElement("h3");
            name.innerText = character.name;

            const description = document.createElement("p");
            description.innerText = character.description;

            content.appendChild(name);
            content.appendChild(description);
            card.appendChild(img);
            card.appendChild(content);
            container.appendChild(card);
        });
    })
    .catch(error => {
        console.error("Erro ao consumir a API:", error);
        container.innerText = "Erro ao carregar os dados.";
    })