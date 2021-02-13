// Stop scrolling all page when user scrolled chat window on FireFox

if(navigator.userAgent.indexOf("Firefox") != -1 ) {
    waitForElementToDisplay("#conversationLog .jspContainer", addHandlers, 1000, 9000);
}

function addHandlers() {
    console.log("Scroll handlers added")
    const mainNode = document.querySelector("#conversationLog .jspContainer")
    console.log(mainNode)
    const page = document.querySelector(".mailbox_ctrl_messages")

    function callback(mutationsList, observer) {
        mutationsList.forEach(mutation => {
            if (mutation.attributeName === 'class') {
                if(mainNode.classList.contains('ps--scrolling-y')){
                    page.style.overflowY = 'hidden';
                }
                else {
                    setTimeout(function() {
                        if(!mainNode.classList.contains('ps--scrolling-y')){
                            page.style.overflowY = 'auto';
                        }
                    }, 5000);
                }
            }
        })
    }

    const mutationObserver = new MutationObserver(callback)

    mutationObserver.observe(mainNode, { attributes: true })
}

function waitForElementToDisplay(selector, callback, checkFrequencyInMs, timeoutInMs) {
    var startTimeInMs = Date.now();
    (function loopSearch() {
        if (document.querySelector(selector) != null) {
            callback();
            return;
        }
        else {
            setTimeout(function () {
                if (timeoutInMs && Date.now() - startTimeInMs > timeoutInMs)
                    return;
                loopSearch();
            }, checkFrequencyInMs);
        }
    })();
}

