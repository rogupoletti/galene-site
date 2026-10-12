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
      ["Vela aromática", "Vela aromática", "Difusor de aromas", "Home spray", "Home spray"],
    );
    assert.deepEqual(
      featuredProducts.map((product) => [product.size, product.price]),
      [
        ["60 g", "R$ 20,00"],
        ["180 g", "R$ 50,00"],
        ["50 ml", "R$ 35,00"],
        ["30 ml", "R$ 20,00"],
        ["120 ml", "R$ 50,00"],
      ],
    );
    assert.equal(kits.length, 3);
    assert.deepEqual(kits.at(-1), {
      name: "Kit 3 velas",
      size: "3 × 60 g",
      price: "R$ 55,00",
      note: "Três velas para iluminar e perfumar momentos especiais.",
    });
  });

  it("includes every scent in the supplied catalog", () => {
    assert.deepEqual(
      scentCollections.map((collection) => collection.name),
      [
        "Água de Coco",
        "Algas Marinhas",
        "Vanilla",
        "Chá Branco",
        "Flor de Laranjeira",
        "Cascas e Folhas",
        "Trouss",
      ],
    );
    assert.deepEqual(
      scentCollections.map((collection) => collection.family),
      ["Cítrica", "Aromática", "Adocicada", "Floral fresca", "Floral cítrica", "Verde amadeirada", "Amadeirada"],
    );
  });

  it("includes the Christmas fragrance and candle collection", () => {
    assert.deepEqual(
      christmasScents.map((scent) => scent.name),
      ["Biscoito de Gengibre", "Queima Nozes"],
    );
    assert.ok(christmasScents.every((scent) => !("image" in scent)));
    assert.deepEqual(
      christmasProducts.map((product) => product.price),
      ["R$ 35,00", "R$ 35,00"],
    );
    assert.deepEqual(
      christmasProducts.map((product) => product.image),
      [
        "/images/christmas/vela-pinha-rosa.png",
        "/images/christmas/vela-arvore-colorida.png",
      ],
    );
  });

  it("publishes the verified WhatsApp contact", () => {
    assert.equal(whatsapp.displayNumber, "+55 11 96455-7649");
    assert.equal(whatsapp.href, "https://wa.me/5511964557649");
  });
});
