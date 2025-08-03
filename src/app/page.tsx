import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";

export default function Page() {
  return (
    <div>
      <Navbar />
      <main className="p-4">
        <h1 className="text-3xl font-bold">Welcome to My App</h1>
        <p>This is the main content area.</p>
      </main>
      <Footer />
    </div>
  );
}
