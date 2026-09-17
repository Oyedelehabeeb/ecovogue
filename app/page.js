import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Leaf, RotateCcw, Truck } from "lucide-react";
import heroImage from "@/public/hero-ecovogue-v2.png";
import editorialImage from "@/public/trad-02.jpg";
import { getCategories, getFeatured, getTrending } from "./_lib/data-service";
import ProductCard from "./_components/ProductCard";

export const revalidate = 20;

function ProductRail({ eyebrow, title, products, href }) {
  return (
    <section className="section-shell">
      <div className="section-heading">
        <div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2></div>
        <Link href={href} className="text-link">Explore all <ArrowUpRight size={16} /></Link>
      </div>
      <div className="product-rail">
        {products.slice(0, 4).map((product) => (
          <ProductCard key={product.id} productId={product.productId} imageUrl={product.imageUrl} name={product.name} price={product.price} rating={product.rating} item={product} />
        ))}
      </div>
    </section>
  );
}

export default async function Home() {
  const [categories, featured, trending] = await Promise.all([getCategories(), getFeatured(), getTrending()]);
  return (
    <div className="home-page">
      <section className="hero-shell">
        <Image src={heroImage} alt="Ecovogue models wearing considered natural-fibre essentials" fill priority quality={95} className="hero-image object-cover" sizes="100vw" />
        <div className="hero-wash" />
        <div className="hero-content">
          <p className="eyebrow text-white/75">The new essentials · 2026</p>
          <h1>Wear what<br />you stand for.</h1>
          <p className="hero-copy">Considered clothing with a modern point of view. Designed to live beautifully, made to last beyond the season.</p>
          <div className="hero-actions">
            <Link href="/women" className="button button-light">Shop women</Link>
            <Link href="/men" className="button button-ghost">Shop men</Link>
          </div>
        </div>
        <p className="hero-note">Thoughtfully made · Responsibly sourced</p>
      </section>

      <div className="trust-strip">
        <span><Leaf size={17} /> Lower-impact materials</span>
        <span><Truck size={17} /> Complimentary delivery over ₦50,000</span>
        <span><RotateCcw size={17} /> Easy 14-day returns</span>
      </div>

      <section className="section-shell category-block">
        <div className="section-heading"><div><p className="eyebrow">Find your edit</p><h2>Shop by world</h2></div></div>
        <div className="category-grid">
          <Link href="/women" className="category-card category-women"><span>Women</span><small>The modern wardrobe</small></Link>
          <Link href="/men" className="category-card category-men"><span>Men</span><small>Quiet confidence</small></Link>
          <Link href="/babies" className="category-card category-little"><span>Little ones</span><small>Soft on every level</small></Link>
        </div>
      </section>

      <ProductRail eyebrow="Curated for now" title="The Ecovogue edit" products={featured.length ? featured : categories} href="/bestseller" />

      <section className="editorial-banner">
        <div className="editorial-image"><Image src={editorialImage} alt="Celebration of African craft" fill className="object-cover" sizes="(max-width: 768px) 100vw, 52vw" /></div>
        <div className="editorial-copy">
          <p className="eyebrow">Our point of view</p><h2>Rooted in craft.<br />Made for now.</h2>
          <p>We pair enduring silhouettes with rich cultural expression, working toward a wardrobe with more meaning and less waste.</p>
          <Link href="/about" className="text-link">Discover our story <ArrowUpRight size={16} /></Link>
        </div>
      </section>

      <ProductRail eyebrow="Most wanted" title="Trending now" products={trending} href="/new-arrivals" />
      <section className="newsletter-block">
        <p className="eyebrow">The Ecovogue letter</p><h2>A slower inbox.</h2>
        <p>New collections, material stories and private offers—sent thoughtfully.</p>
        <form className="newsletter-form"><input type="email" aria-label="Email address" placeholder="Your email address" /><button type="submit">Join the list <ArrowUpRight size={16} /></button></form>
      </section>
    </div>
  );
}
