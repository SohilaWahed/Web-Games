// all fns for games API, call display

import { UiGame } from "./uiModule.js";
import { Details } from "./details.js";

export class Game {

    constructor() {

        this.getGames('mmorpg')

        const anchorsCategory = document.querySelectorAll('.nav-link')
        anchorsCategory.forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                anchorsCategory.forEach(anchor => anchor.classList.remove('active'));
                e.target.classList.add('active')
                let category = e.target.innerText.toLowerCase()
                this.getGames(category)

            })
        })
    }

    async getGames(category) {

        const loading = document.querySelector(".loading");
        loading.classList.remove("d-none");

        const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '96a6dc868bmsh7219fe35ddfb34bp180c1djsn9e3616203940',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        try {
            const response = await fetch(url, options);
            const result = await response.json();

            let ui = new UiGame()
            ui.displayGames(result)
            this.addDetailsOnCard()
            loading.classList.add('d-none')
        } catch (err) {
            console.log(err);
        }
    }

    addDetailsOnCard() {
        const cards = document.querySelectorAll('.card')
        cards.forEach(card => {
            card.addEventListener('click',async function (e) {
                let loading = document.querySelector('.loading')
                loading.classList.remove('d-none')
                
                let detials = new Details()
                await detials.getDetails(card.id)
                
                let detailsScreen = document.querySelector('.details-game')
                document.querySelector('.games').classList.add('d-none')
                detailsScreen.classList.remove('d-none');
                detials.closeDetailsScreen()
                loading.classList.add('d-none')
            })
        })
    }
}



