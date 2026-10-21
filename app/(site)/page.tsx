import HeroSection from "@/components/Section/HeroSection";
import ArticleCard from "@/components/articles/ArticleCard";
import { getLatestArticles } from "@/lib/api/post";

export  default async function HomePage(){
    
    const articles =await getLatestArticles();
    return(
        <div>
            <HeroSection />
            <section aria-labelledby="latest" className="px-6 py-5">
                <h2 id="latest" className="mb-6 text-2xl font-semibold">
                    Latest articles
                </h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {articles.map((article) => (
                        <ArticleCard key={article.id} article={article} />
                    ))}
                </div>
            </section>
        </div>
    )

}