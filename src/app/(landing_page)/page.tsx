import CompaniesHomepage from "@/components/parts/Homepage/CompaniesHomepage";
import FAQHomepage from "@/components/parts/Homepage/FAQHomepage";
import HeroHomepage from "@/components/parts/Homepage/HeroHomepage";
import RecomendationCourseHomepage from "@/components/parts/Homepage/RecomendationCourseHomepage";
import TechnologiesHomepage from "@/components/parts/Homepage/TechnologiesHomepage";

export default function Home() {
  return (
    <main className=" mt-24 md:mt-40 lg:mt-48 min-h-screen">
      <HeroHomepage />
      <CompaniesHomepage />
      <RecomendationCourseHomepage />
      <TechnologiesHomepage />
      <FAQHomepage />
    </main>
  );
}
