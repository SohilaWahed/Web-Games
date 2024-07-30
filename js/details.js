// all fns for details API, call display

import { UiGame } from "./uiModule.js";

export class Details {

    async getDetails(id) {
        console.log(id);
        const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
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

             let ui = new UiGame
             ui.displayDetails(result)
        } catch (error) {
            console.error(error);
        }
    }

    closeDetailsScreen(){
        let close = document.querySelector('.fa-close')
        console.log(close);
        close.addEventListener('click', function (e) {
            document.querySelector('.details-game').classList.add('d-none')
            document.querySelector('.games').classList.remove('d-none')

        })
    }
}