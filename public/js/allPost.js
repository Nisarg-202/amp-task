let size = 0,
  searchText = "";

function setPost(response, method, condition = false) {
  if (method === "fetchPost") {
    if (response.data.posts.length < 5) {
      document.querySelector(".sams").style.visibility = "hidden";
    } else {
      document.querySelector(".sams").style.visibility = "visible";
    }
  } else {
    document.querySelector(".sams").style.visibility = "hidden";
  }
  if (method === "fetchPost") {
    size += response.data.posts.length;
  }

  if (method === "searchPost" || condition) {
    document.querySelector("#container").innerHTML = "";
  }

  for (var i = 0; i < response.data.posts.length; i++) {
    document.querySelector("#container").innerHTML += `<a href="/update/${
      response.data.posts[i]._id
    }" style="text-decoration: none">
        <div
          class="container shadow-sm my-5 d-flex justify-content-between p-4 posts"
        >
          <div>
          <h5>${response.data.posts[i].title}</h5>
          <p>Created At ${new Date(
            response.data.posts[i].date
          ).toLocaleDateString()}</p>
          </div>
          <form action="/delete/${response.data.posts[i]._id}" method="POST">
            <button type="submit" class="btn btn-danger">Delete</button>
          </form>
        </div>
      </a>`;
  }
}

async function getPosts(condition = false) {
  const response = await axios.post("/", { size });
  setPost(response, "fetchPost", condition);
}

getPosts();

document.querySelector(".sams").addEventListener("click", function () {
  getPosts();
});

document.querySelector("#search").addEventListener("input", async function (e) {
  searchText = e.target.value;
});

document.querySelector("#search").addEventListener(
  "keyup",
  _.debounce(async function () {
    if (searchText.length > 0) {
      const response = await axios.post("/search", { value: searchText });
      setPost(response, "searchPost");
    } else {
      size = 0;
      getPosts(true);
    }
  }, 1000)
);
