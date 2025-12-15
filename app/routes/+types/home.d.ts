export interface Route {
  MetaArgs: Route.MetaArgs;
}

export namespace Route {
  export type MetaArgs = Record<string, unknown>;
}

export {};
