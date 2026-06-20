import Link from "next/link";
import Image from "next/image";

import { getGlobalData } from "@/lib/getGlobalData";
import { headerVariants } from "@/constants/variants";

export default async function Header() {
  const data = await getGlobalData();

  const header = data.header;

  const logoUrl =
    process.env.NEXT_PUBLIC_STRAPI_URL +
    header.logo.image.url;

  return (
    <header
      className={
        headerVariants[header.variants] ||
        headerVariants.Default
      }
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          
            <Link href={header.logo.href}>
            <img
              src={process.env.NEXT_PUBLIC_STRAPI_URL + header.logo.image.url}
              alt="logo"
              className="h-40 w-auto"
            />
          </Link>

          

          {/* Navigation */}
          <nav className="flex items-center gap-8">
            {header.navitem.map((item) => (
              <div
                key={item.id}
                className="relative group"
              >
                <Link
                  href={item.href}
                  className="font-medium hover:text-blue-600 transition-colors"
                >
                  {item.label}
                </Link>

                {item.Navdropdown?.length > 0 && (
                  <div
                    className="
                      absolute
                      left-0
                      top-full
                      hidden
                      group-hover:block
                      min-w-[250px]
                      text-color-black
                      bg-blue-200
                      rounded-xl
                      shadow-lg
                      border
                      border-blue-200
                      py-2
                      z-50
                    "
                  >
                    {item.Navdropdown.map(
                      (subItem) => (
                        <Link
                          key={subItem.id}
                          href={subItem.href}
                          className="
                            block
                            px-4
                            py-3
                            hover:bg-slate-100
                            transition-colors
                          "
                        >
                          {subItem.label}
                        </Link>
                      )
                    )}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}