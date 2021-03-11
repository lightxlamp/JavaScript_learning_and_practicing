const theOnlyBearsIKnow = ['Polar', 'Brown', 'Grizzly']

setTimeout(function addBear () {
  const bears = document.querySelector('ul.bears')
  const bear = document.createElement('li')
  bear.textContent = theOnlyBearsIKnow[parseInt(Math.random() * theOnlyBearsIKnow.length, 10)]
  bears.appendChild(bear)
}, Math.random() * 2000)

////

const observer = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
    if (mutation.addedNodes.length) {
      console.log('Added', mutation.addedNodes[0])
    }
  })
})
const bears = document.querySelector('ul.bears')
observer.observe(bears, {
  childList: true
})
