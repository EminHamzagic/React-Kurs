import fetch from "node-fetch";

async function getWord() {
  //   const options = {
  //     method: "GET",
  //     headers: {
  //       "X-RapidAPI-Key": "f94281bc97msh77eceec8fe37898p122970jsn084ed3286cef",
  //       "X-RapidAPI-Host": "random-words5.p.rapidapi.com",
  //     },
  //   };
  //   var respone = await fetch(
  //     "https://random-words5.p.rapidapi.com/getRandom",
  //     options
  //   );
  var respone = await fetch(`https://random-words-api.vercel.app/word`);
  var data = await respone.json();
  return data;
  //   .then((response) => response.json())
  //   .then((response) => console.log(response));
  // console.log(respone);
  // return respone;
}

getWord().then((data) => {
  console.log(data);
});
