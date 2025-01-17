function calculateTypography() {
    // Get input values
    const baseSize = parseFloat(document.getElementById('baseSize').value);
    const sizeMultiplier = parseFloat(document.getElementById('sizeMultiplier').value);
    const sizeRound = parseInt(document.getElementById('sizeRound').value, 10);
    const lineHeightMultiplier = parseFloat(document.getElementById('lineHeightMultiplier').value);
    const lineHeightRound = parseInt(document.getElementById('lineHeightRound').value, 10);

    // Initialize results table body
    let resultsBody = '';

    // Calculate sizes and line heights for each step from -10 to 10
    for (let i = -10; i <= 10; i++) {
        const fontSize = roundTo(baseSize * Math.pow(sizeMultiplier, i), sizeRound);
        const lineHeight = roundTo(fontSize * lineHeightMultiplier, lineHeightRound);

        resultsBody += `<tr>
                            <td>${i}</td>
                            <td>${fontSize}</td>
                            <td>${lineHeight}</td>
                        </tr>`;
    }

    // Display the results in the table
    document.getElementById('results-body').innerHTML = resultsBody;
}

function roundTo(value, roundTo) {
    return Math.round(value / roundTo) * roundTo;
}
