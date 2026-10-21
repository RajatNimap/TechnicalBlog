import Link from "next/link";
import type { ArticleSummary } from "@/types/post";

export default function ArticleCard({ article }: { article: ArticleSummary }) {
  return (
    <article className="flex flex-col gap-3 rounded-lg border border-line p-5">
      <ul className="flex flex-wrap gap-2">
        {article.tags.map((tag) => (
          <li key={tag}>
            <Link
              href={`/tags/${encodeURIComponent(tag)}`}
              className="rounded-full bg-accent-soft px-3 py-1 text-xs text-accent"
            >
              {tag}
            </Link>
          </li>
        ))}
      </ul>

      <h3 className="text-lg font-semibold">
        <Link href={`/articles/${article.id}`} className="hover:text-accent">
          {article.title}
        </Link>
      </h3>

      <p className="text-sm text-muted">{article.excerpt}</p>

      <p className="text-xs text-muted">{article.views.toLocaleString()} views</p>
    </article>
  );
}