import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "./src/schema.graphql",
  generates: {
    "./src/types.ts": {
      plugins: ["typescript", "typescript-resolvers"],
      config: {
        // Path relative to the src/types file
        contextType: "./context#DataSourceContext",
        mappers: {
          Playlist: "./models#PlaylistModel",
          Track: "./models#TrackModel",
          AddTracksToPlaylistResponse: "./models#AddTracksToPlaylistResponse",
        }
      },
    },
  },
};

export default config;
