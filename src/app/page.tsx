import Image from "next/image";
import { BrandLogo } from "@/components/brand-logo";
import { BrandSymbol } from "@/components/brand-symbol";
import {
  christmasProducts,
  christmasScents,
  featuredProducts,
  kits,
  navigation,
  scentCollections,
  whatsapp,
} from "@/content/site";

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4 10h11m-4-4 4 4-4 4" />
    </svg>
  );
}

function LeafMark() {
  return (
    <svg viewBox="0 0 54 54" aria-hidden="true">
      <path d="M12 43c6-13 14-24 30-32M21 31c-7 0-11-3-12-9 7 0 11 3 12 9Zm7-9c-2-7 1-11 7-14 2 7 0 12-7 14Zm5 8c7-3 12-1 15 5-7 3-12 1-15-5Z" />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand-link" href="#inicio" aria-label="Galene — ir para o início">
          <BrandLogo priority className="header-logo" />
        </a>
        <nav className="site-nav" aria-label="Navegação principal">
          {navigation.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="header-cta" href={whatsapp.href} target="_blank" rel="noreferrer">
          Encomendas
          <ArrowIcon />
        </a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow">Perfumaria para a casa</p>
          <h1>
            Rituais de aroma para <em>transformar o agora.</em>
          </h1>
          <p className="hero-description">
            Fragrâncias feitas para desacelerar o tempo, acolher os sentidos e dar uma nova
            atmosfera aos momentos mais simples.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#produtos">
              Conheça o portfólio
              <ArrowIcon />
            </a>
            <a className="text-link" href="#colecoes">
              Explore os aromas
            </a>
          </div>
          <div className="hero-detail" aria-label="Diferenciais da Galene">
            <span>Produção cuidadosa</span>
            <span aria-hidden="true">•</span>
            <span>Feito sob encomenda</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image-wrap">
            <Image
              src="/images/candle.png"
              alt="Vela aromática Galene em uma composição de tons naturais"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 48vw"
            />
          </div>
          <div className="hero-note">
            <LeafMark />
            <p>
              <strong>Pequenos gestos,</strong>
              grandes transformações.
            </p>
          </div>
        </div>
      </section>

      <section className="manifesto" aria-label="Manifesto da marca">
        <p>
          Um aroma pode mudar a energia de um espaço — e a forma como você se sente dentro dele.
        </p>
      </section>

      <section className="section products-section" id="produtos">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Nosso portfólio</p>
            <h2>Essenciais para perfumar cada pausa</h2>
          </div>
          <p>
            Escolha o formato que acompanha o seu ritmo. Cada peça é preparada com cuidado para
            tornar o cotidiano mais sensorial.
          </p>
        </div>

        <div className="product-grid">
          {featuredProducts.map((product, index) => (
            <article className={`product-card product-card-${index + 1}`} key={product.name}>
              <div className="product-image">
                <Image
                  src={product.image!}
                  alt={product.imageAlt!}
                  fill
                  sizes="(max-width: 720px) 100vw, (max-width: 1080px) 50vw, 33vw"
                />
                <span className="product-number">0{index + 1}</span>
              </div>
              <div className="product-info">
                <div>
                  <h3>{product.name}</h3>
                  <p>{product.size}</p>
                </div>
                <strong>{product.price}</strong>
              </div>
              <p className="product-note">{product.note}</p>
            </article>
          ))}
        </div>

        <div className="order-notice">
          <LeafMark />
          <p>
            <strong>Produtos sob encomenda.</strong> Prazo de produção: 7 dias.
          </p>
        </div>
      </section>

      <section className="section kits-section" aria-labelledby="kits-title">
        <div className="kits-intro">
          <p className="eyebrow">Combinações especiais</p>
          <h2 id="kits-title">Kits para criar, cuidar e presentear</h2>
          <p>
            Duplas e trios pensados para espalhar a mesma sensação por diferentes cantos da casa.
          </p>
        </div>
        <div className="kit-list">
          {kits.map((kit, index) => (
            <article className="kit-card" key={kit.name}>
              <span>0{index + 1}</span>
              <div>
                <h3>{kit.name}</h3>
                <p className="kit-size">{kit.size}</p>
                <p>{kit.note}</p>
              </div>
              <strong>{kit.price}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="section collections-section" id="colecoes">
        <div className="collection-title">
          <p className="eyebrow">Coleções olfativas</p>
          <h2>Qual atmosfera você quer criar?</h2>
        </div>
        <div className="collection-grid">
          {scentCollections.map((collection) => (
            <article className="collection-card" key={collection.name}>
              <BrandSymbol symbol={collection.symbol} />
              <div>
                <h3>{collection.name}</h3>
                <p>{collection.notes}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section christmas-section" id="natal">
        <div className="section-heading christmas-heading">
          <div>
            <p className="eyebrow">Edição de Natal</p>
            <h2>Fragrâncias para celebrar os momentos mais especiais.</h2>
          </div>
          <p>
            Uma coleção criada para perfumar encontros, acender memórias e deixar a casa ainda
            mais acolhedora nesta época.
          </p>
        </div>

        <div className="christmas-scent-grid">
          {christmasScents.map((scent) => (
            <article className="christmas-scent-card" key={scent.name}>
              <div className="christmas-scent-image">
                <Image src={scent.image} alt={scent.imageAlt} fill sizes="(max-width: 720px) 100vw, 25vw" />
              </div>
              <p className="christmas-family">{scent.family}</p>
              <h3>{scent.name}</h3>
              <p>{scent.notes}</p>
            </article>
          ))}
        </div>

        <div className="christmas-products-heading">
          <p className="eyebrow">Presentes especiais</p>
          <h3>Velas especiais de Natal</h3>
          <p>Velas que trazem o encanto do Natal para a sua casa.</p>
        </div>
        <div className="christmas-product-grid">
          {christmasProducts.map((product) => (
            <article className="christmas-product-card" key={product.name}>
              <div className="christmas-product-image">
                <Image src={product.image!} alt={product.imageAlt!} fill sizes="(max-width: 720px) 100vw, 25vw" />
              </div>
              <div>
                <p>{product.size}</p>
                <h3>{product.name}</h3>
              </div>
              <strong>{product.price}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="section story-section" id="sobre">
        <div className="story-image">
          <Image
            src="/images/diffuser.png"
            alt="Difusor de aromas em uma composição acolhedora"
            fill
            sizes="(max-width: 840px) 100vw, 46vw"
          />
        </div>
        <div className="story-copy">
          <p className="eyebrow">A essência Galene</p>
          <h2>A casa também guarda memórias.</h2>
          <p>
            A Galene nasce do desejo de transformar ambientes em refúgios. Entre notas frescas,
            florais e acolhedoras, criamos aromas que ajudam a marcar pausas, encontros e novos
            começos.
          </p>
          <p>
            Cada escolha — do frasco à combinação olfativa — busca trazer beleza, presença e
            calmaria para dentro de casa.
          </p>
          <blockquote>“Aromas que transformam ambientes e criam momentos de calmaria.”</blockquote>
        </div>
      </section>

      <section className="order-section" id="encomendas">
        <p className="eyebrow">Feito para o seu momento</p>
        <h2>Escolha um aroma. Crie uma atmosfera.</h2>
        <p>
          Consulte a disponibilidade pelo WhatsApp: {whatsapp.displayNumber}. Os produtos são
          feitos sob encomenda, com prazo de produção de 7 dias.
        </p>
        <a className="button button-light" href={whatsapp.href} target="_blank" rel="noreferrer">
          Falar pelo WhatsApp
          <ArrowIcon />
        </a>
      </section>

      <footer className="site-footer">
        <div>
          <BrandLogo className="footer-logo" />
          <p>Fragrâncias para transformar a atmosfera e o sentir.</p>
        </div>
        <nav aria-label="Navegação do rodapé">
          {navigation.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <p className="footer-note">© {new Date().getFullYear()} Galene. Todos os direitos reservados.</p>
      </footer>
    </main>
  );
}
