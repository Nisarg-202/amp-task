let len, posts, cnt;

async function getPosts() {
  if (!len) {
    const response = await axios.post("/");
    console.log(response.data.length);
    if (response.data.length === 0) {
      console.log("Sams");
      document.querySelector(".text-center").innerHTML = "";
      document.querySelector(
        ".container"
      ).innerHTML = `<h1 class='text-center mt-3'>No Post Found!</h1>`;
    } else {
      len = response.data.length;
      posts = response.data;
      cnt = response.data.length >= 5 ? 5 : response.data.length;
      for (var i = 0; i < cnt; i++) {
        document.querySelector(
          ".container"
        ).innerHTML += `<a href="/update/${response.data[i]._id}" style="text-decoration: none">
          <div
            class="container shadow-sm my-5 d-flex justify-content-between p-4 posts"
          >
            <h5>${response.data[i].title}</h5>
            <form action="/delete/${response.data[i]._id}" method="POST">
              <button type="submit" class="btn btn-danger">Delete</button>
            </form>
          </div>
        </a>`;
      }

      if (len <= 5) {
        document.querySelector(".text-center").innerHTML = "";
      }
    }
  } else {
    let temp = len - cnt;

    if (temp <= 5) {
      document.querySelector(".text-center").innerHTML = "";
      for (var i = cnt; i < cnt + temp; i++) {
        document.querySelector(
          ".container"
        ).innerHTML += `<a href="/update/${posts[i]._id}" style="text-decoration: none">
                <div
                  class="container shadow-sm my-5 d-flex justify-content-between p-4 posts"
                >
                  <h5>${posts[i].title}</h5>
                  <form action="/delete/${posts[i]._id}" method="POST">
                    <button type="submit" class="btn btn-danger">Delete</button>
                  </form>
                </div>
              </a>`;
      }

      cnt += temp;
    } else {
      for (var i = cnt; i < cnt + 5; i++) {
        document.querySelector(
          ".container"
        ).innerHTML += `<a href="/update/${posts[i]._id}" style="text-decoration: none">
                    <div
                      class="container shadow-sm my-5 d-flex justify-content-between p-4 posts"
                    >
                      <h5><${posts[i].title}</h5>
                      <form action="/delete/${posts[i]._id}" method="POST">
                        <button type="submit" class="btn btn-danger">Delete</button>
                      </form>
                    </div>
                  </a>`;
      }
      cnt += 5;
    }
  }
}

getPosts();

document.querySelector(".sams").addEventListener("click", function () {
  console.log("sams");
  getPosts();
});
