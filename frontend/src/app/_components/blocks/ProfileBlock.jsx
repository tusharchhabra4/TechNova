import Link from "next/link";

import DynamicImage from "../ui/DynamicImage";
import LogoutButton from "@/app/_components/LogoutButton";

import { getCurrentUser } from "@/lib/auth/getCurrentUser";

export default async function Profile({ data }) {
  const user = await getCurrentUser();

  if (!user) return null;

  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-6">

        {/* Profile Header */}

        <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
          <div className="flex flex-col items-center text-center">

            {data.ShowAvatar && (
              <div className="h-10 w-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
                {user.username.charAt(0).toUpperCase()}
              </div>
            )}

            {data.badge && (
              <span className="mb-3 mt-4 rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-600">
                {data.badge}
              </span>
            )}

            <h1 className="text-4xl font-bold">
              {user.username}
            </h1>

            <p className="mt-2 text-lg text-slate-600">
              {user.email}
            </p>

            {data.ShowJoinedDate && (
              <p className="mt-3 text-sm text-slate-500">
                {data.joinedDate}{" "}
                {new Date(user.createdAt).toLocaleDateString("en-US", {
                  month: "long",
                  year: "numeric",
                })}
              </p>
            )}
          </div>
        </div>

        {/* Account Information */}

        <div className="mt-12">
          <h2 className="mb-6 text-3xl font-bold">
            {data.userinfoHeading}
          </h2>

          <div className="flex flex-wrap gap-6">

            <div className="flex-1 min-w-[260px] rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
           
              <h3 className="mt-2 text-xl font-semibold">
                {user.username}
              </h3>
            </div>

            <div className="flex-1 min-w-[260px] rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              
              <h3 className="mt-2 break-all text-xl font-semibold">
                {user.email}
              </h3>
            </div>

            <div className="flex-1 min-w-[260px] rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
             
              <h3 className="mt-2 text-xl font-semibold">
                #{user.id}
              </h3>
            </div>

          </div>
        </div>

        {/* Quick Actions */}

        {data.Statcard?.length > 0 && (
          <div className="mt-14">

            <h2 className="mb-8 mt-10 text-3xl font-bold">
              {data.stathead}
            </h2>

            <div className="flex flex-wrap gap-6">

              {data.Statcard.map((card) => (
                <Link
                  key={card.id}
                  href={card.href}
                  className="group flex-1 min-w-[260px] rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl"
                >
                  <div className="mb-5 h-16 w-16">
                    <DynamicImage data={card.icon} />
                  </div>

                  <h3 className="text-2xl font-semibold transition-colors group-hover:text-blue-600">
                    {card.title}
                  </h3>

                  <p className="mt-2 text-slate-600">
                    {card.description}
                  </p>
                </Link>
              ))}

            </div>
          </div>
        )}

        {/* Logout */}

        <div className="mt-12 flex justify-center">
          <LogoutButton />
        </div>

      </div>
    </section>
  );
}