import { DefaultLayout } from "layouts";
import Link from "next/link";
import { Header } from "ui/templates/header";

export default function NotFoundPage() {
  return (
    <DefaultLayout title="Not Found">
      <Header />
      <section className="container flex flex-col items-center justify-center h-full min-h-screen">
        <p className="h-full max-w-2xl mx-auto mb-8 text-5xl text-center">
          Oops. We couldn't find what you're looking for.
        </p>
        <Link href="/" className="text-lg text-blue-500">
          Go back home
        </Link>
      </section>
    </DefaultLayout>
  );
}
