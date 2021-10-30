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
        setTimeout(() => {
            modal.open(); // Fixes animation. Guessed be myself :) 24:55. 3rd video 
        }, 0)
    }))
}