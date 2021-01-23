export function renderPost(post, renderButton) {
    const tag = post.type === 'news'
        ? '<li class="tag tag-blue tag-rounded">News</li>'
        : '<li class="tag tag-rounded">Note</li>'

    const isAlreadyAddedToFavs = (JSON.parse(localStorage.getItem('favs')) || []).includes(post.id)

    const favs = JSON.parse(localStorage.getItem('favs')) || [];
    const candidate = favs.find(p => p.id === post.id)

    const button = candidate 
        ? `<button data-id="${post.id}" data-title="${post.title}" class="button-danger button-small button-round">Remove from favorites</button>` // https://kylelogue.github.io/mustard-ui/index.html
        : `<button data-id="${post.id}" data-title="${post.title}" class="button-primary button-small button-round">Add to favorites</button>`
   
    return `    
    <div class="panel">
        <div class="panel-head">
            <p class="panel-title">${post.title}</p>
            <ul class="tags">
                ${tag}
             </ul>
        </div>
        <div class="panel-body">
            <p class="multi-line">${post.fullText}</p>
        </div>
        <div class="panel-footer w-panel-footer">
            <small>${post.date}</small>
            ${renderButton ? button : ''}
        </div>
  </div>`
}