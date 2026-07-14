import { Link } from "react-router-dom";
import Container from "../ui/Container";

const Footer = () => {
  return (
    <footer className="border-t border-[var(--border-glass)] py-14">
      <Container>
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link to="/" className="text-2xl font-bold">
              GYM
              <span className="text-[#00E676]">PRO</span>
            </Link>

            <p className="mt-4 text-[var(--text-secondary)]">
              Premium fitness experience for modern athletes.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-4 font-semibold text-[var(--text-primary)]">Navigation</h4>

            <div className="space-y-2 text-[var(--text-secondary)]">
              <Link to="/" className="block hover:text-[var(--text-primary)] transition-colors">Home</Link>
              <Link to="/classes" className="block hover:text-[var(--text-primary)] transition-colors">Classes</Link>
              <Link to="/memberships" className="block hover:text-[var(--text-primary)] transition-colors">Memberships</Link>
              <Link to="/trainers" className="block hover:text-[var(--text-primary)] transition-colors">Trainers</Link>
            </div>
          </div>

          {/* Support */}
          <div>
            <h4 className="mb-4 font-semibold text-[var(--text-primary)]">Support</h4>

            <div className="space-y-2 text-[var(--text-secondary)]">
              <p>Help Center</p>
              <p>Contact</p>
              <p>FAQ</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-semibold text-[var(--text-primary)]">Contact</h4>

            <div className="space-y-2 text-[var(--text-secondary)]">
              <p>Tashkent, Uzbekistan</p>
              <p>+998 90 123 45 67</p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
