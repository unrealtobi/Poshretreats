import assert from "node:assert/strict";
import test from "node:test";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { createServer } from "vite";

test("places the travel protection message after the legal links and renders the three new logos", async () => {
  const vite = await createServer({
    appType: "custom",
    logLevel: "silent",
    server: { middlewareMode: true },
  });

  try {
    const { default: Footer } = await vite.ssrLoadModule(
      "/src/Components/PageyComponents/Footer.jsx",
    );
    const html = renderToStaticMarkup(React.createElement(Footer));

    const legalLinksPosition = html.indexOf("Terms &amp; Conditions");
    const protectionMessagePosition = html.indexOf("Travel with Confidence");

    assert.notEqual(legalLinksPosition, -1, "renders the legal links");
    assert.notEqual(
      protectionMessagePosition,
      -1,
      "renders the travel protection message",
    );
    assert.ok(
      legalLinksPosition < protectionMessagePosition,
      "places the protection message below the legal links",
    );

    assert.match(html, /alt="ATOL Protected 12564"/);
    assert.match(html, /alt="PTS member 6090"/);
    assert.match(html, /alt="Powered by JLT Group"/);
    assert.doesNotMatch(html, /ABTA Travel Logo/);
  } finally {
    await vite.close();
  }
});
