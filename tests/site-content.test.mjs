import { describe, it } from "node:test";
import assert from "node:assert/strict";
import {
  featuredProducts,
  christmasProducts,
  christmasScents,
  kits,
  navigation,
  scentCollections,
  whatsapp,
} from "../src/content/site.ts";

describe("Galene site content", () => {
  it("keeps every navigation entry connected to a page section", () => {
    assert.equal(navigation.length, 5);
    assert.ok(navigation.every((item) => item.href.startsWith("#")));
  });

  it("presents the complete product mix from the supplied catalog", () => {
    assert.deepEqual(
      featuredProducts.map((product) => product.name),
      ["Vela aromática", "Difusor de aromas", "Home spray"],
    );
    assert.equal(kits.length, 4);
    assert.deepEqual(kits.at(-1), {
      name: "Kit 3 velas",
      size: "3 × 50 g",
      price: "$55",
      note: "Três velas para iluminar e perfumar momentos especiais.",
    });
  });

  it("includes the three Galene scent collections", () => {
    assert.deepEqual(
      scentCollections.map((collection) => collection.name),
      ["Maré", "Aconchego", "Campo"],
    );
  });

  it("includes the Christmas fragrance and candle collection", () => {
    assert.deepEqual(
      christmasScents.map((scent) => scent.name),
      ["Biscoito de Gengibre", "Noite Feliz", "Queima Nozes", "Panetone"],
    );
    assert.deepEqual(
      christmasProducts.map((product) => product.price),
      ["R$ 35,00", "R$ 35,00", "R$ 30,00", "R$ 65,00"],
    );
  });

  it("publishes the verified WhatsApp contact", () => {
    assert.equal(whatsapp.displayNumber, "+55 11 96455-7649");
    assert.equal(whatsapp.href, "https://wa.me/5511964557649");
  });
});
