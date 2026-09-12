import { useMemo, useState } from "react";
import { categories, products } from "./data/products";
import logoImage from "./assets/goutham-logo.png";

const WHATSAPP_NUMBER = "916369358582";
const WHATSAPP_GROUP_URL = "https://chat.whatsapp.com/FTLb0qftGpE2Y2OkLYIh89";
const STORE_PHONE = "6369358582";
const MAP_URL = "https://maps.app.goo.gl/oh5NAcawMP2Z6bgB7";

function formatPrice(value) {
  return `₹${value.toLocaleString("en-IN")}`;
}

function Logo() {
  return (
    <a className="brand" href="#home" aria-label="Goutham Computers home">
      <img className="brand-logo" src={logoImage} alt="Goutham Computers" />
    </a>
  );
}

function Icon({ children, className = "" }) {
  return <span className={`icon ${className}`}>{children}</span>;
}

function Header({ search, setSearch, cartCount, onOpenCart }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMenu = () => setMobileOpen(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Logo />

        <nav className={`main-nav ${mobileOpen ? "is-open" : ""}`}>
          <a href="#shop" onClick={closeMenu}>Shop</a>
          <a href="#new-arrivals" onClick={closeMenu}>New Arrivals</a>
          <a href="#best-sellers" onClick={closeMenu}>Best Sellers</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>

        <div className="header-actions">
          <label className="header-search" aria-label="Search products">
            <Icon>⌕</Icon>
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search"
            />
          </label>

          <a className="header-icon" href={`tel:${STORE_PHONE}`} aria-label="Call Goutham Computers">
            <Icon>📞</Icon>
          </a>

          <button
            className="cart-button"
            type="button"
            onClick={onOpenCart}
            aria-label={`Open cart with ${cartCount} items`}
          >
            <Icon>🛒</Icon>
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </button>

          <button
            className="menu-button"
            type="button"
            onClick={() => setMobileOpen((value) => !value)}
            aria-label="Toggle navigation"
          >
            ☰
          </button>
        </div>
      </div>
    </header>
  );
}

function Hero({ onShop }) {
  return (
    <section className="hero" id="home">
      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />

      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">Computer • CCTV • Networking</span>
          <h1>
            Your Trusted Tech Partner
            <br />
            <span>for Home & Business</span>
          </h1>
          <p>
            Computers, laptops, accessories and CCTV security solutions with
            dependable sales, installation and service.
          </p>

          <div className="hero-actions">
            <button className="btn btn-primary" type="button" onClick={onShop}>
              Shop Now
            </button>
            <a className="btn btn-outline" href="#services">
              Explore Services
            </a>
          </div>

          <div className="hero-points">
            <span>✓ Genuine products</span>
            <span>✓ PC Installation support</span>
            <span>✓ Local service</span>
            <span>✓ Onsite Service Support</span>
            <span>✓ Chip Level service</span>
            <span>✓ Data Recovery</span>
            <span>✓ Virus Removal</span>
            <span>✓ CCTV</span>
          </div>
        </div>

        <div className="hero-products" aria-label="Featured technology">
          <div className="hero-device hero-laptop">
            <div className="laptop-screen">
              <div className="screen-top" />
              <div className="screen-card">
                <span>TECH</span>
                <strong>SECURE</strong>
              </div>
            </div>
            <div className="laptop-base" />
          </div>

          <div className="hero-device hero-camera">
            <div className="camera-lens">
              <span />
            </div>
            <div className="camera-body" />
            <div className="camera-stand" />
          </div>

          <div className="hero-device hero-cctv">
            <div className="cctv-head" />
            <div className="cctv-arm" />
            <div className="cctv-base" />
          </div>

          <div className="hero-orb orb-one" />
          <div className="hero-orb orb-two" />
        </div>
      </div>
    </section>
  );
}

function BenefitBar() {
  return (
    <section className="benefit-bar">
      <div className="container benefit-grid">
        <div className="benefit">
          <span className="benefit-icon">✓</span>
          <div>
            <strong>Fast Local Support</strong>
            <span>Sales & service assistance</span>
          </div>
        </div>
        <div className="benefit">
          <span className="benefit-icon">▣</span>
          <div>
            <strong>Installation Available</strong>
            <span>CCTV & networking setup</span>
          </div>
        </div>
        <div className="benefit">
          <span className="benefit-icon">◈</span>
          <div>
            <strong>Trusted Solutions</strong>
            <span>Home, shop & office tech</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product, onView, onBuy, onAddToCart, onRemove, cartQuantity = 0 }) {
  return (
    <article className="product-card">
      <button className="product-image-button" type="button" onClick={() => onView(product)}>
        {product.badge && <span className="product-badge">{product.badge}</span>}
        <img src={product.images[0]} alt={product.name} loading="lazy" />
        <span className="view-overlay">View Details</span>
      </button>

      <div className="product-content">
        <span className="product-category">{product.category}</span>
        <h3>{product.name}</h3>
        <div className="product-price">
          <strong>{formatPrice(product.price)}</strong>
          {product.oldPrice && <del>{formatPrice(product.oldPrice)}</del>}
        </div>

        <div className="product-buttons">
          <button className="btn btn-primary btn-small" type="button" onClick={() => onBuy(product)}>
            Buy Now
          </button>

          {cartQuantity > 0 ? (
            <div className="quantity-control" aria-label={`Quantity for ${product.name}`}>
              <button type="button" className="qty-button" onClick={() => onRemove(product.id)} aria-label={`Remove one ${product.name}`}>
                −
              </button>
              <span>{cartQuantity}</span>
              <button type="button" className="qty-button" onClick={() => onAddToCart(product)} aria-label={`Add one ${product.name}`}>
                +
              </button>
            </div>
          ) : (
            <button className="btn btn-soft btn-small" type="button" onClick={() => onAddToCart(product)}>
              Add
            </button>
          )}
        </div>
      </div>
    </article>
  );
}

function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="section-heading">
      <div>
        {eyebrow && <span className="eyebrow dark">{eyebrow}</span>}
        <h2>{title}</h2>
      </div>
      {text && <p>{text}</p>}
    </div>
  );
}

function ProductModal({ product, onClose, onBuy, onAddToCart }) {
  const [slide, setSlide] = useState(0);

  if (!product) {
    return null;
  }

  const nextSlide = () => {
    setSlide((current) => (current + 1) % product.images.length);
  };

  const previousSlide = () => {
    setSlide(
      (current) => (current - 1 + product.images.length) % product.images.length
    );
  };

  return (
    <div className="modal-backdrop" onMouseDown={onClose}>
      <div className="product-modal" onMouseDown={(event) => event.stopPropagation()}>
        <button className="modal-close" type="button" onClick={onClose} aria-label="Close">
          ×
        </button>

        <div className="modal-gallery">
          <button className="gallery-arrow left" type="button" onClick={previousSlide}>
            ‹
          </button>

          <img src={product.images[slide]} alt={`${product.name} view ${slide + 1}`} />

          <button className="gallery-arrow right" type="button" onClick={nextSlide}>
            ›
          </button>

          <div className="gallery-dots">
            {product.images.map((_, index) => (
              <button
                key={index}
                className={index === slide ? "active" : ""}
                type="button"
                onClick={() => setSlide(index)}
                aria-label={`Show image ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="modal-info">
          <span className="product-category">{product.category}</span>
          <h2>{product.name}</h2>
          <p className="modal-price">{formatPrice(product.price)}</p>
          {product.oldPrice && <del>{formatPrice(product.oldPrice)}</del>}

          <p className="modal-description">{product.description}</p>

          <ul className="feature-list">
            {product.features.map((feature) => (
              <li key={feature}>✓ {feature}</li>
            ))}
          </ul>

          <div className="modal-meta">
            <span>SKU: {product.sku}</span>
            {product.serviceAvailable && <span>Service available</span>}
          </div>

          <div className="modal-actions">
            <button className="btn btn-primary" type="button" onClick={() => onBuy(product)}>
              Buy / Enquire on WhatsApp
            </button>
            <button className="btn btn-soft" type="button" onClick={() => onAddToCart(product)}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function PromoBanner({ onShop }) {
  return (
    <section className="promo-wrap">
      <div className="container">
        <div className="promo-banner">
          <div className="promo-content">
            <span className="eyebrow">Professional IT & Security</span>
            <h2>Build a Smarter, Safer Workspace</h2>
            <p>Computer upgrades, CCTV installation, networking and maintenance.</p>
            <button className="btn btn-primary" type="button" onClick={onShop}>
              Browse Products
            </button>
          </div>

          <div className="promo-visual">
            <div className="promo-monitor" />
            <div className="promo-keyboard" />
            <div className="promo-mouse" />
            <div className="promo-cam" />
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ icon, title, text }) {
  return (
    <article className="service-card">
      <div className="service-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{text}</p>
      <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi Goutham Computers, I need information about ${title}.`)}`} target="_blank" rel="noreferrer">
        Enquire on WhatsApp →
      </a>
    </article>
  );
}

function About() {
  return (
    <section className="about-section" id="about">
      <div className="container about-grid">
        <div className="about-copy">
          <span className="eyebrow dark">About Goutham Computers</span>
          <h2>Technology that works for you.</h2>
          <p>
            Goutham Computers is a computer and CCTV sales & service concept built for
            homes, shops, offices and growing businesses. We provide product
            guidance, installation assistance, upgrades, maintenance and
            security solutions.
          </p>

          <div className="about-stats">
            <div>
              <strong>PC</strong>
              <span>Sales & Upgrades</span>
            </div>
            <div>
              <strong>CCTV</strong>
              <span>Install & Service</span>
            </div>
            <div>
              <strong>IT</strong>
              <span>Support & Network</span>
            </div>
          </div>
        </div>

        <div className="map-card">
          <div className="map-pattern">
            <span className="map-road road-one" />
            <span className="map-road road-two" />
            <span className="map-road road-three" />
            <span className="map-block block-one" />
            <span className="map-block block-two" />
            <span className="map-block block-three" />
            <span className="map-pin">●</span>
          </div>

          <div className="map-overlay">
            <span className="map-label">Our Location</span>
            <strong>Goutham Computers Store & Service</strong>
            <p>Visit us for computers, CCTV and IT support.</p>
            <a
              className="btn btn-primary btn-small"
              href={MAP_URL}
              target="_blank"
              rel="noreferrer"
            >
              Open Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Newsletter() {
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const subscribe = (event) => {
    event.preventDefault();

    const trimmedPhone = phone.trim();

    if (!trimmedPhone) {
      setMessage("Please enter your WhatsApp number.");
      return;
    }

    const formattedMessage = `Hi Goutham Computers, I want to join the WhatsApp group. My number is ${trimmedPhone}.`;
    const url = `${WHATSAPP_GROUP_URL}?text=${encodeURIComponent(formattedMessage)}`;

    window.open(url, "_blank", "noopener,noreferrer");
    setMessage("Thanks! Your WhatsApp number has been sent to the group invite.");
    setPhone("");
  };

  return (
    <section className="newsletter">
      <div className="container newsletter-inner">
        <div>
          <span className="eyebrow">Stay Connected</span>
          <h2>Join Our WhatsApp Group</h2>
          <p>Enter your WhatsApp number and join the latest updates.</p>
        </div>

        <form onSubmit={subscribe}>
          <input
            type="tel"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            placeholder="Enter your WhatsApp number"
            aria-label="WhatsApp number"
          />
          <button className="btn btn-primary" type="submit">
            Join Now
          </button>
        </form>

        {message && <span className="newsletter-message">{message}</span>}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Logo />
          <p>
            Computer sales, CCTV security, networking and reliable local
            technical service.
          </p>
          <a href={`tel:${STORE_PHONE}`}>📞 {STORE_PHONE}</a>
          <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer">
            💬 WhatsApp
          </a>
        </div>

        <div>
          <h3>Quick Links</h3>
          <a href="#shop">Shop</a>
          <a href="#new-arrivals">New Arrivals</a>
          <a href="#best-sellers">Best Sellers</a>
          <a href="#about">About Us</a>
        </div>

        <div>
          <h3>Services</h3>
          <a href="#services">CCTV Installation</a>
          <a href="#services">Computer Service</a>
          <a href="#services">Networking</a>
          <a href="#services">Upgrades</a>
        </div>

        <div>
          <h3>Visit</h3>
          <p>Computer & CCTV Sales</p>
          <p>Installation & Maintenance</p>
          <a href={MAP_URL} target="_blank" rel="noreferrer">
            View Google Maps →
          </a>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© 2026 Goutham Computers. All Rights Reserved.</span>
        <span>Computer • CCTV • Networking • Service</span>
      </div>
    </footer>
  );
}

function CartDrawer({ items, onClose, onAddToCart, onRemove, onBuyAll }) {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="drawer-backdrop" onMouseDown={onClose}>
      <aside className="cart-drawer" onMouseDown={(event) => event.stopPropagation()}>
        <div className="drawer-header">
          <div>
            <span className="eyebrow dark">Your Selection</span>
            <h2>Cart</h2>
          </div>
          <button type="button" className="modal-close" onClick={onClose}>
            ×
          </button>
        </div>

        {items.length === 0 ? (
          <div className="empty-cart">
            <div className="empty-icon">🛒</div>
            <h3>Your cart is empty</h3>
            <p>Add a product to quickly enquire about multiple items.</p>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {items.map((item) => (
                <div className="cart-item" key={item.id}>
                  <img src={item.images[0]} alt={item.name} />
                  <div>
                    <strong>{item.name}</strong>
                    <span>{formatPrice(item.price)} × {item.quantity}</span>
                    <div className="cart-item-actions">
                      <button type="button" className="qty-button small" onClick={() => onRemove(item.id)} aria-label={`Remove one ${item.name}`}>
                        −
                      </button>
                      <span>{item.quantity}</span>
                      <button type="button" className="qty-button small" onClick={() => onAddToCart(item)} aria-label={`Add one ${item.name}`}>
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-total">
              <span>Estimated total</span>
              <strong>{formatPrice(total)}</strong>
            </div>

            <button className="btn btn-primary full-width" type="button" onClick={onBuyAll}>
              Enquire About All Items
            </button>
          </>
        )}
      </aside>
    </div>
  );
}

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return products.filter((product) => {
      const categoryMatches =
        category === "All" || product.category === category;

      const searchMatches =
        !normalizedSearch ||
        product.name.toLowerCase().includes(normalizedSearch) ||
        product.category.toLowerCase().includes(normalizedSearch) ||
        product.description.toLowerCase().includes(normalizedSearch);

      return categoryMatches && searchMatches;
    });
  }, [search, category]);

  const featuredProducts = products.filter((product) => product.featured);
  const newProducts = products.filter(
    (product) => product.badge === "New" || product.badge === "Hot"
  );
  const bestSellers = products.filter(
    (product) =>
      product.badge === "Best Seller" ||
      product.badge === "Popular" ||
      product.badge === "Recommended"
  );

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const openShop = () => {
    document.getElementById("shop")?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };

  const addToCart = (product) => {
    setCartItems((current) => {
      const existing = current.find((item) => item.id === product.id);

      if (existing) {
        return current.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...current, { ...product, quantity: 1 }];
    });

    setSelectedProduct(null);
  };

  const removeFromCart = (productId) => {
    setCartItems((current) =>
      current
        .map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const buyProduct = (product) => {
    const message = [
      "Hi Goutham Computers, I want to buy/enquire about this item:",
      "",
      `Product: ${product.name}`,
      `Category: ${product.category}`,
      `Price: ${formatPrice(product.price)}`,
      `SKU: ${product.sku}`,
      "",
      "Please share availability, delivery/installation details and final price."
    ].join("\n");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const buyAll = () => {
    if (cartItems.length === 0) {
      return;
    }

    const lines = cartItems.map(
      (item) =>
        `• ${item.name} — ${formatPrice(item.price)} × ${item.quantity}`
    );

    const total = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    const message = [
      "Hi Goutham Computers, I want to enquire about these items:",
      "",
      ...lines,
      "",
      `Estimated total: ${formatPrice(total)}`,
      "",
      "Please confirm availability and final price."
    ].join("\n");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <Header
        search={search}
        setSearch={setSearch}
        cartCount={cartCount}
        onOpenCart={() => setCartOpen(true)}
      />

      <main>
        <Hero onShop={openShop} />
        <BenefitBar />

        <section className="section products-section" id="shop">
          <div className="container">
            <SectionHeading
              eyebrow="Shop Goutham Computers"
              title="Featured Products"
              text="Computers, accessories and CCTV solutions selected for home, office and business use."
            />

            <div className="category-row">
              {categories.map((item) => (
                <button
                  key={item}
                  type="button"
                  className={category === item ? "category-button active" : "category-button"}
                  onClick={() => setCategory(item)}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="product-grid">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onView={setSelectedProduct}
                  onBuy={buyProduct}
                  onAddToCart={addToCart}
                  onRemove={removeFromCart}
                  cartQuantity={
                    cartItems.find((item) => item.id === product.id)?.quantity ?? 0
                  }
                />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="no-results">
                <h3>No products found</h3>
                <p>Try another search or category.</p>
              </div>
            )}
          </div>
        </section>

        <PromoBanner onShop={openShop} />

        <section className="section compact-section" id="new-arrivals">
          <div className="container">
            <SectionHeading
              eyebrow="Fresh Stock"
              title="New Arrivals"
              text="New products and fresh service options added to the Goutham Computers catalogue."
            />

            <div className="mini-product-grid">
              {newProducts.slice(0, 4).map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onView={setSelectedProduct}
                  onBuy={buyProduct}
                  onAddToCart={addToCart}
                  onRemove={removeFromCart}
                  cartQuantity={
                    cartItems.find((item) => item.id === product.id)?.quantity ?? 0
                  }
                />
              ))}
            </div>
          </div>
        </section>

        <section className="section best-section" id="best-sellers">
          <div className="container">
            <SectionHeading
              eyebrow="Customer Favourites"
              title="Best Sellers"
              text="Popular computer, CCTV and networking choices for everyday needs."
            />

            <div className="best-layout">
              <div className="best-copy">
                <span className="best-icon">◈</span>
                <h3>Security + Performance</h3>
                <p>
                  Upgrade your setup with CCTV monitoring, storage, computers,
                  networking and dependable installation support.
                </p>
                <button className="btn btn-primary" type="button" onClick={openShop}>
                  Shop Best Sellers
                </button>
              </div>

              <div className="best-products">
                {bestSellers.slice(0, 3).map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onView={setSelectedProduct}
                    onBuy={buyProduct}
                    onAddToCart={addToCart}
                    onRemove={removeFromCart}
                    cartQuantity={
                      cartItems.find((item) => item.id === product.id)?.quantity ?? 0
                    }
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section services-section" id="services">
          <div className="container">
            <SectionHeading
              eyebrow="Sales & Service"
              title="Complete Tech Support"
              text="From choosing the right computer to installing CCTV, Goutham Computers is designed around one-stop local support."
            />

            <div className="services-grid">
              <ServiceCard
                icon="⌘"
                title="Computer Sales & Upgrades"
                text="Desktops, laptops, monitors, SSDs, RAM, peripherals and upgrade guidance."
              />
              <ServiceCard
                icon="◉"
                title="CCTV Installation"
                text="Camera installation, DVR setup, cable routing, configuration and mobile viewing."
              />
              <ServiceCard
                icon="⌁"
                title="Networking Setup"
                text="Cat6 cabling, routers, switches, office networking and CCTV network support."
              />
              <ServiceCard
                icon="⚙"
                title="Computer Service"
                text="Cleaning, inspection, troubleshooting, upgrades and maintenance support."
              />
            </div>
          </div>
        </section>

        <About />
        <Newsletter />
      </main>

      <Footer />

      <a
        className="floating-whatsapp"
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi Goutham Computers, I need information about your products and services.")}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Goutham Computers on WhatsApp"
      >
        <span>💬</span>
      </a>

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onBuy={buyProduct}
        onAddToCart={addToCart}
      />

      {cartOpen && (
        <CartDrawer
          items={cartItems}
          onClose={() => setCartOpen(false)}
          onAddToCart={addToCart}
          onRemove={removeFromCart}
          onBuyAll={buyAll}
        />
      )}
    </>
  );
}

export default App;
