function _createModal(options) {
  // _ it is like a "system" function. Not supposed to be called separately
  const modal = document.createElement("div");
  const title = options.title != null ? options.title : 'Modal Title';
  const closable = options.closable != null ? options.closable : true;
  modal.classList.add("my-modal"); // <!-- Bootstrap has modal class, so "modal" class is already reserved-->
  let closeIconHtml = closable === false ? '' : '<span class="modal-close">&times;</span>';

  let htmlToRender = `
  <div class="my-modal-overlay">
      <div class="modal-window">
          <div class="modal-header">
              <span class="modal-title">${title}</span>
              ${closeIconHtml}
          </div>
          <div class="modal-body">
              <p>Lorem ipsum dolor sit.</p>
              <p>Lorem ipsum dolor sit.</p>
          </div>
          <div class="modal-footer">
              <button>OK</button>
              <button>Cancel</button>
          </div>
      </div>
  </div>`;

  modal.insertAdjacentHTML("afterbegin",htmlToRender);

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
    destroy() {}
  };
};
