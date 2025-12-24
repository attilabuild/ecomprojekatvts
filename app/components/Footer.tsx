import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a2e] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">CodeAcademy</h3>
            <p className="text-gray-400">
              Learn programming skills with our comprehensive courses. Start your coding journey today!
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Courses</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/#courses" className="hover:text-white transition-colors">Python</Link></li>
              <li><Link href="/#courses" className="hover:text-white transition-colors">Web Development</Link></li>
              <li><Link href="/#courses" className="hover:text-white transition-colors">React</Link></li>
              <li><Link href="/#courses" className="hover:text-white transition-colors">Database</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/#about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/#contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 CodeAcademy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

