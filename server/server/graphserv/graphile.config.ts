import "graphile-config"
import "postgraphile"
import { PostGraphileAmberPreset } from "postgraphile/presets/amber";
import { makePgService } from "postgraphile/adaptors/pg";

export const preset: GraphileConfig.Preset = {
    extends: [PostGraphileAmberPreset],
    grafserv: {
        graphqlPath: "/api/graphql"
    },
    grafast: {explain: true},
    pgServices: [makePgService({connectionString: `postgres://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_HOST}:${process.env.POSTGRES_PORT}`})],
}


