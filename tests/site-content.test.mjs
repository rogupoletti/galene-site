import { describe, it } from "node:test";
import assert from "node:assert/strict";
import {
  featuredProducts,
  kits,
  navigation,
  scentCollections,
  whatsapp,
} from "../src/content/site.ts";

describe("Galene site content", () => {
  it("keeps every navigation entry connected to a page section", () => {
    assert.equal(navigation.length, 4);
    assert.ok(navigation.every((item) => item.href.startsWith("#")));
  });

  it("presents the complete product mix from the supplied catalog", () => {
    assert.deepEqual(
      featuredProducts.map((product) => product.name),
      ["Vela aromática", "Difusor de aromas", "Home spray"],
    );
    assert.equal(kits.length, 4);
  });

  it("includes the three Galene scent collections", () => {
    assert.deepEqual(
      scentCollections.map((collection) => collection.name),
      ["Maré", "Aconchego", "Campo"],
    );
  });

  it("publishes the verified WhatsApp contact", () => {
    assert.equal(whatsapp.displayNumber, "+55 11 96455-7649");
    assert.equal(whatsapp.href, "https://wa.me/5511964557649");
  });
});
