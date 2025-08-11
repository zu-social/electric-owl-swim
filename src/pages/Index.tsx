import { MadeWithDyad } from "@/components/made-with-dyad";
import SaleHero from "@/components/SaleHero";
import ProductShowcase from "@/components/ProductShowcase";
import SaleFeatures from "@/components/SaleFeatures";
import SaleCountdown from "@/components/SaleCountdown";
import NewsletterSignup from "@/components/NewsletterSignup";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SaleHero />
      <ProductShowcase />
      <SaleFeatures />
      <SaleCountdown />
      <NewsletterSignup />
      <MadeWithDyad />
    </div>
  );
};

export default Index;