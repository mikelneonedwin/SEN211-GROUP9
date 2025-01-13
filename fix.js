import { JSDOM } from "jsdom";
import { globSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { format } from "prettier";

(async function () {
  {
    console.log("Applying CSS fixes");
    const html = readFileSync(join("dist", "index.html"), "utf-8");
    const cssLink = new JSDOM(html).window.document.querySelector("link#css");
    if (cssLink) {
      const res = await fetch(cssLink.getAttribute("href"));
      const css = await res.text();
      writeFileSync(join("dist", "assets", "index.css"), css, "utf-8");
    }
  }
  {
    for (const htmlFile of globSync("dist/**/*.html")) {
      const { document } = new JSDOM(readFileSync(htmlFile)).window;
      const cssLink = document.querySelector("link#css");
      if (cssLink) cssLink.setAttribute("href", "/assets/index.css");
      const unwanted = document.querySelector(
        "link[href='/assets/booking.css']",
      );
      if (unwanted) unwanted.remove();
      const newHTML = "<!DOCTYPE html>\n" + document.documentElement.outerHTML;
      const parsedHTML = await format(newHTML, {
        parser: "html",
      });
      writeFileSync(htmlFile, parsedHTML, "utf-8");
    }
  }
})();

// import css as inline
// link rel id=css href=encoded-dataurl