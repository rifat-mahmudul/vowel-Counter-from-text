function vowel() {
    
    const textInput = document.getElementById('textInput').value;
    const vowels = 'aeiouAEIOU';
    let count = 0;

    for (let i = 0; i < textInput.length; i++) {

        if (vowels.includes(textInput[i])) {
            count++;
        }
    }

    const result = document.getElementById('result');

    result.innerHTML = `
        <h3>The number of vowel in your text is ${count}</h3>
    `
}