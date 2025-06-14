// stores/useJobForm.ts
import { create } from "zustand";

interface JobFormData {
  title: string;
  category: string;
  specialism: string;
  description: string;
  responsibility: string;
  requirements: string;
  location: string;
  salary: string;
  type: string;
  skills: string;
  deadline: string;
  detail: string;
  q1: string;
  q2: string;
  q3: string;
  q4: string;
  cv: File | null;
}

interface JobFormStore {
  formData: JobFormData | null;
  setFormData: (data: JobFormData) => void;
}

export const useJobForm = create<JobFormStore>((set) => ({
  formData: null,
  setFormData: (data) => set({ formData: data }),
}));
