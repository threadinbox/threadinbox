import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2023-10-16",
});

export async function POST() {
  try {
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "gbp",
            product_data: {
              name: "ThreadInbox Pro",
            },
            unit_amount: 4900, // £49.00
            recurring: {
              interval: "month",
            },
          },
          quantity: 1,
        },
      ],
      success_url: "http://localhost:3000/dashboard",
      cancel_url: "http://localhost:3000",
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Stripe session failed" },
      { status: 500 }
    );
  }
}