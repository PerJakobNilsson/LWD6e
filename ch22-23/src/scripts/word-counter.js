function countWords(the_text) {
  return the_text.split(" ").length;
}
function wordsToMinutes(words) {
  return words / 250;
}

function insertReadingTime($p) {
  if ($p.innerText && $p.matches("p")) {
    let words = countWords($p.innerText);
    let duration = wordsToMinutes(words);
    $p.innerText += " \n(Reading time: " + duration + " minutes).";
  } else {
    console.error("Cannot parse text.");
  }
}
$paragraphs = document.querySelectorAll("p");
let count = $paragraphs.length;
for (let i = 0; i < count; i++) {
  insertReadingTime($paragraphs[i]);
}
