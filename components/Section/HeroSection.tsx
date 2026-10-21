
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-2 px-6 py-20 md:grid-cols-2 md:py-5">
        {/* Hero content */}
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 px-3 py-1.5 text-sm text-neutral-600">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            Notes from the world of technology
          </div>

          <h1 className="max-w-xl text-4xl font-bold tracking-tight text-black sm:text-5xl md:text-6xl whitespace-nowrap">
            Ideas, code, and
            <span className="text-neutral-400"> everything in between.</span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-7 text-neutral-600 sm:text-lg">
            Practical tutorials, engineering insights, and deep dives
            into the technologies shaping the modern web.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/articles"
              className="rounded-lg bg-[#1F4FD8] px-5 py-3 text-sm font-medium !text-white transition hover:bg-neutral-800"
            >
              Explore articles →
            </Link>

            <Link
              href="/about"
              className="rounded-lg border border-black/10 px-5 py-3 text-sm font-medium text-black transition hover:bg-neutral-100"
            >
              About this blog
            </Link>
          </div>          
        </div>   
        
      </div>
    </section>
  );
}
