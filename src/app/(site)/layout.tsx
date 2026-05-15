import { Header } from "../components/Header/Header";
import { YellowWindow } from "../components/YellowWindow/YellowWindow";
import { homeBoard } from "../data/projects";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      <YellowWindow
        boardSrc={homeBoard.src}
        boardWidth={homeBoard.width}
        boardHeight={homeBoard.height}
      />
    </>
  );
}
