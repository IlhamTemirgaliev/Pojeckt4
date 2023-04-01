import ky from "ky";

const cardApi = ky.create({
  prefixUrl: "http://localhost:1337/api",
});

export const cardPost = () => {
  return cardApi.get("impressions/?populate=photos").json();
};

export const toggleBarr = () => {
  return cardApi.get("togllebars").json();
};

export const slaiderr = () => {
  return cardApi.get("slaiders/?populate=slaiderimg").json()
}