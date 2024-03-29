window.addEventListener('load', async () => {
  if ('serviceWorker' in navigator) {
    try {
      console.log("'serviceWorker' in navigator)", 'serviceWorker' in navigator);
      const reg = await navigator.serviceWorker.register('./sw.js')
      console.log('Service worker register success', reg)
    } catch (e) {
      console.log('Service worker register failed')
    }
  }
  await loadPosts()
  await addPushScriptToSW();
})

async function addPushScriptToSW() {
  navigator.serviceWorker.getRegistration().then(regx => {
    console.log('~~~~ Regx', regx);
    regx.pushManager.subscribe({
      userVisibleOnly: true
    }).then(sub => {
      // send sun.toJSON() to server
    })
  })
}


async function loadPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=11')
  const data = await res.json()

  const container = document.querySelector('#posts')
  container.innerHTML = data.map(toCard).join('\n')
}

function toCard(post) {
  return `
    <div class="card">
      <div class="card-title">
        ${post.title}
      </div>
      <div class="card-body">
        ${post.body}
      </div>
    </div>
  `
}
