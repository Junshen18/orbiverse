export function Footer() {
  return (
    <footer className="bg-darkpurple backdrop-blur-md border-t border-white/10">
      {/* Get Started Section */}
      <section id="get-started" className="py-12 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12">
            Get Started
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {getStartedSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <span className="text-xl md:text-2xl font-bold">{index + 1}</span>
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm md:text-base">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-12 md:py-20 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-8 md:mb-12">
            Join the Orbiverse Community
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-12 md:mb-16">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="w-full md:w-auto flex items-center justify-center gap-2 px-4 md:px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full transition-all"
              >
                {link.icon}
                <span>{link.label}</span>
              </a>
            ))}
          </div>
          
          {/* Copyright and Links */}
          <div className="pt-6 md:pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 text-xs md:text-sm text-gray-400">
              <p>© 2024 Orbiverse. All rights reserved.</p>
              <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-white transition-colors">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}

const getStartedSteps = [
  {
    title: "Connect Your Wallet",
    description: "Use a Solana-compatible wallet like Phantom.",
  },
  {
    title: "Create Your First Orb",
    description: "Try it out with your first memory capsule—it's free!",
  },
  {
    title: "Unlock the Future",
    description: "Watch your Orbiverse grow with every memory.",
  },
];

const socialLinks = [
  {
    label: "Twitter",
    href: "#",
    icon: "𝕏",
  },
  {
    label: "Discord",
    href: "#",
    icon: "📱",
  },
  {
    label: "GitHub",
    href: "#",
    icon: "💻",
  },
]; 