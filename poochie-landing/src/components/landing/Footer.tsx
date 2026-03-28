import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-zinc-950 px-6 py-16 text-white sm:py-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-start md:justify-between md:gap-12">
        <div className="flex flex-col gap-3">
          <p className="text-base font-semibold tracking-tight sm:text-lg">
            Poochie Fitness
          </p>
          <p className="max-w-md text-sm text-zinc-500">
            © {year} Poochie Fitness. All rights reserved.
          </p>
        </div>

        <div className="flex flex-col gap-6 md:items-end">
          <a
            href="mailto:hello@poochiefitness.com"
            className="text-sm text-zinc-400 transition duration-300 hover:text-zinc-200"
          >
            hello@poochiefitness.com
          </a>
          <nav aria-label="Legal">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
              <li>
                <Link
                  href="/privacy"
                  className="text-zinc-400 transition duration-300 hover:text-zinc-200"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <span className="text-zinc-600">Terms</span>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
