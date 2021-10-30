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
             ],
             onClose: function(){
                modal.destroy();
             },
             onOpen() { 
                console.log('Confirm window opened');
                // TODO why we can add key this way? I've added onClose // Update: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects did not help. 
                // TODO https://stackoverflow.com/questions/15220292/is-it-completely-valid-to-have-a-javascript-function-as-key-in-an-object
             }  
        })
        setTimeout(() => {
            modal.open(); // Fixes animation. Guessed be myself :) 24:55. 3rd video 
        }, 0)
    }))
}