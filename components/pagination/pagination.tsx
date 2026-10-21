
import Link from "next/link";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
};

export default function Pagination({
  currentPage,
  totalPages,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const getPageUrl = (page: number) =>
    page === 1 ? "/" : `/?page=${page}`;

  const pages = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  ).filter(
    (page) =>
      page === 1 ||
      page === totalPages ||
      Math.abs(page - currentPage) <= 1
  );

  return (
    <nav
      aria-label="Article pagination"
      className="mt-10 flex flex-wrap items-center justify-center gap-2"
    >
      {/* Previous */}
      {currentPage > 1 ? (
        <Link
          href={getPageUrl(currentPage - 1)}
          className="rounded-lg border px-4 py-2 text-sm hover:bg-gray-100"
        >
          Previous
        </Link>
      ) : (
        <span className="cursor-not-allowed rounded-lg border px-4 py-2 text-sm text-gray-400">
          Previous
        </span>
      )}

      {/* Page numbers */}
      {pages.map((page, index) => {
        const previousPage = pages[index - 1];

        return (
          <span key={page} className="flex items-center gap-2">
            {previousPage && page - previousPage > 1 && (
              <span className="px-1 text-gray-500" aria-hidden="true">
                ...
              </span>
            )}

            <Link
              href={getPageUrl(page)}
              aria-current={
                page === currentPage ? "page" : undefined
              }
              className={`flex h-10 min-w-10 items-center justify-center rounded-lg border px-3 text-sm transition ${
                page === currentPage
                  ? "border-black bg-black text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              {page}
            </Link>
          </span>
        );
      })}

      {/* Next */}
      {currentPage < totalPages ? (
        <Link
          href={getPageUrl(currentPage + 1)}
          className="rounded-lg border px-4 py-2 text-sm hover:bg-gray-100"
        >
          Next
        </Link>
      ) : (
        <span className="cursor-not-allowed rounded-lg border px-4 py-2 text-sm text-gray-400">
          Next
        </span>
      )}
    </nav>
  );
}
