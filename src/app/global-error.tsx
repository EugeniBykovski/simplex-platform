"use client";

import "@/styles/globals.css";

/**
 * Last resort, when the root layout itself fails. Messages and the locale may be unavailable here,
 * so it shows both languages. Never show error details.
 */
export default function GlobalError({ retry }: { error: Error; retry: () => void }) {
  return (
    <html lang="en">
      <body>
        <div className="sx">
          <main className="bg-ink flex min-h-[1100px] items-center overflow-hidden p-[200px_0_120px]">
            <div className="wrap flex flex-col gap-[32px]">
              <h1 className="t-h1">Something went wrong.</h1>
              <p className="t-lead" lang="ru">
                Что-то пошло не так.
              </p>
              <div className="flex flex-wrap items-center gap-[8px]">
                <button className="btn btn-light" type="button" onClick={() => retry()}>
                  Try again · <span lang="ru">Повторить</span>
                </button>
              </div>
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
