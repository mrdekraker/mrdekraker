export default function About() {
  return (
    <main style={{ padding: "2rem", fontFamily: "system-ui, sans-serif" }}>
      <section style={{ maxWidth: "720px", margin: "0 auto" }}>
        <h1>About</h1>
        <p>
          Welcome to the About page. This is a sample page component for your
          Next.js app router.
        </p>
        <p>
          You can update this page with your own content, links, and styling.
        </p>
        <div style={{ marginTop: "1.5rem" }}>
          <h2>What to add here</h2>
          <ul>
            <li>Short introduction</li>
            <li>Team or project description</li>
            <li>Contact or social links</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
