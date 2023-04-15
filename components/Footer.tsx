import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-center h-16 sm:h-20 w-full sm:pt-2 pt-4 border-t mt-5 flex sm:flex-row flex-col justify-between items-center px-3 space-y-3 sm:mb-0 mb-3 text-gray-400">
      <div>
        Powered by{" "}
        <a
          href="https://vercel.com/"
          target="_blank"
          rel="noreferrer"
          className="font-bold transition "
        >
          Vercel.
        </a>
      </div>
      <div className="flex space-x-4 pb-4 sm:pb-0">
        <Link
          href="https://www.linkedin.com/in/vatsal-patel1"
          className="group"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <path
              fill="#0077B5"
              d="M17.8 3H2.2C1.01 3 0 4.01 0 5.2v9.6C0 15.99 1.01 17 2.2 17H17.8c1.19 0 2.2-1.01 2.2-2.2v-9.6C20 4.01 18.99 3 17.8 3zM6.59 16.08H3.69V7.53h2.9zM5.13 6.74c-1.01 0-1.83-.82-1.83-1.83s.82-1.83 1.83-1.83 1.83.82 1.83 1.83-0.82 1.83-1.83 1.83zm10.46 9.34h-2.91v-4.95c0-1.17-.02-2.67-1.63-2.67-1.63 0-1.88 1.28-1.88 2.61v4.01H7.46V7.53h2.73v1.39h.04c.38-0.72 1.3-1.49 2.7-1.49 2.88 0 3.41 1.9 3.41 4.38v5.04z"
            />
          </svg>
        </Link>
        <Link href="https://github.com/VatsalP117" className="group">
          <svg
            aria-hidden="true"
            className="h-6 w-6 fill-slate-500 group-hover:fill-slate-700"
          >
            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
          </svg>
        </Link>
      </div>
    </footer>
  );
}
