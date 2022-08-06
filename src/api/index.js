import ky from "ky";

const api = ky.create({ prefixUrl: "/api/path/" });

function getSomething() {
  return api.get("Something").json();
}

export { getSomething };
