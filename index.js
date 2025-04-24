function rollDice() {
    const diceInput = document.getElementById('diceInput').value;
    const rollResults = document.getElementById('rollResults');
    const rollImages = document.getElementById('rollImages');

    const values = [];
    const images = [];

    for(let i = 0; i < diceInput; i++){
        const value = Math.floor(Math.random() * 6 ) + 1;

        values.push(value);
        images.push(`<img src = "dice_images/${value}.png">`)
    }

    rollResults.textContent = `dice: ${values.join(' , ')}`;
    rollImages.innerHTML = images.join('');
}