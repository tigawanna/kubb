import { optionsCJS, optionsESM } from '@kubb/config-tsup'

import { defineConfig } from 'tsup'

export default defineConfig([
  {
    ...optionsCJS,
    entry: {
      index: './src/index.ts',
      server: './src/server.ts',
    },
  },
  {
    ...optionsESM,
    entry: {
      index: './src/index.ts',
      server: './src/server.ts',
    },
  },
])
