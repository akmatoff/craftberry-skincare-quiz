import { Outlet } from "react-router";

export default function RootLayout() {
  return (
    <main className="min-h-screen">
      <Outlet />
    </main>
  );
}
