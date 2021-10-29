
const games = [
    {id: 1, title: 'Gothic II: Gold Edition', price: 5.99, img: './img/gothic2.jpeg', desc: 'Gothic II: Gold Edition brings together the excitement of Gothic II and the add-on Night of the Raven to your fingertips! <br/> You have torn down the magical barrier and released the prisoners of the Mine Valley. Now the former criminals of the forests and mountains are causing trouble around the capital of Khorinis. The town militia is powerless due to their low amount of force–outside of the town, everyone is helpless against the attacks of the bandits.'},
    {id: 2, title: 'Theft Auto V: Premium Edition', price: 12.57, img: './img/gta5.jpeg', desc: 'When a young street hustler, a retired bank robber and a terrifying psychopath find themselves entangled with some of the most frightening and deranged elements of the criminal underworld, the U.S. government and the entertainment industry, they must pull off a series of dangerous heists to survive in a ruthless city in which they can trust nobody, least of all each other.'},
    {id: 3, title: 'Remnant: From the Ashes - Complete Edition', price: 13.11, img: './img/remnant.jpeg', desc: 'Remnant: From the Ashes is a third-person survival action shooter set in a post-apocalyptic world overrun by monstrous creatures. As one of the last remnants of humanity, you’ll set out alone or alongside up to two other players to face down hordes of deadly enemies and epic bosses, and try to carve a foothold, rebuild, and then retake what was lost.'}
]

const $gt = plugins.table_generator(games);
document.querySelector('.container').appendChild($gt);

const modalWindow = plugins.modal_window(
    {
        title: 'Title from options',
        closable: true,
        content: `
            <h4>
                Modal is working
            </h4>
            <p>
                Some text goes here
            </p>
        `,
        width: '400px',
        footerButtons: [
            {text: 'O.K.', type: 'primary', handler() {
                console.log('OK clicked');
                modalWindow.close();
            }},
            {text: 'C.a.n.c.e.l', type: 'danger', handler() {
                console.log('Cancel clicked');
                modalWindow.close();
            }}
        ]    
    }
)
