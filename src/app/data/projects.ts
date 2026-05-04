export interface ProjectImage {
  src: string;
  x: number;
  y: number;
  width: number;
  height: number;
  rotation?: number;
  zIndex?: number;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  highlightRanges?: string[];
  images: ProjectImage[];
  previewImage: string;
}

export const projects: Project[] = [
  {
    id: "01",
    title: "projekt 01",
    description:
      "Or repre nobis que volore as modi blandisque etus a archillor audisquam ipsum incte qui am dipsus conessim ipsam hariam fuga. Ro est, verspe poreritate mod essitatus esti am facesectem faccull aborem. Nam faccum eatem eos simus ut labore nobitat ioremqui sus moluptinci odi sit fugit qui conseque molessit a se nis dipit quibero cuptas post, te vent et doluptatem volo ist, imolum nustiur, utem exero exceaqui nonsequam, quo imende venis eat autem ent es volorporro volorest, omnis evelia volore vollit acerit essin enduciu mendaep tatioris num repe nihicia cus erio occuptati rem simaxim odigendae. Nam, verum accaes ersped quaecte net poratem volore senteceate conse venis verenec eratur? Quias sapisqui quam facipit omnis vendaes tibus.",
    images: [
      { src: "https://picsum.photos/600/400?random=11", x: 0, y: 0, width: 500, height: 350 },
      { src: "https://picsum.photos/400/500?random=12", x: 300, y: 200, width: 350, height: 450 },
      { src: "https://picsum.photos/500/300?random=13", x: 100, y: 500, width: 450, height: 280 },
    ],
    previewImage: "https://picsum.photos/400/300?random=1",
  },
  {
    id: "02",
    title: "projekt 02",
    description:
      "Or repre nobis que volore as modi blandisque etus a archillor audisquam ipsum incte qui am dipsus conessim ipsam hariam fuga. Ro est, verspe poreritate mod essitatus esti am facesectem faccull aborem. Nam faccum eatem eos simus ut labore nobitat ioremqui sus moluptinci odi sit fugit qui conseque molessit a se nis dipit quibero cuptas post, te vent et doluptatem volo ist, imolum nustiur.",
    images: [
      { src: "https://picsum.photos/600/400?random=21", x: 50, y: 20, width: 480, height: 320 },
      { src: "https://picsum.photos/400/600?random=22", x: 350, y: 250, width: 300, height: 450 },
      { src: "https://picsum.photos/500/350?random=23", x: 0, y: 450, width: 500, height: 350 },
    ],
    previewImage: "https://picsum.photos/400/300?random=2",
  },
  {
    id: "03",
    title: "projekt 03",
    description:
      "Or repre nobis que volore as modi blandisque etus a archillor audisquam ipsum incte qui am dipsus conessim ipsam hariam fuga. Ro est, verspe poreritate mod essitatus esti am facesectem faccull aborem. Nam faccum eatem eos simus ut labore nobitat ioremqui sus moluptinci odi sit fugit qui conseque molessit a se nis dipit quibero cuptas post, te vent et doluptatem volo ist, imolum nustiur, utem exero exceaqui nonsequam, quo imende venis eat autem ent es volorporro volorest, omnis evelia volore vollit acerit essin enduciu mendaep tatioris num repe nihicia cus erio occuptati rem simaxim odigendae.",
    images: [
      { src: "https://picsum.photos/700/450?random=31", x: 0, y: 0, width: 550, height: 360, rotation: -1 },
      { src: "https://picsum.photos/400/500?random=32", x: 400, y: 150, width: 320, height: 400, rotation: 2 },
      { src: "https://picsum.photos/500/400?random=33", x: 50, y: 380, width: 480, height: 380 },
      { src: "https://picsum.photos/350/500?random=34", x: 380, y: 550, width: 300, height: 420, rotation: -2 },
    ],
    previewImage: "https://picsum.photos/400/300?random=3",
  },
  {
    id: "04",
    title: "projekt 04",
    description:
      "Or repre nobis que volore as modi blandisque etus a archillor audisquam ipsum incte qui am dipsus conessim ipsam hariam fuga. Ro est, verspe poreritate mod essitatus esti am facesectem faccull aborem. Nam faccum eatem eos simus ut labore nobitat ioremqui sus moluptinci odi sit fugit qui conseque molessit a se nis dipit quibero cuptas post, te vent et doluptatem volo ist, imolum nustiur, utem exero exceaqui nonsequam.",
    images: [
      { src: "https://picsum.photos/600/400?random=41", x: 20, y: 10, width: 520, height: 340 },
      { src: "https://picsum.photos/400/400?random=42", x: 300, y: 200, width: 380, height: 380, rotation: 1 },
      { src: "https://picsum.photos/500/350?random=43", x: 0, y: 420, width: 460, height: 320 },
      { src: "https://picsum.photos/350/450?random=44", x: 350, y: 500, width: 320, height: 410, rotation: -1 },
    ],
    previewImage: "https://picsum.photos/400/300?random=4",
  },
  {
    id: "05",
    title: "projekt 05",
    description:
      "Or repre nobis que volore as modi blandisque etus a archillor audisquam ipsum incte qui am dipsus conessim ipsam hariam fuga. Ro est, verspe poreritate mod essitatus esti am facesectem faccull aborem.",
    images: [
      { src: "https://picsum.photos/600/400?random=51", x: 30, y: 0, width: 500, height: 340 },
      { src: "https://picsum.photos/400/500?random=52", x: 320, y: 180, width: 350, height: 440 },
    ],
    previewImage: "https://picsum.photos/400/300?random=5",
  },
  {
    id: "06",
    title: "projekt 06",
    description:
      "Or repre nobis que volore as modi blandisque etus a archillor audisquam ipsum incte qui am dipsus conessim ipsam hariam fuga. Ro est, verspe poreritate mod essitatus esti am facesectem faccull aborem.",
    images: [
      { src: "https://picsum.photos/550/400?random=61", x: 0, y: 0, width: 520, height: 370 },
      { src: "https://picsum.photos/400/500?random=62", x: 280, y: 220, width: 380, height: 470 },
    ],
    previewImage: "https://picsum.photos/400/300?random=6",
  },
  {
    id: "07",
    title: "projekt 07",
    description:
      "Or repre nobis que volore as modi blandisque etus a archillor audisquam ipsum incte qui am dipsus conessim ipsam hariam fuga. Ro est, verspe poreritate mod essitatus esti am facesectem faccull aborem.",
    images: [
      { src: "https://picsum.photos/600/400?random=71", x: 10, y: 20, width: 540, height: 360 },
      { src: "https://picsum.photos/450/500?random=72", x: 300, y: 250, width: 360, height: 420 },
    ],
    previewImage: "https://picsum.photos/400/300?random=7",
  },
  {
    id: "08",
    title: "projekt 08",
    description:
      "Or repre nobis que volore as modi blandisque etus a archillor audisquam ipsum incte qui am dipsus conessim ipsam hariam fuga. Ro est, verspe poreritate mod essitatus esti am facesectem faccull aborem.",
    images: [
      { src: "https://picsum.photos/600/450?random=81", x: 0, y: 0, width: 530, height: 380 },
      { src: "https://picsum.photos/400/500?random=82", x: 350, y: 200, width: 330, height: 420 },
    ],
    previewImage: "https://picsum.photos/400/300?random=8",
  },
];
