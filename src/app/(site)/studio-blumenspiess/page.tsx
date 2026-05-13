import { SplitLayout } from "@/app/components/SplitLayout/SplitLayout";
import { Highlight } from "@/app/components/Highlight/Highlight";
import { ImageCanvas } from "@/app/components/ImageCanvas/ImageCanvas";
import styles from "./StudioHome.module.scss";

const homeImages = [
  { src: "https://picsum.photos/700/500?random=100", x: 0, y: 0, width: 620, height: 460 },
  { src: "https://picsum.photos/550/650?random=101", x: 520, y: 60, width: 520, height: 600 },
  { src: "https://picsum.photos/650/420?random=102", x: 30, y: 500, width: 580, height: 400 },
  { src: "https://picsum.photos/500/450?random=103", x: 560, y: 620, width: 480, height: 420 },
  { src: "https://picsum.photos/480/600?random=104", x: 0, y: 950, width: 500, height: 580 },
  { src: "https://picsum.photos/650/450?random=105", x: 480, y: 1080, width: 560, height: 420 },
  { src: "https://picsum.photos/600/500?random=106", x: 80, y: 1500, width: 540, height: 480 },
  { src: "https://picsum.photos/550/400?random=107", x: 520, y: 1650, width: 520, height: 400 },
  { src: "https://picsum.photos/500/620?random=108", x: 0, y: 2050, width: 500, height: 580 },
  { src: "https://picsum.photos/600/420?random=109", x: 500, y: 2150, width: 540, height: 400 },
  { src: "https://picsum.photos/480/580?random=110", x: 60, y: 2600, width: 500, height: 560 },
  { src: "https://picsum.photos/620/440?random=111", x: 530, y: 2720, width: 520, height: 420 },
  { src: "https://picsum.photos/560/480?random=112", x: 0, y: 3150, width: 540, height: 460 },
  { src: "https://picsum.photos/500/600?random=113", x: 500, y: 3250, width: 520, height: 560 },
  { src: "https://picsum.photos/640/430?random=114", x: 50, y: 3700, width: 580, height: 420 },
  { src: "https://picsum.photos/520/500?random=115", x: 540, y: 3800, width: 500, height: 480 },
  { src: "https://picsum.photos/580/440?random=116", x: 0, y: 4250, width: 560, height: 420 },
  { src: "https://picsum.photos/500/580?random=117", x: 510, y: 4350, width: 520, height: 540 },
  { src: "/LOGO_studioblumenspiess.svg", x: 720, y: 4900, width: 120, height: 160 },
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
      right={<ImageCanvas images={homeImages} />}
    />
  );
}
