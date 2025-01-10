// "use client";

// import { FaCartPlus, FaHeart } from "react-icons/fa";
// import { addToCart, addToSaved } from "../_lib/actions";
// import { toast } from "sonner";
// import Link from "next/link";

// function ProductMenu() {
//   return (
//     <Link href={`/${}`} className="bg-white rounded-full p-2 hover:scale-110 transition-transform">
//       <FaCartPlus
//         onClick={handleAddToCart}
//         size={36}
//         className="text-customGreen text-2xl"
//       />
//     </Link>
//   );
// }

// export default ProductMenu;

// "use client";

// import { FaCartPlus, FaHeart } from "react-icons/fa";
// import { addToCart, addToSaved } from "../_lib/actions";
// import { toast } from "sonner";

// function ProductMenu({ item }) {
//   async function handleAddToCart() {
//     try {
//       await addToCart({
//         productId: item.productId,
//         name: item.name,
//         size: item.size,
//         color: item.color,
//         price: item.price,
//         imageUrl: item.imageUrl,
//       });
//       toast.success("Item added to cart");
//     } catch (error) {
//       console.error("Error adding to cart:", error);
//       toast.error("Failed to add item to cart");
//     }
//   }

//   async function handleAddToSaved() {
//     try {
//       await addToSaved({
//         productId: item.productId,
//         name: item.name,
//         size: item.size,
//         color: item.color,
//         price: item.price,
//         imageUrl: item.imageUrl,
//       });
//       toast.success("Item added to saved");
//     } catch (error) {
//       console.error("Error adding to saved:", error);
//       toast.error("Failed to add item to saved");
//     }
//   }

//   return (
//     <>
//       <button
//         onClick={handleAddToCart}
//         className="p-2 bg-white rounded-full hover:scale-110 transition-transform"
//       >
//         <FaCartPlus className="text-customGreen text-2xl" />
//       </button>
//       <button
//         onClick={handleAddToSaved}
//         className="p-2 bg-white rounded-full hover:scale-110 transition-transform"
//       >
//         <FaHeart className="text-customGreen text-2xl" />
//       </button>
//     </>
//   );
// }

// export default ProductMenu;
