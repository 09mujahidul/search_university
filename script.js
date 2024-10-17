let url = "http://universities.hipolabs.com/search?name=";

let btn = document.querySelector("button");
btn.addEventListener("click", async () => {
  let country = document.querySelector("input").value;
  console.log(country);
  let colArr = await getColleges(country);
  show(colArr);
});

function show(colArr) {
  let list = document.querySelector("#list");
  list.innerHTML = ""; // Clear the list
  for (let col of colArr) {
    console.log(col.name);

    let li = document.createElement("li");

    // Create a link for the university website
    let a = document.createElement("a");
    a.innerText = col.name;
    a.href = col.web_pages[0];  // Use the first URL in the web_pages array
    a.target = "_blank"; // Open link in a new tab

    li.appendChild(a);
    list.appendChild(li);
  }
  document.querySelector("input").value = ""; // Clear input field
}

async function getColleges(country) {
  try {
    let res = await axios.get(url + country);
    return res.data;
  } catch (e) {
    console.log("Error: ", e);
    return [];
  }
}
