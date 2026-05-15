import { Header } from "../components/Header/Header";
import { YellowWindow } from "../components/YellowWindow/YellowWindow";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      <YellowWindow />
    </>
  );
}
