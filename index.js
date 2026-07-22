const input = document.getElementById("textarea-1");
const output = document.getElementById("textarea-2");
const clear = document.getElementById("clear-button");
const save = document.getElementById("save-button");
const alertBox = document.getElementById("save-alert");
const copy = document.getElementById("copy-button");
// function escapeHTML(text) {
//   return text
//     .replace(/&/g, "&amp;")
//     .replace(/</g, "&lt;")
//     .replace(/>/g, "&gt;");
// }
// function markdownToHTML(markdown) {
//   const lines = markdown.split("\n");
//   let html = "";
//   let inCodeBlock = false;
//   let codeContent = "";
//   let inList = false;

//   for (let line of lines) {
//     if (line.trim().startsWith("```")) {
//       if (inCodeBlock) {
//         html += `<pre><code>${escapeHTML(codeContent.trimEnd())}</code></pre>`;
//         codeContent = "";
//         inCodeBlock = false;
//       } else {
//         inCodeBlock = true;
//       }
//       continue;
//     }

//     if (inCodeBlock) {
//       codeContent += line + "\n";
//       continue;
//     }
//     if (line.startsWith("- ")) {
//       if (!inList) {
//         html += "<ul>";
//         inList = true;
//       }

//       let item = line.slice(2);
//       item = convertBold(item);
//       item = convertInlineCode(item);
//       item = convertLinks(item);

//       html += `<li>${item}</li>`;
//       continue;
//     } else {
//       if (inList) {
//         html += "</ul>";
//         inList = false;
//       }
//     }
//     if (line.startsWith("### ")) {
//       html += `<h3>${line.slice(4)}</h3>`;
//     } else if (line.startsWith("## ")) {
//       html += `<h2>${line.slice(3)}</h2>`;
//     } else if (line.startsWith("# ")) {
//       html += `<h1>${line.slice(2)}</h1>`;
//     }
//     else if (line.trim() === "") {
//       html += "<br>";
//     }
//     else {
//       line = convertBold(line);
//       line = convertInlineCode(line);
//       line = convertLinks(line);
//       html += `<p>${line}</p>`;
//     }
//   }
//   if (inList) html += "</ul>";
//   if (inCodeBlock)
//     html += `<pre><code>${escapeHTML(codeContent.trimEnd())}</code></pre>`;

//   return html;
// }
// function convertBold(text) {
//   return text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
// }

// function convertInlineCode(text) {
//   return text.replace(/`(.*?)`/g, function (match, code) {
//     return `<code>${escapeHTML(code)}</code>`;
//   });
// }

// function convertLinks(text) {
//   return text.replace(
//     /\[(.*?)\]\((.*?)\)/g,
//     '<a href="$2" target="_blank">$1</a>',
//   );
// }
// input.addEventListener("input", function () {
//   output.innerHTML = markdownToHTML(input.value);
// });
input.addEventListener("input", function () {
  output.innerHTML = marked.parse(input.value);
});
clear.addEventListener("click", function () {
  input.value = "";
  output.innerHTML = "";
});
save.addEventListener("click", function () {
  localStorage.setItem("savedText", input.value);
  alertBox.classList.add("show");
  setTimeout(function () {
    alertBox.classList.remove("show");
  }, 3000);
});
copy.addEventListener("click", function () {
  navigator.clipboard.writeText(output.textContent || output.innerText);
});
const savedText = localStorage.getItem("savedText");
if (savedText) {
  input.value = savedText;
  output.innerHTML = marked.parse(savedText);
}
