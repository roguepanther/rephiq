import Link from "next/link";

export default function LegalPageHeader() {
  return (
    <header className="border-b border-white/5 bg-zinc-950">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-5">
        <Link
          href="/"
          className="text-base font-semibold tracking-tight text-white transition duration-300 hover:text-zinc-200"
        >
          Rephiq
        </Link>
        <Link
          href="/"
          className="text-sm text-zinc-400 transition duration-300 hover:text-zinc-200"
        >
          Home
        </Link>
      </div>
    </header>
  );
}
