export function Footer() {
  return (
    <footer className="px-10 xl:px-16 py-8 border-t border-border">
      <div className="text-[13px] text-muted-foreground space-y-1">
        <p>&copy; {new Date().getFullYear()} Jefferson Perolino. All rights reserved.</p>
        <p>Virtual Assistant &middot; Financial Management &middot; Professional Writing</p>
      </div>
    </footer>
  );
}
