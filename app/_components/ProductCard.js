import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Star } from "lucide-react";

function money(amount) {
  return new Intl.NumberFormat("en-NG", { style: "currency", currency: "NGN", maximumFractionDigits: 0 }).format(amount);
}

export default function ProductCard({ productId, imageUrl, name, price, rating = 0 }) {
  return (
    <article className="product-card group">
      <Link href={`/${productId}`} className="product-media" aria-label={`View ${name}`}>
        <Image src={imageUrl} alt={name} fill className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw" />
        <span className="product-kicker">Considered piece</span>
        <span className="product-open"><ArrowUpRight size={18} /></span>
      </Link>
      <div className="product-info">
        <div>
          <Link href={`/${productId}`} className="product-name">{name}</Link>
          <div className="product-rating"><Star size={13} fill="currentColor" /><span>{Number(rating).toFixed(1)}</span></div>
        </div>
        <span className="product-price">{money(price)}</span>
      </div>
    </article>
  );
}
