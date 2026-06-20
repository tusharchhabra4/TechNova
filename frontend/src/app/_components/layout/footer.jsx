import Link from "next/link";

import { getGlobalData } from "@/lib/getGlobalData";
import { footerVariants } from "@/constants/variants";

export default async function Footer() {
  const data = await getGlobalData();

  const footer = data.footer;

  const logoUrl =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    footer.footlogo.image.url;

  return (
    <footer
      className={
        footerVariants[footer.variants] ||
        footerVariants.Default
      }
    >
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_auto] gap-12">

          {/* Logo + Description */}
          <div>
            <Link href={footer.footlogo.href}>
              <img
                src={logoUrl}
                alt={
                  footer.footlogo.image.alternativeText ||
                  "Logo"
                }
                className="h-20 w-auto object-contain"
              />
            </Link>

            <p className="mt-5 text-sm leading-7 opacity-80 max-w-sm">
              {footer.footlogo.description}
            </p>
          </div>

          {/* Dynamic Footer Columns */}
          {footer.link.map((section) => (
            <div key={section.id}>
              <h3 className="font-semibold text-lg mb-5">
                {section.title}
              </h3>

              <div className="flex flex-col gap-3">
                {section.footlink.map((link) => (
                  <Link
                    key={link.id}
                    href={link.href}
                    className="
                      opacity-80
                      hover:opacity-100
                      hover:text-blue-500
                      transition-all
                    "
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          {/* Social Links */}
          <div className="lg:text-right">
            

            <div className="flex lg:justify-end items-center gap-4">
              {footer.sociallink.map((social) => (
                <Link
                  key={social.id}
                  href={social.href}
                  target="_blank"
                >
                  <img
                    src={
                      process.env.NEXT_PUBLIC_STRAPI_URL +
                      social.image.url
                    }
                    alt={
                      social.image.alternativeText ||
                      "Social"
                    }
                    className="
                      w-10
                      h-10
                      rounded-full
                      object-cover
                      hover:scale-110
                      transition-transform
                    "
                  />
                </Link>
              ))}
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-8 pt-4">
          <p className="text-center text-sm opacity-70">
            {footer.copyright.text}
          </p>
        </div>

      </div>
    </footer>
  );
}