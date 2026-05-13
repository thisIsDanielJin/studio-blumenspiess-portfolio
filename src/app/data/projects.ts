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
      { src: "https://picsum.photos/700/480?random=11", x: 0, y: 0, width: 620, height: 440 },
      { src: "https://picsum.photos/550/650?random=12", x: 520, y: 120, width: 520, height: 580 },
      { src: "https://picsum.photos/650/400?random=13", x: 40, y: 520, width: 580, height: 380 },
      { src: "https://picsum.photos/500/450?random=14", x: 530, y: 680, width: 510, height: 420 },
      { src: "https://picsum.photos/480/600?random=15", x: 0, y: 1050, width: 500, height: 560 },
      { src: "https://picsum.photos/620/420?random=16", x: 480, y: 1180, width: 560, height: 400 },
      { src: "https://picsum.photos/550/500?random=17", x: 60, y: 1580, width: 520, height: 480 },
      { src: "https://picsum.photos/600/430?random=18", x: 530, y: 1700, width: 520, height: 400 },
      { src: "https://picsum.photos/500/620?random=19", x: 0, y: 2100, width: 500, height: 560 },
      { src: "https://picsum.photos/580/400?random=1a", x: 500, y: 2200, width: 540, height: 380 },
      { src: "https://picsum.photos/620/480?random=1b", x: 50, y: 2600, width: 560, height: 450 },
      { src: "https://picsum.photos/500/560?random=1c", x: 520, y: 2720, width: 520, height: 520 },
    ],
    previewImage: "https://picsum.photos/400/300?random=1",
  },
  {
    id: "02",
    title: "projekt 02",
    description:
      "Or repre nobis que volore as modi blandisque etus a archillor audisquam ipsum incte qui am dipsus conessim ipsam hariam fuga. Ro est, verspe poreritate mod essitatus esti am facesectem faccull aborem. Nam faccum eatem eos simus ut labore nobitat ioremqui sus moluptinci odi sit fugit qui conseque molessit a se nis dipit quibero cuptas post, te vent et doluptatem volo ist, imolum nustiur.",
    images: [
      { src: "https://picsum.photos/650/450?random=21", x: 20, y: 20, width: 580, height: 420 },
      { src: "https://picsum.photos/520/650?random=22", x: 500, y: 200, width: 520, height: 580 },
      { src: "https://picsum.photos/620/400?random=23", x: 0, y: 520, width: 580, height: 380 },
      { src: "https://picsum.photos/500/500?random=24", x: 520, y: 650, width: 520, height: 480 },
      { src: "https://picsum.photos/580/440?random=25", x: 30, y: 1000, width: 540, height: 420 },
      { src: "https://picsum.photos/500/600?random=26", x: 500, y: 1120, width: 540, height: 560 },
    ],
    previewImage: "https://picsum.photos/400/300?random=2",
  },
  {
    id: "03",
    title: "projekt 03",
    description:
      "Or repre nobis que volore as modi blandisque etus a archillor audisquam ipsum incte qui am dipsus conessim ipsam hariam fuga. Ro est, verspe poreritate mod essitatus esti am facesectem faccull aborem. Nam faccum eatem eos simus ut labore nobitat ioremqui sus moluptinci odi sit fugit qui conseque molessit a se nis dipit quibero cuptas post, te vent et doluptatem volo ist, imolum nustiur, utem exero exceaqui nonsequam, quo imende venis eat autem ent es volorporro volorest, omnis evelia volore vollit acerit essin enduciu mendaep tatioris num repe nihicia cus erio occuptati rem simaxim odigendae.",
    images: [
      { src: "https://picsum.photos/700/450?random=31", x: 0, y: 0, width: 620, height: 420, rotation: -1 },
      { src: "https://picsum.photos/520/600?random=32", x: 530, y: 100, width: 510, height: 560, rotation: 2 },
      { src: "https://picsum.photos/620/420?random=33", x: 40, y: 450, width: 560, height: 400 },
      { src: "https://picsum.photos/480/580?random=34", x: 540, y: 560, width: 500, height: 540, rotation: -2 },
      { src: "https://picsum.photos/600/400?random=35", x: 0, y: 1000, width: 560, height: 380, rotation: 1 },
      { src: "https://picsum.photos/520/500?random=36", x: 500, y: 1100, width: 540, height: 480 },
      { src: "https://picsum.photos/640/420?random=37", x: 50, y: 1550, width: 580, height: 400, rotation: -1 },
      { src: "https://picsum.photos/500/600?random=38", x: 540, y: 1650, width: 500, height: 560, rotation: 2 },
      { src: "https://picsum.photos/580/400?random=39", x: 0, y: 2100, width: 540, height: 380 },
      { src: "https://picsum.photos/520/480?random=3a", x: 510, y: 2200, width: 530, height: 460, rotation: 1 },
      { src: "https://picsum.photos/600/450?random=3b", x: 40, y: 2600, width: 560, height: 420 },
    ],
    previewImage: "https://picsum.photos/400/300?random=3",
  },
  {
    id: "04",
    title: "projekt 04",
    description:
      "Or repre nobis que volore as modi blandisque etus a archillor audisquam ipsum incte qui am dipsus conessim ipsam hariam fuga. Ro est, verspe poreritate mod essitatus esti am facesectem faccull aborem. Nam faccum eatem eos simus ut labore nobitat ioremqui sus moluptinci odi sit fugit qui conseque molessit a se nis dipit quibero cuptas post, te vent et doluptatem volo ist, imolum nustiur, utem exero exceaqui nonsequam.",
    images: [
      { src: "https://picsum.photos/680/450?random=41", x: 0, y: 0, width: 620, height: 420 },
      { src: "https://picsum.photos/520/520?random=42", x: 500, y: 180, width: 540, height: 500, rotation: 1 },
      { src: "https://picsum.photos/620/400?random=43", x: 20, y: 480, width: 580, height: 380 },
      { src: "https://picsum.photos/480/560?random=44", x: 520, y: 580, width: 520, height: 520, rotation: -1 },
      { src: "https://picsum.photos/600/420?random=45", x: 0, y: 1050, width: 560, height: 400 },
      { src: "https://picsum.photos/540/480?random=46", x: 500, y: 1150, width: 540, height: 460 },
      { src: "https://picsum.photos/580/400?random=47", x: 40, y: 1550, width: 540, height: 380 },
    ],
    previewImage: "https://picsum.photos/400/300?random=4",
  },
  {
    id: "05",
    title: "projekt 05",
    description:
      "Or repre nobis que volore as modi blandisque etus a archillor audisquam ipsum incte qui am dipsus conessim ipsam hariam fuga. Ro est, verspe poreritate mod essitatus esti am facesectem faccull aborem.",
    images: [
      { src: "https://picsum.photos/680/450?random=51", x: 0, y: 0, width: 600, height: 420 },
      { src: "https://picsum.photos/520/620?random=52", x: 500, y: 150, width: 540, height: 580 },
      { src: "https://picsum.photos/620/400?random=53", x: 30, y: 500, width: 560, height: 380 },
      { src: "https://picsum.photos/500/550?random=54", x: 520, y: 620, width: 520, height: 520 },
      { src: "https://picsum.photos/600/430?random=55", x: 0, y: 1080, width: 560, height: 400 },
    ],
    previewImage: "https://picsum.photos/400/300?random=5",
  },
  {
    id: "06",
    title: "projekt 06",
    description:
      "Or repre nobis que volore as modi blandisque etus a archillor audisquam ipsum incte qui am dipsus conessim ipsam hariam fuga. Ro est, verspe poreritate mod essitatus esti am facesectem faccull aborem.",
    images: [
      { src: "https://picsum.photos/650/440?random=61", x: 0, y: 0, width: 600, height: 420 },
      { src: "https://picsum.photos/520/600?random=62", x: 500, y: 180, width: 540, height: 560 },
      { src: "https://picsum.photos/600/420?random=63", x: 20, y: 520, width: 560, height: 400 },
      { src: "https://picsum.photos/500/540?random=64", x: 510, y: 650, width: 530, height: 500 },
      { src: "https://picsum.photos/620/400?random=65", x: 0, y: 1100, width: 580, height: 380 },
    ],
    previewImage: "https://picsum.photos/400/300?random=6",
  },
  {
    id: "07",
    title: "projekt 07",
    description:
      "Or repre nobis que volore as modi blandisque etus a archillor audisquam ipsum incte qui am dipsus conessim ipsam hariam fuga. Ro est, verspe poreritate mod essitatus esti am facesectem faccull aborem.",
    images: [
      { src: "https://picsum.photos/680/440?random=71", x: 0, y: 0, width: 620, height: 420 },
      { src: "https://picsum.photos/530/600?random=72", x: 510, y: 200, width: 530, height: 560 },
      { src: "https://picsum.photos/620/400?random=73", x: 30, y: 500, width: 580, height: 380 },
      { src: "https://picsum.photos/500/520?random=74", x: 500, y: 640, width: 540, height: 500 },
      { src: "https://picsum.photos/600/430?random=75", x: 0, y: 1080, width: 560, height: 400 },
      { src: "https://picsum.photos/540/500?random=76", x: 520, y: 1180, width: 520, height: 480 },
    ],
    previewImage: "https://picsum.photos/400/300?random=7",
  },
  {
    id: "08",
    title: "projekt 08",
    description:
      "Or repre nobis que volore as modi blandisque etus a archillor audisquam ipsum incte qui am dipsus conessim ipsam hariam fuga. Ro est, verspe poreritate mod essitatus esti am facesectem faccull aborem.",
    images: [
      { src: "https://picsum.photos/680/480?random=81", x: 0, y: 0, width: 620, height: 450 },
      { src: "https://picsum.photos/520/620?random=82", x: 510, y: 160, width: 530, height: 580 },
      { src: "https://picsum.photos/640/400?random=83", x: 20, y: 500, width: 580, height: 380 },
      { src: "https://picsum.photos/500/540?random=84", x: 500, y: 620, width: 540, height: 500 },
      { src: "https://picsum.photos/600/420?random=85", x: 0, y: 1080, width: 560, height: 400 },
      { src: "https://picsum.photos/540/480?random=86", x: 520, y: 1180, width: 520, height: 460 },
    ],
    previewImage: "https://picsum.photos/400/300?random=8",
  },
];
