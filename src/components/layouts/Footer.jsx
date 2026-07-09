import Container from "../ui/Container";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-14">
      <Container>
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-2xl font-bold">
              GYM
              <span className="text-[#00E676]">PRO</span>
            </h3>

            <p className="mt-4 text-gray-400">
              Premium fitness experience for modern athletes.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Navigation</h4>

            <div className="space-y-2 text-gray-400">
              <p>Home</p>
              <p>Classes</p>
              <p>Memberships</p>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Support</h4>

            <div className="space-y-2 text-gray-400">
              <p>Help Center</p>
              <p>Contact</p>
              <p>FAQ</p>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Contact</h4>

            <div className="space-y-2 text-gray-400">
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
