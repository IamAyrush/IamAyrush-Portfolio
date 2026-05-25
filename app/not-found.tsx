import Link from "next/link";

export default function NotFound() {
  return (
    <main className="notFound">
      <div>
        <p className="sectionKicker">404</p>
        <h1>Page not found</h1>
        <p>The portfolio page you are looking for is not available.</p>
        <p className="sectionKicker">
          May be This Person Got The JOB or Life. YOLO.
        </p><br/><br/>
        <Link href="/" className="primaryAction">
          Back home
        </Link>
      </div>
    </main>
  );
}
