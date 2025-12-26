let $html = document.documentElement;
let $toggle = document.createElement("button");
$toggle.type = "button";
let button_text = document.createTextNode("Theme Toogle");
$toggle.appendChild(button_text);
$toggle.classList.add("theme-toggle");

function updateButton() {
  let dark = $html.classList.contains("dark");
  let other_theme;
  if (dark) {
    $toggle.ariaPressed = "true";
    other_theme = "light";
  } else {
    $toggle.ariaPressed = "false";
    other_theme = "dark";
  }
  let label = "Change theme to " + other_theme;
  $toggle.ariaLabel = label;
  $toggle.title = label;
}
function toggleTheme() {
  $html.classList.toggle("dark");
  updateButton();
}
$toggle.addEventListener("click", toggleTheme);
updateButton();
document.body.appendChild($toggle);