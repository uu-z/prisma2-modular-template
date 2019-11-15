import { nexusPrismaPlugin } from 'nexus-prisma'
import { makeSchema } from 'nexus'
import * as types from './types'
import path from 'path'

export const schema = makeSchema({
  types,
  shouldGenerateArtifacts: true,
  plugins: [nexusPrismaPlugin()],
  outputs: {
    typegen: path.join(
      __dirname,
      '../node_modules/@types/nexus-typegen/index.d.ts',
    ),
  },
  typegenAutoConfig: {
    sources: [
      {
        source: '@generated/photon',
        alias: 'photon',
      },
      {
        source: require.resolve('./context'),
        alias: 'Context',
      },
    ],
    contextType: 'Context.Context',
  },
})
