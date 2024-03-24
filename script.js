function calculateOdds() {
    const totalCards = parseInt(document.getElementById('totalCards').value);
    const desiredCards = parseInt(document.getElementById('desiredCards').value);

    if (totalCards <= 0 || desiredCards <= 0 || desiredCards > totalCards) {
        document.getElementById('result').textContent = "Invalid input!";
        return;
    }

    const odds = (desiredCards / totalCards) * 100;
    document.getElementById('result').textContent = 
        `Your odds of pulling a desired card are approximately ${odds.toFixed(2)}%`;
}
