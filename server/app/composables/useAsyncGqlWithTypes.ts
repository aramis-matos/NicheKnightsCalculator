import type { GqlOps } from "#gql";
import type { Exact } from "~/gql/graphql";

export default async function useAsyncQglWithTypes<
  returnType extends Exact<{}> = never,
  optionType extends Exact<{ [x: string]: unknown }> = {}
>(operation: GqlOps,options?: optionType) {

    return await useAsyncGql<typeof operation,{},optionType,returnType>({operation,options})
}
