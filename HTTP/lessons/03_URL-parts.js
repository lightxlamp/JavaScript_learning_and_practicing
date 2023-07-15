
function printURLParts(urlString) {
    const urlObj = new URL(urlString)
    console.log(urlObj)

    for (const prop in urlObj) {
        console.log(prop + ':', urlObj[prop]);
    }
}

const fantasyQuestURL = 'http://dragonslayer:pwn3d@fantasyquest.com:8080/maps?sort=rank&class=druid#id'
printURLParts(fantasyQuestURL)
