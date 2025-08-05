// components/Footer.tsx
import Link from "next/link";

// Data for footer links, making them easy to manage.
const footerSections = [
  {
    title: "Resources",
    links: [
      { name: "Docs", href: "/docs" },
      { name: "Cookbook", href: "/cookbook" },
      { name: "Providers", href: "/providers" },
      { name: "Showcase", href: "/showcase" },
      {
        name: "GitHub",
        href: "https://github.com/tensor-base",
        external: true,
      },
      {
        name: "Discussions",
        href: "https://github.com/tensor-base",
        external: true,
      },
    ],
  },
  {
    title: "More",
    links: [
      { name: "Playground", href: "/playground" },
      {
        name: "Contact Sales",
        href: "https://tensorbase.dev/contact/sales",
        external: true,
      },
    ],
  },
  {
    title: "About Tensor Base",
    links: [
      {
        name: "Next.js + Tensor Base",
        href: "https://tensorbase.dev/frameworks/nextjs",
        external: true,
      },
      {
        name: "Open Source Software",
        href: "https://tensorbase.dev/oss",
        external: true,
      },
      {
        name: "GitHub",
        href: "https://github.com/tensor-base",
        external: true,
      },
      { name: "X", href: "https://x.com/tensor_base", external: true },
    ],
  },
  {
    title: "Legal",
    links: [
      {
        name: "Privacy Policy",
        href: "https://tensorbase.dev/legal/privacy-policy",
        external: true,
      },
    ],
  },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mx-auto flex w-full max-w-[1400px] flex-col gap-8 border-t border-gray-900 p-8 sm:px-16">
      <div className="flex w-full flex-col justify-between gap-12 lg:flex-row">
        {/* Logo */}
        <div>
          <h2 className="text-2xl font-bold">Tensor Base</h2>
        </div>

        {/* Link Columns */}
        <div className="flex flex-col gap-12 sm:flex-row md:gap-20 lg:gap-28 xl:gap-36">
          {footerSections.map((section) => (
            <div key={section.title} className="flex flex-col gap-3">
              <h4 className="text-sm font-medium">{section.title}</h4>
              {section.links.map((link) => {
                const linkContent = <>{link.name}</>;

                if (link.external) {
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-zinc-500 transition-colors duration-100 hover:text-zinc-900 dark:hover:text-zinc-100"
                    >
                      {linkContent}
                    </a>
                  );
                }
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-sm text-zinc-500 transition-colors duration-100 hover:text-zinc-900 dark:hover:text-zinc-100"
                  >
                    {linkContent}
                  </Link>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar: Copyright */}
      <div>
        <p className="text-sm text-zinc-500">© {currentYear} Tensor Base.</p>
      </div>
    </footer>
  );
};
