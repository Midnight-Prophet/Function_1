function longestWord(sentence) {
  let words = sentence.split(" "); // Split sentence into words
  let longest = ""; // Variable to store the longest word

  for (let word of words) {
    if (word.length > longest.length) {
      longest = word; // Update longest if current word is longer
    }
  }

  return longest; // Return the longest word
}

console.log(longestWord("I love my toys hungry")); 