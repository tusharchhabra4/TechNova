import { getCurrentUser } from "@/lib/auth/getCurrentUser";

import UserDropdown from "./UserDropdown";

export default async function UserMenu({
  menu,
}) {
  const user = await getCurrentUser();

  return (
    <UserDropdown
      user={user}
      menu={menu}
    />
  );
}