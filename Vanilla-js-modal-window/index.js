const games = [
    {id: 1, title: 'Gothic II: Gold Edition', price: 5.99, img: './img/gothic2.jpeg'},
    {id: 2, title: 'Theft Auto V: Premium Edition', price: 12.57, img: './img/gta5.jpeg'},
    {id: 3, title: 'Remnant: From the Ashes - Complete Edition', price: 13.11, img: './img/remnant.jpeg'},
]

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
