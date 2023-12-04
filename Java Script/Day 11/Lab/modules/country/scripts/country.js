import { getData } from "../../functions.js";

(async function () {
  window.addEventListener("load", async function () {
    let countryImageObj = this.document.querySelector("#flag_img");
    let countryNameObj = this.document.querySelector("#country_name");
    let continentNameObj = this.document.querySelector("#continent_name");
    let detailsTextObjects = this.document.querySelectorAll(".details_text");

    let neigbourCountryImageObj = this.document.querySelector(
      "#neighbour_flag_img"
    );
    let neigbourCountryNameObj = this.document.querySelector(
      "#neighbour_country_name"
    );
    let neigbourContinentNameObj = this.document.querySelector(
      "#neighbour_continent_name"
    );
    let neigbourDetailsTextObjects = this.document.querySelectorAll(
      ".neighbour_details_text"
    );
    // Get Country Using async/await
    // try {
    //   let data = await getData(`https://restcountries.com/v2/name/Egypt`);
    //   let countryImage = data[0]["flags"]["png"];
    //   let countyName = data[0]["name"];
    //   let continentName = data[0]["region"];
    //   let peopleCount = data[0]["population"];
    //   let languageName = data[0]["languages"][0]["name"];
    //   let currencyName = data[0]["currencies"][0]["name"];

    //   countryImageObj.setAttribute("src", countryImage);
    //   console.log(continentNameObj);
    //   countryNameObj.textContent = countyName;
    //   continentNameObj.innerText = continentName;

    //   let details = [peopleCount + "  People", languageName, currencyName];
    //   for (let i in detailsTextObjects) {
    //     detailsTextObjects[i].innerText = details[i];
    //   }
    // } catch (e) {
    //   console.log(e);
    // }

    //--------------------- Get Country and Neighbour Using Chaining Promises ------------
    fetch(`https://restcountries.com/v2/name/Egypt`, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((result) => {
        result
          .json()
          .then((data) => {
            let countryImage = data[0]["flags"]["png"];
            let countyName = data[0]["name"];
            let continentName = data[0]["region"];
            let peopleCount = data[0]["population"];
            let languageName = data[0]["languages"][0]["name"];
            let currencyName = data[0]["currencies"][0]["name"];
            let neighbourName=data[0]["borders"][1];

            countryImageObj.setAttribute("src", countryImage);
            console.log(continentNameObj);
            countryNameObj.textContent = countyName;
            continentNameObj.innerText = continentName;

            let details = [
              peopleCount + "  People",
              languageName,
              currencyName,
            ];
            for (let i=0; i<detailsTextObjects.length;i++) {
              detailsTextObjects[i].innerText = details[i];
            }
            fetch(`https://restcountries.com/v2/alpha/${neighbourName}`, {
                method: "get",
                headers: {
                  "Content-Type": "application/json",
                },
              })
                .then((result) => {
                  result
                    .json()
                    .then((data) => {
                        console.log(data);
                      countryImage = data["flags"]["png"];
                     countyName = data["name"];
                     continentName = data["region"];
                     peopleCount = data["population"];
                     languageName = data["languages"][0]["name"];
                      let currencyName = data["currencies"][0]["name"];

                      neigbourCountryImageObj.setAttribute("src", countryImage);
                      neigbourCountryNameObj.textContent = countyName;
                      neigbourContinentNameObj.innerText = continentName;

                      let details = [
                        peopleCount + "  People",
                        languageName,
                        currencyName,
                      ];
                      for (let i in neigbourDetailsTextObjects) {
                        neigbourDetailsTextObjects[i].innerText = details[i];
                      }

                    })
                    .catch((error) => console.log(error));
                })
                .catch((error) => console.log(error));
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  });
})();
