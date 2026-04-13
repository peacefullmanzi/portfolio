export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 mt-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-500">
        <p>© {new Date().getFullYear()} Peacefull Manzi. All rights reserved.</p>
        <div className="flex gap-4">
          <span className="text-neutral-600">Built with passion & precision.</span>
        </div>
      </div>
    </footer>
  );
}
