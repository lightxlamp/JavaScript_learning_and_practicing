function _createModal(options) {
  // _ it is like a "system" function. Not supposed to be called separately
  const DEFAULT_WIDTH = '600px';
  const modal = document.createElement("div");
  modal.classList.add("my-modal"); // <!-- Bootstrap has modal class, so "modal" class is already reserved-->
  modal.insertAdjacentHTML(
    "afterbegin",
    `
    <div class="my-modal-overlay" data-close>
        <div class="modal-window" style="width: ${options.width || DEFAULT_WIDTH}">
            <div class="modal-header">
                <span class="modal-title">${options.title || 'Default Title'}</span>
                ${options.closable == true ? `<span class="modal-close" data-close>&times;</span>` : ''}
            </div>
            <div class="modal-body">
              ${options.content || ''}
            </div>
            <div class="modal-footer">
                <button>OK</button>
                <button>Cancel</button>
            </div>
        </div>
    </div>`
  );
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
