import { z } from 'zod';

export const searchSchema = z.object({
  query: z.string().min(2, 'Minimal 2 karakter'),
});

export type SearchSchema = z.infer<typeof searchSchema>;
