// I can run this as with node =) No HTML file needed .. lol .. just remembered 
// ReferenceError: fetch is not defined ... No =) I can't

async function fetchIPAddress(domain) {
    const response = await fetch(`https://cloudflare-dns.com/dns-query?name=${domain}&type=A`, {
        headers: {
            'accept': 'application/dns-json'
        }
    })

    // return response.json() // Nice - worked
    return await response.json().Status;
}

async function runFetching() {
    try {
        const a = await fetchIPAddress('api.boot.dev');
        console.log(a);
    } catch (error) {
        console.error(error);
    }
}

runFetching();