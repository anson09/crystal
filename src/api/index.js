import ky from "ky";

const api = ky.create({ prefixUrl: "/api/xxx/" });

function getYyy() {
  return api.get("yyy").json();
}

export { getYyy };
