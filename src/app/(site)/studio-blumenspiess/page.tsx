import { SplitLayout } from "@/app/components/SplitLayout/SplitLayout";
import { Highlight } from "@/app/components/Highlight/Highlight";
import { ImageCanvas } from "@/app/components/ImageCanvas/ImageCanvas";
import { Logo } from "@/app/components/Logo/Logo";
import styles from "./StudioHome.module.scss";

const homeImages = [
  { src: "https://picsum.photos/600/450?random=100", x: 0, y: 0, width: 550, height: 420 },
  { src: "https://picsum.photos/400/500?random=101", x: 380, y: 200, width: 350, height: 440 },
  { src: "https://picsum.photos/500/350?random=102", x: 80, y: 480, width: 450, height: 320 },
];

export default function StudioHomePage() {
  return (
    <SplitLayout
      left={
        <div className={styles.textContent}>
          <h1 className={styles.title}>studio.blumenspiess&#10033;</h1>
          <p className={styles.body}>
            Or repre nobis que volore as modi blandisque etus a archillor
            audisquam ipsum incte qui am dipsus conessim ipsam hariam fuga. Ro
            est, verspe poreritate mod essitatus esti am facesectem faccull
            aborem. Nam faccum eatem eos simus ut labore nobitat ioremqui sus
            moluptinci odi{" "}
            <Highlight>
              sit fugit qui conseque molessit a se nis dipit quibero cuptas
              post, te vent et doluptatem volo ist, imolum nustiur,
            </Highlight>{" "}
            utem exero exceaqui nonsequam, quo imende venis eat autem ent es
            volorporro volorest, omnis evelia volore vollit acerit essin enduciu
            mendaep tatioris num repe nihicia cus erio occuptati rem simaxim
            odigendae. Nam, verum accaes ersped quaecte net poratem volore
            senteceate conse venis verenec eratur?{" "}
            <Highlight>Quias sapisqui quam facipit omnis vendaes tibus.</Highlight>{" "}
            Or repre nobis que volore as modi blandisque etus a archillor
            audisquam ipsum incte qui am dipsus conessim ipsam hariam fuga. Ro
            est, verspe poreritate mod essitatus esti am facesectem faccull
            aborem. Nam faccum eatem eos simus ut labore nobitat ioremqui sus
            moluptinci odi sit fugit qui conseque molessit a se nis dipit
            quibero cuptas post, te vent et doluptatem volo ist, imolum
            nustiur, utem exero exceaqui nonsequam, quo imende venis eat autem
            ent es volorporro volorest, omnis evelia volore vollit acerit essin
            enduciu mendaep tatioris num repe nihicia cus erio occuptati rem
            simaxim odigendae.
          </p>
        </div>
      }
      right={
        <div className={styles.rightPanel}>
          <ImageCanvas images={homeImages} />
          <div className={styles.logoCorner}>
            <Logo size={48} />
          </div>
        </div>
      }
    />
  );
}
