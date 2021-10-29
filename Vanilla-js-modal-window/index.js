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
