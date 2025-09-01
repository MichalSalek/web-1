
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model EventLog
 * 
 */
export type EventLog = $Result.DefaultSelection<Prisma.$EventLogPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model GalleryConfig
 * 
 */
export type GalleryConfig = $Result.DefaultSelection<Prisma.$GalleryConfigPayload>
/**
 * Model GalleryRecord
 * 
 */
export type GalleryRecord = $Result.DefaultSelection<Prisma.$GalleryRecordPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model DeletedUser
 * 
 */
export type DeletedUser = $Result.DefaultSelection<Prisma.$DeletedUserPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Admins
 * const admins = await prisma.admin.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Admins
   * const admins = await prisma.admin.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  /**
   * Gives access to the client metrics in json or prometheus format.
   * 
   * @example
   * ```
   * const metrics = await prisma.$metrics.json()
   * // or
   * const metrics = await prisma.$metrics.prometheus()
   * ```
   */
  readonly $metrics: runtime.MetricsClient
  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.eventLog`: Exposes CRUD operations for the **EventLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EventLogs
    * const eventLogs = await prisma.eventLog.findMany()
    * ```
    */
  get eventLog(): Prisma.EventLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.galleryConfig`: Exposes CRUD operations for the **GalleryConfig** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GalleryConfigs
    * const galleryConfigs = await prisma.galleryConfig.findMany()
    * ```
    */
  get galleryConfig(): Prisma.GalleryConfigDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.galleryRecord`: Exposes CRUD operations for the **GalleryRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GalleryRecords
    * const galleryRecords = await prisma.galleryRecord.findMany()
    * ```
    */
  get galleryRecord(): Prisma.GalleryRecordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.deletedUser`: Exposes CRUD operations for the **DeletedUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DeletedUsers
    * const deletedUsers = await prisma.deletedUser.findMany()
    * ```
    */
  get deletedUser(): Prisma.DeletedUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.12.0
   * Query Engine version: 8047c96bbd92db98a2abc7c9323ce77c02c89dbc
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Admin: 'Admin',
    EventLog: 'EventLog',
    Account: 'Account',
    GalleryConfig: 'GalleryConfig',
    GalleryRecord: 'GalleryRecord',
    Session: 'Session',
    DeletedUser: 'DeletedUser',
    User: 'User'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "admin" | "eventLog" | "account" | "galleryConfig" | "galleryRecord" | "session" | "deletedUser" | "user"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdminUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      EventLog: {
        payload: Prisma.$EventLogPayload<ExtArgs>
        fields: Prisma.EventLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventLogPayload>
          }
          findFirst: {
            args: Prisma.EventLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventLogPayload>
          }
          findMany: {
            args: Prisma.EventLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventLogPayload>[]
          }
          create: {
            args: Prisma.EventLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventLogPayload>
          }
          createMany: {
            args: Prisma.EventLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventLogPayload>[]
          }
          delete: {
            args: Prisma.EventLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventLogPayload>
          }
          update: {
            args: Prisma.EventLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventLogPayload>
          }
          deleteMany: {
            args: Prisma.EventLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventLogPayload>[]
          }
          upsert: {
            args: Prisma.EventLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventLogPayload>
          }
          aggregate: {
            args: Prisma.EventLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEventLog>
          }
          groupBy: {
            args: Prisma.EventLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventLogCountArgs<ExtArgs>
            result: $Utils.Optional<EventLogCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      GalleryConfig: {
        payload: Prisma.$GalleryConfigPayload<ExtArgs>
        fields: Prisma.GalleryConfigFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GalleryConfigFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryConfigPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GalleryConfigFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryConfigPayload>
          }
          findFirst: {
            args: Prisma.GalleryConfigFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryConfigPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GalleryConfigFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryConfigPayload>
          }
          findMany: {
            args: Prisma.GalleryConfigFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryConfigPayload>[]
          }
          create: {
            args: Prisma.GalleryConfigCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryConfigPayload>
          }
          createMany: {
            args: Prisma.GalleryConfigCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GalleryConfigCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryConfigPayload>[]
          }
          delete: {
            args: Prisma.GalleryConfigDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryConfigPayload>
          }
          update: {
            args: Prisma.GalleryConfigUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryConfigPayload>
          }
          deleteMany: {
            args: Prisma.GalleryConfigDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GalleryConfigUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GalleryConfigUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryConfigPayload>[]
          }
          upsert: {
            args: Prisma.GalleryConfigUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryConfigPayload>
          }
          aggregate: {
            args: Prisma.GalleryConfigAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGalleryConfig>
          }
          groupBy: {
            args: Prisma.GalleryConfigGroupByArgs<ExtArgs>
            result: $Utils.Optional<GalleryConfigGroupByOutputType>[]
          }
          count: {
            args: Prisma.GalleryConfigCountArgs<ExtArgs>
            result: $Utils.Optional<GalleryConfigCountAggregateOutputType> | number
          }
        }
      }
      GalleryRecord: {
        payload: Prisma.$GalleryRecordPayload<ExtArgs>
        fields: Prisma.GalleryRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GalleryRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GalleryRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryRecordPayload>
          }
          findFirst: {
            args: Prisma.GalleryRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GalleryRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryRecordPayload>
          }
          findMany: {
            args: Prisma.GalleryRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryRecordPayload>[]
          }
          create: {
            args: Prisma.GalleryRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryRecordPayload>
          }
          createMany: {
            args: Prisma.GalleryRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GalleryRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryRecordPayload>[]
          }
          delete: {
            args: Prisma.GalleryRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryRecordPayload>
          }
          update: {
            args: Prisma.GalleryRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryRecordPayload>
          }
          deleteMany: {
            args: Prisma.GalleryRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GalleryRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GalleryRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryRecordPayload>[]
          }
          upsert: {
            args: Prisma.GalleryRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryRecordPayload>
          }
          aggregate: {
            args: Prisma.GalleryRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGalleryRecord>
          }
          groupBy: {
            args: Prisma.GalleryRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<GalleryRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.GalleryRecordCountArgs<ExtArgs>
            result: $Utils.Optional<GalleryRecordCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      DeletedUser: {
        payload: Prisma.$DeletedUserPayload<ExtArgs>
        fields: Prisma.DeletedUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeletedUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeletedUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeletedUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeletedUserPayload>
          }
          findFirst: {
            args: Prisma.DeletedUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeletedUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeletedUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeletedUserPayload>
          }
          findMany: {
            args: Prisma.DeletedUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeletedUserPayload>[]
          }
          create: {
            args: Prisma.DeletedUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeletedUserPayload>
          }
          createMany: {
            args: Prisma.DeletedUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DeletedUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeletedUserPayload>[]
          }
          delete: {
            args: Prisma.DeletedUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeletedUserPayload>
          }
          update: {
            args: Prisma.DeletedUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeletedUserPayload>
          }
          deleteMany: {
            args: Prisma.DeletedUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeletedUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DeletedUserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeletedUserPayload>[]
          }
          upsert: {
            args: Prisma.DeletedUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeletedUserPayload>
          }
          aggregate: {
            args: Prisma.DeletedUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDeletedUser>
          }
          groupBy: {
            args: Prisma.DeletedUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeletedUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeletedUserCountArgs<ExtArgs>
            result: $Utils.Optional<DeletedUserCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    admin?: AdminOmit
    eventLog?: EventLogOmit
    account?: AccountOmit
    galleryConfig?: GalleryConfigOmit
    galleryRecord?: GalleryRecordOmit
    session?: SessionOmit
    deletedUser?: DeletedUserOmit
    user?: UserOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AccountCountOutputType
   */

  export type AccountCountOutputType = {
    gallery_record: number
  }

  export type AccountCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gallery_record?: boolean | AccountCountOutputTypeCountGallery_recordArgs
  }

  // Custom InputTypes
  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountCountOutputType
     */
    select?: AccountCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeCountGallery_recordArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GalleryRecordWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    event_logs: number
    sessions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event_logs?: boolean | UserCountOutputTypeCountEvent_logsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEvent_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventLogWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminAvgAggregateOutputType = {
    id: number | null
  }

  export type AdminSumAggregateOutputType = {
    id: number | null
  }

  export type AdminMinAggregateOutputType = {
    notes: string | null
    id: number | null
    created_at: Date | null
  }

  export type AdminMaxAggregateOutputType = {
    notes: string | null
    id: number | null
    created_at: Date | null
  }

  export type AdminCountAggregateOutputType = {
    notes: number
    id: number
    created_at: number
    _all: number
  }


  export type AdminAvgAggregateInputType = {
    id?: true
  }

  export type AdminSumAggregateInputType = {
    id?: true
  }

  export type AdminMinAggregateInputType = {
    notes?: true
    id?: true
    created_at?: true
  }

  export type AdminMaxAggregateInputType = {
    notes?: true
    id?: true
    created_at?: true
  }

  export type AdminCountAggregateInputType = {
    notes?: true
    id?: true
    created_at?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _avg?: AdminAvgAggregateInputType
    _sum?: AdminSumAggregateInputType
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    notes: string
    id: number
    created_at: Date
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    notes?: boolean
    id?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    notes?: boolean
    id?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    notes?: boolean
    id?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectScalar = {
    notes?: boolean
    id?: boolean
    created_at?: boolean
  }

  export type AdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"notes" | "id" | "created_at", ExtArgs["result"]["admin"]>

  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      notes: string
      id: number
      created_at: Date
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminFindUniqueArgs>(args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminFindFirstArgs>(args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `notes`
     * const adminWithNotesOnly = await prisma.admin.findMany({ select: { notes: true } })
     * 
     */
    findMany<T extends AdminFindManyArgs>(args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends AdminCreateArgs>(args: SelectSubset<T, AdminCreateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminCreateManyArgs>(args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Admins and returns the data saved in the database.
     * @param {AdminCreateManyAndReturnArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Admins and only return the `notes`
     * const adminWithNotesOnly = await prisma.admin.createManyAndReturn({
     *   select: { notes: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends AdminDeleteArgs>(args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUpdateArgs>(args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminDeleteManyArgs>(args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUpdateManyArgs>(args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins and returns the data updated in the database.
     * @param {AdminUpdateManyAndReturnArgs} args - Arguments to update many Admins.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Admins and only return the `notes`
     * const adminWithNotesOnly = await prisma.admin.updateManyAndReturn({
     *   select: { notes: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AdminUpdateManyAndReturnArgs>(args: SelectSubset<T, AdminUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends AdminUpsertArgs>(args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Admin model
   */
  interface AdminFieldRefs {
    readonly notes: FieldRef<"Admin", 'String'>
    readonly id: FieldRef<"Admin", 'Int'>
    readonly created_at: FieldRef<"Admin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin createManyAndReturn
   */
  export type AdminCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin updateManyAndReturn
   */
  export type AdminUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to delete.
     */
    limit?: number
  }

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
  }


  /**
   * Model EventLog
   */

  export type AggregateEventLog = {
    _count: EventLogCountAggregateOutputType | null
    _avg: EventLogAvgAggregateOutputType | null
    _sum: EventLogSumAggregateOutputType | null
    _min: EventLogMinAggregateOutputType | null
    _max: EventLogMaxAggregateOutputType | null
  }

  export type EventLogAvgAggregateOutputType = {
    event_log_id: number | null
    created_by_user_id: number | null
    event_type: number | null
  }

  export type EventLogSumAggregateOutputType = {
    event_log_id: number | null
    created_by_user_id: number | null
    event_type: number | null
  }

  export type EventLogMinAggregateOutputType = {
    event_log_id: number | null
    created_at: Date | null
    event: string | null
    created_by_user_id: number | null
    language: string | null
    location: string | null
    user_agent: string | null
    client_ip: string | null
    event_payload: string | null
    event_type: number | null
  }

  export type EventLogMaxAggregateOutputType = {
    event_log_id: number | null
    created_at: Date | null
    event: string | null
    created_by_user_id: number | null
    language: string | null
    location: string | null
    user_agent: string | null
    client_ip: string | null
    event_payload: string | null
    event_type: number | null
  }

  export type EventLogCountAggregateOutputType = {
    event_log_id: number
    created_at: number
    event: number
    created_by_user_id: number
    language: number
    location: number
    user_agent: number
    client_ip: number
    event_payload: number
    event_type: number
    _all: number
  }


  export type EventLogAvgAggregateInputType = {
    event_log_id?: true
    created_by_user_id?: true
    event_type?: true
  }

  export type EventLogSumAggregateInputType = {
    event_log_id?: true
    created_by_user_id?: true
    event_type?: true
  }

  export type EventLogMinAggregateInputType = {
    event_log_id?: true
    created_at?: true
    event?: true
    created_by_user_id?: true
    language?: true
    location?: true
    user_agent?: true
    client_ip?: true
    event_payload?: true
    event_type?: true
  }

  export type EventLogMaxAggregateInputType = {
    event_log_id?: true
    created_at?: true
    event?: true
    created_by_user_id?: true
    language?: true
    location?: true
    user_agent?: true
    client_ip?: true
    event_payload?: true
    event_type?: true
  }

  export type EventLogCountAggregateInputType = {
    event_log_id?: true
    created_at?: true
    event?: true
    created_by_user_id?: true
    language?: true
    location?: true
    user_agent?: true
    client_ip?: true
    event_payload?: true
    event_type?: true
    _all?: true
  }

  export type EventLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventLog to aggregate.
     */
    where?: EventLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventLogs to fetch.
     */
    orderBy?: EventLogOrderByWithRelationInput | EventLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EventLogs
    **/
    _count?: true | EventLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventLogMaxAggregateInputType
  }

  export type GetEventLogAggregateType<T extends EventLogAggregateArgs> = {
        [P in keyof T & keyof AggregateEventLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventLog[P]>
      : GetScalarType<T[P], AggregateEventLog[P]>
  }




  export type EventLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventLogWhereInput
    orderBy?: EventLogOrderByWithAggregationInput | EventLogOrderByWithAggregationInput[]
    by: EventLogScalarFieldEnum[] | EventLogScalarFieldEnum
    having?: EventLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventLogCountAggregateInputType | true
    _avg?: EventLogAvgAggregateInputType
    _sum?: EventLogSumAggregateInputType
    _min?: EventLogMinAggregateInputType
    _max?: EventLogMaxAggregateInputType
  }

  export type EventLogGroupByOutputType = {
    event_log_id: number
    created_at: Date
    event: string
    created_by_user_id: number
    language: string | null
    location: string | null
    user_agent: string | null
    client_ip: string | null
    event_payload: string | null
    event_type: number
    _count: EventLogCountAggregateOutputType | null
    _avg: EventLogAvgAggregateOutputType | null
    _sum: EventLogSumAggregateOutputType | null
    _min: EventLogMinAggregateOutputType | null
    _max: EventLogMaxAggregateOutputType | null
  }

  type GetEventLogGroupByPayload<T extends EventLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventLogGroupByOutputType[P]>
            : GetScalarType<T[P], EventLogGroupByOutputType[P]>
        }
      >
    >


  export type EventLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    event_log_id?: boolean
    created_at?: boolean
    event?: boolean
    created_by_user_id?: boolean
    language?: boolean
    location?: boolean
    user_agent?: boolean
    client_ip?: boolean
    event_payload?: boolean
    event_type?: boolean
    created_by_user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventLog"]>

  export type EventLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    event_log_id?: boolean
    created_at?: boolean
    event?: boolean
    created_by_user_id?: boolean
    language?: boolean
    location?: boolean
    user_agent?: boolean
    client_ip?: boolean
    event_payload?: boolean
    event_type?: boolean
    created_by_user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventLog"]>

  export type EventLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    event_log_id?: boolean
    created_at?: boolean
    event?: boolean
    created_by_user_id?: boolean
    language?: boolean
    location?: boolean
    user_agent?: boolean
    client_ip?: boolean
    event_payload?: boolean
    event_type?: boolean
    created_by_user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventLog"]>

  export type EventLogSelectScalar = {
    event_log_id?: boolean
    created_at?: boolean
    event?: boolean
    created_by_user_id?: boolean
    language?: boolean
    location?: boolean
    user_agent?: boolean
    client_ip?: boolean
    event_payload?: boolean
    event_type?: boolean
  }

  export type EventLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"event_log_id" | "created_at" | "event" | "created_by_user_id" | "language" | "location" | "user_agent" | "client_ip" | "event_payload" | "event_type", ExtArgs["result"]["eventLog"]>
  export type EventLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    created_by_user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EventLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    created_by_user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EventLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    created_by_user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $EventLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EventLog"
    objects: {
      created_by_user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      event_log_id: number
      created_at: Date
      event: string
      created_by_user_id: number
      language: string | null
      location: string | null
      user_agent: string | null
      client_ip: string | null
      event_payload: string | null
      event_type: number
    }, ExtArgs["result"]["eventLog"]>
    composites: {}
  }

  type EventLogGetPayload<S extends boolean | null | undefined | EventLogDefaultArgs> = $Result.GetResult<Prisma.$EventLogPayload, S>

  type EventLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventLogCountAggregateInputType | true
    }

  export interface EventLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EventLog'], meta: { name: 'EventLog' } }
    /**
     * Find zero or one EventLog that matches the filter.
     * @param {EventLogFindUniqueArgs} args - Arguments to find a EventLog
     * @example
     * // Get one EventLog
     * const eventLog = await prisma.eventLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventLogFindUniqueArgs>(args: SelectSubset<T, EventLogFindUniqueArgs<ExtArgs>>): Prisma__EventLogClient<$Result.GetResult<Prisma.$EventLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EventLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventLogFindUniqueOrThrowArgs} args - Arguments to find a EventLog
     * @example
     * // Get one EventLog
     * const eventLog = await prisma.eventLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventLogFindUniqueOrThrowArgs>(args: SelectSubset<T, EventLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventLogClient<$Result.GetResult<Prisma.$EventLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventLogFindFirstArgs} args - Arguments to find a EventLog
     * @example
     * // Get one EventLog
     * const eventLog = await prisma.eventLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventLogFindFirstArgs>(args?: SelectSubset<T, EventLogFindFirstArgs<ExtArgs>>): Prisma__EventLogClient<$Result.GetResult<Prisma.$EventLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventLogFindFirstOrThrowArgs} args - Arguments to find a EventLog
     * @example
     * // Get one EventLog
     * const eventLog = await prisma.eventLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventLogFindFirstOrThrowArgs>(args?: SelectSubset<T, EventLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventLogClient<$Result.GetResult<Prisma.$EventLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EventLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventLogs
     * const eventLogs = await prisma.eventLog.findMany()
     * 
     * // Get first 10 EventLogs
     * const eventLogs = await prisma.eventLog.findMany({ take: 10 })
     * 
     * // Only select the `event_log_id`
     * const eventLogWithEvent_log_idOnly = await prisma.eventLog.findMany({ select: { event_log_id: true } })
     * 
     */
    findMany<T extends EventLogFindManyArgs>(args?: SelectSubset<T, EventLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EventLog.
     * @param {EventLogCreateArgs} args - Arguments to create a EventLog.
     * @example
     * // Create one EventLog
     * const EventLog = await prisma.eventLog.create({
     *   data: {
     *     // ... data to create a EventLog
     *   }
     * })
     * 
     */
    create<T extends EventLogCreateArgs>(args: SelectSubset<T, EventLogCreateArgs<ExtArgs>>): Prisma__EventLogClient<$Result.GetResult<Prisma.$EventLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EventLogs.
     * @param {EventLogCreateManyArgs} args - Arguments to create many EventLogs.
     * @example
     * // Create many EventLogs
     * const eventLog = await prisma.eventLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventLogCreateManyArgs>(args?: SelectSubset<T, EventLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EventLogs and returns the data saved in the database.
     * @param {EventLogCreateManyAndReturnArgs} args - Arguments to create many EventLogs.
     * @example
     * // Create many EventLogs
     * const eventLog = await prisma.eventLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EventLogs and only return the `event_log_id`
     * const eventLogWithEvent_log_idOnly = await prisma.eventLog.createManyAndReturn({
     *   select: { event_log_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventLogCreateManyAndReturnArgs>(args?: SelectSubset<T, EventLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EventLog.
     * @param {EventLogDeleteArgs} args - Arguments to delete one EventLog.
     * @example
     * // Delete one EventLog
     * const EventLog = await prisma.eventLog.delete({
     *   where: {
     *     // ... filter to delete one EventLog
     *   }
     * })
     * 
     */
    delete<T extends EventLogDeleteArgs>(args: SelectSubset<T, EventLogDeleteArgs<ExtArgs>>): Prisma__EventLogClient<$Result.GetResult<Prisma.$EventLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EventLog.
     * @param {EventLogUpdateArgs} args - Arguments to update one EventLog.
     * @example
     * // Update one EventLog
     * const eventLog = await prisma.eventLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventLogUpdateArgs>(args: SelectSubset<T, EventLogUpdateArgs<ExtArgs>>): Prisma__EventLogClient<$Result.GetResult<Prisma.$EventLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EventLogs.
     * @param {EventLogDeleteManyArgs} args - Arguments to filter EventLogs to delete.
     * @example
     * // Delete a few EventLogs
     * const { count } = await prisma.eventLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventLogDeleteManyArgs>(args?: SelectSubset<T, EventLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventLogs
     * const eventLog = await prisma.eventLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventLogUpdateManyArgs>(args: SelectSubset<T, EventLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventLogs and returns the data updated in the database.
     * @param {EventLogUpdateManyAndReturnArgs} args - Arguments to update many EventLogs.
     * @example
     * // Update many EventLogs
     * const eventLog = await prisma.eventLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EventLogs and only return the `event_log_id`
     * const eventLogWithEvent_log_idOnly = await prisma.eventLog.updateManyAndReturn({
     *   select: { event_log_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EventLogUpdateManyAndReturnArgs>(args: SelectSubset<T, EventLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EventLog.
     * @param {EventLogUpsertArgs} args - Arguments to update or create a EventLog.
     * @example
     * // Update or create a EventLog
     * const eventLog = await prisma.eventLog.upsert({
     *   create: {
     *     // ... data to create a EventLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventLog we want to update
     *   }
     * })
     */
    upsert<T extends EventLogUpsertArgs>(args: SelectSubset<T, EventLogUpsertArgs<ExtArgs>>): Prisma__EventLogClient<$Result.GetResult<Prisma.$EventLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EventLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventLogCountArgs} args - Arguments to filter EventLogs to count.
     * @example
     * // Count the number of EventLogs
     * const count = await prisma.eventLog.count({
     *   where: {
     *     // ... the filter for the EventLogs we want to count
     *   }
     * })
    **/
    count<T extends EventLogCountArgs>(
      args?: Subset<T, EventLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EventLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventLogAggregateArgs>(args: Subset<T, EventLogAggregateArgs>): Prisma.PrismaPromise<GetEventLogAggregateType<T>>

    /**
     * Group by EventLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EventLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventLogGroupByArgs['orderBy'] }
        : { orderBy?: EventLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EventLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EventLog model
   */
  readonly fields: EventLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EventLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    created_by_user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EventLog model
   */
  interface EventLogFieldRefs {
    readonly event_log_id: FieldRef<"EventLog", 'Int'>
    readonly created_at: FieldRef<"EventLog", 'DateTime'>
    readonly event: FieldRef<"EventLog", 'String'>
    readonly created_by_user_id: FieldRef<"EventLog", 'Int'>
    readonly language: FieldRef<"EventLog", 'String'>
    readonly location: FieldRef<"EventLog", 'String'>
    readonly user_agent: FieldRef<"EventLog", 'String'>
    readonly client_ip: FieldRef<"EventLog", 'String'>
    readonly event_payload: FieldRef<"EventLog", 'String'>
    readonly event_type: FieldRef<"EventLog", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * EventLog findUnique
   */
  export type EventLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventLog
     */
    select?: EventLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventLog
     */
    omit?: EventLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventLogInclude<ExtArgs> | null
    /**
     * Filter, which EventLog to fetch.
     */
    where: EventLogWhereUniqueInput
  }

  /**
   * EventLog findUniqueOrThrow
   */
  export type EventLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventLog
     */
    select?: EventLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventLog
     */
    omit?: EventLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventLogInclude<ExtArgs> | null
    /**
     * Filter, which EventLog to fetch.
     */
    where: EventLogWhereUniqueInput
  }

  /**
   * EventLog findFirst
   */
  export type EventLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventLog
     */
    select?: EventLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventLog
     */
    omit?: EventLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventLogInclude<ExtArgs> | null
    /**
     * Filter, which EventLog to fetch.
     */
    where?: EventLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventLogs to fetch.
     */
    orderBy?: EventLogOrderByWithRelationInput | EventLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventLogs.
     */
    cursor?: EventLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventLogs.
     */
    distinct?: EventLogScalarFieldEnum | EventLogScalarFieldEnum[]
  }

  /**
   * EventLog findFirstOrThrow
   */
  export type EventLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventLog
     */
    select?: EventLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventLog
     */
    omit?: EventLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventLogInclude<ExtArgs> | null
    /**
     * Filter, which EventLog to fetch.
     */
    where?: EventLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventLogs to fetch.
     */
    orderBy?: EventLogOrderByWithRelationInput | EventLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventLogs.
     */
    cursor?: EventLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventLogs.
     */
    distinct?: EventLogScalarFieldEnum | EventLogScalarFieldEnum[]
  }

  /**
   * EventLog findMany
   */
  export type EventLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventLog
     */
    select?: EventLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventLog
     */
    omit?: EventLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventLogInclude<ExtArgs> | null
    /**
     * Filter, which EventLogs to fetch.
     */
    where?: EventLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventLogs to fetch.
     */
    orderBy?: EventLogOrderByWithRelationInput | EventLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EventLogs.
     */
    cursor?: EventLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventLogs.
     */
    skip?: number
    distinct?: EventLogScalarFieldEnum | EventLogScalarFieldEnum[]
  }

  /**
   * EventLog create
   */
  export type EventLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventLog
     */
    select?: EventLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventLog
     */
    omit?: EventLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventLogInclude<ExtArgs> | null
    /**
     * The data needed to create a EventLog.
     */
    data: XOR<EventLogCreateInput, EventLogUncheckedCreateInput>
  }

  /**
   * EventLog createMany
   */
  export type EventLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EventLogs.
     */
    data: EventLogCreateManyInput | EventLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EventLog createManyAndReturn
   */
  export type EventLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventLog
     */
    select?: EventLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventLog
     */
    omit?: EventLogOmit<ExtArgs> | null
    /**
     * The data used to create many EventLogs.
     */
    data: EventLogCreateManyInput | EventLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EventLog update
   */
  export type EventLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventLog
     */
    select?: EventLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventLog
     */
    omit?: EventLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventLogInclude<ExtArgs> | null
    /**
     * The data needed to update a EventLog.
     */
    data: XOR<EventLogUpdateInput, EventLogUncheckedUpdateInput>
    /**
     * Choose, which EventLog to update.
     */
    where: EventLogWhereUniqueInput
  }

  /**
   * EventLog updateMany
   */
  export type EventLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EventLogs.
     */
    data: XOR<EventLogUpdateManyMutationInput, EventLogUncheckedUpdateManyInput>
    /**
     * Filter which EventLogs to update
     */
    where?: EventLogWhereInput
    /**
     * Limit how many EventLogs to update.
     */
    limit?: number
  }

  /**
   * EventLog updateManyAndReturn
   */
  export type EventLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventLog
     */
    select?: EventLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventLog
     */
    omit?: EventLogOmit<ExtArgs> | null
    /**
     * The data used to update EventLogs.
     */
    data: XOR<EventLogUpdateManyMutationInput, EventLogUncheckedUpdateManyInput>
    /**
     * Filter which EventLogs to update
     */
    where?: EventLogWhereInput
    /**
     * Limit how many EventLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EventLog upsert
   */
  export type EventLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventLog
     */
    select?: EventLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventLog
     */
    omit?: EventLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventLogInclude<ExtArgs> | null
    /**
     * The filter to search for the EventLog to update in case it exists.
     */
    where: EventLogWhereUniqueInput
    /**
     * In case the EventLog found by the `where` argument doesn't exist, create a new EventLog with this data.
     */
    create: XOR<EventLogCreateInput, EventLogUncheckedCreateInput>
    /**
     * In case the EventLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventLogUpdateInput, EventLogUncheckedUpdateInput>
  }

  /**
   * EventLog delete
   */
  export type EventLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventLog
     */
    select?: EventLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventLog
     */
    omit?: EventLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventLogInclude<ExtArgs> | null
    /**
     * Filter which EventLog to delete.
     */
    where: EventLogWhereUniqueInput
  }

  /**
   * EventLog deleteMany
   */
  export type EventLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventLogs to delete
     */
    where?: EventLogWhereInput
    /**
     * Limit how many EventLogs to delete.
     */
    limit?: number
  }

  /**
   * EventLog without action
   */
  export type EventLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventLog
     */
    select?: EventLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventLog
     */
    omit?: EventLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventLogInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    account_id: number | null
    created_by_user_id: number | null
    pricing_plan: number | null
    payment_status: number | null
    account_status: number | null
  }

  export type AccountSumAggregateOutputType = {
    account_id: number | null
    created_by_user_id: number | null
    pricing_plan: number | null
    payment_status: number | null
    account_status: number | null
  }

  export type AccountMinAggregateOutputType = {
    account_id: number | null
    created_at: Date | null
    created_by_user_id: number | null
    display_name: string | null
    pricing_plan: number | null
    payment_status: number | null
    account_status: number | null
    account_expiration_date: Date | null
    upcoming_payment_date: Date | null
  }

  export type AccountMaxAggregateOutputType = {
    account_id: number | null
    created_at: Date | null
    created_by_user_id: number | null
    display_name: string | null
    pricing_plan: number | null
    payment_status: number | null
    account_status: number | null
    account_expiration_date: Date | null
    upcoming_payment_date: Date | null
  }

  export type AccountCountAggregateOutputType = {
    account_id: number
    created_at: number
    created_by_user_id: number
    display_name: number
    pricing_plan: number
    payment_status: number
    account_status: number
    account_expiration_date: number
    upcoming_payment_date: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    account_id?: true
    created_by_user_id?: true
    pricing_plan?: true
    payment_status?: true
    account_status?: true
  }

  export type AccountSumAggregateInputType = {
    account_id?: true
    created_by_user_id?: true
    pricing_plan?: true
    payment_status?: true
    account_status?: true
  }

  export type AccountMinAggregateInputType = {
    account_id?: true
    created_at?: true
    created_by_user_id?: true
    display_name?: true
    pricing_plan?: true
    payment_status?: true
    account_status?: true
    account_expiration_date?: true
    upcoming_payment_date?: true
  }

  export type AccountMaxAggregateInputType = {
    account_id?: true
    created_at?: true
    created_by_user_id?: true
    display_name?: true
    pricing_plan?: true
    payment_status?: true
    account_status?: true
    account_expiration_date?: true
    upcoming_payment_date?: true
  }

  export type AccountCountAggregateInputType = {
    account_id?: true
    created_at?: true
    created_by_user_id?: true
    display_name?: true
    pricing_plan?: true
    payment_status?: true
    account_status?: true
    account_expiration_date?: true
    upcoming_payment_date?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    account_id: number
    created_at: Date
    created_by_user_id: number
    display_name: string | null
    pricing_plan: number
    payment_status: number
    account_status: number
    account_expiration_date: Date | null
    upcoming_payment_date: Date | null
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    account_id?: boolean
    created_at?: boolean
    created_by_user_id?: boolean
    display_name?: boolean
    pricing_plan?: boolean
    payment_status?: boolean
    account_status?: boolean
    account_expiration_date?: boolean
    upcoming_payment_date?: boolean
    created_by_user?: boolean | UserDefaultArgs<ExtArgs>
    gallery_config?: boolean | Account$gallery_configArgs<ExtArgs>
    gallery_record?: boolean | Account$gallery_recordArgs<ExtArgs>
    _count?: boolean | AccountCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    account_id?: boolean
    created_at?: boolean
    created_by_user_id?: boolean
    display_name?: boolean
    pricing_plan?: boolean
    payment_status?: boolean
    account_status?: boolean
    account_expiration_date?: boolean
    upcoming_payment_date?: boolean
    created_by_user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    account_id?: boolean
    created_at?: boolean
    created_by_user_id?: boolean
    display_name?: boolean
    pricing_plan?: boolean
    payment_status?: boolean
    account_status?: boolean
    account_expiration_date?: boolean
    upcoming_payment_date?: boolean
    created_by_user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    account_id?: boolean
    created_at?: boolean
    created_by_user_id?: boolean
    display_name?: boolean
    pricing_plan?: boolean
    payment_status?: boolean
    account_status?: boolean
    account_expiration_date?: boolean
    upcoming_payment_date?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"account_id" | "created_at" | "created_by_user_id" | "display_name" | "pricing_plan" | "payment_status" | "account_status" | "account_expiration_date" | "upcoming_payment_date", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    created_by_user?: boolean | UserDefaultArgs<ExtArgs>
    gallery_config?: boolean | Account$gallery_configArgs<ExtArgs>
    gallery_record?: boolean | Account$gallery_recordArgs<ExtArgs>
    _count?: boolean | AccountCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    created_by_user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    created_by_user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      created_by_user: Prisma.$UserPayload<ExtArgs>
      gallery_config: Prisma.$GalleryConfigPayload<ExtArgs> | null
      gallery_record: Prisma.$GalleryRecordPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      account_id: number
      created_at: Date
      created_by_user_id: number
      display_name: string | null
      pricing_plan: number
      payment_status: number
      account_status: number
      account_expiration_date: Date | null
      upcoming_payment_date: Date | null
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `account_id`
     * const accountWithAccount_idOnly = await prisma.account.findMany({ select: { account_id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `account_id`
     * const accountWithAccount_idOnly = await prisma.account.createManyAndReturn({
     *   select: { account_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `account_id`
     * const accountWithAccount_idOnly = await prisma.account.updateManyAndReturn({
     *   select: { account_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    created_by_user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    gallery_config<T extends Account$gallery_configArgs<ExtArgs> = {}>(args?: Subset<T, Account$gallery_configArgs<ExtArgs>>): Prisma__GalleryConfigClient<$Result.GetResult<Prisma.$GalleryConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    gallery_record<T extends Account$gallery_recordArgs<ExtArgs> = {}>(args?: Subset<T, Account$gallery_recordArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GalleryRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly account_id: FieldRef<"Account", 'Int'>
    readonly created_at: FieldRef<"Account", 'DateTime'>
    readonly created_by_user_id: FieldRef<"Account", 'Int'>
    readonly display_name: FieldRef<"Account", 'String'>
    readonly pricing_plan: FieldRef<"Account", 'Int'>
    readonly payment_status: FieldRef<"Account", 'Int'>
    readonly account_status: FieldRef<"Account", 'Int'>
    readonly account_expiration_date: FieldRef<"Account", 'DateTime'>
    readonly upcoming_payment_date: FieldRef<"Account", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account.gallery_config
   */
  export type Account$gallery_configArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryConfig
     */
    select?: GalleryConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryConfig
     */
    omit?: GalleryConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryConfigInclude<ExtArgs> | null
    where?: GalleryConfigWhereInput
  }

  /**
   * Account.gallery_record
   */
  export type Account$gallery_recordArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryRecord
     */
    select?: GalleryRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryRecord
     */
    omit?: GalleryRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryRecordInclude<ExtArgs> | null
    where?: GalleryRecordWhereInput
    orderBy?: GalleryRecordOrderByWithRelationInput | GalleryRecordOrderByWithRelationInput[]
    cursor?: GalleryRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GalleryRecordScalarFieldEnum | GalleryRecordScalarFieldEnum[]
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model GalleryConfig
   */

  export type AggregateGalleryConfig = {
    _count: GalleryConfigCountAggregateOutputType | null
    _avg: GalleryConfigAvgAggregateOutputType | null
    _sum: GalleryConfigSumAggregateOutputType | null
    _min: GalleryConfigMinAggregateOutputType | null
    _max: GalleryConfigMaxAggregateOutputType | null
  }

  export type GalleryConfigAvgAggregateOutputType = {
    gallery_config_id: number | null
    created_by_account_id: number | null
  }

  export type GalleryConfigSumAggregateOutputType = {
    gallery_config_id: number | null
    created_by_account_id: number | null
  }

  export type GalleryConfigMinAggregateOutputType = {
    gallery_config_id: number | null
    created_at: Date | null
    created_by_account_id: number | null
  }

  export type GalleryConfigMaxAggregateOutputType = {
    gallery_config_id: number | null
    created_at: Date | null
    created_by_account_id: number | null
  }

  export type GalleryConfigCountAggregateOutputType = {
    gallery_config_id: number
    created_at: number
    created_by_account_id: number
    records_traits: number
    records_color_traits: number
    _all: number
  }


  export type GalleryConfigAvgAggregateInputType = {
    gallery_config_id?: true
    created_by_account_id?: true
  }

  export type GalleryConfigSumAggregateInputType = {
    gallery_config_id?: true
    created_by_account_id?: true
  }

  export type GalleryConfigMinAggregateInputType = {
    gallery_config_id?: true
    created_at?: true
    created_by_account_id?: true
  }

  export type GalleryConfigMaxAggregateInputType = {
    gallery_config_id?: true
    created_at?: true
    created_by_account_id?: true
  }

  export type GalleryConfigCountAggregateInputType = {
    gallery_config_id?: true
    created_at?: true
    created_by_account_id?: true
    records_traits?: true
    records_color_traits?: true
    _all?: true
  }

  export type GalleryConfigAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GalleryConfig to aggregate.
     */
    where?: GalleryConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GalleryConfigs to fetch.
     */
    orderBy?: GalleryConfigOrderByWithRelationInput | GalleryConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GalleryConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GalleryConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GalleryConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GalleryConfigs
    **/
    _count?: true | GalleryConfigCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GalleryConfigAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GalleryConfigSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GalleryConfigMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GalleryConfigMaxAggregateInputType
  }

  export type GetGalleryConfigAggregateType<T extends GalleryConfigAggregateArgs> = {
        [P in keyof T & keyof AggregateGalleryConfig]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGalleryConfig[P]>
      : GetScalarType<T[P], AggregateGalleryConfig[P]>
  }




  export type GalleryConfigGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GalleryConfigWhereInput
    orderBy?: GalleryConfigOrderByWithAggregationInput | GalleryConfigOrderByWithAggregationInput[]
    by: GalleryConfigScalarFieldEnum[] | GalleryConfigScalarFieldEnum
    having?: GalleryConfigScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GalleryConfigCountAggregateInputType | true
    _avg?: GalleryConfigAvgAggregateInputType
    _sum?: GalleryConfigSumAggregateInputType
    _min?: GalleryConfigMinAggregateInputType
    _max?: GalleryConfigMaxAggregateInputType
  }

  export type GalleryConfigGroupByOutputType = {
    gallery_config_id: number
    created_at: Date
    created_by_account_id: number
    records_traits: string[]
    records_color_traits: string[]
    _count: GalleryConfigCountAggregateOutputType | null
    _avg: GalleryConfigAvgAggregateOutputType | null
    _sum: GalleryConfigSumAggregateOutputType | null
    _min: GalleryConfigMinAggregateOutputType | null
    _max: GalleryConfigMaxAggregateOutputType | null
  }

  type GetGalleryConfigGroupByPayload<T extends GalleryConfigGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GalleryConfigGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GalleryConfigGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GalleryConfigGroupByOutputType[P]>
            : GetScalarType<T[P], GalleryConfigGroupByOutputType[P]>
        }
      >
    >


  export type GalleryConfigSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    gallery_config_id?: boolean
    created_at?: boolean
    created_by_account_id?: boolean
    records_traits?: boolean
    records_color_traits?: boolean
    created_by_user?: boolean | AccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["galleryConfig"]>

  export type GalleryConfigSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    gallery_config_id?: boolean
    created_at?: boolean
    created_by_account_id?: boolean
    records_traits?: boolean
    records_color_traits?: boolean
    created_by_user?: boolean | AccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["galleryConfig"]>

  export type GalleryConfigSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    gallery_config_id?: boolean
    created_at?: boolean
    created_by_account_id?: boolean
    records_traits?: boolean
    records_color_traits?: boolean
    created_by_user?: boolean | AccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["galleryConfig"]>

  export type GalleryConfigSelectScalar = {
    gallery_config_id?: boolean
    created_at?: boolean
    created_by_account_id?: boolean
    records_traits?: boolean
    records_color_traits?: boolean
  }

  export type GalleryConfigOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"gallery_config_id" | "created_at" | "created_by_account_id" | "records_traits" | "records_color_traits", ExtArgs["result"]["galleryConfig"]>
  export type GalleryConfigInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    created_by_user?: boolean | AccountDefaultArgs<ExtArgs>
  }
  export type GalleryConfigIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    created_by_user?: boolean | AccountDefaultArgs<ExtArgs>
  }
  export type GalleryConfigIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    created_by_user?: boolean | AccountDefaultArgs<ExtArgs>
  }

  export type $GalleryConfigPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GalleryConfig"
    objects: {
      created_by_user: Prisma.$AccountPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      gallery_config_id: number
      created_at: Date
      created_by_account_id: number
      records_traits: string[]
      records_color_traits: string[]
    }, ExtArgs["result"]["galleryConfig"]>
    composites: {}
  }

  type GalleryConfigGetPayload<S extends boolean | null | undefined | GalleryConfigDefaultArgs> = $Result.GetResult<Prisma.$GalleryConfigPayload, S>

  type GalleryConfigCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GalleryConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GalleryConfigCountAggregateInputType | true
    }

  export interface GalleryConfigDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GalleryConfig'], meta: { name: 'GalleryConfig' } }
    /**
     * Find zero or one GalleryConfig that matches the filter.
     * @param {GalleryConfigFindUniqueArgs} args - Arguments to find a GalleryConfig
     * @example
     * // Get one GalleryConfig
     * const galleryConfig = await prisma.galleryConfig.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GalleryConfigFindUniqueArgs>(args: SelectSubset<T, GalleryConfigFindUniqueArgs<ExtArgs>>): Prisma__GalleryConfigClient<$Result.GetResult<Prisma.$GalleryConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GalleryConfig that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GalleryConfigFindUniqueOrThrowArgs} args - Arguments to find a GalleryConfig
     * @example
     * // Get one GalleryConfig
     * const galleryConfig = await prisma.galleryConfig.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GalleryConfigFindUniqueOrThrowArgs>(args: SelectSubset<T, GalleryConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GalleryConfigClient<$Result.GetResult<Prisma.$GalleryConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GalleryConfig that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryConfigFindFirstArgs} args - Arguments to find a GalleryConfig
     * @example
     * // Get one GalleryConfig
     * const galleryConfig = await prisma.galleryConfig.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GalleryConfigFindFirstArgs>(args?: SelectSubset<T, GalleryConfigFindFirstArgs<ExtArgs>>): Prisma__GalleryConfigClient<$Result.GetResult<Prisma.$GalleryConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GalleryConfig that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryConfigFindFirstOrThrowArgs} args - Arguments to find a GalleryConfig
     * @example
     * // Get one GalleryConfig
     * const galleryConfig = await prisma.galleryConfig.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GalleryConfigFindFirstOrThrowArgs>(args?: SelectSubset<T, GalleryConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma__GalleryConfigClient<$Result.GetResult<Prisma.$GalleryConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GalleryConfigs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryConfigFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GalleryConfigs
     * const galleryConfigs = await prisma.galleryConfig.findMany()
     * 
     * // Get first 10 GalleryConfigs
     * const galleryConfigs = await prisma.galleryConfig.findMany({ take: 10 })
     * 
     * // Only select the `gallery_config_id`
     * const galleryConfigWithGallery_config_idOnly = await prisma.galleryConfig.findMany({ select: { gallery_config_id: true } })
     * 
     */
    findMany<T extends GalleryConfigFindManyArgs>(args?: SelectSubset<T, GalleryConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GalleryConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GalleryConfig.
     * @param {GalleryConfigCreateArgs} args - Arguments to create a GalleryConfig.
     * @example
     * // Create one GalleryConfig
     * const GalleryConfig = await prisma.galleryConfig.create({
     *   data: {
     *     // ... data to create a GalleryConfig
     *   }
     * })
     * 
     */
    create<T extends GalleryConfigCreateArgs>(args: SelectSubset<T, GalleryConfigCreateArgs<ExtArgs>>): Prisma__GalleryConfigClient<$Result.GetResult<Prisma.$GalleryConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GalleryConfigs.
     * @param {GalleryConfigCreateManyArgs} args - Arguments to create many GalleryConfigs.
     * @example
     * // Create many GalleryConfigs
     * const galleryConfig = await prisma.galleryConfig.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GalleryConfigCreateManyArgs>(args?: SelectSubset<T, GalleryConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GalleryConfigs and returns the data saved in the database.
     * @param {GalleryConfigCreateManyAndReturnArgs} args - Arguments to create many GalleryConfigs.
     * @example
     * // Create many GalleryConfigs
     * const galleryConfig = await prisma.galleryConfig.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GalleryConfigs and only return the `gallery_config_id`
     * const galleryConfigWithGallery_config_idOnly = await prisma.galleryConfig.createManyAndReturn({
     *   select: { gallery_config_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GalleryConfigCreateManyAndReturnArgs>(args?: SelectSubset<T, GalleryConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GalleryConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GalleryConfig.
     * @param {GalleryConfigDeleteArgs} args - Arguments to delete one GalleryConfig.
     * @example
     * // Delete one GalleryConfig
     * const GalleryConfig = await prisma.galleryConfig.delete({
     *   where: {
     *     // ... filter to delete one GalleryConfig
     *   }
     * })
     * 
     */
    delete<T extends GalleryConfigDeleteArgs>(args: SelectSubset<T, GalleryConfigDeleteArgs<ExtArgs>>): Prisma__GalleryConfigClient<$Result.GetResult<Prisma.$GalleryConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GalleryConfig.
     * @param {GalleryConfigUpdateArgs} args - Arguments to update one GalleryConfig.
     * @example
     * // Update one GalleryConfig
     * const galleryConfig = await prisma.galleryConfig.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GalleryConfigUpdateArgs>(args: SelectSubset<T, GalleryConfigUpdateArgs<ExtArgs>>): Prisma__GalleryConfigClient<$Result.GetResult<Prisma.$GalleryConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GalleryConfigs.
     * @param {GalleryConfigDeleteManyArgs} args - Arguments to filter GalleryConfigs to delete.
     * @example
     * // Delete a few GalleryConfigs
     * const { count } = await prisma.galleryConfig.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GalleryConfigDeleteManyArgs>(args?: SelectSubset<T, GalleryConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GalleryConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryConfigUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GalleryConfigs
     * const galleryConfig = await prisma.galleryConfig.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GalleryConfigUpdateManyArgs>(args: SelectSubset<T, GalleryConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GalleryConfigs and returns the data updated in the database.
     * @param {GalleryConfigUpdateManyAndReturnArgs} args - Arguments to update many GalleryConfigs.
     * @example
     * // Update many GalleryConfigs
     * const galleryConfig = await prisma.galleryConfig.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GalleryConfigs and only return the `gallery_config_id`
     * const galleryConfigWithGallery_config_idOnly = await prisma.galleryConfig.updateManyAndReturn({
     *   select: { gallery_config_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GalleryConfigUpdateManyAndReturnArgs>(args: SelectSubset<T, GalleryConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GalleryConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GalleryConfig.
     * @param {GalleryConfigUpsertArgs} args - Arguments to update or create a GalleryConfig.
     * @example
     * // Update or create a GalleryConfig
     * const galleryConfig = await prisma.galleryConfig.upsert({
     *   create: {
     *     // ... data to create a GalleryConfig
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GalleryConfig we want to update
     *   }
     * })
     */
    upsert<T extends GalleryConfigUpsertArgs>(args: SelectSubset<T, GalleryConfigUpsertArgs<ExtArgs>>): Prisma__GalleryConfigClient<$Result.GetResult<Prisma.$GalleryConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GalleryConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryConfigCountArgs} args - Arguments to filter GalleryConfigs to count.
     * @example
     * // Count the number of GalleryConfigs
     * const count = await prisma.galleryConfig.count({
     *   where: {
     *     // ... the filter for the GalleryConfigs we want to count
     *   }
     * })
    **/
    count<T extends GalleryConfigCountArgs>(
      args?: Subset<T, GalleryConfigCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GalleryConfigCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GalleryConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GalleryConfigAggregateArgs>(args: Subset<T, GalleryConfigAggregateArgs>): Prisma.PrismaPromise<GetGalleryConfigAggregateType<T>>

    /**
     * Group by GalleryConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryConfigGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GalleryConfigGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GalleryConfigGroupByArgs['orderBy'] }
        : { orderBy?: GalleryConfigGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GalleryConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGalleryConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GalleryConfig model
   */
  readonly fields: GalleryConfigFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GalleryConfig.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GalleryConfigClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    created_by_user<T extends AccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AccountDefaultArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GalleryConfig model
   */
  interface GalleryConfigFieldRefs {
    readonly gallery_config_id: FieldRef<"GalleryConfig", 'Int'>
    readonly created_at: FieldRef<"GalleryConfig", 'DateTime'>
    readonly created_by_account_id: FieldRef<"GalleryConfig", 'Int'>
    readonly records_traits: FieldRef<"GalleryConfig", 'String[]'>
    readonly records_color_traits: FieldRef<"GalleryConfig", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * GalleryConfig findUnique
   */
  export type GalleryConfigFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryConfig
     */
    select?: GalleryConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryConfig
     */
    omit?: GalleryConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryConfigInclude<ExtArgs> | null
    /**
     * Filter, which GalleryConfig to fetch.
     */
    where: GalleryConfigWhereUniqueInput
  }

  /**
   * GalleryConfig findUniqueOrThrow
   */
  export type GalleryConfigFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryConfig
     */
    select?: GalleryConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryConfig
     */
    omit?: GalleryConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryConfigInclude<ExtArgs> | null
    /**
     * Filter, which GalleryConfig to fetch.
     */
    where: GalleryConfigWhereUniqueInput
  }

  /**
   * GalleryConfig findFirst
   */
  export type GalleryConfigFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryConfig
     */
    select?: GalleryConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryConfig
     */
    omit?: GalleryConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryConfigInclude<ExtArgs> | null
    /**
     * Filter, which GalleryConfig to fetch.
     */
    where?: GalleryConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GalleryConfigs to fetch.
     */
    orderBy?: GalleryConfigOrderByWithRelationInput | GalleryConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GalleryConfigs.
     */
    cursor?: GalleryConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GalleryConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GalleryConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GalleryConfigs.
     */
    distinct?: GalleryConfigScalarFieldEnum | GalleryConfigScalarFieldEnum[]
  }

  /**
   * GalleryConfig findFirstOrThrow
   */
  export type GalleryConfigFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryConfig
     */
    select?: GalleryConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryConfig
     */
    omit?: GalleryConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryConfigInclude<ExtArgs> | null
    /**
     * Filter, which GalleryConfig to fetch.
     */
    where?: GalleryConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GalleryConfigs to fetch.
     */
    orderBy?: GalleryConfigOrderByWithRelationInput | GalleryConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GalleryConfigs.
     */
    cursor?: GalleryConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GalleryConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GalleryConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GalleryConfigs.
     */
    distinct?: GalleryConfigScalarFieldEnum | GalleryConfigScalarFieldEnum[]
  }

  /**
   * GalleryConfig findMany
   */
  export type GalleryConfigFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryConfig
     */
    select?: GalleryConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryConfig
     */
    omit?: GalleryConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryConfigInclude<ExtArgs> | null
    /**
     * Filter, which GalleryConfigs to fetch.
     */
    where?: GalleryConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GalleryConfigs to fetch.
     */
    orderBy?: GalleryConfigOrderByWithRelationInput | GalleryConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GalleryConfigs.
     */
    cursor?: GalleryConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GalleryConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GalleryConfigs.
     */
    skip?: number
    distinct?: GalleryConfigScalarFieldEnum | GalleryConfigScalarFieldEnum[]
  }

  /**
   * GalleryConfig create
   */
  export type GalleryConfigCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryConfig
     */
    select?: GalleryConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryConfig
     */
    omit?: GalleryConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryConfigInclude<ExtArgs> | null
    /**
     * The data needed to create a GalleryConfig.
     */
    data: XOR<GalleryConfigCreateInput, GalleryConfigUncheckedCreateInput>
  }

  /**
   * GalleryConfig createMany
   */
  export type GalleryConfigCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GalleryConfigs.
     */
    data: GalleryConfigCreateManyInput | GalleryConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GalleryConfig createManyAndReturn
   */
  export type GalleryConfigCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryConfig
     */
    select?: GalleryConfigSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryConfig
     */
    omit?: GalleryConfigOmit<ExtArgs> | null
    /**
     * The data used to create many GalleryConfigs.
     */
    data: GalleryConfigCreateManyInput | GalleryConfigCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryConfigIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GalleryConfig update
   */
  export type GalleryConfigUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryConfig
     */
    select?: GalleryConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryConfig
     */
    omit?: GalleryConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryConfigInclude<ExtArgs> | null
    /**
     * The data needed to update a GalleryConfig.
     */
    data: XOR<GalleryConfigUpdateInput, GalleryConfigUncheckedUpdateInput>
    /**
     * Choose, which GalleryConfig to update.
     */
    where: GalleryConfigWhereUniqueInput
  }

  /**
   * GalleryConfig updateMany
   */
  export type GalleryConfigUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GalleryConfigs.
     */
    data: XOR<GalleryConfigUpdateManyMutationInput, GalleryConfigUncheckedUpdateManyInput>
    /**
     * Filter which GalleryConfigs to update
     */
    where?: GalleryConfigWhereInput
    /**
     * Limit how many GalleryConfigs to update.
     */
    limit?: number
  }

  /**
   * GalleryConfig updateManyAndReturn
   */
  export type GalleryConfigUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryConfig
     */
    select?: GalleryConfigSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryConfig
     */
    omit?: GalleryConfigOmit<ExtArgs> | null
    /**
     * The data used to update GalleryConfigs.
     */
    data: XOR<GalleryConfigUpdateManyMutationInput, GalleryConfigUncheckedUpdateManyInput>
    /**
     * Filter which GalleryConfigs to update
     */
    where?: GalleryConfigWhereInput
    /**
     * Limit how many GalleryConfigs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryConfigIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GalleryConfig upsert
   */
  export type GalleryConfigUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryConfig
     */
    select?: GalleryConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryConfig
     */
    omit?: GalleryConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryConfigInclude<ExtArgs> | null
    /**
     * The filter to search for the GalleryConfig to update in case it exists.
     */
    where: GalleryConfigWhereUniqueInput
    /**
     * In case the GalleryConfig found by the `where` argument doesn't exist, create a new GalleryConfig with this data.
     */
    create: XOR<GalleryConfigCreateInput, GalleryConfigUncheckedCreateInput>
    /**
     * In case the GalleryConfig was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GalleryConfigUpdateInput, GalleryConfigUncheckedUpdateInput>
  }

  /**
   * GalleryConfig delete
   */
  export type GalleryConfigDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryConfig
     */
    select?: GalleryConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryConfig
     */
    omit?: GalleryConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryConfigInclude<ExtArgs> | null
    /**
     * Filter which GalleryConfig to delete.
     */
    where: GalleryConfigWhereUniqueInput
  }

  /**
   * GalleryConfig deleteMany
   */
  export type GalleryConfigDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GalleryConfigs to delete
     */
    where?: GalleryConfigWhereInput
    /**
     * Limit how many GalleryConfigs to delete.
     */
    limit?: number
  }

  /**
   * GalleryConfig without action
   */
  export type GalleryConfigDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryConfig
     */
    select?: GalleryConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryConfig
     */
    omit?: GalleryConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryConfigInclude<ExtArgs> | null
  }


  /**
   * Model GalleryRecord
   */

  export type AggregateGalleryRecord = {
    _count: GalleryRecordCountAggregateOutputType | null
    _avg: GalleryRecordAvgAggregateOutputType | null
    _sum: GalleryRecordSumAggregateOutputType | null
    _min: GalleryRecordMinAggregateOutputType | null
    _max: GalleryRecordMaxAggregateOutputType | null
  }

  export type GalleryRecordAvgAggregateOutputType = {
    gallery_record_id: number | null
    created_by_account_id: number | null
  }

  export type GalleryRecordSumAggregateOutputType = {
    gallery_record_id: number | null
    created_by_account_id: number | null
  }

  export type GalleryRecordMinAggregateOutputType = {
    gallery_record_id: number | null
    created_at: Date | null
    created_by_account_id: number | null
    asset_url: string | null
  }

  export type GalleryRecordMaxAggregateOutputType = {
    gallery_record_id: number | null
    created_at: Date | null
    created_by_account_id: number | null
    asset_url: string | null
  }

  export type GalleryRecordCountAggregateOutputType = {
    gallery_record_id: number
    created_at: number
    created_by_account_id: number
    asset_url: number
    asset_traits: number
    asset_color_traits: number
    _all: number
  }


  export type GalleryRecordAvgAggregateInputType = {
    gallery_record_id?: true
    created_by_account_id?: true
  }

  export type GalleryRecordSumAggregateInputType = {
    gallery_record_id?: true
    created_by_account_id?: true
  }

  export type GalleryRecordMinAggregateInputType = {
    gallery_record_id?: true
    created_at?: true
    created_by_account_id?: true
    asset_url?: true
  }

  export type GalleryRecordMaxAggregateInputType = {
    gallery_record_id?: true
    created_at?: true
    created_by_account_id?: true
    asset_url?: true
  }

  export type GalleryRecordCountAggregateInputType = {
    gallery_record_id?: true
    created_at?: true
    created_by_account_id?: true
    asset_url?: true
    asset_traits?: true
    asset_color_traits?: true
    _all?: true
  }

  export type GalleryRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GalleryRecord to aggregate.
     */
    where?: GalleryRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GalleryRecords to fetch.
     */
    orderBy?: GalleryRecordOrderByWithRelationInput | GalleryRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GalleryRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GalleryRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GalleryRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GalleryRecords
    **/
    _count?: true | GalleryRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GalleryRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GalleryRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GalleryRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GalleryRecordMaxAggregateInputType
  }

  export type GetGalleryRecordAggregateType<T extends GalleryRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateGalleryRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGalleryRecord[P]>
      : GetScalarType<T[P], AggregateGalleryRecord[P]>
  }




  export type GalleryRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GalleryRecordWhereInput
    orderBy?: GalleryRecordOrderByWithAggregationInput | GalleryRecordOrderByWithAggregationInput[]
    by: GalleryRecordScalarFieldEnum[] | GalleryRecordScalarFieldEnum
    having?: GalleryRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GalleryRecordCountAggregateInputType | true
    _avg?: GalleryRecordAvgAggregateInputType
    _sum?: GalleryRecordSumAggregateInputType
    _min?: GalleryRecordMinAggregateInputType
    _max?: GalleryRecordMaxAggregateInputType
  }

  export type GalleryRecordGroupByOutputType = {
    gallery_record_id: number
    created_at: Date
    created_by_account_id: number
    asset_url: string
    asset_traits: string[]
    asset_color_traits: string[]
    _count: GalleryRecordCountAggregateOutputType | null
    _avg: GalleryRecordAvgAggregateOutputType | null
    _sum: GalleryRecordSumAggregateOutputType | null
    _min: GalleryRecordMinAggregateOutputType | null
    _max: GalleryRecordMaxAggregateOutputType | null
  }

  type GetGalleryRecordGroupByPayload<T extends GalleryRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GalleryRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GalleryRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GalleryRecordGroupByOutputType[P]>
            : GetScalarType<T[P], GalleryRecordGroupByOutputType[P]>
        }
      >
    >


  export type GalleryRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    gallery_record_id?: boolean
    created_at?: boolean
    created_by_account_id?: boolean
    asset_url?: boolean
    asset_traits?: boolean
    asset_color_traits?: boolean
    created_by_account?: boolean | AccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["galleryRecord"]>

  export type GalleryRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    gallery_record_id?: boolean
    created_at?: boolean
    created_by_account_id?: boolean
    asset_url?: boolean
    asset_traits?: boolean
    asset_color_traits?: boolean
    created_by_account?: boolean | AccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["galleryRecord"]>

  export type GalleryRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    gallery_record_id?: boolean
    created_at?: boolean
    created_by_account_id?: boolean
    asset_url?: boolean
    asset_traits?: boolean
    asset_color_traits?: boolean
    created_by_account?: boolean | AccountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["galleryRecord"]>

  export type GalleryRecordSelectScalar = {
    gallery_record_id?: boolean
    created_at?: boolean
    created_by_account_id?: boolean
    asset_url?: boolean
    asset_traits?: boolean
    asset_color_traits?: boolean
  }

  export type GalleryRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"gallery_record_id" | "created_at" | "created_by_account_id" | "asset_url" | "asset_traits" | "asset_color_traits", ExtArgs["result"]["galleryRecord"]>
  export type GalleryRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    created_by_account?: boolean | AccountDefaultArgs<ExtArgs>
  }
  export type GalleryRecordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    created_by_account?: boolean | AccountDefaultArgs<ExtArgs>
  }
  export type GalleryRecordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    created_by_account?: boolean | AccountDefaultArgs<ExtArgs>
  }

  export type $GalleryRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GalleryRecord"
    objects: {
      created_by_account: Prisma.$AccountPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      gallery_record_id: number
      created_at: Date
      created_by_account_id: number
      asset_url: string
      asset_traits: string[]
      asset_color_traits: string[]
    }, ExtArgs["result"]["galleryRecord"]>
    composites: {}
  }

  type GalleryRecordGetPayload<S extends boolean | null | undefined | GalleryRecordDefaultArgs> = $Result.GetResult<Prisma.$GalleryRecordPayload, S>

  type GalleryRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GalleryRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GalleryRecordCountAggregateInputType | true
    }

  export interface GalleryRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GalleryRecord'], meta: { name: 'GalleryRecord' } }
    /**
     * Find zero or one GalleryRecord that matches the filter.
     * @param {GalleryRecordFindUniqueArgs} args - Arguments to find a GalleryRecord
     * @example
     * // Get one GalleryRecord
     * const galleryRecord = await prisma.galleryRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GalleryRecordFindUniqueArgs>(args: SelectSubset<T, GalleryRecordFindUniqueArgs<ExtArgs>>): Prisma__GalleryRecordClient<$Result.GetResult<Prisma.$GalleryRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GalleryRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GalleryRecordFindUniqueOrThrowArgs} args - Arguments to find a GalleryRecord
     * @example
     * // Get one GalleryRecord
     * const galleryRecord = await prisma.galleryRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GalleryRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, GalleryRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GalleryRecordClient<$Result.GetResult<Prisma.$GalleryRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GalleryRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryRecordFindFirstArgs} args - Arguments to find a GalleryRecord
     * @example
     * // Get one GalleryRecord
     * const galleryRecord = await prisma.galleryRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GalleryRecordFindFirstArgs>(args?: SelectSubset<T, GalleryRecordFindFirstArgs<ExtArgs>>): Prisma__GalleryRecordClient<$Result.GetResult<Prisma.$GalleryRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GalleryRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryRecordFindFirstOrThrowArgs} args - Arguments to find a GalleryRecord
     * @example
     * // Get one GalleryRecord
     * const galleryRecord = await prisma.galleryRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GalleryRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, GalleryRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__GalleryRecordClient<$Result.GetResult<Prisma.$GalleryRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GalleryRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GalleryRecords
     * const galleryRecords = await prisma.galleryRecord.findMany()
     * 
     * // Get first 10 GalleryRecords
     * const galleryRecords = await prisma.galleryRecord.findMany({ take: 10 })
     * 
     * // Only select the `gallery_record_id`
     * const galleryRecordWithGallery_record_idOnly = await prisma.galleryRecord.findMany({ select: { gallery_record_id: true } })
     * 
     */
    findMany<T extends GalleryRecordFindManyArgs>(args?: SelectSubset<T, GalleryRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GalleryRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GalleryRecord.
     * @param {GalleryRecordCreateArgs} args - Arguments to create a GalleryRecord.
     * @example
     * // Create one GalleryRecord
     * const GalleryRecord = await prisma.galleryRecord.create({
     *   data: {
     *     // ... data to create a GalleryRecord
     *   }
     * })
     * 
     */
    create<T extends GalleryRecordCreateArgs>(args: SelectSubset<T, GalleryRecordCreateArgs<ExtArgs>>): Prisma__GalleryRecordClient<$Result.GetResult<Prisma.$GalleryRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GalleryRecords.
     * @param {GalleryRecordCreateManyArgs} args - Arguments to create many GalleryRecords.
     * @example
     * // Create many GalleryRecords
     * const galleryRecord = await prisma.galleryRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GalleryRecordCreateManyArgs>(args?: SelectSubset<T, GalleryRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GalleryRecords and returns the data saved in the database.
     * @param {GalleryRecordCreateManyAndReturnArgs} args - Arguments to create many GalleryRecords.
     * @example
     * // Create many GalleryRecords
     * const galleryRecord = await prisma.galleryRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GalleryRecords and only return the `gallery_record_id`
     * const galleryRecordWithGallery_record_idOnly = await prisma.galleryRecord.createManyAndReturn({
     *   select: { gallery_record_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GalleryRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, GalleryRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GalleryRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GalleryRecord.
     * @param {GalleryRecordDeleteArgs} args - Arguments to delete one GalleryRecord.
     * @example
     * // Delete one GalleryRecord
     * const GalleryRecord = await prisma.galleryRecord.delete({
     *   where: {
     *     // ... filter to delete one GalleryRecord
     *   }
     * })
     * 
     */
    delete<T extends GalleryRecordDeleteArgs>(args: SelectSubset<T, GalleryRecordDeleteArgs<ExtArgs>>): Prisma__GalleryRecordClient<$Result.GetResult<Prisma.$GalleryRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GalleryRecord.
     * @param {GalleryRecordUpdateArgs} args - Arguments to update one GalleryRecord.
     * @example
     * // Update one GalleryRecord
     * const galleryRecord = await prisma.galleryRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GalleryRecordUpdateArgs>(args: SelectSubset<T, GalleryRecordUpdateArgs<ExtArgs>>): Prisma__GalleryRecordClient<$Result.GetResult<Prisma.$GalleryRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GalleryRecords.
     * @param {GalleryRecordDeleteManyArgs} args - Arguments to filter GalleryRecords to delete.
     * @example
     * // Delete a few GalleryRecords
     * const { count } = await prisma.galleryRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GalleryRecordDeleteManyArgs>(args?: SelectSubset<T, GalleryRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GalleryRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GalleryRecords
     * const galleryRecord = await prisma.galleryRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GalleryRecordUpdateManyArgs>(args: SelectSubset<T, GalleryRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GalleryRecords and returns the data updated in the database.
     * @param {GalleryRecordUpdateManyAndReturnArgs} args - Arguments to update many GalleryRecords.
     * @example
     * // Update many GalleryRecords
     * const galleryRecord = await prisma.galleryRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GalleryRecords and only return the `gallery_record_id`
     * const galleryRecordWithGallery_record_idOnly = await prisma.galleryRecord.updateManyAndReturn({
     *   select: { gallery_record_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GalleryRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, GalleryRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GalleryRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GalleryRecord.
     * @param {GalleryRecordUpsertArgs} args - Arguments to update or create a GalleryRecord.
     * @example
     * // Update or create a GalleryRecord
     * const galleryRecord = await prisma.galleryRecord.upsert({
     *   create: {
     *     // ... data to create a GalleryRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GalleryRecord we want to update
     *   }
     * })
     */
    upsert<T extends GalleryRecordUpsertArgs>(args: SelectSubset<T, GalleryRecordUpsertArgs<ExtArgs>>): Prisma__GalleryRecordClient<$Result.GetResult<Prisma.$GalleryRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GalleryRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryRecordCountArgs} args - Arguments to filter GalleryRecords to count.
     * @example
     * // Count the number of GalleryRecords
     * const count = await prisma.galleryRecord.count({
     *   where: {
     *     // ... the filter for the GalleryRecords we want to count
     *   }
     * })
    **/
    count<T extends GalleryRecordCountArgs>(
      args?: Subset<T, GalleryRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GalleryRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GalleryRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GalleryRecordAggregateArgs>(args: Subset<T, GalleryRecordAggregateArgs>): Prisma.PrismaPromise<GetGalleryRecordAggregateType<T>>

    /**
     * Group by GalleryRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryRecordGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GalleryRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GalleryRecordGroupByArgs['orderBy'] }
        : { orderBy?: GalleryRecordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GalleryRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGalleryRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GalleryRecord model
   */
  readonly fields: GalleryRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GalleryRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GalleryRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    created_by_account<T extends AccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AccountDefaultArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GalleryRecord model
   */
  interface GalleryRecordFieldRefs {
    readonly gallery_record_id: FieldRef<"GalleryRecord", 'Int'>
    readonly created_at: FieldRef<"GalleryRecord", 'DateTime'>
    readonly created_by_account_id: FieldRef<"GalleryRecord", 'Int'>
    readonly asset_url: FieldRef<"GalleryRecord", 'String'>
    readonly asset_traits: FieldRef<"GalleryRecord", 'String[]'>
    readonly asset_color_traits: FieldRef<"GalleryRecord", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * GalleryRecord findUnique
   */
  export type GalleryRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryRecord
     */
    select?: GalleryRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryRecord
     */
    omit?: GalleryRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryRecordInclude<ExtArgs> | null
    /**
     * Filter, which GalleryRecord to fetch.
     */
    where: GalleryRecordWhereUniqueInput
  }

  /**
   * GalleryRecord findUniqueOrThrow
   */
  export type GalleryRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryRecord
     */
    select?: GalleryRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryRecord
     */
    omit?: GalleryRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryRecordInclude<ExtArgs> | null
    /**
     * Filter, which GalleryRecord to fetch.
     */
    where: GalleryRecordWhereUniqueInput
  }

  /**
   * GalleryRecord findFirst
   */
  export type GalleryRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryRecord
     */
    select?: GalleryRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryRecord
     */
    omit?: GalleryRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryRecordInclude<ExtArgs> | null
    /**
     * Filter, which GalleryRecord to fetch.
     */
    where?: GalleryRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GalleryRecords to fetch.
     */
    orderBy?: GalleryRecordOrderByWithRelationInput | GalleryRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GalleryRecords.
     */
    cursor?: GalleryRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GalleryRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GalleryRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GalleryRecords.
     */
    distinct?: GalleryRecordScalarFieldEnum | GalleryRecordScalarFieldEnum[]
  }

  /**
   * GalleryRecord findFirstOrThrow
   */
  export type GalleryRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryRecord
     */
    select?: GalleryRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryRecord
     */
    omit?: GalleryRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryRecordInclude<ExtArgs> | null
    /**
     * Filter, which GalleryRecord to fetch.
     */
    where?: GalleryRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GalleryRecords to fetch.
     */
    orderBy?: GalleryRecordOrderByWithRelationInput | GalleryRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GalleryRecords.
     */
    cursor?: GalleryRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GalleryRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GalleryRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GalleryRecords.
     */
    distinct?: GalleryRecordScalarFieldEnum | GalleryRecordScalarFieldEnum[]
  }

  /**
   * GalleryRecord findMany
   */
  export type GalleryRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryRecord
     */
    select?: GalleryRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryRecord
     */
    omit?: GalleryRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryRecordInclude<ExtArgs> | null
    /**
     * Filter, which GalleryRecords to fetch.
     */
    where?: GalleryRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GalleryRecords to fetch.
     */
    orderBy?: GalleryRecordOrderByWithRelationInput | GalleryRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GalleryRecords.
     */
    cursor?: GalleryRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GalleryRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GalleryRecords.
     */
    skip?: number
    distinct?: GalleryRecordScalarFieldEnum | GalleryRecordScalarFieldEnum[]
  }

  /**
   * GalleryRecord create
   */
  export type GalleryRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryRecord
     */
    select?: GalleryRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryRecord
     */
    omit?: GalleryRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a GalleryRecord.
     */
    data: XOR<GalleryRecordCreateInput, GalleryRecordUncheckedCreateInput>
  }

  /**
   * GalleryRecord createMany
   */
  export type GalleryRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GalleryRecords.
     */
    data: GalleryRecordCreateManyInput | GalleryRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GalleryRecord createManyAndReturn
   */
  export type GalleryRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryRecord
     */
    select?: GalleryRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryRecord
     */
    omit?: GalleryRecordOmit<ExtArgs> | null
    /**
     * The data used to create many GalleryRecords.
     */
    data: GalleryRecordCreateManyInput | GalleryRecordCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryRecordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GalleryRecord update
   */
  export type GalleryRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryRecord
     */
    select?: GalleryRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryRecord
     */
    omit?: GalleryRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a GalleryRecord.
     */
    data: XOR<GalleryRecordUpdateInput, GalleryRecordUncheckedUpdateInput>
    /**
     * Choose, which GalleryRecord to update.
     */
    where: GalleryRecordWhereUniqueInput
  }

  /**
   * GalleryRecord updateMany
   */
  export type GalleryRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GalleryRecords.
     */
    data: XOR<GalleryRecordUpdateManyMutationInput, GalleryRecordUncheckedUpdateManyInput>
    /**
     * Filter which GalleryRecords to update
     */
    where?: GalleryRecordWhereInput
    /**
     * Limit how many GalleryRecords to update.
     */
    limit?: number
  }

  /**
   * GalleryRecord updateManyAndReturn
   */
  export type GalleryRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryRecord
     */
    select?: GalleryRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryRecord
     */
    omit?: GalleryRecordOmit<ExtArgs> | null
    /**
     * The data used to update GalleryRecords.
     */
    data: XOR<GalleryRecordUpdateManyMutationInput, GalleryRecordUncheckedUpdateManyInput>
    /**
     * Filter which GalleryRecords to update
     */
    where?: GalleryRecordWhereInput
    /**
     * Limit how many GalleryRecords to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryRecordIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GalleryRecord upsert
   */
  export type GalleryRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryRecord
     */
    select?: GalleryRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryRecord
     */
    omit?: GalleryRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the GalleryRecord to update in case it exists.
     */
    where: GalleryRecordWhereUniqueInput
    /**
     * In case the GalleryRecord found by the `where` argument doesn't exist, create a new GalleryRecord with this data.
     */
    create: XOR<GalleryRecordCreateInput, GalleryRecordUncheckedCreateInput>
    /**
     * In case the GalleryRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GalleryRecordUpdateInput, GalleryRecordUncheckedUpdateInput>
  }

  /**
   * GalleryRecord delete
   */
  export type GalleryRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryRecord
     */
    select?: GalleryRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryRecord
     */
    omit?: GalleryRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryRecordInclude<ExtArgs> | null
    /**
     * Filter which GalleryRecord to delete.
     */
    where: GalleryRecordWhereUniqueInput
  }

  /**
   * GalleryRecord deleteMany
   */
  export type GalleryRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GalleryRecords to delete
     */
    where?: GalleryRecordWhereInput
    /**
     * Limit how many GalleryRecords to delete.
     */
    limit?: number
  }

  /**
   * GalleryRecord without action
   */
  export type GalleryRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryRecord
     */
    select?: GalleryRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryRecord
     */
    omit?: GalleryRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GalleryRecordInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _avg: SessionAvgAggregateOutputType | null
    _sum: SessionSumAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionAvgAggregateOutputType = {
    session_id: number | null
    created_by_user_id: number | null
    session_mode: number | null
  }

  export type SessionSumAggregateOutputType = {
    session_id: number | null
    created_by_user_id: number | null
    session_mode: number | null
  }

  export type SessionMinAggregateOutputType = {
    session_id: number | null
    created_at: Date | null
    created_by_user_id: number | null
    session_mode: number | null
    location: string | null
    language: string | null
    user_agent: string | null
    last_used: Date | null
    client_ip: string | null
    expires_at: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    session_id: number | null
    created_at: Date | null
    created_by_user_id: number | null
    session_mode: number | null
    location: string | null
    language: string | null
    user_agent: string | null
    last_used: Date | null
    client_ip: string | null
    expires_at: Date | null
  }

  export type SessionCountAggregateOutputType = {
    session_id: number
    created_at: number
    created_by_user_id: number
    session_mode: number
    location: number
    language: number
    user_agent: number
    last_used: number
    client_ip: number
    expires_at: number
    _all: number
  }


  export type SessionAvgAggregateInputType = {
    session_id?: true
    created_by_user_id?: true
    session_mode?: true
  }

  export type SessionSumAggregateInputType = {
    session_id?: true
    created_by_user_id?: true
    session_mode?: true
  }

  export type SessionMinAggregateInputType = {
    session_id?: true
    created_at?: true
    created_by_user_id?: true
    session_mode?: true
    location?: true
    language?: true
    user_agent?: true
    last_used?: true
    client_ip?: true
    expires_at?: true
  }

  export type SessionMaxAggregateInputType = {
    session_id?: true
    created_at?: true
    created_by_user_id?: true
    session_mode?: true
    location?: true
    language?: true
    user_agent?: true
    last_used?: true
    client_ip?: true
    expires_at?: true
  }

  export type SessionCountAggregateInputType = {
    session_id?: true
    created_at?: true
    created_by_user_id?: true
    session_mode?: true
    location?: true
    language?: true
    user_agent?: true
    last_used?: true
    client_ip?: true
    expires_at?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _avg?: SessionAvgAggregateInputType
    _sum?: SessionSumAggregateInputType
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    session_id: number
    created_at: Date
    created_by_user_id: number
    session_mode: number
    location: string | null
    language: string | null
    user_agent: string | null
    last_used: Date | null
    client_ip: string | null
    expires_at: Date
    _count: SessionCountAggregateOutputType | null
    _avg: SessionAvgAggregateOutputType | null
    _sum: SessionSumAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    session_id?: boolean
    created_at?: boolean
    created_by_user_id?: boolean
    session_mode?: boolean
    location?: boolean
    language?: boolean
    user_agent?: boolean
    last_used?: boolean
    client_ip?: boolean
    expires_at?: boolean
    created_by_user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    session_id?: boolean
    created_at?: boolean
    created_by_user_id?: boolean
    session_mode?: boolean
    location?: boolean
    language?: boolean
    user_agent?: boolean
    last_used?: boolean
    client_ip?: boolean
    expires_at?: boolean
    created_by_user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    session_id?: boolean
    created_at?: boolean
    created_by_user_id?: boolean
    session_mode?: boolean
    location?: boolean
    language?: boolean
    user_agent?: boolean
    last_used?: boolean
    client_ip?: boolean
    expires_at?: boolean
    created_by_user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    session_id?: boolean
    created_at?: boolean
    created_by_user_id?: boolean
    session_mode?: boolean
    location?: boolean
    language?: boolean
    user_agent?: boolean
    last_used?: boolean
    client_ip?: boolean
    expires_at?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"session_id" | "created_at" | "created_by_user_id" | "session_mode" | "location" | "language" | "user_agent" | "last_used" | "client_ip" | "expires_at", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    created_by_user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    created_by_user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    created_by_user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      created_by_user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      session_id: number
      created_at: Date
      created_by_user_id: number
      session_mode: number
      location: string | null
      language: string | null
      user_agent: string | null
      last_used: Date | null
      client_ip: string | null
      expires_at: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `session_id`
     * const sessionWithSession_idOnly = await prisma.session.findMany({ select: { session_id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `session_id`
     * const sessionWithSession_idOnly = await prisma.session.createManyAndReturn({
     *   select: { session_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `session_id`
     * const sessionWithSession_idOnly = await prisma.session.updateManyAndReturn({
     *   select: { session_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    created_by_user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly session_id: FieldRef<"Session", 'Int'>
    readonly created_at: FieldRef<"Session", 'DateTime'>
    readonly created_by_user_id: FieldRef<"Session", 'Int'>
    readonly session_mode: FieldRef<"Session", 'Int'>
    readonly location: FieldRef<"Session", 'String'>
    readonly language: FieldRef<"Session", 'String'>
    readonly user_agent: FieldRef<"Session", 'String'>
    readonly last_used: FieldRef<"Session", 'DateTime'>
    readonly client_ip: FieldRef<"Session", 'String'>
    readonly expires_at: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model DeletedUser
   */

  export type AggregateDeletedUser = {
    _count: DeletedUserCountAggregateOutputType | null
    _avg: DeletedUserAvgAggregateOutputType | null
    _sum: DeletedUserSumAggregateOutputType | null
    _min: DeletedUserMinAggregateOutputType | null
    _max: DeletedUserMaxAggregateOutputType | null
  }

  export type DeletedUserAvgAggregateOutputType = {
    user_id: number | null
  }

  export type DeletedUserSumAggregateOutputType = {
    user_id: number | null
  }

  export type DeletedUserMinAggregateOutputType = {
    user_id: number | null
    created_at: Date | null
    body: string | null
  }

  export type DeletedUserMaxAggregateOutputType = {
    user_id: number | null
    created_at: Date | null
    body: string | null
  }

  export type DeletedUserCountAggregateOutputType = {
    user_id: number
    created_at: number
    body: number
    _all: number
  }


  export type DeletedUserAvgAggregateInputType = {
    user_id?: true
  }

  export type DeletedUserSumAggregateInputType = {
    user_id?: true
  }

  export type DeletedUserMinAggregateInputType = {
    user_id?: true
    created_at?: true
    body?: true
  }

  export type DeletedUserMaxAggregateInputType = {
    user_id?: true
    created_at?: true
    body?: true
  }

  export type DeletedUserCountAggregateInputType = {
    user_id?: true
    created_at?: true
    body?: true
    _all?: true
  }

  export type DeletedUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeletedUser to aggregate.
     */
    where?: DeletedUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeletedUsers to fetch.
     */
    orderBy?: DeletedUserOrderByWithRelationInput | DeletedUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeletedUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeletedUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeletedUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DeletedUsers
    **/
    _count?: true | DeletedUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DeletedUserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DeletedUserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeletedUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeletedUserMaxAggregateInputType
  }

  export type GetDeletedUserAggregateType<T extends DeletedUserAggregateArgs> = {
        [P in keyof T & keyof AggregateDeletedUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeletedUser[P]>
      : GetScalarType<T[P], AggregateDeletedUser[P]>
  }




  export type DeletedUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeletedUserWhereInput
    orderBy?: DeletedUserOrderByWithAggregationInput | DeletedUserOrderByWithAggregationInput[]
    by: DeletedUserScalarFieldEnum[] | DeletedUserScalarFieldEnum
    having?: DeletedUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeletedUserCountAggregateInputType | true
    _avg?: DeletedUserAvgAggregateInputType
    _sum?: DeletedUserSumAggregateInputType
    _min?: DeletedUserMinAggregateInputType
    _max?: DeletedUserMaxAggregateInputType
  }

  export type DeletedUserGroupByOutputType = {
    user_id: number
    created_at: Date
    body: string
    _count: DeletedUserCountAggregateOutputType | null
    _avg: DeletedUserAvgAggregateOutputType | null
    _sum: DeletedUserSumAggregateOutputType | null
    _min: DeletedUserMinAggregateOutputType | null
    _max: DeletedUserMaxAggregateOutputType | null
  }

  type GetDeletedUserGroupByPayload<T extends DeletedUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeletedUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeletedUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeletedUserGroupByOutputType[P]>
            : GetScalarType<T[P], DeletedUserGroupByOutputType[P]>
        }
      >
    >


  export type DeletedUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    created_at?: boolean
    body?: boolean
  }, ExtArgs["result"]["deletedUser"]>

  export type DeletedUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    created_at?: boolean
    body?: boolean
  }, ExtArgs["result"]["deletedUser"]>

  export type DeletedUserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    created_at?: boolean
    body?: boolean
  }, ExtArgs["result"]["deletedUser"]>

  export type DeletedUserSelectScalar = {
    user_id?: boolean
    created_at?: boolean
    body?: boolean
  }

  export type DeletedUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "created_at" | "body", ExtArgs["result"]["deletedUser"]>

  export type $DeletedUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DeletedUser"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      user_id: number
      created_at: Date
      body: string
    }, ExtArgs["result"]["deletedUser"]>
    composites: {}
  }

  type DeletedUserGetPayload<S extends boolean | null | undefined | DeletedUserDefaultArgs> = $Result.GetResult<Prisma.$DeletedUserPayload, S>

  type DeletedUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DeletedUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeletedUserCountAggregateInputType | true
    }

  export interface DeletedUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DeletedUser'], meta: { name: 'DeletedUser' } }
    /**
     * Find zero or one DeletedUser that matches the filter.
     * @param {DeletedUserFindUniqueArgs} args - Arguments to find a DeletedUser
     * @example
     * // Get one DeletedUser
     * const deletedUser = await prisma.deletedUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeletedUserFindUniqueArgs>(args: SelectSubset<T, DeletedUserFindUniqueArgs<ExtArgs>>): Prisma__DeletedUserClient<$Result.GetResult<Prisma.$DeletedUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DeletedUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeletedUserFindUniqueOrThrowArgs} args - Arguments to find a DeletedUser
     * @example
     * // Get one DeletedUser
     * const deletedUser = await prisma.deletedUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeletedUserFindUniqueOrThrowArgs>(args: SelectSubset<T, DeletedUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeletedUserClient<$Result.GetResult<Prisma.$DeletedUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DeletedUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeletedUserFindFirstArgs} args - Arguments to find a DeletedUser
     * @example
     * // Get one DeletedUser
     * const deletedUser = await prisma.deletedUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeletedUserFindFirstArgs>(args?: SelectSubset<T, DeletedUserFindFirstArgs<ExtArgs>>): Prisma__DeletedUserClient<$Result.GetResult<Prisma.$DeletedUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DeletedUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeletedUserFindFirstOrThrowArgs} args - Arguments to find a DeletedUser
     * @example
     * // Get one DeletedUser
     * const deletedUser = await prisma.deletedUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeletedUserFindFirstOrThrowArgs>(args?: SelectSubset<T, DeletedUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeletedUserClient<$Result.GetResult<Prisma.$DeletedUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DeletedUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeletedUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DeletedUsers
     * const deletedUsers = await prisma.deletedUser.findMany()
     * 
     * // Get first 10 DeletedUsers
     * const deletedUsers = await prisma.deletedUser.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const deletedUserWithUser_idOnly = await prisma.deletedUser.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends DeletedUserFindManyArgs>(args?: SelectSubset<T, DeletedUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeletedUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DeletedUser.
     * @param {DeletedUserCreateArgs} args - Arguments to create a DeletedUser.
     * @example
     * // Create one DeletedUser
     * const DeletedUser = await prisma.deletedUser.create({
     *   data: {
     *     // ... data to create a DeletedUser
     *   }
     * })
     * 
     */
    create<T extends DeletedUserCreateArgs>(args: SelectSubset<T, DeletedUserCreateArgs<ExtArgs>>): Prisma__DeletedUserClient<$Result.GetResult<Prisma.$DeletedUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DeletedUsers.
     * @param {DeletedUserCreateManyArgs} args - Arguments to create many DeletedUsers.
     * @example
     * // Create many DeletedUsers
     * const deletedUser = await prisma.deletedUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeletedUserCreateManyArgs>(args?: SelectSubset<T, DeletedUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DeletedUsers and returns the data saved in the database.
     * @param {DeletedUserCreateManyAndReturnArgs} args - Arguments to create many DeletedUsers.
     * @example
     * // Create many DeletedUsers
     * const deletedUser = await prisma.deletedUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DeletedUsers and only return the `user_id`
     * const deletedUserWithUser_idOnly = await prisma.deletedUser.createManyAndReturn({
     *   select: { user_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DeletedUserCreateManyAndReturnArgs>(args?: SelectSubset<T, DeletedUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeletedUserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DeletedUser.
     * @param {DeletedUserDeleteArgs} args - Arguments to delete one DeletedUser.
     * @example
     * // Delete one DeletedUser
     * const DeletedUser = await prisma.deletedUser.delete({
     *   where: {
     *     // ... filter to delete one DeletedUser
     *   }
     * })
     * 
     */
    delete<T extends DeletedUserDeleteArgs>(args: SelectSubset<T, DeletedUserDeleteArgs<ExtArgs>>): Prisma__DeletedUserClient<$Result.GetResult<Prisma.$DeletedUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DeletedUser.
     * @param {DeletedUserUpdateArgs} args - Arguments to update one DeletedUser.
     * @example
     * // Update one DeletedUser
     * const deletedUser = await prisma.deletedUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeletedUserUpdateArgs>(args: SelectSubset<T, DeletedUserUpdateArgs<ExtArgs>>): Prisma__DeletedUserClient<$Result.GetResult<Prisma.$DeletedUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DeletedUsers.
     * @param {DeletedUserDeleteManyArgs} args - Arguments to filter DeletedUsers to delete.
     * @example
     * // Delete a few DeletedUsers
     * const { count } = await prisma.deletedUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeletedUserDeleteManyArgs>(args?: SelectSubset<T, DeletedUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DeletedUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeletedUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DeletedUsers
     * const deletedUser = await prisma.deletedUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeletedUserUpdateManyArgs>(args: SelectSubset<T, DeletedUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DeletedUsers and returns the data updated in the database.
     * @param {DeletedUserUpdateManyAndReturnArgs} args - Arguments to update many DeletedUsers.
     * @example
     * // Update many DeletedUsers
     * const deletedUser = await prisma.deletedUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DeletedUsers and only return the `user_id`
     * const deletedUserWithUser_idOnly = await prisma.deletedUser.updateManyAndReturn({
     *   select: { user_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DeletedUserUpdateManyAndReturnArgs>(args: SelectSubset<T, DeletedUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeletedUserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DeletedUser.
     * @param {DeletedUserUpsertArgs} args - Arguments to update or create a DeletedUser.
     * @example
     * // Update or create a DeletedUser
     * const deletedUser = await prisma.deletedUser.upsert({
     *   create: {
     *     // ... data to create a DeletedUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DeletedUser we want to update
     *   }
     * })
     */
    upsert<T extends DeletedUserUpsertArgs>(args: SelectSubset<T, DeletedUserUpsertArgs<ExtArgs>>): Prisma__DeletedUserClient<$Result.GetResult<Prisma.$DeletedUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DeletedUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeletedUserCountArgs} args - Arguments to filter DeletedUsers to count.
     * @example
     * // Count the number of DeletedUsers
     * const count = await prisma.deletedUser.count({
     *   where: {
     *     // ... the filter for the DeletedUsers we want to count
     *   }
     * })
    **/
    count<T extends DeletedUserCountArgs>(
      args?: Subset<T, DeletedUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeletedUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DeletedUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeletedUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DeletedUserAggregateArgs>(args: Subset<T, DeletedUserAggregateArgs>): Prisma.PrismaPromise<GetDeletedUserAggregateType<T>>

    /**
     * Group by DeletedUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeletedUserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DeletedUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeletedUserGroupByArgs['orderBy'] }
        : { orderBy?: DeletedUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DeletedUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeletedUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DeletedUser model
   */
  readonly fields: DeletedUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DeletedUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeletedUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DeletedUser model
   */
  interface DeletedUserFieldRefs {
    readonly user_id: FieldRef<"DeletedUser", 'Int'>
    readonly created_at: FieldRef<"DeletedUser", 'DateTime'>
    readonly body: FieldRef<"DeletedUser", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DeletedUser findUnique
   */
  export type DeletedUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeletedUser
     */
    select?: DeletedUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeletedUser
     */
    omit?: DeletedUserOmit<ExtArgs> | null
    /**
     * Filter, which DeletedUser to fetch.
     */
    where: DeletedUserWhereUniqueInput
  }

  /**
   * DeletedUser findUniqueOrThrow
   */
  export type DeletedUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeletedUser
     */
    select?: DeletedUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeletedUser
     */
    omit?: DeletedUserOmit<ExtArgs> | null
    /**
     * Filter, which DeletedUser to fetch.
     */
    where: DeletedUserWhereUniqueInput
  }

  /**
   * DeletedUser findFirst
   */
  export type DeletedUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeletedUser
     */
    select?: DeletedUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeletedUser
     */
    omit?: DeletedUserOmit<ExtArgs> | null
    /**
     * Filter, which DeletedUser to fetch.
     */
    where?: DeletedUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeletedUsers to fetch.
     */
    orderBy?: DeletedUserOrderByWithRelationInput | DeletedUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeletedUsers.
     */
    cursor?: DeletedUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeletedUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeletedUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeletedUsers.
     */
    distinct?: DeletedUserScalarFieldEnum | DeletedUserScalarFieldEnum[]
  }

  /**
   * DeletedUser findFirstOrThrow
   */
  export type DeletedUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeletedUser
     */
    select?: DeletedUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeletedUser
     */
    omit?: DeletedUserOmit<ExtArgs> | null
    /**
     * Filter, which DeletedUser to fetch.
     */
    where?: DeletedUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeletedUsers to fetch.
     */
    orderBy?: DeletedUserOrderByWithRelationInput | DeletedUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeletedUsers.
     */
    cursor?: DeletedUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeletedUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeletedUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeletedUsers.
     */
    distinct?: DeletedUserScalarFieldEnum | DeletedUserScalarFieldEnum[]
  }

  /**
   * DeletedUser findMany
   */
  export type DeletedUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeletedUser
     */
    select?: DeletedUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeletedUser
     */
    omit?: DeletedUserOmit<ExtArgs> | null
    /**
     * Filter, which DeletedUsers to fetch.
     */
    where?: DeletedUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeletedUsers to fetch.
     */
    orderBy?: DeletedUserOrderByWithRelationInput | DeletedUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DeletedUsers.
     */
    cursor?: DeletedUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeletedUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeletedUsers.
     */
    skip?: number
    distinct?: DeletedUserScalarFieldEnum | DeletedUserScalarFieldEnum[]
  }

  /**
   * DeletedUser create
   */
  export type DeletedUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeletedUser
     */
    select?: DeletedUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeletedUser
     */
    omit?: DeletedUserOmit<ExtArgs> | null
    /**
     * The data needed to create a DeletedUser.
     */
    data: XOR<DeletedUserCreateInput, DeletedUserUncheckedCreateInput>
  }

  /**
   * DeletedUser createMany
   */
  export type DeletedUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DeletedUsers.
     */
    data: DeletedUserCreateManyInput | DeletedUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DeletedUser createManyAndReturn
   */
  export type DeletedUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeletedUser
     */
    select?: DeletedUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DeletedUser
     */
    omit?: DeletedUserOmit<ExtArgs> | null
    /**
     * The data used to create many DeletedUsers.
     */
    data: DeletedUserCreateManyInput | DeletedUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DeletedUser update
   */
  export type DeletedUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeletedUser
     */
    select?: DeletedUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeletedUser
     */
    omit?: DeletedUserOmit<ExtArgs> | null
    /**
     * The data needed to update a DeletedUser.
     */
    data: XOR<DeletedUserUpdateInput, DeletedUserUncheckedUpdateInput>
    /**
     * Choose, which DeletedUser to update.
     */
    where: DeletedUserWhereUniqueInput
  }

  /**
   * DeletedUser updateMany
   */
  export type DeletedUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DeletedUsers.
     */
    data: XOR<DeletedUserUpdateManyMutationInput, DeletedUserUncheckedUpdateManyInput>
    /**
     * Filter which DeletedUsers to update
     */
    where?: DeletedUserWhereInput
    /**
     * Limit how many DeletedUsers to update.
     */
    limit?: number
  }

  /**
   * DeletedUser updateManyAndReturn
   */
  export type DeletedUserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeletedUser
     */
    select?: DeletedUserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DeletedUser
     */
    omit?: DeletedUserOmit<ExtArgs> | null
    /**
     * The data used to update DeletedUsers.
     */
    data: XOR<DeletedUserUpdateManyMutationInput, DeletedUserUncheckedUpdateManyInput>
    /**
     * Filter which DeletedUsers to update
     */
    where?: DeletedUserWhereInput
    /**
     * Limit how many DeletedUsers to update.
     */
    limit?: number
  }

  /**
   * DeletedUser upsert
   */
  export type DeletedUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeletedUser
     */
    select?: DeletedUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeletedUser
     */
    omit?: DeletedUserOmit<ExtArgs> | null
    /**
     * The filter to search for the DeletedUser to update in case it exists.
     */
    where: DeletedUserWhereUniqueInput
    /**
     * In case the DeletedUser found by the `where` argument doesn't exist, create a new DeletedUser with this data.
     */
    create: XOR<DeletedUserCreateInput, DeletedUserUncheckedCreateInput>
    /**
     * In case the DeletedUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeletedUserUpdateInput, DeletedUserUncheckedUpdateInput>
  }

  /**
   * DeletedUser delete
   */
  export type DeletedUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeletedUser
     */
    select?: DeletedUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeletedUser
     */
    omit?: DeletedUserOmit<ExtArgs> | null
    /**
     * Filter which DeletedUser to delete.
     */
    where: DeletedUserWhereUniqueInput
  }

  /**
   * DeletedUser deleteMany
   */
  export type DeletedUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeletedUsers to delete
     */
    where?: DeletedUserWhereInput
    /**
     * Limit how many DeletedUsers to delete.
     */
    limit?: number
  }

  /**
   * DeletedUser without action
   */
  export type DeletedUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeletedUser
     */
    select?: DeletedUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeletedUser
     */
    omit?: DeletedUserOmit<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    user_id: number | null
    role: number | null
  }

  export type UserSumAggregateOutputType = {
    user_id: number | null
    role: number | null
  }

  export type UserMinAggregateOutputType = {
    user_id: number | null
    email: string | null
    display_name: string | null
    password: string | null
    role: number | null
    created_at: Date | null
    is_active: boolean | null
  }

  export type UserMaxAggregateOutputType = {
    user_id: number | null
    email: string | null
    display_name: string | null
    password: string | null
    role: number | null
    created_at: Date | null
    is_active: boolean | null
  }

  export type UserCountAggregateOutputType = {
    user_id: number
    email: number
    display_name: number
    password: number
    role: number
    created_at: number
    permissions: number
    is_active: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    user_id?: true
    role?: true
  }

  export type UserSumAggregateInputType = {
    user_id?: true
    role?: true
  }

  export type UserMinAggregateInputType = {
    user_id?: true
    email?: true
    display_name?: true
    password?: true
    role?: true
    created_at?: true
    is_active?: true
  }

  export type UserMaxAggregateInputType = {
    user_id?: true
    email?: true
    display_name?: true
    password?: true
    role?: true
    created_at?: true
    is_active?: true
  }

  export type UserCountAggregateInputType = {
    user_id?: true
    email?: true
    display_name?: true
    password?: true
    role?: true
    created_at?: true
    permissions?: true
    is_active?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    user_id: number
    email: string
    display_name: string
    password: string
    role: number
    created_at: Date
    permissions: string[]
    is_active: boolean
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    email?: boolean
    display_name?: boolean
    password?: boolean
    role?: boolean
    created_at?: boolean
    permissions?: boolean
    is_active?: boolean
    account?: boolean | User$accountArgs<ExtArgs>
    event_logs?: boolean | User$event_logsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    email?: boolean
    display_name?: boolean
    password?: boolean
    role?: boolean
    created_at?: boolean
    permissions?: boolean
    is_active?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    email?: boolean
    display_name?: boolean
    password?: boolean
    role?: boolean
    created_at?: boolean
    permissions?: boolean
    is_active?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    user_id?: boolean
    email?: boolean
    display_name?: boolean
    password?: boolean
    role?: boolean
    created_at?: boolean
    permissions?: boolean
    is_active?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "email" | "display_name" | "password" | "role" | "created_at" | "permissions" | "is_active", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | User$accountArgs<ExtArgs>
    event_logs?: boolean | User$event_logsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      account: Prisma.$AccountPayload<ExtArgs> | null
      event_logs: Prisma.$EventLogPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: number
      email: string
      display_name: string
      password: string
      role: number
      created_at: Date
      permissions: string[]
      is_active: boolean
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const userWithUser_idOnly = await prisma.user.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `user_id`
     * const userWithUser_idOnly = await prisma.user.createManyAndReturn({
     *   select: { user_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `user_id`
     * const userWithUser_idOnly = await prisma.user.updateManyAndReturn({
     *   select: { user_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    account<T extends User$accountArgs<ExtArgs> = {}>(args?: Subset<T, User$accountArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    event_logs<T extends User$event_logsArgs<ExtArgs> = {}>(args?: Subset<T, User$event_logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly user_id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly display_name: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Int'>
    readonly created_at: FieldRef<"User", 'DateTime'>
    readonly permissions: FieldRef<"User", 'String[]'>
    readonly is_active: FieldRef<"User", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.account
   */
  export type User$accountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
  }

  /**
   * User.event_logs
   */
  export type User$event_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventLog
     */
    select?: EventLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventLog
     */
    omit?: EventLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventLogInclude<ExtArgs> | null
    where?: EventLogWhereInput
    orderBy?: EventLogOrderByWithRelationInput | EventLogOrderByWithRelationInput[]
    cursor?: EventLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventLogScalarFieldEnum | EventLogScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AdminScalarFieldEnum: {
    notes: 'notes',
    id: 'id',
    created_at: 'created_at'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const EventLogScalarFieldEnum: {
    event_log_id: 'event_log_id',
    created_at: 'created_at',
    event: 'event',
    created_by_user_id: 'created_by_user_id',
    language: 'language',
    location: 'location',
    user_agent: 'user_agent',
    client_ip: 'client_ip',
    event_payload: 'event_payload',
    event_type: 'event_type'
  };

  export type EventLogScalarFieldEnum = (typeof EventLogScalarFieldEnum)[keyof typeof EventLogScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    account_id: 'account_id',
    created_at: 'created_at',
    created_by_user_id: 'created_by_user_id',
    display_name: 'display_name',
    pricing_plan: 'pricing_plan',
    payment_status: 'payment_status',
    account_status: 'account_status',
    account_expiration_date: 'account_expiration_date',
    upcoming_payment_date: 'upcoming_payment_date'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const GalleryConfigScalarFieldEnum: {
    gallery_config_id: 'gallery_config_id',
    created_at: 'created_at',
    created_by_account_id: 'created_by_account_id',
    records_traits: 'records_traits',
    records_color_traits: 'records_color_traits'
  };

  export type GalleryConfigScalarFieldEnum = (typeof GalleryConfigScalarFieldEnum)[keyof typeof GalleryConfigScalarFieldEnum]


  export const GalleryRecordScalarFieldEnum: {
    gallery_record_id: 'gallery_record_id',
    created_at: 'created_at',
    created_by_account_id: 'created_by_account_id',
    asset_url: 'asset_url',
    asset_traits: 'asset_traits',
    asset_color_traits: 'asset_color_traits'
  };

  export type GalleryRecordScalarFieldEnum = (typeof GalleryRecordScalarFieldEnum)[keyof typeof GalleryRecordScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    session_id: 'session_id',
    created_at: 'created_at',
    created_by_user_id: 'created_by_user_id',
    session_mode: 'session_mode',
    location: 'location',
    language: 'language',
    user_agent: 'user_agent',
    last_used: 'last_used',
    client_ip: 'client_ip',
    expires_at: 'expires_at'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const DeletedUserScalarFieldEnum: {
    user_id: 'user_id',
    created_at: 'created_at',
    body: 'body'
  };

  export type DeletedUserScalarFieldEnum = (typeof DeletedUserScalarFieldEnum)[keyof typeof DeletedUserScalarFieldEnum]


  export const UserScalarFieldEnum: {
    user_id: 'user_id',
    email: 'email',
    display_name: 'display_name',
    password: 'password',
    role: 'role',
    created_at: 'created_at',
    permissions: 'permissions',
    is_active: 'is_active'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    notes?: StringFilter<"Admin"> | string
    id?: IntFilter<"Admin"> | number
    created_at?: DateTimeFilter<"Admin"> | Date | string
  }

  export type AdminOrderByWithRelationInput = {
    notes?: SortOrder
    id?: SortOrder
    created_at?: SortOrder
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    notes?: StringFilter<"Admin"> | string
    created_at?: DateTimeFilter<"Admin"> | Date | string
  }, "id" | "id">

  export type AdminOrderByWithAggregationInput = {
    notes?: SortOrder
    id?: SortOrder
    created_at?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _avg?: AdminAvgOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
    _sum?: AdminSumOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    notes?: StringWithAggregatesFilter<"Admin"> | string
    id?: IntWithAggregatesFilter<"Admin"> | number
    created_at?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
  }

  export type EventLogWhereInput = {
    AND?: EventLogWhereInput | EventLogWhereInput[]
    OR?: EventLogWhereInput[]
    NOT?: EventLogWhereInput | EventLogWhereInput[]
    event_log_id?: IntFilter<"EventLog"> | number
    created_at?: DateTimeFilter<"EventLog"> | Date | string
    event?: StringFilter<"EventLog"> | string
    created_by_user_id?: IntFilter<"EventLog"> | number
    language?: StringNullableFilter<"EventLog"> | string | null
    location?: StringNullableFilter<"EventLog"> | string | null
    user_agent?: StringNullableFilter<"EventLog"> | string | null
    client_ip?: StringNullableFilter<"EventLog"> | string | null
    event_payload?: StringNullableFilter<"EventLog"> | string | null
    event_type?: IntFilter<"EventLog"> | number
    created_by_user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type EventLogOrderByWithRelationInput = {
    event_log_id?: SortOrder
    created_at?: SortOrder
    event?: SortOrder
    created_by_user_id?: SortOrder
    language?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    user_agent?: SortOrderInput | SortOrder
    client_ip?: SortOrderInput | SortOrder
    event_payload?: SortOrderInput | SortOrder
    event_type?: SortOrder
    created_by_user?: UserOrderByWithRelationInput
  }

  export type EventLogWhereUniqueInput = Prisma.AtLeast<{
    event_log_id?: number
    AND?: EventLogWhereInput | EventLogWhereInput[]
    OR?: EventLogWhereInput[]
    NOT?: EventLogWhereInput | EventLogWhereInput[]
    created_at?: DateTimeFilter<"EventLog"> | Date | string
    event?: StringFilter<"EventLog"> | string
    created_by_user_id?: IntFilter<"EventLog"> | number
    language?: StringNullableFilter<"EventLog"> | string | null
    location?: StringNullableFilter<"EventLog"> | string | null
    user_agent?: StringNullableFilter<"EventLog"> | string | null
    client_ip?: StringNullableFilter<"EventLog"> | string | null
    event_payload?: StringNullableFilter<"EventLog"> | string | null
    event_type?: IntFilter<"EventLog"> | number
    created_by_user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "event_log_id" | "event_log_id">

  export type EventLogOrderByWithAggregationInput = {
    event_log_id?: SortOrder
    created_at?: SortOrder
    event?: SortOrder
    created_by_user_id?: SortOrder
    language?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    user_agent?: SortOrderInput | SortOrder
    client_ip?: SortOrderInput | SortOrder
    event_payload?: SortOrderInput | SortOrder
    event_type?: SortOrder
    _count?: EventLogCountOrderByAggregateInput
    _avg?: EventLogAvgOrderByAggregateInput
    _max?: EventLogMaxOrderByAggregateInput
    _min?: EventLogMinOrderByAggregateInput
    _sum?: EventLogSumOrderByAggregateInput
  }

  export type EventLogScalarWhereWithAggregatesInput = {
    AND?: EventLogScalarWhereWithAggregatesInput | EventLogScalarWhereWithAggregatesInput[]
    OR?: EventLogScalarWhereWithAggregatesInput[]
    NOT?: EventLogScalarWhereWithAggregatesInput | EventLogScalarWhereWithAggregatesInput[]
    event_log_id?: IntWithAggregatesFilter<"EventLog"> | number
    created_at?: DateTimeWithAggregatesFilter<"EventLog"> | Date | string
    event?: StringWithAggregatesFilter<"EventLog"> | string
    created_by_user_id?: IntWithAggregatesFilter<"EventLog"> | number
    language?: StringNullableWithAggregatesFilter<"EventLog"> | string | null
    location?: StringNullableWithAggregatesFilter<"EventLog"> | string | null
    user_agent?: StringNullableWithAggregatesFilter<"EventLog"> | string | null
    client_ip?: StringNullableWithAggregatesFilter<"EventLog"> | string | null
    event_payload?: StringNullableWithAggregatesFilter<"EventLog"> | string | null
    event_type?: IntWithAggregatesFilter<"EventLog"> | number
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    account_id?: IntFilter<"Account"> | number
    created_at?: DateTimeFilter<"Account"> | Date | string
    created_by_user_id?: IntFilter<"Account"> | number
    display_name?: StringNullableFilter<"Account"> | string | null
    pricing_plan?: IntFilter<"Account"> | number
    payment_status?: IntFilter<"Account"> | number
    account_status?: IntFilter<"Account"> | number
    account_expiration_date?: DateTimeNullableFilter<"Account"> | Date | string | null
    upcoming_payment_date?: DateTimeNullableFilter<"Account"> | Date | string | null
    created_by_user?: XOR<UserScalarRelationFilter, UserWhereInput>
    gallery_config?: XOR<GalleryConfigNullableScalarRelationFilter, GalleryConfigWhereInput> | null
    gallery_record?: GalleryRecordListRelationFilter
  }

  export type AccountOrderByWithRelationInput = {
    account_id?: SortOrder
    created_at?: SortOrder
    created_by_user_id?: SortOrder
    display_name?: SortOrderInput | SortOrder
    pricing_plan?: SortOrder
    payment_status?: SortOrder
    account_status?: SortOrder
    account_expiration_date?: SortOrderInput | SortOrder
    upcoming_payment_date?: SortOrderInput | SortOrder
    created_by_user?: UserOrderByWithRelationInput
    gallery_config?: GalleryConfigOrderByWithRelationInput
    gallery_record?: GalleryRecordOrderByRelationAggregateInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    account_id?: number
    created_by_user_id?: number
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    created_at?: DateTimeFilter<"Account"> | Date | string
    display_name?: StringNullableFilter<"Account"> | string | null
    pricing_plan?: IntFilter<"Account"> | number
    payment_status?: IntFilter<"Account"> | number
    account_status?: IntFilter<"Account"> | number
    account_expiration_date?: DateTimeNullableFilter<"Account"> | Date | string | null
    upcoming_payment_date?: DateTimeNullableFilter<"Account"> | Date | string | null
    created_by_user?: XOR<UserScalarRelationFilter, UserWhereInput>
    gallery_config?: XOR<GalleryConfigNullableScalarRelationFilter, GalleryConfigWhereInput> | null
    gallery_record?: GalleryRecordListRelationFilter
  }, "account_id" | "account_id" | "created_by_user_id">

  export type AccountOrderByWithAggregationInput = {
    account_id?: SortOrder
    created_at?: SortOrder
    created_by_user_id?: SortOrder
    display_name?: SortOrderInput | SortOrder
    pricing_plan?: SortOrder
    payment_status?: SortOrder
    account_status?: SortOrder
    account_expiration_date?: SortOrderInput | SortOrder
    upcoming_payment_date?: SortOrderInput | SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    account_id?: IntWithAggregatesFilter<"Account"> | number
    created_at?: DateTimeWithAggregatesFilter<"Account"> | Date | string
    created_by_user_id?: IntWithAggregatesFilter<"Account"> | number
    display_name?: StringNullableWithAggregatesFilter<"Account"> | string | null
    pricing_plan?: IntWithAggregatesFilter<"Account"> | number
    payment_status?: IntWithAggregatesFilter<"Account"> | number
    account_status?: IntWithAggregatesFilter<"Account"> | number
    account_expiration_date?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
    upcoming_payment_date?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
  }

  export type GalleryConfigWhereInput = {
    AND?: GalleryConfigWhereInput | GalleryConfigWhereInput[]
    OR?: GalleryConfigWhereInput[]
    NOT?: GalleryConfigWhereInput | GalleryConfigWhereInput[]
    gallery_config_id?: IntFilter<"GalleryConfig"> | number
    created_at?: DateTimeFilter<"GalleryConfig"> | Date | string
    created_by_account_id?: IntFilter<"GalleryConfig"> | number
    records_traits?: StringNullableListFilter<"GalleryConfig">
    records_color_traits?: StringNullableListFilter<"GalleryConfig">
    created_by_user?: XOR<AccountScalarRelationFilter, AccountWhereInput>
  }

  export type GalleryConfigOrderByWithRelationInput = {
    gallery_config_id?: SortOrder
    created_at?: SortOrder
    created_by_account_id?: SortOrder
    records_traits?: SortOrder
    records_color_traits?: SortOrder
    created_by_user?: AccountOrderByWithRelationInput
  }

  export type GalleryConfigWhereUniqueInput = Prisma.AtLeast<{
    gallery_config_id?: number
    created_by_account_id?: number
    AND?: GalleryConfigWhereInput | GalleryConfigWhereInput[]
    OR?: GalleryConfigWhereInput[]
    NOT?: GalleryConfigWhereInput | GalleryConfigWhereInput[]
    created_at?: DateTimeFilter<"GalleryConfig"> | Date | string
    records_traits?: StringNullableListFilter<"GalleryConfig">
    records_color_traits?: StringNullableListFilter<"GalleryConfig">
    created_by_user?: XOR<AccountScalarRelationFilter, AccountWhereInput>
  }, "gallery_config_id" | "gallery_config_id" | "created_by_account_id">

  export type GalleryConfigOrderByWithAggregationInput = {
    gallery_config_id?: SortOrder
    created_at?: SortOrder
    created_by_account_id?: SortOrder
    records_traits?: SortOrder
    records_color_traits?: SortOrder
    _count?: GalleryConfigCountOrderByAggregateInput
    _avg?: GalleryConfigAvgOrderByAggregateInput
    _max?: GalleryConfigMaxOrderByAggregateInput
    _min?: GalleryConfigMinOrderByAggregateInput
    _sum?: GalleryConfigSumOrderByAggregateInput
  }

  export type GalleryConfigScalarWhereWithAggregatesInput = {
    AND?: GalleryConfigScalarWhereWithAggregatesInput | GalleryConfigScalarWhereWithAggregatesInput[]
    OR?: GalleryConfigScalarWhereWithAggregatesInput[]
    NOT?: GalleryConfigScalarWhereWithAggregatesInput | GalleryConfigScalarWhereWithAggregatesInput[]
    gallery_config_id?: IntWithAggregatesFilter<"GalleryConfig"> | number
    created_at?: DateTimeWithAggregatesFilter<"GalleryConfig"> | Date | string
    created_by_account_id?: IntWithAggregatesFilter<"GalleryConfig"> | number
    records_traits?: StringNullableListFilter<"GalleryConfig">
    records_color_traits?: StringNullableListFilter<"GalleryConfig">
  }

  export type GalleryRecordWhereInput = {
    AND?: GalleryRecordWhereInput | GalleryRecordWhereInput[]
    OR?: GalleryRecordWhereInput[]
    NOT?: GalleryRecordWhereInput | GalleryRecordWhereInput[]
    gallery_record_id?: IntFilter<"GalleryRecord"> | number
    created_at?: DateTimeFilter<"GalleryRecord"> | Date | string
    created_by_account_id?: IntFilter<"GalleryRecord"> | number
    asset_url?: StringFilter<"GalleryRecord"> | string
    asset_traits?: StringNullableListFilter<"GalleryRecord">
    asset_color_traits?: StringNullableListFilter<"GalleryRecord">
    created_by_account?: XOR<AccountScalarRelationFilter, AccountWhereInput>
  }

  export type GalleryRecordOrderByWithRelationInput = {
    gallery_record_id?: SortOrder
    created_at?: SortOrder
    created_by_account_id?: SortOrder
    asset_url?: SortOrder
    asset_traits?: SortOrder
    asset_color_traits?: SortOrder
    created_by_account?: AccountOrderByWithRelationInput
  }

  export type GalleryRecordWhereUniqueInput = Prisma.AtLeast<{
    gallery_record_id?: number
    AND?: GalleryRecordWhereInput | GalleryRecordWhereInput[]
    OR?: GalleryRecordWhereInput[]
    NOT?: GalleryRecordWhereInput | GalleryRecordWhereInput[]
    created_at?: DateTimeFilter<"GalleryRecord"> | Date | string
    created_by_account_id?: IntFilter<"GalleryRecord"> | number
    asset_url?: StringFilter<"GalleryRecord"> | string
    asset_traits?: StringNullableListFilter<"GalleryRecord">
    asset_color_traits?: StringNullableListFilter<"GalleryRecord">
    created_by_account?: XOR<AccountScalarRelationFilter, AccountWhereInput>
  }, "gallery_record_id" | "gallery_record_id">

  export type GalleryRecordOrderByWithAggregationInput = {
    gallery_record_id?: SortOrder
    created_at?: SortOrder
    created_by_account_id?: SortOrder
    asset_url?: SortOrder
    asset_traits?: SortOrder
    asset_color_traits?: SortOrder
    _count?: GalleryRecordCountOrderByAggregateInput
    _avg?: GalleryRecordAvgOrderByAggregateInput
    _max?: GalleryRecordMaxOrderByAggregateInput
    _min?: GalleryRecordMinOrderByAggregateInput
    _sum?: GalleryRecordSumOrderByAggregateInput
  }

  export type GalleryRecordScalarWhereWithAggregatesInput = {
    AND?: GalleryRecordScalarWhereWithAggregatesInput | GalleryRecordScalarWhereWithAggregatesInput[]
    OR?: GalleryRecordScalarWhereWithAggregatesInput[]
    NOT?: GalleryRecordScalarWhereWithAggregatesInput | GalleryRecordScalarWhereWithAggregatesInput[]
    gallery_record_id?: IntWithAggregatesFilter<"GalleryRecord"> | number
    created_at?: DateTimeWithAggregatesFilter<"GalleryRecord"> | Date | string
    created_by_account_id?: IntWithAggregatesFilter<"GalleryRecord"> | number
    asset_url?: StringWithAggregatesFilter<"GalleryRecord"> | string
    asset_traits?: StringNullableListFilter<"GalleryRecord">
    asset_color_traits?: StringNullableListFilter<"GalleryRecord">
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    session_id?: IntFilter<"Session"> | number
    created_at?: DateTimeFilter<"Session"> | Date | string
    created_by_user_id?: IntFilter<"Session"> | number
    session_mode?: IntFilter<"Session"> | number
    location?: StringNullableFilter<"Session"> | string | null
    language?: StringNullableFilter<"Session"> | string | null
    user_agent?: StringNullableFilter<"Session"> | string | null
    last_used?: DateTimeNullableFilter<"Session"> | Date | string | null
    client_ip?: StringNullableFilter<"Session"> | string | null
    expires_at?: DateTimeFilter<"Session"> | Date | string
    created_by_user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    session_id?: SortOrder
    created_at?: SortOrder
    created_by_user_id?: SortOrder
    session_mode?: SortOrder
    location?: SortOrderInput | SortOrder
    language?: SortOrderInput | SortOrder
    user_agent?: SortOrderInput | SortOrder
    last_used?: SortOrderInput | SortOrder
    client_ip?: SortOrderInput | SortOrder
    expires_at?: SortOrder
    created_by_user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    session_id?: number
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    created_at?: DateTimeFilter<"Session"> | Date | string
    created_by_user_id?: IntFilter<"Session"> | number
    session_mode?: IntFilter<"Session"> | number
    location?: StringNullableFilter<"Session"> | string | null
    language?: StringNullableFilter<"Session"> | string | null
    user_agent?: StringNullableFilter<"Session"> | string | null
    last_used?: DateTimeNullableFilter<"Session"> | Date | string | null
    client_ip?: StringNullableFilter<"Session"> | string | null
    expires_at?: DateTimeFilter<"Session"> | Date | string
    created_by_user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "session_id" | "session_id">

  export type SessionOrderByWithAggregationInput = {
    session_id?: SortOrder
    created_at?: SortOrder
    created_by_user_id?: SortOrder
    session_mode?: SortOrder
    location?: SortOrderInput | SortOrder
    language?: SortOrderInput | SortOrder
    user_agent?: SortOrderInput | SortOrder
    last_used?: SortOrderInput | SortOrder
    client_ip?: SortOrderInput | SortOrder
    expires_at?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _avg?: SessionAvgOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
    _sum?: SessionSumOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    session_id?: IntWithAggregatesFilter<"Session"> | number
    created_at?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    created_by_user_id?: IntWithAggregatesFilter<"Session"> | number
    session_mode?: IntWithAggregatesFilter<"Session"> | number
    location?: StringNullableWithAggregatesFilter<"Session"> | string | null
    language?: StringNullableWithAggregatesFilter<"Session"> | string | null
    user_agent?: StringNullableWithAggregatesFilter<"Session"> | string | null
    last_used?: DateTimeNullableWithAggregatesFilter<"Session"> | Date | string | null
    client_ip?: StringNullableWithAggregatesFilter<"Session"> | string | null
    expires_at?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type DeletedUserWhereInput = {
    AND?: DeletedUserWhereInput | DeletedUserWhereInput[]
    OR?: DeletedUserWhereInput[]
    NOT?: DeletedUserWhereInput | DeletedUserWhereInput[]
    user_id?: IntFilter<"DeletedUser"> | number
    created_at?: DateTimeFilter<"DeletedUser"> | Date | string
    body?: StringFilter<"DeletedUser"> | string
  }

  export type DeletedUserOrderByWithRelationInput = {
    user_id?: SortOrder
    created_at?: SortOrder
    body?: SortOrder
  }

  export type DeletedUserWhereUniqueInput = Prisma.AtLeast<{
    user_id?: number
    AND?: DeletedUserWhereInput | DeletedUserWhereInput[]
    OR?: DeletedUserWhereInput[]
    NOT?: DeletedUserWhereInput | DeletedUserWhereInput[]
    created_at?: DateTimeFilter<"DeletedUser"> | Date | string
    body?: StringFilter<"DeletedUser"> | string
  }, "user_id" | "user_id">

  export type DeletedUserOrderByWithAggregationInput = {
    user_id?: SortOrder
    created_at?: SortOrder
    body?: SortOrder
    _count?: DeletedUserCountOrderByAggregateInput
    _avg?: DeletedUserAvgOrderByAggregateInput
    _max?: DeletedUserMaxOrderByAggregateInput
    _min?: DeletedUserMinOrderByAggregateInput
    _sum?: DeletedUserSumOrderByAggregateInput
  }

  export type DeletedUserScalarWhereWithAggregatesInput = {
    AND?: DeletedUserScalarWhereWithAggregatesInput | DeletedUserScalarWhereWithAggregatesInput[]
    OR?: DeletedUserScalarWhereWithAggregatesInput[]
    NOT?: DeletedUserScalarWhereWithAggregatesInput | DeletedUserScalarWhereWithAggregatesInput[]
    user_id?: IntWithAggregatesFilter<"DeletedUser"> | number
    created_at?: DateTimeWithAggregatesFilter<"DeletedUser"> | Date | string
    body?: StringWithAggregatesFilter<"DeletedUser"> | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    user_id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    display_name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: IntFilter<"User"> | number
    created_at?: DateTimeFilter<"User"> | Date | string
    permissions?: StringNullableListFilter<"User">
    is_active?: BoolFilter<"User"> | boolean
    account?: XOR<AccountNullableScalarRelationFilter, AccountWhereInput> | null
    event_logs?: EventLogListRelationFilter
    sessions?: SessionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    user_id?: SortOrder
    email?: SortOrder
    display_name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    permissions?: SortOrder
    is_active?: SortOrder
    account?: AccountOrderByWithRelationInput
    event_logs?: EventLogOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    user_id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    display_name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: IntFilter<"User"> | number
    created_at?: DateTimeFilter<"User"> | Date | string
    permissions?: StringNullableListFilter<"User">
    is_active?: BoolFilter<"User"> | boolean
    account?: XOR<AccountNullableScalarRelationFilter, AccountWhereInput> | null
    event_logs?: EventLogListRelationFilter
    sessions?: SessionListRelationFilter
  }, "user_id" | "user_id" | "email">

  export type UserOrderByWithAggregationInput = {
    user_id?: SortOrder
    email?: SortOrder
    display_name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    permissions?: SortOrder
    is_active?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    user_id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    display_name?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: IntWithAggregatesFilter<"User"> | number
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    permissions?: StringNullableListFilter<"User">
    is_active?: BoolWithAggregatesFilter<"User"> | boolean
  }

  export type AdminCreateInput = {
    notes: string
    created_at?: Date | string
  }

  export type AdminUncheckedCreateInput = {
    notes: string
    id?: number
    created_at?: Date | string
  }

  export type AdminUpdateInput = {
    notes?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateInput = {
    notes?: StringFieldUpdateOperationsInput | string
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminCreateManyInput = {
    notes: string
    id?: number
    created_at?: Date | string
  }

  export type AdminUpdateManyMutationInput = {
    notes?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateManyInput = {
    notes?: StringFieldUpdateOperationsInput | string
    id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventLogCreateInput = {
    created_at?: Date | string
    event: string
    language?: string | null
    location?: string | null
    user_agent?: string | null
    client_ip?: string | null
    event_payload?: string | null
    event_type: number
    created_by_user: UserCreateNestedOneWithoutEvent_logsInput
  }

  export type EventLogUncheckedCreateInput = {
    event_log_id?: number
    created_at?: Date | string
    event: string
    created_by_user_id: number
    language?: string | null
    location?: string | null
    user_agent?: string | null
    client_ip?: string | null
    event_payload?: string | null
    event_type: number
  }

  export type EventLogUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: StringFieldUpdateOperationsInput | string
    language?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    client_ip?: NullableStringFieldUpdateOperationsInput | string | null
    event_payload?: NullableStringFieldUpdateOperationsInput | string | null
    event_type?: IntFieldUpdateOperationsInput | number
    created_by_user?: UserUpdateOneRequiredWithoutEvent_logsNestedInput
  }

  export type EventLogUncheckedUpdateInput = {
    event_log_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: StringFieldUpdateOperationsInput | string
    created_by_user_id?: IntFieldUpdateOperationsInput | number
    language?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    client_ip?: NullableStringFieldUpdateOperationsInput | string | null
    event_payload?: NullableStringFieldUpdateOperationsInput | string | null
    event_type?: IntFieldUpdateOperationsInput | number
  }

  export type EventLogCreateManyInput = {
    event_log_id?: number
    created_at?: Date | string
    event: string
    created_by_user_id: number
    language?: string | null
    location?: string | null
    user_agent?: string | null
    client_ip?: string | null
    event_payload?: string | null
    event_type: number
  }

  export type EventLogUpdateManyMutationInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: StringFieldUpdateOperationsInput | string
    language?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    client_ip?: NullableStringFieldUpdateOperationsInput | string | null
    event_payload?: NullableStringFieldUpdateOperationsInput | string | null
    event_type?: IntFieldUpdateOperationsInput | number
  }

  export type EventLogUncheckedUpdateManyInput = {
    event_log_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: StringFieldUpdateOperationsInput | string
    created_by_user_id?: IntFieldUpdateOperationsInput | number
    language?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    client_ip?: NullableStringFieldUpdateOperationsInput | string | null
    event_payload?: NullableStringFieldUpdateOperationsInput | string | null
    event_type?: IntFieldUpdateOperationsInput | number
  }

  export type AccountCreateInput = {
    created_at?: Date | string
    display_name?: string | null
    pricing_plan: number
    payment_status: number
    account_status: number
    account_expiration_date?: Date | string | null
    upcoming_payment_date?: Date | string | null
    created_by_user: UserCreateNestedOneWithoutAccountInput
    gallery_config?: GalleryConfigCreateNestedOneWithoutCreated_by_userInput
    gallery_record?: GalleryRecordCreateNestedManyWithoutCreated_by_accountInput
  }

  export type AccountUncheckedCreateInput = {
    account_id?: number
    created_at?: Date | string
    created_by_user_id: number
    display_name?: string | null
    pricing_plan: number
    payment_status: number
    account_status: number
    account_expiration_date?: Date | string | null
    upcoming_payment_date?: Date | string | null
    gallery_config?: GalleryConfigUncheckedCreateNestedOneWithoutCreated_by_userInput
    gallery_record?: GalleryRecordUncheckedCreateNestedManyWithoutCreated_by_accountInput
  }

  export type AccountUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    display_name?: NullableStringFieldUpdateOperationsInput | string | null
    pricing_plan?: IntFieldUpdateOperationsInput | number
    payment_status?: IntFieldUpdateOperationsInput | number
    account_status?: IntFieldUpdateOperationsInput | number
    account_expiration_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    upcoming_payment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by_user?: UserUpdateOneRequiredWithoutAccountNestedInput
    gallery_config?: GalleryConfigUpdateOneWithoutCreated_by_userNestedInput
    gallery_record?: GalleryRecordUpdateManyWithoutCreated_by_accountNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    account_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by_user_id?: IntFieldUpdateOperationsInput | number
    display_name?: NullableStringFieldUpdateOperationsInput | string | null
    pricing_plan?: IntFieldUpdateOperationsInput | number
    payment_status?: IntFieldUpdateOperationsInput | number
    account_status?: IntFieldUpdateOperationsInput | number
    account_expiration_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    upcoming_payment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gallery_config?: GalleryConfigUncheckedUpdateOneWithoutCreated_by_userNestedInput
    gallery_record?: GalleryRecordUncheckedUpdateManyWithoutCreated_by_accountNestedInput
  }

  export type AccountCreateManyInput = {
    account_id?: number
    created_at?: Date | string
    created_by_user_id: number
    display_name?: string | null
    pricing_plan: number
    payment_status: number
    account_status: number
    account_expiration_date?: Date | string | null
    upcoming_payment_date?: Date | string | null
  }

  export type AccountUpdateManyMutationInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    display_name?: NullableStringFieldUpdateOperationsInput | string | null
    pricing_plan?: IntFieldUpdateOperationsInput | number
    payment_status?: IntFieldUpdateOperationsInput | number
    account_status?: IntFieldUpdateOperationsInput | number
    account_expiration_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    upcoming_payment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AccountUncheckedUpdateManyInput = {
    account_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by_user_id?: IntFieldUpdateOperationsInput | number
    display_name?: NullableStringFieldUpdateOperationsInput | string | null
    pricing_plan?: IntFieldUpdateOperationsInput | number
    payment_status?: IntFieldUpdateOperationsInput | number
    account_status?: IntFieldUpdateOperationsInput | number
    account_expiration_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    upcoming_payment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GalleryConfigCreateInput = {
    created_at?: Date | string
    records_traits?: GalleryConfigCreaterecords_traitsInput | string[]
    records_color_traits?: GalleryConfigCreaterecords_color_traitsInput | string[]
    created_by_user: AccountCreateNestedOneWithoutGallery_configInput
  }

  export type GalleryConfigUncheckedCreateInput = {
    gallery_config_id?: number
    created_at?: Date | string
    created_by_account_id: number
    records_traits?: GalleryConfigCreaterecords_traitsInput | string[]
    records_color_traits?: GalleryConfigCreaterecords_color_traitsInput | string[]
  }

  export type GalleryConfigUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    records_traits?: GalleryConfigUpdaterecords_traitsInput | string[]
    records_color_traits?: GalleryConfigUpdaterecords_color_traitsInput | string[]
    created_by_user?: AccountUpdateOneRequiredWithoutGallery_configNestedInput
  }

  export type GalleryConfigUncheckedUpdateInput = {
    gallery_config_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by_account_id?: IntFieldUpdateOperationsInput | number
    records_traits?: GalleryConfigUpdaterecords_traitsInput | string[]
    records_color_traits?: GalleryConfigUpdaterecords_color_traitsInput | string[]
  }

  export type GalleryConfigCreateManyInput = {
    gallery_config_id?: number
    created_at?: Date | string
    created_by_account_id: number
    records_traits?: GalleryConfigCreaterecords_traitsInput | string[]
    records_color_traits?: GalleryConfigCreaterecords_color_traitsInput | string[]
  }

  export type GalleryConfigUpdateManyMutationInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    records_traits?: GalleryConfigUpdaterecords_traitsInput | string[]
    records_color_traits?: GalleryConfigUpdaterecords_color_traitsInput | string[]
  }

  export type GalleryConfigUncheckedUpdateManyInput = {
    gallery_config_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by_account_id?: IntFieldUpdateOperationsInput | number
    records_traits?: GalleryConfigUpdaterecords_traitsInput | string[]
    records_color_traits?: GalleryConfigUpdaterecords_color_traitsInput | string[]
  }

  export type GalleryRecordCreateInput = {
    created_at?: Date | string
    asset_url: string
    asset_traits?: GalleryRecordCreateasset_traitsInput | string[]
    asset_color_traits?: GalleryRecordCreateasset_color_traitsInput | string[]
    created_by_account: AccountCreateNestedOneWithoutGallery_recordInput
  }

  export type GalleryRecordUncheckedCreateInput = {
    gallery_record_id?: number
    created_at?: Date | string
    created_by_account_id: number
    asset_url: string
    asset_traits?: GalleryRecordCreateasset_traitsInput | string[]
    asset_color_traits?: GalleryRecordCreateasset_color_traitsInput | string[]
  }

  export type GalleryRecordUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    asset_url?: StringFieldUpdateOperationsInput | string
    asset_traits?: GalleryRecordUpdateasset_traitsInput | string[]
    asset_color_traits?: GalleryRecordUpdateasset_color_traitsInput | string[]
    created_by_account?: AccountUpdateOneRequiredWithoutGallery_recordNestedInput
  }

  export type GalleryRecordUncheckedUpdateInput = {
    gallery_record_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by_account_id?: IntFieldUpdateOperationsInput | number
    asset_url?: StringFieldUpdateOperationsInput | string
    asset_traits?: GalleryRecordUpdateasset_traitsInput | string[]
    asset_color_traits?: GalleryRecordUpdateasset_color_traitsInput | string[]
  }

  export type GalleryRecordCreateManyInput = {
    gallery_record_id?: number
    created_at?: Date | string
    created_by_account_id: number
    asset_url: string
    asset_traits?: GalleryRecordCreateasset_traitsInput | string[]
    asset_color_traits?: GalleryRecordCreateasset_color_traitsInput | string[]
  }

  export type GalleryRecordUpdateManyMutationInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    asset_url?: StringFieldUpdateOperationsInput | string
    asset_traits?: GalleryRecordUpdateasset_traitsInput | string[]
    asset_color_traits?: GalleryRecordUpdateasset_color_traitsInput | string[]
  }

  export type GalleryRecordUncheckedUpdateManyInput = {
    gallery_record_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by_account_id?: IntFieldUpdateOperationsInput | number
    asset_url?: StringFieldUpdateOperationsInput | string
    asset_traits?: GalleryRecordUpdateasset_traitsInput | string[]
    asset_color_traits?: GalleryRecordUpdateasset_color_traitsInput | string[]
  }

  export type SessionCreateInput = {
    created_at?: Date | string
    session_mode: number
    location?: string | null
    language?: string | null
    user_agent?: string | null
    last_used?: Date | string | null
    client_ip?: string | null
    expires_at: Date | string
    created_by_user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    session_id?: number
    created_at?: Date | string
    created_by_user_id: number
    session_mode: number
    location?: string | null
    language?: string | null
    user_agent?: string | null
    last_used?: Date | string | null
    client_ip?: string | null
    expires_at: Date | string
  }

  export type SessionUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    session_mode?: IntFieldUpdateOperationsInput | number
    location?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    last_used?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    client_ip?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by_user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    session_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by_user_id?: IntFieldUpdateOperationsInput | number
    session_mode?: IntFieldUpdateOperationsInput | number
    location?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    last_used?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    client_ip?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    session_id?: number
    created_at?: Date | string
    created_by_user_id: number
    session_mode: number
    location?: string | null
    language?: string | null
    user_agent?: string | null
    last_used?: Date | string | null
    client_ip?: string | null
    expires_at: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    session_mode?: IntFieldUpdateOperationsInput | number
    location?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    last_used?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    client_ip?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    session_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by_user_id?: IntFieldUpdateOperationsInput | number
    session_mode?: IntFieldUpdateOperationsInput | number
    location?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    last_used?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    client_ip?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeletedUserCreateInput = {
    created_at?: Date | string
    body: string
  }

  export type DeletedUserUncheckedCreateInput = {
    user_id?: number
    created_at?: Date | string
    body: string
  }

  export type DeletedUserUpdateInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    body?: StringFieldUpdateOperationsInput | string
  }

  export type DeletedUserUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    body?: StringFieldUpdateOperationsInput | string
  }

  export type DeletedUserCreateManyInput = {
    user_id?: number
    created_at?: Date | string
    body: string
  }

  export type DeletedUserUpdateManyMutationInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    body?: StringFieldUpdateOperationsInput | string
  }

  export type DeletedUserUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    body?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateInput = {
    email: string
    display_name?: string
    password: string
    role: number
    created_at?: Date | string
    permissions?: UserCreatepermissionsInput | string[]
    is_active?: boolean
    account?: AccountCreateNestedOneWithoutCreated_by_userInput
    event_logs?: EventLogCreateNestedManyWithoutCreated_by_userInput
    sessions?: SessionCreateNestedManyWithoutCreated_by_userInput
  }

  export type UserUncheckedCreateInput = {
    user_id?: number
    email: string
    display_name?: string
    password: string
    role: number
    created_at?: Date | string
    permissions?: UserCreatepermissionsInput | string[]
    is_active?: boolean
    account?: AccountUncheckedCreateNestedOneWithoutCreated_by_userInput
    event_logs?: EventLogUncheckedCreateNestedManyWithoutCreated_by_userInput
    sessions?: SessionUncheckedCreateNestedManyWithoutCreated_by_userInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    permissions?: UserUpdatepermissionsInput | string[]
    is_active?: BoolFieldUpdateOperationsInput | boolean
    account?: AccountUpdateOneWithoutCreated_by_userNestedInput
    event_logs?: EventLogUpdateManyWithoutCreated_by_userNestedInput
    sessions?: SessionUpdateManyWithoutCreated_by_userNestedInput
  }

  export type UserUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    permissions?: UserUpdatepermissionsInput | string[]
    is_active?: BoolFieldUpdateOperationsInput | boolean
    account?: AccountUncheckedUpdateOneWithoutCreated_by_userNestedInput
    event_logs?: EventLogUncheckedUpdateManyWithoutCreated_by_userNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutCreated_by_userNestedInput
  }

  export type UserCreateManyInput = {
    user_id?: number
    email: string
    display_name?: string
    password: string
    role: number
    created_at?: Date | string
    permissions?: UserCreatepermissionsInput | string[]
    is_active?: boolean
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    permissions?: UserUpdatepermissionsInput | string[]
    is_active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    permissions?: UserUpdatepermissionsInput | string[]
    is_active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AdminCountOrderByAggregateInput = {
    notes?: SortOrder
    id?: SortOrder
    created_at?: SortOrder
  }

  export type AdminAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    notes?: SortOrder
    id?: SortOrder
    created_at?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    notes?: SortOrder
    id?: SortOrder
    created_at?: SortOrder
  }

  export type AdminSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EventLogCountOrderByAggregateInput = {
    event_log_id?: SortOrder
    created_at?: SortOrder
    event?: SortOrder
    created_by_user_id?: SortOrder
    language?: SortOrder
    location?: SortOrder
    user_agent?: SortOrder
    client_ip?: SortOrder
    event_payload?: SortOrder
    event_type?: SortOrder
  }

  export type EventLogAvgOrderByAggregateInput = {
    event_log_id?: SortOrder
    created_by_user_id?: SortOrder
    event_type?: SortOrder
  }

  export type EventLogMaxOrderByAggregateInput = {
    event_log_id?: SortOrder
    created_at?: SortOrder
    event?: SortOrder
    created_by_user_id?: SortOrder
    language?: SortOrder
    location?: SortOrder
    user_agent?: SortOrder
    client_ip?: SortOrder
    event_payload?: SortOrder
    event_type?: SortOrder
  }

  export type EventLogMinOrderByAggregateInput = {
    event_log_id?: SortOrder
    created_at?: SortOrder
    event?: SortOrder
    created_by_user_id?: SortOrder
    language?: SortOrder
    location?: SortOrder
    user_agent?: SortOrder
    client_ip?: SortOrder
    event_payload?: SortOrder
    event_type?: SortOrder
  }

  export type EventLogSumOrderByAggregateInput = {
    event_log_id?: SortOrder
    created_by_user_id?: SortOrder
    event_type?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type GalleryConfigNullableScalarRelationFilter = {
    is?: GalleryConfigWhereInput | null
    isNot?: GalleryConfigWhereInput | null
  }

  export type GalleryRecordListRelationFilter = {
    every?: GalleryRecordWhereInput
    some?: GalleryRecordWhereInput
    none?: GalleryRecordWhereInput
  }

  export type GalleryRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountCountOrderByAggregateInput = {
    account_id?: SortOrder
    created_at?: SortOrder
    created_by_user_id?: SortOrder
    display_name?: SortOrder
    pricing_plan?: SortOrder
    payment_status?: SortOrder
    account_status?: SortOrder
    account_expiration_date?: SortOrder
    upcoming_payment_date?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    account_id?: SortOrder
    created_by_user_id?: SortOrder
    pricing_plan?: SortOrder
    payment_status?: SortOrder
    account_status?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    account_id?: SortOrder
    created_at?: SortOrder
    created_by_user_id?: SortOrder
    display_name?: SortOrder
    pricing_plan?: SortOrder
    payment_status?: SortOrder
    account_status?: SortOrder
    account_expiration_date?: SortOrder
    upcoming_payment_date?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    account_id?: SortOrder
    created_at?: SortOrder
    created_by_user_id?: SortOrder
    display_name?: SortOrder
    pricing_plan?: SortOrder
    payment_status?: SortOrder
    account_status?: SortOrder
    account_expiration_date?: SortOrder
    upcoming_payment_date?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    account_id?: SortOrder
    created_by_user_id?: SortOrder
    pricing_plan?: SortOrder
    payment_status?: SortOrder
    account_status?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type AccountScalarRelationFilter = {
    is?: AccountWhereInput
    isNot?: AccountWhereInput
  }

  export type GalleryConfigCountOrderByAggregateInput = {
    gallery_config_id?: SortOrder
    created_at?: SortOrder
    created_by_account_id?: SortOrder
    records_traits?: SortOrder
    records_color_traits?: SortOrder
  }

  export type GalleryConfigAvgOrderByAggregateInput = {
    gallery_config_id?: SortOrder
    created_by_account_id?: SortOrder
  }

  export type GalleryConfigMaxOrderByAggregateInput = {
    gallery_config_id?: SortOrder
    created_at?: SortOrder
    created_by_account_id?: SortOrder
  }

  export type GalleryConfigMinOrderByAggregateInput = {
    gallery_config_id?: SortOrder
    created_at?: SortOrder
    created_by_account_id?: SortOrder
  }

  export type GalleryConfigSumOrderByAggregateInput = {
    gallery_config_id?: SortOrder
    created_by_account_id?: SortOrder
  }

  export type GalleryRecordCountOrderByAggregateInput = {
    gallery_record_id?: SortOrder
    created_at?: SortOrder
    created_by_account_id?: SortOrder
    asset_url?: SortOrder
    asset_traits?: SortOrder
    asset_color_traits?: SortOrder
  }

  export type GalleryRecordAvgOrderByAggregateInput = {
    gallery_record_id?: SortOrder
    created_by_account_id?: SortOrder
  }

  export type GalleryRecordMaxOrderByAggregateInput = {
    gallery_record_id?: SortOrder
    created_at?: SortOrder
    created_by_account_id?: SortOrder
    asset_url?: SortOrder
  }

  export type GalleryRecordMinOrderByAggregateInput = {
    gallery_record_id?: SortOrder
    created_at?: SortOrder
    created_by_account_id?: SortOrder
    asset_url?: SortOrder
  }

  export type GalleryRecordSumOrderByAggregateInput = {
    gallery_record_id?: SortOrder
    created_by_account_id?: SortOrder
  }

  export type SessionCountOrderByAggregateInput = {
    session_id?: SortOrder
    created_at?: SortOrder
    created_by_user_id?: SortOrder
    session_mode?: SortOrder
    location?: SortOrder
    language?: SortOrder
    user_agent?: SortOrder
    last_used?: SortOrder
    client_ip?: SortOrder
    expires_at?: SortOrder
  }

  export type SessionAvgOrderByAggregateInput = {
    session_id?: SortOrder
    created_by_user_id?: SortOrder
    session_mode?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    session_id?: SortOrder
    created_at?: SortOrder
    created_by_user_id?: SortOrder
    session_mode?: SortOrder
    location?: SortOrder
    language?: SortOrder
    user_agent?: SortOrder
    last_used?: SortOrder
    client_ip?: SortOrder
    expires_at?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    session_id?: SortOrder
    created_at?: SortOrder
    created_by_user_id?: SortOrder
    session_mode?: SortOrder
    location?: SortOrder
    language?: SortOrder
    user_agent?: SortOrder
    last_used?: SortOrder
    client_ip?: SortOrder
    expires_at?: SortOrder
  }

  export type SessionSumOrderByAggregateInput = {
    session_id?: SortOrder
    created_by_user_id?: SortOrder
    session_mode?: SortOrder
  }

  export type DeletedUserCountOrderByAggregateInput = {
    user_id?: SortOrder
    created_at?: SortOrder
    body?: SortOrder
  }

  export type DeletedUserAvgOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type DeletedUserMaxOrderByAggregateInput = {
    user_id?: SortOrder
    created_at?: SortOrder
    body?: SortOrder
  }

  export type DeletedUserMinOrderByAggregateInput = {
    user_id?: SortOrder
    created_at?: SortOrder
    body?: SortOrder
  }

  export type DeletedUserSumOrderByAggregateInput = {
    user_id?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type AccountNullableScalarRelationFilter = {
    is?: AccountWhereInput | null
    isNot?: AccountWhereInput | null
  }

  export type EventLogListRelationFilter = {
    every?: EventLogWhereInput
    some?: EventLogWhereInput
    none?: EventLogWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type EventLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    user_id?: SortOrder
    email?: SortOrder
    display_name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    permissions?: SortOrder
    is_active?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    user_id?: SortOrder
    role?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    user_id?: SortOrder
    email?: SortOrder
    display_name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    is_active?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    user_id?: SortOrder
    email?: SortOrder
    display_name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
    is_active?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    user_id?: SortOrder
    role?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserCreateNestedOneWithoutEvent_logsInput = {
    create?: XOR<UserCreateWithoutEvent_logsInput, UserUncheckedCreateWithoutEvent_logsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEvent_logsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateOneRequiredWithoutEvent_logsNestedInput = {
    create?: XOR<UserCreateWithoutEvent_logsInput, UserUncheckedCreateWithoutEvent_logsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEvent_logsInput
    upsert?: UserUpsertWithoutEvent_logsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEvent_logsInput, UserUpdateWithoutEvent_logsInput>, UserUncheckedUpdateWithoutEvent_logsInput>
  }

  export type UserCreateNestedOneWithoutAccountInput = {
    create?: XOR<UserCreateWithoutAccountInput, UserUncheckedCreateWithoutAccountInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountInput
    connect?: UserWhereUniqueInput
  }

  export type GalleryConfigCreateNestedOneWithoutCreated_by_userInput = {
    create?: XOR<GalleryConfigCreateWithoutCreated_by_userInput, GalleryConfigUncheckedCreateWithoutCreated_by_userInput>
    connectOrCreate?: GalleryConfigCreateOrConnectWithoutCreated_by_userInput
    connect?: GalleryConfigWhereUniqueInput
  }

  export type GalleryRecordCreateNestedManyWithoutCreated_by_accountInput = {
    create?: XOR<GalleryRecordCreateWithoutCreated_by_accountInput, GalleryRecordUncheckedCreateWithoutCreated_by_accountInput> | GalleryRecordCreateWithoutCreated_by_accountInput[] | GalleryRecordUncheckedCreateWithoutCreated_by_accountInput[]
    connectOrCreate?: GalleryRecordCreateOrConnectWithoutCreated_by_accountInput | GalleryRecordCreateOrConnectWithoutCreated_by_accountInput[]
    createMany?: GalleryRecordCreateManyCreated_by_accountInputEnvelope
    connect?: GalleryRecordWhereUniqueInput | GalleryRecordWhereUniqueInput[]
  }

  export type GalleryConfigUncheckedCreateNestedOneWithoutCreated_by_userInput = {
    create?: XOR<GalleryConfigCreateWithoutCreated_by_userInput, GalleryConfigUncheckedCreateWithoutCreated_by_userInput>
    connectOrCreate?: GalleryConfigCreateOrConnectWithoutCreated_by_userInput
    connect?: GalleryConfigWhereUniqueInput
  }

  export type GalleryRecordUncheckedCreateNestedManyWithoutCreated_by_accountInput = {
    create?: XOR<GalleryRecordCreateWithoutCreated_by_accountInput, GalleryRecordUncheckedCreateWithoutCreated_by_accountInput> | GalleryRecordCreateWithoutCreated_by_accountInput[] | GalleryRecordUncheckedCreateWithoutCreated_by_accountInput[]
    connectOrCreate?: GalleryRecordCreateOrConnectWithoutCreated_by_accountInput | GalleryRecordCreateOrConnectWithoutCreated_by_accountInput[]
    createMany?: GalleryRecordCreateManyCreated_by_accountInputEnvelope
    connect?: GalleryRecordWhereUniqueInput | GalleryRecordWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutAccountNestedInput = {
    create?: XOR<UserCreateWithoutAccountInput, UserUncheckedCreateWithoutAccountInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountInput
    upsert?: UserUpsertWithoutAccountInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountInput, UserUpdateWithoutAccountInput>, UserUncheckedUpdateWithoutAccountInput>
  }

  export type GalleryConfigUpdateOneWithoutCreated_by_userNestedInput = {
    create?: XOR<GalleryConfigCreateWithoutCreated_by_userInput, GalleryConfigUncheckedCreateWithoutCreated_by_userInput>
    connectOrCreate?: GalleryConfigCreateOrConnectWithoutCreated_by_userInput
    upsert?: GalleryConfigUpsertWithoutCreated_by_userInput
    disconnect?: GalleryConfigWhereInput | boolean
    delete?: GalleryConfigWhereInput | boolean
    connect?: GalleryConfigWhereUniqueInput
    update?: XOR<XOR<GalleryConfigUpdateToOneWithWhereWithoutCreated_by_userInput, GalleryConfigUpdateWithoutCreated_by_userInput>, GalleryConfigUncheckedUpdateWithoutCreated_by_userInput>
  }

  export type GalleryRecordUpdateManyWithoutCreated_by_accountNestedInput = {
    create?: XOR<GalleryRecordCreateWithoutCreated_by_accountInput, GalleryRecordUncheckedCreateWithoutCreated_by_accountInput> | GalleryRecordCreateWithoutCreated_by_accountInput[] | GalleryRecordUncheckedCreateWithoutCreated_by_accountInput[]
    connectOrCreate?: GalleryRecordCreateOrConnectWithoutCreated_by_accountInput | GalleryRecordCreateOrConnectWithoutCreated_by_accountInput[]
    upsert?: GalleryRecordUpsertWithWhereUniqueWithoutCreated_by_accountInput | GalleryRecordUpsertWithWhereUniqueWithoutCreated_by_accountInput[]
    createMany?: GalleryRecordCreateManyCreated_by_accountInputEnvelope
    set?: GalleryRecordWhereUniqueInput | GalleryRecordWhereUniqueInput[]
    disconnect?: GalleryRecordWhereUniqueInput | GalleryRecordWhereUniqueInput[]
    delete?: GalleryRecordWhereUniqueInput | GalleryRecordWhereUniqueInput[]
    connect?: GalleryRecordWhereUniqueInput | GalleryRecordWhereUniqueInput[]
    update?: GalleryRecordUpdateWithWhereUniqueWithoutCreated_by_accountInput | GalleryRecordUpdateWithWhereUniqueWithoutCreated_by_accountInput[]
    updateMany?: GalleryRecordUpdateManyWithWhereWithoutCreated_by_accountInput | GalleryRecordUpdateManyWithWhereWithoutCreated_by_accountInput[]
    deleteMany?: GalleryRecordScalarWhereInput | GalleryRecordScalarWhereInput[]
  }

  export type GalleryConfigUncheckedUpdateOneWithoutCreated_by_userNestedInput = {
    create?: XOR<GalleryConfigCreateWithoutCreated_by_userInput, GalleryConfigUncheckedCreateWithoutCreated_by_userInput>
    connectOrCreate?: GalleryConfigCreateOrConnectWithoutCreated_by_userInput
    upsert?: GalleryConfigUpsertWithoutCreated_by_userInput
    disconnect?: GalleryConfigWhereInput | boolean
    delete?: GalleryConfigWhereInput | boolean
    connect?: GalleryConfigWhereUniqueInput
    update?: XOR<XOR<GalleryConfigUpdateToOneWithWhereWithoutCreated_by_userInput, GalleryConfigUpdateWithoutCreated_by_userInput>, GalleryConfigUncheckedUpdateWithoutCreated_by_userInput>
  }

  export type GalleryRecordUncheckedUpdateManyWithoutCreated_by_accountNestedInput = {
    create?: XOR<GalleryRecordCreateWithoutCreated_by_accountInput, GalleryRecordUncheckedCreateWithoutCreated_by_accountInput> | GalleryRecordCreateWithoutCreated_by_accountInput[] | GalleryRecordUncheckedCreateWithoutCreated_by_accountInput[]
    connectOrCreate?: GalleryRecordCreateOrConnectWithoutCreated_by_accountInput | GalleryRecordCreateOrConnectWithoutCreated_by_accountInput[]
    upsert?: GalleryRecordUpsertWithWhereUniqueWithoutCreated_by_accountInput | GalleryRecordUpsertWithWhereUniqueWithoutCreated_by_accountInput[]
    createMany?: GalleryRecordCreateManyCreated_by_accountInputEnvelope
    set?: GalleryRecordWhereUniqueInput | GalleryRecordWhereUniqueInput[]
    disconnect?: GalleryRecordWhereUniqueInput | GalleryRecordWhereUniqueInput[]
    delete?: GalleryRecordWhereUniqueInput | GalleryRecordWhereUniqueInput[]
    connect?: GalleryRecordWhereUniqueInput | GalleryRecordWhereUniqueInput[]
    update?: GalleryRecordUpdateWithWhereUniqueWithoutCreated_by_accountInput | GalleryRecordUpdateWithWhereUniqueWithoutCreated_by_accountInput[]
    updateMany?: GalleryRecordUpdateManyWithWhereWithoutCreated_by_accountInput | GalleryRecordUpdateManyWithWhereWithoutCreated_by_accountInput[]
    deleteMany?: GalleryRecordScalarWhereInput | GalleryRecordScalarWhereInput[]
  }

  export type GalleryConfigCreaterecords_traitsInput = {
    set: string[]
  }

  export type GalleryConfigCreaterecords_color_traitsInput = {
    set: string[]
  }

  export type AccountCreateNestedOneWithoutGallery_configInput = {
    create?: XOR<AccountCreateWithoutGallery_configInput, AccountUncheckedCreateWithoutGallery_configInput>
    connectOrCreate?: AccountCreateOrConnectWithoutGallery_configInput
    connect?: AccountWhereUniqueInput
  }

  export type GalleryConfigUpdaterecords_traitsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type GalleryConfigUpdaterecords_color_traitsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type AccountUpdateOneRequiredWithoutGallery_configNestedInput = {
    create?: XOR<AccountCreateWithoutGallery_configInput, AccountUncheckedCreateWithoutGallery_configInput>
    connectOrCreate?: AccountCreateOrConnectWithoutGallery_configInput
    upsert?: AccountUpsertWithoutGallery_configInput
    connect?: AccountWhereUniqueInput
    update?: XOR<XOR<AccountUpdateToOneWithWhereWithoutGallery_configInput, AccountUpdateWithoutGallery_configInput>, AccountUncheckedUpdateWithoutGallery_configInput>
  }

  export type GalleryRecordCreateasset_traitsInput = {
    set: string[]
  }

  export type GalleryRecordCreateasset_color_traitsInput = {
    set: string[]
  }

  export type AccountCreateNestedOneWithoutGallery_recordInput = {
    create?: XOR<AccountCreateWithoutGallery_recordInput, AccountUncheckedCreateWithoutGallery_recordInput>
    connectOrCreate?: AccountCreateOrConnectWithoutGallery_recordInput
    connect?: AccountWhereUniqueInput
  }

  export type GalleryRecordUpdateasset_traitsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type GalleryRecordUpdateasset_color_traitsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type AccountUpdateOneRequiredWithoutGallery_recordNestedInput = {
    create?: XOR<AccountCreateWithoutGallery_recordInput, AccountUncheckedCreateWithoutGallery_recordInput>
    connectOrCreate?: AccountCreateOrConnectWithoutGallery_recordInput
    upsert?: AccountUpsertWithoutGallery_recordInput
    connect?: AccountWhereUniqueInput
    update?: XOR<XOR<AccountUpdateToOneWithWhereWithoutGallery_recordInput, AccountUpdateWithoutGallery_recordInput>, AccountUncheckedUpdateWithoutGallery_recordInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserCreatepermissionsInput = {
    set: string[]
  }

  export type AccountCreateNestedOneWithoutCreated_by_userInput = {
    create?: XOR<AccountCreateWithoutCreated_by_userInput, AccountUncheckedCreateWithoutCreated_by_userInput>
    connectOrCreate?: AccountCreateOrConnectWithoutCreated_by_userInput
    connect?: AccountWhereUniqueInput
  }

  export type EventLogCreateNestedManyWithoutCreated_by_userInput = {
    create?: XOR<EventLogCreateWithoutCreated_by_userInput, EventLogUncheckedCreateWithoutCreated_by_userInput> | EventLogCreateWithoutCreated_by_userInput[] | EventLogUncheckedCreateWithoutCreated_by_userInput[]
    connectOrCreate?: EventLogCreateOrConnectWithoutCreated_by_userInput | EventLogCreateOrConnectWithoutCreated_by_userInput[]
    createMany?: EventLogCreateManyCreated_by_userInputEnvelope
    connect?: EventLogWhereUniqueInput | EventLogWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutCreated_by_userInput = {
    create?: XOR<SessionCreateWithoutCreated_by_userInput, SessionUncheckedCreateWithoutCreated_by_userInput> | SessionCreateWithoutCreated_by_userInput[] | SessionUncheckedCreateWithoutCreated_by_userInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutCreated_by_userInput | SessionCreateOrConnectWithoutCreated_by_userInput[]
    createMany?: SessionCreateManyCreated_by_userInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedOneWithoutCreated_by_userInput = {
    create?: XOR<AccountCreateWithoutCreated_by_userInput, AccountUncheckedCreateWithoutCreated_by_userInput>
    connectOrCreate?: AccountCreateOrConnectWithoutCreated_by_userInput
    connect?: AccountWhereUniqueInput
  }

  export type EventLogUncheckedCreateNestedManyWithoutCreated_by_userInput = {
    create?: XOR<EventLogCreateWithoutCreated_by_userInput, EventLogUncheckedCreateWithoutCreated_by_userInput> | EventLogCreateWithoutCreated_by_userInput[] | EventLogUncheckedCreateWithoutCreated_by_userInput[]
    connectOrCreate?: EventLogCreateOrConnectWithoutCreated_by_userInput | EventLogCreateOrConnectWithoutCreated_by_userInput[]
    createMany?: EventLogCreateManyCreated_by_userInputEnvelope
    connect?: EventLogWhereUniqueInput | EventLogWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutCreated_by_userInput = {
    create?: XOR<SessionCreateWithoutCreated_by_userInput, SessionUncheckedCreateWithoutCreated_by_userInput> | SessionCreateWithoutCreated_by_userInput[] | SessionUncheckedCreateWithoutCreated_by_userInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutCreated_by_userInput | SessionCreateOrConnectWithoutCreated_by_userInput[]
    createMany?: SessionCreateManyCreated_by_userInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type UserUpdatepermissionsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type AccountUpdateOneWithoutCreated_by_userNestedInput = {
    create?: XOR<AccountCreateWithoutCreated_by_userInput, AccountUncheckedCreateWithoutCreated_by_userInput>
    connectOrCreate?: AccountCreateOrConnectWithoutCreated_by_userInput
    upsert?: AccountUpsertWithoutCreated_by_userInput
    disconnect?: AccountWhereInput | boolean
    delete?: AccountWhereInput | boolean
    connect?: AccountWhereUniqueInput
    update?: XOR<XOR<AccountUpdateToOneWithWhereWithoutCreated_by_userInput, AccountUpdateWithoutCreated_by_userInput>, AccountUncheckedUpdateWithoutCreated_by_userInput>
  }

  export type EventLogUpdateManyWithoutCreated_by_userNestedInput = {
    create?: XOR<EventLogCreateWithoutCreated_by_userInput, EventLogUncheckedCreateWithoutCreated_by_userInput> | EventLogCreateWithoutCreated_by_userInput[] | EventLogUncheckedCreateWithoutCreated_by_userInput[]
    connectOrCreate?: EventLogCreateOrConnectWithoutCreated_by_userInput | EventLogCreateOrConnectWithoutCreated_by_userInput[]
    upsert?: EventLogUpsertWithWhereUniqueWithoutCreated_by_userInput | EventLogUpsertWithWhereUniqueWithoutCreated_by_userInput[]
    createMany?: EventLogCreateManyCreated_by_userInputEnvelope
    set?: EventLogWhereUniqueInput | EventLogWhereUniqueInput[]
    disconnect?: EventLogWhereUniqueInput | EventLogWhereUniqueInput[]
    delete?: EventLogWhereUniqueInput | EventLogWhereUniqueInput[]
    connect?: EventLogWhereUniqueInput | EventLogWhereUniqueInput[]
    update?: EventLogUpdateWithWhereUniqueWithoutCreated_by_userInput | EventLogUpdateWithWhereUniqueWithoutCreated_by_userInput[]
    updateMany?: EventLogUpdateManyWithWhereWithoutCreated_by_userInput | EventLogUpdateManyWithWhereWithoutCreated_by_userInput[]
    deleteMany?: EventLogScalarWhereInput | EventLogScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutCreated_by_userNestedInput = {
    create?: XOR<SessionCreateWithoutCreated_by_userInput, SessionUncheckedCreateWithoutCreated_by_userInput> | SessionCreateWithoutCreated_by_userInput[] | SessionUncheckedCreateWithoutCreated_by_userInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutCreated_by_userInput | SessionCreateOrConnectWithoutCreated_by_userInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutCreated_by_userInput | SessionUpsertWithWhereUniqueWithoutCreated_by_userInput[]
    createMany?: SessionCreateManyCreated_by_userInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutCreated_by_userInput | SessionUpdateWithWhereUniqueWithoutCreated_by_userInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutCreated_by_userInput | SessionUpdateManyWithWhereWithoutCreated_by_userInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AccountUncheckedUpdateOneWithoutCreated_by_userNestedInput = {
    create?: XOR<AccountCreateWithoutCreated_by_userInput, AccountUncheckedCreateWithoutCreated_by_userInput>
    connectOrCreate?: AccountCreateOrConnectWithoutCreated_by_userInput
    upsert?: AccountUpsertWithoutCreated_by_userInput
    disconnect?: AccountWhereInput | boolean
    delete?: AccountWhereInput | boolean
    connect?: AccountWhereUniqueInput
    update?: XOR<XOR<AccountUpdateToOneWithWhereWithoutCreated_by_userInput, AccountUpdateWithoutCreated_by_userInput>, AccountUncheckedUpdateWithoutCreated_by_userInput>
  }

  export type EventLogUncheckedUpdateManyWithoutCreated_by_userNestedInput = {
    create?: XOR<EventLogCreateWithoutCreated_by_userInput, EventLogUncheckedCreateWithoutCreated_by_userInput> | EventLogCreateWithoutCreated_by_userInput[] | EventLogUncheckedCreateWithoutCreated_by_userInput[]
    connectOrCreate?: EventLogCreateOrConnectWithoutCreated_by_userInput | EventLogCreateOrConnectWithoutCreated_by_userInput[]
    upsert?: EventLogUpsertWithWhereUniqueWithoutCreated_by_userInput | EventLogUpsertWithWhereUniqueWithoutCreated_by_userInput[]
    createMany?: EventLogCreateManyCreated_by_userInputEnvelope
    set?: EventLogWhereUniqueInput | EventLogWhereUniqueInput[]
    disconnect?: EventLogWhereUniqueInput | EventLogWhereUniqueInput[]
    delete?: EventLogWhereUniqueInput | EventLogWhereUniqueInput[]
    connect?: EventLogWhereUniqueInput | EventLogWhereUniqueInput[]
    update?: EventLogUpdateWithWhereUniqueWithoutCreated_by_userInput | EventLogUpdateWithWhereUniqueWithoutCreated_by_userInput[]
    updateMany?: EventLogUpdateManyWithWhereWithoutCreated_by_userInput | EventLogUpdateManyWithWhereWithoutCreated_by_userInput[]
    deleteMany?: EventLogScalarWhereInput | EventLogScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutCreated_by_userNestedInput = {
    create?: XOR<SessionCreateWithoutCreated_by_userInput, SessionUncheckedCreateWithoutCreated_by_userInput> | SessionCreateWithoutCreated_by_userInput[] | SessionUncheckedCreateWithoutCreated_by_userInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutCreated_by_userInput | SessionCreateOrConnectWithoutCreated_by_userInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutCreated_by_userInput | SessionUpsertWithWhereUniqueWithoutCreated_by_userInput[]
    createMany?: SessionCreateManyCreated_by_userInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutCreated_by_userInput | SessionUpdateWithWhereUniqueWithoutCreated_by_userInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutCreated_by_userInput | SessionUpdateManyWithWhereWithoutCreated_by_userInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UserCreateWithoutEvent_logsInput = {
    email: string
    display_name?: string
    password: string
    role: number
    created_at?: Date | string
    permissions?: UserCreatepermissionsInput | string[]
    is_active?: boolean
    account?: AccountCreateNestedOneWithoutCreated_by_userInput
    sessions?: SessionCreateNestedManyWithoutCreated_by_userInput
  }

  export type UserUncheckedCreateWithoutEvent_logsInput = {
    user_id?: number
    email: string
    display_name?: string
    password: string
    role: number
    created_at?: Date | string
    permissions?: UserCreatepermissionsInput | string[]
    is_active?: boolean
    account?: AccountUncheckedCreateNestedOneWithoutCreated_by_userInput
    sessions?: SessionUncheckedCreateNestedManyWithoutCreated_by_userInput
  }

  export type UserCreateOrConnectWithoutEvent_logsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEvent_logsInput, UserUncheckedCreateWithoutEvent_logsInput>
  }

  export type UserUpsertWithoutEvent_logsInput = {
    update: XOR<UserUpdateWithoutEvent_logsInput, UserUncheckedUpdateWithoutEvent_logsInput>
    create: XOR<UserCreateWithoutEvent_logsInput, UserUncheckedCreateWithoutEvent_logsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEvent_logsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEvent_logsInput, UserUncheckedUpdateWithoutEvent_logsInput>
  }

  export type UserUpdateWithoutEvent_logsInput = {
    email?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    permissions?: UserUpdatepermissionsInput | string[]
    is_active?: BoolFieldUpdateOperationsInput | boolean
    account?: AccountUpdateOneWithoutCreated_by_userNestedInput
    sessions?: SessionUpdateManyWithoutCreated_by_userNestedInput
  }

  export type UserUncheckedUpdateWithoutEvent_logsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    permissions?: UserUpdatepermissionsInput | string[]
    is_active?: BoolFieldUpdateOperationsInput | boolean
    account?: AccountUncheckedUpdateOneWithoutCreated_by_userNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutCreated_by_userNestedInput
  }

  export type UserCreateWithoutAccountInput = {
    email: string
    display_name?: string
    password: string
    role: number
    created_at?: Date | string
    permissions?: UserCreatepermissionsInput | string[]
    is_active?: boolean
    event_logs?: EventLogCreateNestedManyWithoutCreated_by_userInput
    sessions?: SessionCreateNestedManyWithoutCreated_by_userInput
  }

  export type UserUncheckedCreateWithoutAccountInput = {
    user_id?: number
    email: string
    display_name?: string
    password: string
    role: number
    created_at?: Date | string
    permissions?: UserCreatepermissionsInput | string[]
    is_active?: boolean
    event_logs?: EventLogUncheckedCreateNestedManyWithoutCreated_by_userInput
    sessions?: SessionUncheckedCreateNestedManyWithoutCreated_by_userInput
  }

  export type UserCreateOrConnectWithoutAccountInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountInput, UserUncheckedCreateWithoutAccountInput>
  }

  export type GalleryConfigCreateWithoutCreated_by_userInput = {
    created_at?: Date | string
    records_traits?: GalleryConfigCreaterecords_traitsInput | string[]
    records_color_traits?: GalleryConfigCreaterecords_color_traitsInput | string[]
  }

  export type GalleryConfigUncheckedCreateWithoutCreated_by_userInput = {
    gallery_config_id?: number
    created_at?: Date | string
    records_traits?: GalleryConfigCreaterecords_traitsInput | string[]
    records_color_traits?: GalleryConfigCreaterecords_color_traitsInput | string[]
  }

  export type GalleryConfigCreateOrConnectWithoutCreated_by_userInput = {
    where: GalleryConfigWhereUniqueInput
    create: XOR<GalleryConfigCreateWithoutCreated_by_userInput, GalleryConfigUncheckedCreateWithoutCreated_by_userInput>
  }

  export type GalleryRecordCreateWithoutCreated_by_accountInput = {
    created_at?: Date | string
    asset_url: string
    asset_traits?: GalleryRecordCreateasset_traitsInput | string[]
    asset_color_traits?: GalleryRecordCreateasset_color_traitsInput | string[]
  }

  export type GalleryRecordUncheckedCreateWithoutCreated_by_accountInput = {
    gallery_record_id?: number
    created_at?: Date | string
    asset_url: string
    asset_traits?: GalleryRecordCreateasset_traitsInput | string[]
    asset_color_traits?: GalleryRecordCreateasset_color_traitsInput | string[]
  }

  export type GalleryRecordCreateOrConnectWithoutCreated_by_accountInput = {
    where: GalleryRecordWhereUniqueInput
    create: XOR<GalleryRecordCreateWithoutCreated_by_accountInput, GalleryRecordUncheckedCreateWithoutCreated_by_accountInput>
  }

  export type GalleryRecordCreateManyCreated_by_accountInputEnvelope = {
    data: GalleryRecordCreateManyCreated_by_accountInput | GalleryRecordCreateManyCreated_by_accountInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutAccountInput = {
    update: XOR<UserUpdateWithoutAccountInput, UserUncheckedUpdateWithoutAccountInput>
    create: XOR<UserCreateWithoutAccountInput, UserUncheckedCreateWithoutAccountInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountInput, UserUncheckedUpdateWithoutAccountInput>
  }

  export type UserUpdateWithoutAccountInput = {
    email?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    permissions?: UserUpdatepermissionsInput | string[]
    is_active?: BoolFieldUpdateOperationsInput | boolean
    event_logs?: EventLogUpdateManyWithoutCreated_by_userNestedInput
    sessions?: SessionUpdateManyWithoutCreated_by_userNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    permissions?: UserUpdatepermissionsInput | string[]
    is_active?: BoolFieldUpdateOperationsInput | boolean
    event_logs?: EventLogUncheckedUpdateManyWithoutCreated_by_userNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutCreated_by_userNestedInput
  }

  export type GalleryConfigUpsertWithoutCreated_by_userInput = {
    update: XOR<GalleryConfigUpdateWithoutCreated_by_userInput, GalleryConfigUncheckedUpdateWithoutCreated_by_userInput>
    create: XOR<GalleryConfigCreateWithoutCreated_by_userInput, GalleryConfigUncheckedCreateWithoutCreated_by_userInput>
    where?: GalleryConfigWhereInput
  }

  export type GalleryConfigUpdateToOneWithWhereWithoutCreated_by_userInput = {
    where?: GalleryConfigWhereInput
    data: XOR<GalleryConfigUpdateWithoutCreated_by_userInput, GalleryConfigUncheckedUpdateWithoutCreated_by_userInput>
  }

  export type GalleryConfigUpdateWithoutCreated_by_userInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    records_traits?: GalleryConfigUpdaterecords_traitsInput | string[]
    records_color_traits?: GalleryConfigUpdaterecords_color_traitsInput | string[]
  }

  export type GalleryConfigUncheckedUpdateWithoutCreated_by_userInput = {
    gallery_config_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    records_traits?: GalleryConfigUpdaterecords_traitsInput | string[]
    records_color_traits?: GalleryConfigUpdaterecords_color_traitsInput | string[]
  }

  export type GalleryRecordUpsertWithWhereUniqueWithoutCreated_by_accountInput = {
    where: GalleryRecordWhereUniqueInput
    update: XOR<GalleryRecordUpdateWithoutCreated_by_accountInput, GalleryRecordUncheckedUpdateWithoutCreated_by_accountInput>
    create: XOR<GalleryRecordCreateWithoutCreated_by_accountInput, GalleryRecordUncheckedCreateWithoutCreated_by_accountInput>
  }

  export type GalleryRecordUpdateWithWhereUniqueWithoutCreated_by_accountInput = {
    where: GalleryRecordWhereUniqueInput
    data: XOR<GalleryRecordUpdateWithoutCreated_by_accountInput, GalleryRecordUncheckedUpdateWithoutCreated_by_accountInput>
  }

  export type GalleryRecordUpdateManyWithWhereWithoutCreated_by_accountInput = {
    where: GalleryRecordScalarWhereInput
    data: XOR<GalleryRecordUpdateManyMutationInput, GalleryRecordUncheckedUpdateManyWithoutCreated_by_accountInput>
  }

  export type GalleryRecordScalarWhereInput = {
    AND?: GalleryRecordScalarWhereInput | GalleryRecordScalarWhereInput[]
    OR?: GalleryRecordScalarWhereInput[]
    NOT?: GalleryRecordScalarWhereInput | GalleryRecordScalarWhereInput[]
    gallery_record_id?: IntFilter<"GalleryRecord"> | number
    created_at?: DateTimeFilter<"GalleryRecord"> | Date | string
    created_by_account_id?: IntFilter<"GalleryRecord"> | number
    asset_url?: StringFilter<"GalleryRecord"> | string
    asset_traits?: StringNullableListFilter<"GalleryRecord">
    asset_color_traits?: StringNullableListFilter<"GalleryRecord">
  }

  export type AccountCreateWithoutGallery_configInput = {
    created_at?: Date | string
    display_name?: string | null
    pricing_plan: number
    payment_status: number
    account_status: number
    account_expiration_date?: Date | string | null
    upcoming_payment_date?: Date | string | null
    created_by_user: UserCreateNestedOneWithoutAccountInput
    gallery_record?: GalleryRecordCreateNestedManyWithoutCreated_by_accountInput
  }

  export type AccountUncheckedCreateWithoutGallery_configInput = {
    account_id?: number
    created_at?: Date | string
    created_by_user_id: number
    display_name?: string | null
    pricing_plan: number
    payment_status: number
    account_status: number
    account_expiration_date?: Date | string | null
    upcoming_payment_date?: Date | string | null
    gallery_record?: GalleryRecordUncheckedCreateNestedManyWithoutCreated_by_accountInput
  }

  export type AccountCreateOrConnectWithoutGallery_configInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutGallery_configInput, AccountUncheckedCreateWithoutGallery_configInput>
  }

  export type AccountUpsertWithoutGallery_configInput = {
    update: XOR<AccountUpdateWithoutGallery_configInput, AccountUncheckedUpdateWithoutGallery_configInput>
    create: XOR<AccountCreateWithoutGallery_configInput, AccountUncheckedCreateWithoutGallery_configInput>
    where?: AccountWhereInput
  }

  export type AccountUpdateToOneWithWhereWithoutGallery_configInput = {
    where?: AccountWhereInput
    data: XOR<AccountUpdateWithoutGallery_configInput, AccountUncheckedUpdateWithoutGallery_configInput>
  }

  export type AccountUpdateWithoutGallery_configInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    display_name?: NullableStringFieldUpdateOperationsInput | string | null
    pricing_plan?: IntFieldUpdateOperationsInput | number
    payment_status?: IntFieldUpdateOperationsInput | number
    account_status?: IntFieldUpdateOperationsInput | number
    account_expiration_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    upcoming_payment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by_user?: UserUpdateOneRequiredWithoutAccountNestedInput
    gallery_record?: GalleryRecordUpdateManyWithoutCreated_by_accountNestedInput
  }

  export type AccountUncheckedUpdateWithoutGallery_configInput = {
    account_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by_user_id?: IntFieldUpdateOperationsInput | number
    display_name?: NullableStringFieldUpdateOperationsInput | string | null
    pricing_plan?: IntFieldUpdateOperationsInput | number
    payment_status?: IntFieldUpdateOperationsInput | number
    account_status?: IntFieldUpdateOperationsInput | number
    account_expiration_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    upcoming_payment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gallery_record?: GalleryRecordUncheckedUpdateManyWithoutCreated_by_accountNestedInput
  }

  export type AccountCreateWithoutGallery_recordInput = {
    created_at?: Date | string
    display_name?: string | null
    pricing_plan: number
    payment_status: number
    account_status: number
    account_expiration_date?: Date | string | null
    upcoming_payment_date?: Date | string | null
    created_by_user: UserCreateNestedOneWithoutAccountInput
    gallery_config?: GalleryConfigCreateNestedOneWithoutCreated_by_userInput
  }

  export type AccountUncheckedCreateWithoutGallery_recordInput = {
    account_id?: number
    created_at?: Date | string
    created_by_user_id: number
    display_name?: string | null
    pricing_plan: number
    payment_status: number
    account_status: number
    account_expiration_date?: Date | string | null
    upcoming_payment_date?: Date | string | null
    gallery_config?: GalleryConfigUncheckedCreateNestedOneWithoutCreated_by_userInput
  }

  export type AccountCreateOrConnectWithoutGallery_recordInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutGallery_recordInput, AccountUncheckedCreateWithoutGallery_recordInput>
  }

  export type AccountUpsertWithoutGallery_recordInput = {
    update: XOR<AccountUpdateWithoutGallery_recordInput, AccountUncheckedUpdateWithoutGallery_recordInput>
    create: XOR<AccountCreateWithoutGallery_recordInput, AccountUncheckedCreateWithoutGallery_recordInput>
    where?: AccountWhereInput
  }

  export type AccountUpdateToOneWithWhereWithoutGallery_recordInput = {
    where?: AccountWhereInput
    data: XOR<AccountUpdateWithoutGallery_recordInput, AccountUncheckedUpdateWithoutGallery_recordInput>
  }

  export type AccountUpdateWithoutGallery_recordInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    display_name?: NullableStringFieldUpdateOperationsInput | string | null
    pricing_plan?: IntFieldUpdateOperationsInput | number
    payment_status?: IntFieldUpdateOperationsInput | number
    account_status?: IntFieldUpdateOperationsInput | number
    account_expiration_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    upcoming_payment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by_user?: UserUpdateOneRequiredWithoutAccountNestedInput
    gallery_config?: GalleryConfigUpdateOneWithoutCreated_by_userNestedInput
  }

  export type AccountUncheckedUpdateWithoutGallery_recordInput = {
    account_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_by_user_id?: IntFieldUpdateOperationsInput | number
    display_name?: NullableStringFieldUpdateOperationsInput | string | null
    pricing_plan?: IntFieldUpdateOperationsInput | number
    payment_status?: IntFieldUpdateOperationsInput | number
    account_status?: IntFieldUpdateOperationsInput | number
    account_expiration_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    upcoming_payment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gallery_config?: GalleryConfigUncheckedUpdateOneWithoutCreated_by_userNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    email: string
    display_name?: string
    password: string
    role: number
    created_at?: Date | string
    permissions?: UserCreatepermissionsInput | string[]
    is_active?: boolean
    account?: AccountCreateNestedOneWithoutCreated_by_userInput
    event_logs?: EventLogCreateNestedManyWithoutCreated_by_userInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    user_id?: number
    email: string
    display_name?: string
    password: string
    role: number
    created_at?: Date | string
    permissions?: UserCreatepermissionsInput | string[]
    is_active?: boolean
    account?: AccountUncheckedCreateNestedOneWithoutCreated_by_userInput
    event_logs?: EventLogUncheckedCreateNestedManyWithoutCreated_by_userInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    email?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    permissions?: UserUpdatepermissionsInput | string[]
    is_active?: BoolFieldUpdateOperationsInput | boolean
    account?: AccountUpdateOneWithoutCreated_by_userNestedInput
    event_logs?: EventLogUpdateManyWithoutCreated_by_userNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    permissions?: UserUpdatepermissionsInput | string[]
    is_active?: BoolFieldUpdateOperationsInput | boolean
    account?: AccountUncheckedUpdateOneWithoutCreated_by_userNestedInput
    event_logs?: EventLogUncheckedUpdateManyWithoutCreated_by_userNestedInput
  }

  export type AccountCreateWithoutCreated_by_userInput = {
    created_at?: Date | string
    display_name?: string | null
    pricing_plan: number
    payment_status: number
    account_status: number
    account_expiration_date?: Date | string | null
    upcoming_payment_date?: Date | string | null
    gallery_config?: GalleryConfigCreateNestedOneWithoutCreated_by_userInput
    gallery_record?: GalleryRecordCreateNestedManyWithoutCreated_by_accountInput
  }

  export type AccountUncheckedCreateWithoutCreated_by_userInput = {
    account_id?: number
    created_at?: Date | string
    display_name?: string | null
    pricing_plan: number
    payment_status: number
    account_status: number
    account_expiration_date?: Date | string | null
    upcoming_payment_date?: Date | string | null
    gallery_config?: GalleryConfigUncheckedCreateNestedOneWithoutCreated_by_userInput
    gallery_record?: GalleryRecordUncheckedCreateNestedManyWithoutCreated_by_accountInput
  }

  export type AccountCreateOrConnectWithoutCreated_by_userInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutCreated_by_userInput, AccountUncheckedCreateWithoutCreated_by_userInput>
  }

  export type EventLogCreateWithoutCreated_by_userInput = {
    created_at?: Date | string
    event: string
    language?: string | null
    location?: string | null
    user_agent?: string | null
    client_ip?: string | null
    event_payload?: string | null
    event_type: number
  }

  export type EventLogUncheckedCreateWithoutCreated_by_userInput = {
    event_log_id?: number
    created_at?: Date | string
    event: string
    language?: string | null
    location?: string | null
    user_agent?: string | null
    client_ip?: string | null
    event_payload?: string | null
    event_type: number
  }

  export type EventLogCreateOrConnectWithoutCreated_by_userInput = {
    where: EventLogWhereUniqueInput
    create: XOR<EventLogCreateWithoutCreated_by_userInput, EventLogUncheckedCreateWithoutCreated_by_userInput>
  }

  export type EventLogCreateManyCreated_by_userInputEnvelope = {
    data: EventLogCreateManyCreated_by_userInput | EventLogCreateManyCreated_by_userInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutCreated_by_userInput = {
    created_at?: Date | string
    session_mode: number
    location?: string | null
    language?: string | null
    user_agent?: string | null
    last_used?: Date | string | null
    client_ip?: string | null
    expires_at: Date | string
  }

  export type SessionUncheckedCreateWithoutCreated_by_userInput = {
    session_id?: number
    created_at?: Date | string
    session_mode: number
    location?: string | null
    language?: string | null
    user_agent?: string | null
    last_used?: Date | string | null
    client_ip?: string | null
    expires_at: Date | string
  }

  export type SessionCreateOrConnectWithoutCreated_by_userInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutCreated_by_userInput, SessionUncheckedCreateWithoutCreated_by_userInput>
  }

  export type SessionCreateManyCreated_by_userInputEnvelope = {
    data: SessionCreateManyCreated_by_userInput | SessionCreateManyCreated_by_userInput[]
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithoutCreated_by_userInput = {
    update: XOR<AccountUpdateWithoutCreated_by_userInput, AccountUncheckedUpdateWithoutCreated_by_userInput>
    create: XOR<AccountCreateWithoutCreated_by_userInput, AccountUncheckedCreateWithoutCreated_by_userInput>
    where?: AccountWhereInput
  }

  export type AccountUpdateToOneWithWhereWithoutCreated_by_userInput = {
    where?: AccountWhereInput
    data: XOR<AccountUpdateWithoutCreated_by_userInput, AccountUncheckedUpdateWithoutCreated_by_userInput>
  }

  export type AccountUpdateWithoutCreated_by_userInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    display_name?: NullableStringFieldUpdateOperationsInput | string | null
    pricing_plan?: IntFieldUpdateOperationsInput | number
    payment_status?: IntFieldUpdateOperationsInput | number
    account_status?: IntFieldUpdateOperationsInput | number
    account_expiration_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    upcoming_payment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gallery_config?: GalleryConfigUpdateOneWithoutCreated_by_userNestedInput
    gallery_record?: GalleryRecordUpdateManyWithoutCreated_by_accountNestedInput
  }

  export type AccountUncheckedUpdateWithoutCreated_by_userInput = {
    account_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    display_name?: NullableStringFieldUpdateOperationsInput | string | null
    pricing_plan?: IntFieldUpdateOperationsInput | number
    payment_status?: IntFieldUpdateOperationsInput | number
    account_status?: IntFieldUpdateOperationsInput | number
    account_expiration_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    upcoming_payment_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gallery_config?: GalleryConfigUncheckedUpdateOneWithoutCreated_by_userNestedInput
    gallery_record?: GalleryRecordUncheckedUpdateManyWithoutCreated_by_accountNestedInput
  }

  export type EventLogUpsertWithWhereUniqueWithoutCreated_by_userInput = {
    where: EventLogWhereUniqueInput
    update: XOR<EventLogUpdateWithoutCreated_by_userInput, EventLogUncheckedUpdateWithoutCreated_by_userInput>
    create: XOR<EventLogCreateWithoutCreated_by_userInput, EventLogUncheckedCreateWithoutCreated_by_userInput>
  }

  export type EventLogUpdateWithWhereUniqueWithoutCreated_by_userInput = {
    where: EventLogWhereUniqueInput
    data: XOR<EventLogUpdateWithoutCreated_by_userInput, EventLogUncheckedUpdateWithoutCreated_by_userInput>
  }

  export type EventLogUpdateManyWithWhereWithoutCreated_by_userInput = {
    where: EventLogScalarWhereInput
    data: XOR<EventLogUpdateManyMutationInput, EventLogUncheckedUpdateManyWithoutCreated_by_userInput>
  }

  export type EventLogScalarWhereInput = {
    AND?: EventLogScalarWhereInput | EventLogScalarWhereInput[]
    OR?: EventLogScalarWhereInput[]
    NOT?: EventLogScalarWhereInput | EventLogScalarWhereInput[]
    event_log_id?: IntFilter<"EventLog"> | number
    created_at?: DateTimeFilter<"EventLog"> | Date | string
    event?: StringFilter<"EventLog"> | string
    created_by_user_id?: IntFilter<"EventLog"> | number
    language?: StringNullableFilter<"EventLog"> | string | null
    location?: StringNullableFilter<"EventLog"> | string | null
    user_agent?: StringNullableFilter<"EventLog"> | string | null
    client_ip?: StringNullableFilter<"EventLog"> | string | null
    event_payload?: StringNullableFilter<"EventLog"> | string | null
    event_type?: IntFilter<"EventLog"> | number
  }

  export type SessionUpsertWithWhereUniqueWithoutCreated_by_userInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutCreated_by_userInput, SessionUncheckedUpdateWithoutCreated_by_userInput>
    create: XOR<SessionCreateWithoutCreated_by_userInput, SessionUncheckedCreateWithoutCreated_by_userInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutCreated_by_userInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutCreated_by_userInput, SessionUncheckedUpdateWithoutCreated_by_userInput>
  }

  export type SessionUpdateManyWithWhereWithoutCreated_by_userInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutCreated_by_userInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    session_id?: IntFilter<"Session"> | number
    created_at?: DateTimeFilter<"Session"> | Date | string
    created_by_user_id?: IntFilter<"Session"> | number
    session_mode?: IntFilter<"Session"> | number
    location?: StringNullableFilter<"Session"> | string | null
    language?: StringNullableFilter<"Session"> | string | null
    user_agent?: StringNullableFilter<"Session"> | string | null
    last_used?: DateTimeNullableFilter<"Session"> | Date | string | null
    client_ip?: StringNullableFilter<"Session"> | string | null
    expires_at?: DateTimeFilter<"Session"> | Date | string
  }

  export type GalleryRecordCreateManyCreated_by_accountInput = {
    gallery_record_id?: number
    created_at?: Date | string
    asset_url: string
    asset_traits?: GalleryRecordCreateasset_traitsInput | string[]
    asset_color_traits?: GalleryRecordCreateasset_color_traitsInput | string[]
  }

  export type GalleryRecordUpdateWithoutCreated_by_accountInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    asset_url?: StringFieldUpdateOperationsInput | string
    asset_traits?: GalleryRecordUpdateasset_traitsInput | string[]
    asset_color_traits?: GalleryRecordUpdateasset_color_traitsInput | string[]
  }

  export type GalleryRecordUncheckedUpdateWithoutCreated_by_accountInput = {
    gallery_record_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    asset_url?: StringFieldUpdateOperationsInput | string
    asset_traits?: GalleryRecordUpdateasset_traitsInput | string[]
    asset_color_traits?: GalleryRecordUpdateasset_color_traitsInput | string[]
  }

  export type GalleryRecordUncheckedUpdateManyWithoutCreated_by_accountInput = {
    gallery_record_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    asset_url?: StringFieldUpdateOperationsInput | string
    asset_traits?: GalleryRecordUpdateasset_traitsInput | string[]
    asset_color_traits?: GalleryRecordUpdateasset_color_traitsInput | string[]
  }

  export type EventLogCreateManyCreated_by_userInput = {
    event_log_id?: number
    created_at?: Date | string
    event: string
    language?: string | null
    location?: string | null
    user_agent?: string | null
    client_ip?: string | null
    event_payload?: string | null
    event_type: number
  }

  export type SessionCreateManyCreated_by_userInput = {
    session_id?: number
    created_at?: Date | string
    session_mode: number
    location?: string | null
    language?: string | null
    user_agent?: string | null
    last_used?: Date | string | null
    client_ip?: string | null
    expires_at: Date | string
  }

  export type EventLogUpdateWithoutCreated_by_userInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: StringFieldUpdateOperationsInput | string
    language?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    client_ip?: NullableStringFieldUpdateOperationsInput | string | null
    event_payload?: NullableStringFieldUpdateOperationsInput | string | null
    event_type?: IntFieldUpdateOperationsInput | number
  }

  export type EventLogUncheckedUpdateWithoutCreated_by_userInput = {
    event_log_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: StringFieldUpdateOperationsInput | string
    language?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    client_ip?: NullableStringFieldUpdateOperationsInput | string | null
    event_payload?: NullableStringFieldUpdateOperationsInput | string | null
    event_type?: IntFieldUpdateOperationsInput | number
  }

  export type EventLogUncheckedUpdateManyWithoutCreated_by_userInput = {
    event_log_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: StringFieldUpdateOperationsInput | string
    language?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    client_ip?: NullableStringFieldUpdateOperationsInput | string | null
    event_payload?: NullableStringFieldUpdateOperationsInput | string | null
    event_type?: IntFieldUpdateOperationsInput | number
  }

  export type SessionUpdateWithoutCreated_by_userInput = {
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    session_mode?: IntFieldUpdateOperationsInput | number
    location?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    last_used?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    client_ip?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutCreated_by_userInput = {
    session_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    session_mode?: IntFieldUpdateOperationsInput | number
    location?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    last_used?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    client_ip?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutCreated_by_userInput = {
    session_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    session_mode?: IntFieldUpdateOperationsInput | number
    location?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    last_used?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    client_ip?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}