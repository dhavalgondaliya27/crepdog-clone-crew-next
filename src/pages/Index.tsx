
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import CategoriesSection from "@/components/home/CategoriesSection";
import LegitCheckSection from "@/components/home/LegitCheckSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import NewsletterSection from "@/components/home/NewsletterSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturedProducts />
      <CategoriesSection />
      <LegitCheckSection />
      <TestimonialsSection />
      <NewsletterSection />
    </Layout>
  );
};

export default Index;
