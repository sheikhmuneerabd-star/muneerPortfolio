"use client";
export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <main className="grid min-h-screen place-items-center px-5 text-center">
      <div><h1 className="mb-2 text-2xl font-extrabold">Something went wrong</h1><button onClick={reset} className="btn btn-primary">Try again</button></div>
    </main>
  );
}
