export default function UserAvatar({
  user,
  showUsername = true,
}) {
  const initial = user?.username
    ? user.username.charAt(0).toUpperCase()
    : "👤";

  return (
    <div className="flex items-center gap-3">
      <div className="h-10 w-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
        {initial}
      </div>

      {showUsername && user && (
        <span className="font-medium">
          {user.username}
        </span>
      )}
    </div>
  );
}