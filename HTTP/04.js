async function runFetching() {
    try {
        const leaderboard = await fetchLeaderBoard()
        console.log(leaderboard)
    }
    catch {
        console.log('Our servers are down. But will be online soon')
    }
}

async function fetchLeaderBoard() {
    const response = await fetch('https://fantasyquest.servers')
    return response.json()
}

runFetching();