plugins.confirm_window = function(options) {
    return new Promise(((resolve, reject) => {
        const modal = plugins.modal_window({
             title: options.title,
             closable: false,
             width: '400px',
             content: options.content,
             footerButtons: [   
                 {text: 'Delete', type: 'danger', handler() {
                    modal.close();
                    resolve();
                 }},
                 {text: 'Cancel', type: 'secondary', handler() {
                    modal.close();
                    reject();
                 }}, 
             ]  
        })
        modal.open();
    }))
}