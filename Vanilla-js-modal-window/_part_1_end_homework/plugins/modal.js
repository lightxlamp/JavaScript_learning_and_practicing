function _createModal(options) {
  // _ it is like a "system" function. Not supposed to be called separately
  const modal = document.createElement("div");
  const title = options.title != null ? options.title : 'Modal Title';
  const closable = options.closable != null ? options.closable : true;
  const width = options.width != null ? options.width : '600px';
  const content = options.content != null ? options.content : '<p><b>Please pass some content here</b></p>';

  modal.classList.add("my-modal"); // <!-- Bootstrap has modal class, so "modal" class is already reserved-->
  modal.setAttribute('id','my-modal');

  let htmlToRender = `
  <div class="my-modal-overlay">
      <div class="modal-window" style="width:${width}">
          <div class="modal-header">
              <span class="modal-title">${title}</span>
          </div>
          <div class="modal-body">
            ${content}
          </div>
          <div class="modal-footer">
              <button>OK</button>
              <button>Cancel</button>
          </div>
      </div>
  </div>`;

  modal.insertAdjacentHTML("afterbegin",htmlToRender);

  function displayMessage() {
    alert("Hi!");
  }

  if(closable) {
    var closeIcon = document.createElement('span');
    closeIcon.classList.add('modal-close');
    //btn.setAttribute("id", "btn1"); 
    closeIcon.innerHTML = '&times;';
    closeIcon.onclick = displayMessage;
  }

  document.body.appendChild(modal);
  return modal;
}

$.modal = function(options) {
  const $modal = _createModal(options);
  const ANIMATION_SPEED = 400;
  let closing = false;

  return {
    open() {
        /* if window is not closing, we can add "open" class */
        !closing && $modal.classList.add('open');
    },
    close() {
        closing = true;
        $modal.classList.remove('open');
        $modal.classList.add('hiding');
        setTimeout(() => {
          $modal.classList.remove('hiding');
          closing = false;
        }, ANIMATION_SPEED)
    },
    destroy() {
      let el = document.getElementById('my-modal');
      return el.remove();
    }
  };
};
