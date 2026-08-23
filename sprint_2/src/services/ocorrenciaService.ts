import api from './api';
import { RegistroIndustrial } from '../types/RegistroIndustrial';

export type OcorrenciaDTO = Omit<RegistroIndustrial, 'id'>;

export const ocorrenciaService = {
    listar: async (): Promise<RegistroIndustrial[]> => {
        const response = await api.get<RegistroIndustrial[]>('/ocorrencias');
        return response.data;
    },
    buscarPorId: async (id: number): Promise<RegistroIndustrial> => {
        const response = await api.get<RegistroIndustrial>(`/ocorrencias/${id}`);
        return response.data;
    },
    criar: async (dados: OcorrenciaDTO): Promise<RegistroIndustrial> => {
        const response = await api.post<RegistroIndustrial>('/ocorrencias', dados);
        return response.data;
    }
};