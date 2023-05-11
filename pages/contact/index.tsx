import Link from "next/link";
import MainLayout from "../../components/layouts/MainLayout";

export default function Contact() {
  return (
    <MainLayout>
      <h1>Contact page</h1>
      <h2 className="title">
        Ir a <Link href="/home">Home</Link>
      </h2>
      <div>
        <p className="description">
          Get started by editing{" "}
          <code className="code">pages/contact/index.js</code>
        </p>
      </div>
    </MainLayout>
  );
}
