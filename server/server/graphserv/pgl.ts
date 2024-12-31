import {preset} from "@@/server/graphserv/graphile.config" 
import {postgraphile} from "postgraphile"

export const pgl = postgraphile(preset)
