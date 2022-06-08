#!/usr/bin/env node

/* eslint-disable no-console */

import { writeFile } from "fs";
import { config } from "dotenv";
import * as cheerio from "cheerio";
import router from "../src/router.js";

const XML_TEMPLATE = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
        xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
</urlset>`;

const URL_TEMPLATE = `
  <url>
      <loc>URL</loc>
  </url>
`;

config();

if (!process.env.ORIGIN) process.exit(0);

const URL_PREFIX = process.env.ORIGIN + process.env.PUBLIC_PATH;
const { routes } = router.options;
const $xml = cheerio.load(XML_TEMPLATE, { xmlMode: true });
const $url = cheerio.load(URL_TEMPLATE, { xmlMode: true });

const urlList = routes
  .map((route) => {
    const { path, sitemap } = route;
    if (sitemap === true) return path;
    if (typeof sitemap === "string" || Array.isArray(sitemap)) return sitemap;
    return null;
  })
  .filter((path) => path !== null)
  .flat()
  .map((url) => {
    $url("loc").text(URL_PREFIX + url.slice(1));
    return $url.xml();
  })
  .join("");

$xml("urlset").html(urlList);

writeFile("dist/sitemap.xml", $xml.xml(), (err) => {
  if (err) throw err;
  console.log("\nSitemap successfully generated ~");
});
