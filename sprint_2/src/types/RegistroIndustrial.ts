export type RegistroIndustrial = {
  id: number;
  nome: string;
  descricao: string;
  status: "normal" | "alerta" | "critico";
  data: string;
};