import { notFound } from "next/navigation";
import { projects } from "@/app/data/projects";
import { SplitLayout } from "@/app/components/SplitLayout/SplitLayout";
import { Highlight } from "@/app/components/Highlight/Highlight";
import { ImageCanvas } from "@/app/components/ImageCanvas/ImageCanvas";
import styles from "./ProjectDetail.module.scss";

interface ProjectDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <SplitLayout
      left={
        <div className={styles.textContent}>
          <span className={styles.title}>
            {project.title} &#10033;
          </span>{" "}
          <span className={styles.body}>
            Or repre nobis que volore as modi blandisque etus a{" "}
            <Highlight>archillor</Highlight> audisquam ipsum incte qui am dipsus{" "}
            <Highlight>conessim ipsam hariam fuga.</Highlight> Ro est, verspe
            poreritate mod essitatus esti am facesectem faccull aborem. Nam
            faccum eatem eos simus ut labore nobitat ioremqui sus moluptinci odi{" "}
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
            ent es volorporro volorest.
          </span>
        </div>
      }
      right={<ImageCanvas images={project.images} />}
    />
  );
}

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}
