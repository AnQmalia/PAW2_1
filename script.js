(function () {
  const example = document.getElementById("example");
  const cw1 = document.getElementById("cw1");
  const cw2 = document.getElementById("cw2");
  const cw3 = document.getElementById("cw3");
  const answer = document.getElementById("answer");

  example.addEventListener("click", function () {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((array) => {
        console.log(array);
        answer.innerHTML = JSON.stringify(array);
      });
  });

  cw1.addEventListener("click", function () {
    const select = document.getElementById("selectId");
    const idValue = select.value;

    answer.innerHTML = "<p>Loading...</p>";
    setTimeout(() => {
      fetch(`https://jsonplaceholder.typicode.com/posts/${idValue}`)
        .then((response) => response.json())
        .then((array) => {
          let html = `<p>${array.id}</p><p>${array.title}<br>${array.body}</p>`;

          answer.innerHTML = html;
        });
    }, 1000);
  });

  cw2.addEventListener("click", function () {
    //TODO
  });

  cw3.addEventListener("click", function () {
    //TODO
  });
})();
