import UserLogoLink from "./UserLogoLink";

export default function UserLogoDropdown() {
  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle avatar"
      >
        <div className="w-8 rounded-full">
          <img
            alt={process.env.APP_NAME ?? "_dvtor"}
            src="https://ik.imagekit.io/ennmjhpgtw/icon/88477509.jpeg?updatedAt=1702815593190"
          />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-fuchsia-800 rounded-box w-24"
      >
        <UserLogoLink name="About" href="/" />
        <UserLogoLink name="Resume" href="/" />
      </ul>
    </div>
  );
}
