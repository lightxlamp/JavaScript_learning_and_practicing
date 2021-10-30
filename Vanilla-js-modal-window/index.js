const games = [
    {id: 1, title: 'Gothic II: Gold Edition', price: 5.99, img: './img/gothic2.jpeg', desc: 'Gothic II: Gold Edition brings together the excitement of Gothic II and the add-on Night of the Raven to your fingertips! <br/> You have torn down the magical barrier and released the prisoners of the Mine Valley. Now the former criminals of the forests and mountains are causing trouble around the capital of Khorinis. The town militia is powerless due to their low amount of force–outside of the town, everyone is helpless against the attacks of the bandits.'},
    {id: 2, title: 'Theft Auto V: Premium Edition', price: 12.57, img: './img/gta5.jpeg', desc: 'When a young street hustler, a retired bank robber and a terrifying psychopath find themselves entangled with some of the most frightening and deranged elements of the criminal underworld, the U.S. government and the entertainment industry, they must pull off a series of dangerous heists to survive in a ruthless city in which they can trust nobody, least of all each other.'},
    {id: 3, title: 'Remnant: From the Ashes - Complete Edition', price: 13.11, img: './img/remnant.jpeg', desc: 'Remnant: From the Ashes is a third-person survival action shooter set in a post-apocalyptic world overrun by monstrous creatures. As one of the last remnants of humanity, you’ll set out alone or alongside up to two other players to face down hordes of deadly enemies and epic bosses, and try to carve a foothold, rebuild, and then retake what was lost.'}
]

const toHTML = item => `
    <div class="card" data-good-id="${item.id}">
        <img class="card-img-top" src="${item.img}" />
        <div class="card-body">
            <h5 class="card-title">${item.title}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary" data-btn="good-details" data-good-id="${item.id}">See details</a>
            <a href="#" class="btn btn-danger" data-btn="remove-good" data-good-id="${item.id}">Remove</a>
        </div>
    </div>
`

function render() {
    const html = games.map(toHTML); // Short syntax for: const html = games.map(game => toHTML(game));
    document.getElementById('goods').innerHTML = html.join(' '); // TODO: why assigning array as HTML worked? // Update. Seems like .join('') applied automatically // Update #2. It shows html but with ',' between array items
}

render();

const itemInfoModal = plugins.modal_window(
    {              
        title: 'Information about game',
        closable: true,
        width: '400px',
        footerButtons: [
            {text: 'Close', type: 'primary', handler() {
                itemInfoModal.close();
            }},
        ]    
    }
)

document.addEventListener('click', event => {
    // if(event.target.getAttribute("data-btn") === 'good-details') { // if(event.target.dataset.btn {  // from lesson - better version
    //     console.log('1');
    // }
    event.preventDefault(); // to remove # from url after clicking a link
    const btnType = event.target.getAttribute("data-btn");
    if(btnType === 'good-details' || btnType === 'remove-good') {
        const goodId = +event.target.dataset.goodId; // casting to Number. ( found this bug before lecturer :)  
        const game = games.find(f => f.id === goodId);

        if(btnType === 'good-details') {    
            itemInfoModal.setContent(
                `
                <p><strong>Title: </strong>${game.title}</p><br/>
                <p><strong>About: </strong>${game.desc}</p><br/>
                <p><strong>Price: </strong>$${game.price}</p>
                `
            ); // https://www.geeksforgeeks.org/difference-between-strong-and-bold-tag-in-html/ <b> replaced with <strong> :)
    
            itemInfoModal.open();
        }
        else if(btnType === 'remove-good') { 
            const removePromise = plugins.confirm_window(
                {              
                    title: `Remove - ${game.title}?`,
                    closable: true,
                    content: `
                        <p>
                            Do you want to delete - <b>${game.title}</b> from your cart? 
                        </p>
                    `,
                    width: '400px',
                    footerButtons: [
                        {text: 'Close', type: 'primary', handler() {
                            itemInfoModal.close();
                        }},
                    ]    
                }
            )
            removePromise.then(() => {
                    console.log('Resolve');
                    document.querySelector(`.card[data-good-id="${goodId}"]`).remove();
                }, 
                () => {console.log('Reject');});
        }
    }
}); // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener - read about 3rd parameter