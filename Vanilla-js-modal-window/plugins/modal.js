plugins.modal_window = function(options) {
  const $modal = _createModal(options);
  const ANIMATION_SPEED = 400;
  let closing = false;
  let isDestroyed = false;

  const modal = {
    open() {
      if(isDestroyed) {
        console.log('Modal is destroyed');
      }
      /* if window is not closing, we can add "open" class */
      !closing && $modal.classList.add('open');
      if(typeof options.onOpen === 'function'){
        options.onOpen();
      }
    },
    close() {
        closing = true;
        $modal.classList.remove('open');
        $modal.classList.add('hiding');
        setTimeout(() => {
          if(typeof options.onClose === 'function'){
            options.onClose();
          }
          $modal.classList.remove('hiding');
          closing = false;
        }, ANIMATION_SPEED)
    },
  }

  const listener = event => {
    console.log(event.target);
    console.log(event.target.getAttribute("data-close"));
    // if(event.target.getAttribute("data-close")) { // can be used as well
    if(event.target.dataset.close) {
      modal.close();
    }
  }

  $modal.addEventListener('click', listener);

  // $modal.addEventListener('click', event => {
  //   console.log(event.target);
  //   console.log(event.target.getAttribute("data-close"));
  //   // if(event.target.getAttribute("data-close")) { // can be used as well
  //   if(event.target.dataset.close) {
  //     modal.close();
  //   }
  // })

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

function _createModal(options) {
  // _ it is like a "system" function. Not supposed to be called separately
  const DEFAULT_WIDTH = '600px';
  const modal = document.createElement("div");
  modal.classList.add("my-modal"); // <!-- Bootstrap has modal class, so "modal" class is already reserved-->
  modal.insertAdjacentHTML(
    "afterbegin",
    `
    <div class="my-modal-overlay" data-close="true">
        <div class="modal-window" style="width: ${options.width || DEFAULT_WIDTH}">
            <div class="modal-header">
                <span class="modal-title">${options.title || 'Default Title'}</span>
                ${options.closable == true ? `<span class="modal-close" data-close="true">&times;</span>` : ''}
            </div>
            <div class="modal-body" data-content>
              ${options.content || ''}
            </div>
        </div>
    </div>`
  );
  const footer = _createModalFooter(options.footerButtons); // is it error??? _createModalFooter
  footer.appendAfter(modal.querySelector('.modal-body'));
  document.body.appendChild(modal);
  return modal;
}

function _emptyFunction() {

}

function _createModalFooter(buttons = []) {
  if(buttons.length === 0) {
    return document.createElement('span');
  }
  const footer = document.createElement('div');
  footer.classList.add('modal-footer');

  buttons.forEach(btn => {
    const $btn = document.createElement('button');
    $btn.textContent = btn.text;
    $btn.classList.add('btn');
    $btn.classList.add(`btn-${btn.type || 'secondary' }`);
    $btn.onclick = btn.handler || _emptyFunction;

    footer.appendChild($btn);
  })

  return footer;
}

// creating method for all nodes
Element.prototype.appendAfter = function(element) {
  element.parentNode.insertBefore(this, element.nextSibling);
}