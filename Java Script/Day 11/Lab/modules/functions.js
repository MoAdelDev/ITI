export const getData = async (url) => {
    let data;
  try {
    let result = await fetch(url, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    });
    data = result.json();
  } catch (e) {
    console.log(e);
  }
  return data;
};
