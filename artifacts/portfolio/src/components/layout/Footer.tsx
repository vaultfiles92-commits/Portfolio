export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 border-t border-primary/20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="font-serif text-2xl font-bold mb-2">JP.</p>
          <p className="text-sm text-primary-foreground/70">
            Precision, clarity, and uncompromising quality.
          </p>
        </div>
        
        <div className="text-sm text-primary-foreground/50">
          &copy; {new Date().getFullYear()} Jefferson Perolino. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
