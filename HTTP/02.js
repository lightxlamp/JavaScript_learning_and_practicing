// I can run this as with node =) No HTML file needed .. lol .. just remembered 
// ReferenceError: fetch is not defined ... No =) I can't

async function fetchIPAddress(domain) {
    const response = await fetch(`https://cloudflare-dns.com/dns-query?name=${domain}&type=A`, {
        headers: {
            'accept': 'application/dns-json'
        }
    })

    // return response.json() // Nice - worked
    const parsedResponse = await response.json()
    return parsedResponse.Answer[0].data;
}

async function runFetching() {
    try {
        const domain = 'megaline.kg';
        const ip = await fetchIPAddress(domain);
        console.log(`IP address of ${domain} is ${ip}`);
    } catch (error) {
        console.error(error);
    }
}

runFetching();