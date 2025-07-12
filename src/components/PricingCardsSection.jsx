import PricingCard from "./PricingCard";
import cardData from "../data/cardData";

export default function PricingCardsSection() {
  return (
    <section className="bg-white py-20 px-4 md:px-12">
      <div className="flex flex-wrap justify-center gap-10">
        {cardData.map((card, i) => (
          <PricingCard
            key={i}
            title={card.title}
            price={card.price}
            image={card.image}
            index={i}
          />
        ))}
      </div>
    </section>
  );
}
