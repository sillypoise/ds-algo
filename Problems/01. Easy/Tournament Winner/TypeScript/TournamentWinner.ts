function TournamentWinner(
    competitions: [string, string][],
    results: number[]
): string {
    return "";
}

function S1_TournamentWinner(
    competitions: [string, string][],
    results: number[]
): string {
    let scores: Record<string, number> = {};
    let bestTeam = "";
    scores[bestTeam] = 0;

    for (let i = 0; i < competitions.length; i++) {
        let result = results[i];
        let [homeTeam, awayTeam] = competitions[i];

        let winnerTeam = result === 1 ? homeTeam : awayTeam;

        if (winnerTeam in scores) {
            scores[winnerTeam] += 3;
        } else {
            scores[winnerTeam] = 3;
        }

        if (scores[winnerTeam] > scores[bestTeam]) {
            bestTeam = winnerTeam;
        }
    }

    return bestTeam;
}

S1_TournamentWinner(
    [
        ["T1", "T2"],
        ["T2", "T3"],
        ["T3", "T2"],
    ],
    [0, 0, 1]
);
