export default function Footer() {
  return (
    <footer className="bg-card py-8 px-6 md:px-12 text-center text-foreground/70 border-t border-border">
      <div className="container mx-auto">
        <p>
          &copy; {new Date().getFullYear()} Mir Afzal khan. All rights reserved.
        </p>
        <p className="mt-2 text-sm">
          Crafted with passion using Next.js, Tailwind CSS, and GSAP.
        </p>
      </div>
    </footer>
  );
}
