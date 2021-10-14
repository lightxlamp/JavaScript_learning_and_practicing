function _createModal(options) {
  // _ it is like a "system" function. Not supposed to be called separately
  const modal = document.createElement("div");
  let title = options.title != null ? options.title : 'Modal Title';
  modal.classList.add("my-modal"); // <!-- Bootstrap has modal class, so "modal" class is already reserved-->
  modal.insertAdjacentHTML(
    "afterbegin",
    `
    <div class="my-modal-overlay">
        <div class="modal-window">
            <div class="modal-header">
                <span class="modal-title">${title}</span>
                <span class="modal-close">&times;</span>
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
