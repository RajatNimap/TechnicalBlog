
import HeroSection from "@/components/Section/HeroSection";
import ArticleCard from "@/components/articles/ArticleCard";
import Pagination from "@/components/pagination/pagination";
import { getArticles, getLatestArticles } from "@/lib/api/post";

type HomePageProps = {
  searchParams: Promise<{
    page?: string;
  }>;
};

export default async function HomePage({
  searchParams,
}: HomePageProps) {
  const params = await getLatestArticles(1);;

  const parsedPage = Number(params.page ?? "1");

  const currentPage =
    Number.isInteger(parsedPage) && parsedPage > 0
      ? parsedPage
      : 1;

  const {
    articles,
    totalPages,
  } = await getArticles(currentPage);

  return (
    <div>
      <HeroSection />

      <section
        aria-labelledby="latest"
        className="px-6 py-8"
      >
        <h2
          id="latest"
          className="mb-6 text-2xl font-semibold"
        >
          Articles
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard
              key={article.id}
              article={article}
            />
          ))}
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
        />
      </section>
    </div>
  );
}
