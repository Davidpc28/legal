import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pre-evaluación | Regularización Extraordinaria",
  description:
    "Comprueba en pocos pasos si puedes optar a la regularización extraordinaria de extranjería en España. Sin compromiso.",
};

export default function PreEvaluacionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
