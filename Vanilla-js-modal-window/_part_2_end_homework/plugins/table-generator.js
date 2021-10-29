plugins.table_generator = function(options) {
    const $table = _generateTable(options);
  
    const listener = event => {
      console.log(event.target);s
    }
  
    $table.addEventListener('click', listener);
  
    return Object.assign(modal, {
      destroy() {
        if($modal.parentNode) {
          console.log($modal);
          $modal.parentNode.removeChild($modal);
          $modal.removeEventListener('click', listener);
          isDestroyed = true;
        }
        else {
          console.log('Already destroyed');
        }
      },
      setContent(html){
        $modal.querySelector('[data-content]').innerHTML = html;
      }
    });
  };