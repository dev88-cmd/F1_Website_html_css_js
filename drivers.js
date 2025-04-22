const drivers = [
    {
        id: 1,
        name: "Lewis Hamilton",
        nationality: "British",
        photo: "lewis-hamilton.jpg",
        bio: "Lewis Hamilton is a British Formula 1 driver who has won multiple championships.",
        teams: [
            { name: "Mercedes", years: "2013-2022" },
            { name: "McLaren", years: "2007-2012" }
        ]
    },
    {
        id: 2,
        name: "Max Verstappen",
        nationality: "Dutch",
        photo: "max-verstappenjk.jpg",
        bio: "Max Verstappen is a Dutch Formula 1 driver who has won multiple races and championships.",
        teams: [
            { name: "Red Bull Racing", years: "2016-present" },
            { name: "Toro Rosso", years: "2015-2016" }
        ]
    },
    {
        id: 3,
        name: "Charles Leclerc",
        nationality: "Monégasque",
        photo: "charles-leclerc.jpg",
        bio: "Charles Leclerc is a Monégasque Formula 1 driver who has won multiple races and championships.",
        teams: [
            { name: "Ferrari", years: "2019-present" },
            { name: "Sauber", years: "2018" }
        ]
    },
    {
        id: 4,
        name: "Sebastian Vettel",
        nationality: "German",
        photo: "sebastian-vettel.jpg",
        bio: "Sebastian Vettel is a German Formula 1 driver who has won multiple championships.",
        teams: [
            { name: "Aston Martin", years: "2021-present" },
            { name: "Ferrari", years: "2015-2020" },
            { name: "Red Bull Racing", years: "2009-2014" }
        ]
    },
    {
        id: 5,
        name: "Fernando Alonso",
        nationality: "Spanish",
        photo: "fernando-alonso.jpg",
        bio: "Fernando Alonso is a Spanish Formula 1 driver who has won multiple championships.",
        teams: [
            { name: "Alpine", years: "2021-present" },
            { name: "McLaren", years: "2015-2018" },
            { name: "Ferrari", years: "2010-2014" }
        ]
    },
    {
        id: 6,
        name: "Daniel Ricciardo",
        nationality: "Australian",
        photo: "daniel-ricciardo.jpg",
        bio: "Daniel Ricciardo is an Australian Formula 1 driver who has won multiple races.",
        teams: [
            { name: "McLaren", years: "2021-present" },
            { name: "Renault", years: "2019-2020" },
            { name: "Red Bull Racing", years: "2014-2018" }
        ]
    },
    {
        id: 7,
        name: "Pierre Gasly",
        nationality: "French",
        photo: "pierre-gasly.jpg",
        bio: "Pierre Gasly is a French Formula 1 driver who has won multiple races.",
        teams: [
            { name: "AlphaTauri", years: "2020-present" },
            { name: "Toro Rosso", years: "2017-2019" }
        ]
    },
    {
        id: 8,
        name: "Carlos Sainz Jr.",
        nationality: "Spanish",
        photo: "carlos-sainz.jpg",
        bio: "Carlos Sainz Jr. is a Spanish Formula 1 driver who has won multiple races.",
        teams: [
            { name: "Ferrari", years: "2021-present" },
            { name: "McLaren", years: "2019-2020" },
            { name: "Renault", years: "2017-2018" }
        ]
    },
    {
        id: 9,
        name: "Lando Norris",
        nationality: "British",
        photo: "lando-norris.jpg",
        bio: "Lando Norris is a British Formula 1 driver who has won multiple races.",
        teams: [
            { name: "McLaren", years: "2019-present" }
        ]
    },
    {
        id: 10,
        name: "George Russell",
        nationality: "British",
        photo: "george-russell.jpg",
        bio: "George Russell is a British Formula 1 driver who has won multiple races.",
        teams: [
            { name: "Williams", years: "2019-present" }
        ]
    },
    {
        id: 11,
        name: "Esteban Ocon",
        nationality: "French",
        photo: "esteban-ocon.jpg",
        bio: "Esteban Ocon is a French Formula 1 driver who has won multiple races.",
        teams: [
            { name: "Alpine", years: "2021-present" },
            { name: "Renault", years: "2020" },
            { name: "Racing Point", years: "2017-2018" }
        ]
    },
    {
        id: 12,
        name: "Valtteri Bottas",
        nationality: "Finnish",
        photo: "valtteri-bottas.jpg",
        bio: "Valtteri Bottas is a Finnish Formula 1 driver who has won multiple races.",
        teams: [
            { name: "Mercedes", years: "2017-2021" },
            { name: "Williams", years: "2013-2016" }
        ]
    },
    {
        id: 13,
        name: "Sergio Pérez",
        nationality: "Mexican",
        photo: "sergio-perez.jpg",
        bio: "Sergio Pérez is a Mexican Formula 1 driver who has won multiple races.",
        teams: [
            { name: "Red Bull Racing", years: "2021-present" },
            { name: "Racing Point", years: "2014-2020" },
            { name: "McLaren", years: "2013" }
        ]
    },
    {
        id: 14,
        name: "Alex Albon",
        nationality: "Thai",
        photo: "alex-albon.jpg",
        bio: "Alex Albon is a Thai Formula 1 driver who has won multiple races.",
        teams: [
            { name: "Red Bull Racing", years: "2019-2020" },
            { name: "Toro Rosso", years: "2019" }
        ]
    },
    {
        id: 15,
        name: "Yuki Tsunoda",
        nationality: "Japanese",
        photo: "yuki-tsunoda.jpg",
        bio: "Yuki Tsunoda is a Japanese Formula 1 driver who has won multiple races.",
        teams: [
            { name: "AlphaTauri", years: "2021-present" }
        ]
    },
    {
        id: 16,
        name: "Mick Schumacher",
        nationality: "German",
        photo: "mick-schumacher.jpg",
        bio: "Mick Schumacher is a German Formula 1 driver who has won multiple races.",
        teams: [
            { name: "Haas", years: "2021-present" }
        ]
    },
    {
        id: 17,
        name: "Nikita Mazepin",
        nationality: "Russian",
        photo: "nikita-mazepin.jpg",
        bio: "Nikita Mazepin is a Russian Formula 1 driver who has won multiple races.",
        teams: [
            { name: "Haas", years: "2021-present" }
        ]
    },
    {
        id: 18,
        name: "Antonio Giovinazzi",
        nationality: "Italian",
        photo: "antonio-giovinazzi.jpg",
        bio: "Antonio Giovinazzi is an Italian Formula 1 driver who has won multiple races.",
        teams: [
            { name: "Alfa Romeo", years: "2019-present" }
        ]
    },
    {
        id: 19,
        name: "Kimi Räikkönen",
        nationality: "Finnish",
        photo: "kimi-raikkonen.jpg",
        bio: "Kimi Räikkönen is a Finnish Formula 1 driver who has won multiple championships.",
        teams: [
            { name: "Alfa Romeo", years: "2019-2021" },
            { name: "Ferrari", years: "2007-2009, 2014-2018" }
        ]
    },
    {
        id: 20,
        name: "Nicholas Latifi",
        nationality: "Canadian",
        photo: "nicholas-latifi.jpg",
        bio: "Nicholas Latifi is a Canadian Formula 1 driver who has won multiple races.",
        teams: [
            { name: "Williams", years: "2020-present" }
        ]
    }
];

function generateDriverCards() {
    const driverList = document.querySelector(".driver-list");
    drivers.forEach((driver) => {
 const driverCard = document.createElement("div");
        driverCard.classList.add("driver-card");
        driverCard.innerHTML = `
            <img src="${driver.photo}" alt="${driver.name}">
            <h2>${driver.name}</h2>
            <p>Nationality: ${driver.nationality}</p>
            <p>Bio: ${driver.bio}</p>
            <h3>Teams:</h3>
            <ul>
                ${driver.teams.map((team) => `<li>${team.name} (${team.years})</li>`).join("")}
            </ul>
        `;
        driverList.appendChild(driverCard);
    });
}

generateDriverCards();