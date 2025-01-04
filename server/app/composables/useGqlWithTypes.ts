import type { GqlOps } from "#gql";
import type { Exact } from "~/gql/graphql";

function useAsyncQglWithTypes<
  returnType extends Exact<{}> = never,
  variablesType extends Exact<{ [x: string]: unknown }> = {},
>(operation: GqlOps) {
  return async (variables: variablesType) =>
    await useAsyncGql<typeof operation, {}, variablesType, returnType>({
      operation,
      variables,
    });
}

function useGqlWithTypesImp<
  returnType extends Exact<{}> = never,
  variablesType extends Exact<{ [x: string]: unknown }> = {},
>(operation: GqlOps) {
  const GqlInstance = useGql();
  return async (variables?: variablesType) =>
    await GqlInstance<typeof operation, Promise<returnType>, variablesType>({
      operation,
      variables,
    });
}

export function useGqlWithTypes<
  returnType extends Exact<{}> = never,
  variablesType extends Exact<{ [x: string]: unknown }> = {},
>(operation: GqlOps) {
  return {
    useAsyncGql: useAsyncQglWithTypes<returnType, variablesType>(operation),
    useGql: useGqlWithTypesImp<returnType, variablesType>(operation),
  };
}
