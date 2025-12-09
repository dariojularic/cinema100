// fetch("http://localhost:5173/a")
//   .then((res) => {
//     console.log(res);
//     console.log(res.json());
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });


async function fetchData(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      console.error(`HTTP error! Status: ${response.status} for URL: ${url}`);
      throw new Error(`Request failed with status ${response.status}`);
    }

    const data = await response.json();

    console.log("Successfully fetched and parsed data:", data);
    return data;

  } catch (error) {
    console.error("Fetch request failed:", error.message);
    return null;
  }
}

const apiUrl = "http://localhost:5173/a";

(async () => {
    console.log(`Attempting to fetch data from: ${apiUrl}`);
    const result = await fetchData(apiUrl);

    if (result) {
        console.log("Final application data:", result);
    } else {
        console.log("Could not retrieve data.");
    }
})();
