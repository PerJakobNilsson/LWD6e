function insertReadingTime() {
    let $body = document.body;

let text = $body.innerText;
let list = text.split(" ");
let words = list.length;

let duration = words / 250;
$body.innerHTML= `<p>(Reading time: ${duration} minutes)</p>
${$body.innerHTML}`;
}

insertReadingTime();