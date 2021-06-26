import * as urls from "../../config/index.json";

export const sendAddNewCakeRequest = async (
  name: string,
  comment: string,
  imageUrl: string,
  rating: number,
  setCakes: any
) => {
  const body = JSON.stringify({
    name,
    comment,
    imageUrl,
    yumFactor: rating,
  });

  fetch(urls.ADD_NEW_CAKE, {
    method: "POST",
    body,
    headers: {
      "content-type": "application/json",
    },
  })
    .then((response: any) => response.json())
    .then((json: any) => {
      setCakes(json.message);
    })
    .catch(console.log);
};
