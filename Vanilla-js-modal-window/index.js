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
        width: '400px'    
    }
)
