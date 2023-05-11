import Link from "next/link";
import MainLayout from "../components/layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <h1>Home page</h1>
      <h2 className="title">
        Ir a <Link href="/about">About</Link>
      </h2>
      <div>
        <p className="description">
          Get started by editing <code className="code">pages/index.js</code>
        </p>
      </div>
    </MainLayout>
  );
}
