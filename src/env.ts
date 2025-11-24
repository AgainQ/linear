import { createEnv } from '@t3-oss/env-core';
import { z } from 'zod';

export const env = createEnv({
  clientPrefix: 'VITE_',
  client: {
    VITE_SUPABASE_URL: z.url(),
    VITE_SUPABASE_PUBLIC_KEY: z.string().min(20),
  },
  runtimeEnv: {
    VITE_SUPABASE_URL: import.meta.env.VITE_SUPABASE_URL,
    VITE_SUPABASE_PUBLIC_KEY: import.meta.env.VITE_SUPABASE_PUBLIC_KEY,
  },
});
