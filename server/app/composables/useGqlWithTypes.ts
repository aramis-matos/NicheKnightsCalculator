import type { GqlOps } from "#gql";
import type { Exact } from "~/gql/graphql";

function useAsyncQglWithTypes<
  returnType extends Exact<{}> = never,
  optionType extends Exact<{ [x: string]: unknown }> = {},
>(operation: GqlOps) {
  return async (options: optionType) =>
    await useAsyncGql<typeof operation, {}, optionType, returnType>({
      operation,
      options,
    });
}

function useGqlWithTypesImp<
  returnType extends Exact<{}> = never,
  optionType extends Exact<{ [x: string]: unknown }> = {},
>(operation: GqlOps) {
  const GqlInstance = useGql();
  return async (options: optionType) =>
    await GqlInstance<typeof operation, Promise<returnType>, optionType>({
      operation,
      variables: options,
    });
}

export function useGqlWithTypes<
  returnType extends Exact<{}> = never,
  optionType extends Exact<{ [x: string]: unknown }> = {},
>(operation: GqlOps) {
  return {
    useAsyncGql: useAsyncQglWithTypes<returnType, optionType>(operation),
    useGql: useGqlWithTypesImp<returnType, optionType>(operation),
  };
}
