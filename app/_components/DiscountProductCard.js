import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Star } from "lucide-react";

function DiscountProductCard({
  item,
  productId,
  imageUrl,
  name,
  price,
  rating = 0,
  discount,
}) {
  const formatToNaira = (amount) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
    }).format(amount);
  };

  return (
    <article className="product-card group">
      <Link href={`/${productId}`} className="product-media">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
        <span className="product-kicker sale-kicker">Save {formatToNaira(discount)}</span>
        <span className="product-open"><ArrowUpRight size={18} /></span>
      </Link>
      <div className="product-info">
        <div>
          <Link href={`/${productId}`} className="product-name">{name}</Link>
          <div className="product-rating"><Star size={13} fill="currentColor" /><span>{Number(rating).toFixed(1)}</span></div>
        </div>
        <div className="product-sale-price"><s>{formatToNaira(price)}</s><strong>{formatToNaira(price - discount)}</strong></div>
      </div>
    </article>
  );
}

export default DiscountProductCard;
