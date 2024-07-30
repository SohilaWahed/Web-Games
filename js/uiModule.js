// class has two methode (displayHome - displayDetails)

export class UiGame {

    displayGames(list) {

        let cartona = ''
        for (let i = 0; i < list.length; i++) {
            cartona += `<div class="col-sm-6 col-md-4 col-lg-3">
                            <div class="card bg-transparent text-white" id=${list[i].id}>
                                <div class="image mt-3 mx-2">
                                    <img src="${list[i].thumbnail}" alt="" class="w-100">
                                </div>
                                <div class="details position-relative mt-3 mx-2">
                                    <h2>${list[i].title}</h2>
                                    <span class="bg-primary p-1 rounded-1 position-absolute top-0 end-0">free</span>
                                    <p class="pt-2 text-center opacity-50">${list[i].short_description.split(" ", 8)}</p>
                                </div>
                                <div class="category d-flex justify-content-between p-2">
                                    <span class="p-1 rounded-1">${list[i].genre}</span>
                                    <span class="p-1 rounded-1">${list[i].platform}</span>
                            </div>
                        </div>
                    </div>`
        }

        document.querySelector('section .row').innerHTML = cartona;

    }


    displayDetails(list) {
        let cartona = ` <div class="row mx-5 g-3 text-white">
                            <div class="col-12 pt-4 pb-3 d-flex justify-content-between">
                                <h1>Details Game</h1>
                                <i class="fas fa-close pt-1 fs-3"></i>
                            </div>
                            <div class="col-md-4">
                                <img src='${list.thumbnail}' alt="" class="w-100">
                            </div>
                            <div class="col-md-8 text-start">
                                <div class="title">
                                <span>Title: </span>
                                <span>${list.title}</span>
                                </div>
                                <div class="category-game pt-2">
                                <span>Category: </span>
                                <span>${list.genre}</span>
                                </div>
                                <div class="plattform pt-2">
                                <span>Plattform: </span>
                                <span>${list.platform}</span>
                                </div>
                                <div class="status pt-2">
                                <span>Status: </span>
                                <span>${list.status}</span>
                                </div>
                                <p class="desc pt-2">${list.description}</p>

                                <button class="btn btn-outline-warning"> <a class="text-decoration-none text-white" target="_blank" href="${list.game_url}">Show Game</a></button>
                            </div>
                        </div>`
            document.querySelector('.details-game').innerHTML = cartona ;
    }
}