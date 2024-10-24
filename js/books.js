const mainRow = document.querySelector("#main-row");

function fetchJSONData() {
  fetch("./js/books.json")
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      return res.json();
    })
    .then((data) => {
      // console.log(data);

      for (let index = 0; index < data.length; index++) {
        const book = data[index];

        mainRow.innerHTML += `
                <div style="display: flex; border: 1px solid #dedede;">
                  <img src="${book.imgUrl}" alt="" style="width: 30%; border-right: 1px solid #dedede;" />
                  <div style="padding: 0 10px">
                    <h4>${book.title}</h4>
                  <div>${book.author}</div>
                  <div>${book.published}</div>
                    </div>
                </div>
              `;
      }
    })
    .catch((error) => console.error("Unable to fetch data:", error));
}

fetchJSONData();
