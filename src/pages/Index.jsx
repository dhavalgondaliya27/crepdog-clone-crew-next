
import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import CategoriesSection from "@/components/home/CategoriesSection";
import LegitCheckSection from "@/components/home/LegitCheckSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import NewsletterSection from "@/components/home/NewsletterSection";
import BrandsSection from "@/components/home/BrandsSection";
import StatsSection from "@/components/home/StatsSection";
import WhatsHotSection from "@/components/home/WhatsHotSection";
import VideoFeatureSection from "@/components/home/VideoFeatureSection";

const Index = () => {
  useEffect(() => {
    // Add staggered animation to sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
      // Add observer to trigger animations when scrolling
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              section.classList.add('animate-scale-in');
            }, index * 100); // Stagger effect
            observer.unobserve(section);
          }
        });
      }, { threshold: 0.1 });
      
      observer.observe(section);
    });
  }, []);

  return (
    <Layout>
      <HeroSection />
      <WhatsHotSection />
      <StatsSection />
      <FeaturedProducts />
      <VideoFeatureSection />
      <CategoriesSection />
      <BrandsSection />
      <LegitCheckSection />
      <TestimonialsSection />
      <NewsletterSection />
    </Layout>
  );
};

export default Index;
