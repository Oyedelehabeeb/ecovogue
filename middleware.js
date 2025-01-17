// import { NextResponse } from "next/server";
import { auth } from "./app/_lib/auth";

export const middleware = auth;

export const config = {
  matcher: [
    // "/",
    // "/about",
    // "/men",

    // "/women",
    // "/babies",
    "/cart",
    "/cart/shipping",
    "/cart/thank-you",
    "/saved",
    // "/bestseller",
    // "/discountedItems",
    // "/limited-edition-items",
    // "/new-arrivals",
    // "/on-sale",
    // "/shipping",
    // "/thank-you",
    // "/winter-essentials",
  ],
};
