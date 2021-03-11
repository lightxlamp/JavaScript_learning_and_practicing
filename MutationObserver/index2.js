// Select the node that will be observed for mutations
const targetNode = document.getElementById('articlesList');

// Options for the observer (which mutations to observe)
const config = { childList: true, subtree: true };

// Callback function to execute when mutations are observed
const callback = function(mutationsList, observer) {
    // Use traditional 'for loops' for IE 11
    alert('Mutation')
    for(const mutation of mutationsList) {
        if (mutation.type === 'childList') {
            console.log('A child node has been added or removed.');
        }
        else if (mutation.type === 'attributes') {
            console.log('The ' + mutation.attributeName + ' attribute was modified.');
        }
    }
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);

setTimeout(function() {
    let article = document.createElement("p");
    let text = document.createTextNode("Code generated article");
    article.appendChild(text);
    let element = document.getElementById("articlesList");
    element.appendChild(article);
    // works well
    // Let's see mutation observer now
    // Nice, worked
}, 3500)