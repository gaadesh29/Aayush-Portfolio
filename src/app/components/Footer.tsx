export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-gray-200 bg-gray-50">
      <div className="max-w-[980px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-center md:text-left">
          <p className="text-xs text-gray-500">
            © 2026 G. Aayush Kumar. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-gray-500">
            <a href="#case-studies" className="hover:text-gray-900 transition-colors">
              Work Experience
            </a>
            <a href="#projects" className="hover:text-gray-900 transition-colors">
              Problems
            </a>
            <a href="#contact" className="hover:text-gray-900 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}