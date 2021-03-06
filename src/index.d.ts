type IterableLike<T> = Iterable<T> | T[] | { [key: string]: T; } | { [key: number]: T; };
type AsyncIterableLike<T> = AsyncIterable<T> | IterableLike<T>;

// Sync
export declare function keys(iterable: any): Iterable<any>; // TODO, type me?
export declare function values(iterable: any): Iterable<any>;
export declare function entries(iterable: any): Iterable<any>;

export declare function batch<T>(number: number): (iterable: IterableLike<T>) => Iterable<Iterable<T>>;
export declare function batch<T>(number: number, iterable: IterableLike<T>): Iterable<Iterable<T>>;

export declare function chain<T>(...iterables: IterableLike<T>[]): Iterable<T>;
export declare function concat<T>(...iterables: IterableLike<T>[]): Iterable<T>;

export declare function combinations<T>(iterable: IterableLike<T>, r: number): Iterable<T>;

export declare function combinationsWithReplacement<T>(iterable: IterableLike<T>, r: number): Iterable<T>;

export declare function compose<T>(fns: IterableLike<T>): T;

export declare function compress<T>(iterable: IterableLike<T>, compress: IterableLike<boolean>): Iterable<T>;

export declare function consume<T>(func: (item: T) => void): (iterable: IterableLike<T>) => void;
export declare function consume<T>(func: (item: T) => void, iterable: IterableLike<T>): void;

export declare function count(opts: number | { start: number, end?: number, step?: number }): Iterable<number>;

export declare function cycle<T>(iterable: IterableLike<T>): Iterable<T>;

export declare function dropWhile<T>(func: (item: T) => boolean): (iterable: IterableLike<T>) => Iterable<T>;
export declare function dropWhile<T>(func: (item: T) => boolean, iterable: IterableLike<T>): Iterable<T>;

export declare function enumerate<T>(iterable: IterableLike<T>, start?: number): Iterable<[number, T]>;

export declare function execute<T>(func: (...args: any[]) => T, ...args: any[]): Iterable<T>;

export declare function filter<T>(func: (item: T) => boolean): (iterable: IterableLike<T>) => Iterable<T>;
export declare function filter<T>(func: (item: T) => boolean, iterable: IterableLike<T>): Iterable<T>;

export declare function find<T>(func: (item: T) => boolean): (iterable: IterableLike<T>) => T | null;
export declare function find<T>(func: (item: T) => boolean, iterable: IterableLike<T>): T | null;

export declare function flatMap<T, O>(func: (item: T) => IterableLike<O>): (iter: IterableLike<T>) => Iterable<O>;
export declare function flatMap<T, O>(func: (item: T) => IterableLike<O>, iter: IterableLike<T>): Iterable<O>;

export declare function groupBy<T, K>(key: (item: T) => K): (iterable: IterableLike<T>) => Iterable<[K, Iterable<T>]>;
export declare function groupBy<T, K>(key: (item: T) => K, iterable: IterableLike<T>): Iterable<[K, Iterable<T>]>;

export declare function iterable<T>(iterator: { next: () => {value: T}> } }): AsyncIterable<T>;
export declare function iterable<T>(iterable: IterableLike<T>): Iterable<T>;

export declare function map<T, O>(func: (item: T) => O): (iter: IterableLike<T>) => Iterable<O>;
export declare function map<T, O>(func: (item: T) => O, iter: IterableLike<T>): Iterable<O>;

export declare function permutations<T>(iterable: IterableLike<T>, r: number): Iterable<T>;

export declare function product<T, T2>(iterable1: IterableLike<T>[], iterable2: IterableLike<T2>[]): Iterable<[T, T2]>;
export declare function product<T, T2, T3>(iterable1: IterableLike<T>[], iterable2: IterableLike<T2>[], iterable3: IterableLike<T3>[]): Iterable<[T, T2, T3]>;
export declare function product<T, T2, T3, T4>(iterable1: IterableLike<T>[], iterable2: IterableLike<T2>[], iterable3: IterableLike<T3>[], iterable4: IterableLike<T4>[]): Iterable<[T, T2, T3, T4]>;
export declare function product<T, T2, T3, T4, T5>(iterable1: IterableLike<T>[], iterable2: IterableLike<T2>[], iterable3: IterableLike<T3>[], iterable4: IterableLike<T4>[], iterable5: IterableLike<T5>[]): Iterable<[T, T2, T3, T4, T5]>;
export declare function product<T, T2, T3, T4, T5, T6>(iterable1: IterableLike<T>[], iterable2: IterableLike<T2>[], iterable3: IterableLike<T3>[], iterable4: IterableLike<T4>[], iterable5: IterableLike<T5>[], iterable6: IterableLike<T6>[]): Iterable<[T, T2, T3, T4, T5, T6]>;
export declare function product<T>(...iterables: IterableLike<T>[]): Iterable<[T]>;

export declare function range(opts: number | { start: number, end?: number, step?: number }): Iterable<number>;

export declare function reduce<T, O>(func: (acc: O, item: T, c: number) => O): (iterable: IterableLike<T>) => O;
export declare function reduce<T, O>(initial: O, func: (acc: O, item: T, c: number) => O): (iterable: IterableLike<T>) => O;
export declare function reduce<T, O>(func: (acc: O, item: T, c: number) => O, iterable: IterableLike<T>): O;
export declare function reduce<T, O>(initial: O, func: (acc: O, item: T, c: number) => O, iterable: IterableLike<T>): O;

export declare function regexpExec(re: RegExp): (str: string) => Iterable<string>;
export declare function regexpExec(re: RegExp, str: string): Iterable<string>;

export declare function regexpSplit(re: RegExp): (str: string) => Iterable<string>;
export declare function regexpSplit(re: RegExp, str: string): Iterable<string>;

export declare function regexpSplitIter(re: RegExp): (iterable: IterableLike<T>) => Iterable<string>;
export declare function regexpSplitIter(re: RegExp, iterable: IterableLike<T>): Iterable<string>;

export declare function regexpExecIter(re: RegExp): (iterable: IterableLike<T>) => Iterable<string>;
export declare function regexpExecIter(re: RegExp, iterable: IterableLike<T>): Iterable<string>;

export declare function splitLines(iterable: IterableLike<T>): Iterable<string>;

export declare function repeat<T>(obj: T, times?: number): Iterable<T>;

export declare function size(iterable: Iterable<any>) => number;

export declare function slice<T>(opts: number | { start: number, end?: number, step?: number }, iterable: IterableLike<T>): Iterable<number>;

export declare function takeWhile<T>(func: (item: T) => boolean): (iterable: IterableLike<T>) => Iterable<T>;
export declare function takeWhile<T>(func: (item: T) => boolean, iterable: IterableLike<T>): Iterable<T>;

export declare function tap<T>(func: (item: T, c: number) => any, iterable: IterableLike<T>): Iterable<T>;

export declare function tee<T>(iterable: IterableLike<T>, number?: number): Iterable<T>[];

export declare function toArray<T>(iterable: IterableLike<T>): T[];

export declare function zipLongest<T>(...iterables: IterableLike<T>[]): Iterable<[T]>;
export declare function zipAll<T>(...iterables: IterableLike<T>[]): Iterable<[T]>;

export declare function zip<T, T2>(...iterables: [iterable1: IterableLike<T>[], iterable2: IterableLike<T2>[]]): Iterable<[T, T2]>;
export declare function zip<T, T2, T3>(...iterables: [iterable1: IterableLike<T>[], iterable2: IterableLike<T2>[], iterable3: IterableLike<T3>[]]): Iterable<[T, T2, T3]>;
export declare function zip<T, T2, T3, T4>(...iterables: [iterable1: IterableLike<T>[], iterable2: IterableLike<T2>[], iterable3: IterableLike<T3>[], iterable4: IterableLike<T4>[]]): Iterable<[T, T2, T3, T4]>;
export declare function zip<T, T2, T3, T4, T5>(...iterables: [iterable1: IterableLike<T>[], iterable2: IterableLike<T2>[], iterable3: IterableLike<T3>[], iterable4: IterableLike<T4>[], iterable5: IterableLike<T5>[]]): Iterable<[T, T2, T3, T4, T5]>;
export declare function zip<T, T2, T3, T4, T5, T6>(iterables: [iterable1: IterableLike<T>[], iterable2: IterableLike<T2>[], iterable3: IterableLike<T3>[], iterable4: IterableLike<T4>[], iterable5: IterableLike<T5>[], iterable6: IterableLike<T6>[]]): Iterable<[T, T2, T3, T4, T5, T6]>;
export declare function zip<T>(...iterables: IterableLike<T>[]): Iterable<[T]>;

// Deprecated
export declare function iter<T>(iterable: IterableLike<T>): Iterable<T>;

// Async
export declare function asyncBatch<T>(number: number): (iterable: AsyncIterableLike<T>) => AsyncIterable<T>;
export declare function asyncBatch<T>(number: number, iterable: AsyncIterableLike<T>): AsyncIterable<T>;

export declare function asyncChain<T>(...iterables: AsyncIterableLike<T>[]): AsyncIterable<T>;
export declare function asyncConcat<T>(...iterables: AsyncIterableLike<T>[]): AsyncIterable<T>;

export declare function asyncConsume<T>(func: (item: T) => void): (iterable: AsyncIterableLike<T>) => void;
export declare function asyncConsume<T>(func: (item: T) => void, iterable: AsyncIterableLike<T>): void;

export declare function asyncCompress<T>(iterable: AsyncIterableLike<T>, compress: AsyncIterableLike<boolean>): AsyncIterable<T>;

export declare function asyncCycle<T>(iterable: AsyncIterableLike<T>): AsyncIterable<T>;

export declare function asyncDropWhile<T>(func: (item: T) => boolean): (iterable: AsyncIterableLike<T>) => AsyncIterable<T>;
export declare function asyncDropWhile<T>(func: (item: T) => boolean, iterable: AsyncIterableLike<T>): AsyncIterable<T>;

export declare function asyncEnumerate<T>(iterable: AsyncIterableLike<T>, start?: number): AsyncIterable<[number, T]>;

export declare function asyncExecute<T>(func: (...args: any[]) => Promise<T>, ...args: any[]): AsyncIterable<T>;

export declare function asyncFilter<T>(func: (item: T) => boolean): (iterable: AsyncIterableLike<T>) => AsyncIterable<T>;
export declare function asyncFilter<T>(func: (item: T) => boolean, iterable: AsyncIterableLike<T>): AsyncIterable<T>;

export declare function asyncFind<T>(func: (item: T) => boolean): (iterable: AsyncIterableLike<T>) => T | null;
export declare function asyncFind<T>(func: (item: T) => boolean, iterable: AsyncIterableLike<T>): T | null;

export declare function asyncFlatMap<T, O>(func: (item: T) => AsyncIterableLike<O>): (iter: AsyncIterableLike<T>) => AsyncIterable<O>;
export declare function asyncFlatMap<T, O>(func: (item: T) => AsyncIterableLike<O>, iter: AsyncIterableLike<T>): AsyncIterable<O>;

export declare function asyncGroupBy<T, K>(key: (item: T) => K): (iterable: AsyncIterableLike<T>) => Iterable<[K, Iterable<T>]>;
export declare function asyncGroupBy<T, K>(key: (item: T) => K, iterable: AsyncIterableLike<T>): Iterable<[K, Iterable<T>]>;

export declare function asyncIterable<T>(asyncIterator: { next: () => Promise<{value: T}> } }): AsyncIterable<T>;
export declare function asyncIterable<T>(syncIterable: AsyncIterableLike<T>): AsyncIterable<T>;

export declare function asyncMap<T, O>(func: (item: T) => O): (iter: AsyncIterableLike<T>) => AsyncIterable<O>;
export declare function asyncMap<T, O>(func: (item: T) => O, iter: AsyncIterableLike<T>): AsyncIterable<O>;

export declare function asyncReduce<T, O>(func: (acc: O, item: T, c: number) => O): (iterable: AsyncIterableLike<T>) => O;
export declare function asyncReduce<T, O>(initial: O, func: (acc: O, item: T, c: number) => O): (iterable: AsyncIterableLike<T>) => O;
export declare function asyncReduce<T, O>(func: (acc: O, item: T, c: number) => O, iterable: AsyncIterableLike<T>): O;
export declare function asyncReduce<T, O>(initial: O, func: (acc: O, item: T, c: number) => O, iterable: AsyncIterableLike<T>): O;

export declare function asyncSize(iterable: AsyncIterable<any>) => number;

export declare function asyncSlice<T>(opts: number | { start: number, end?: number, step?: number }, iterable: AsyncIterableLike<T>): AsyncIterable<number>;

export declare function asyncTakeWhile<T>(func: (item: T) => boolean): (iterable: AsyncIterableLike<T>) => AsyncIterable<T>;
export declare function asyncTakeWhile<T>(func: (item: T) => boolean, iterable: AsyncIterableLike<T>): AsyncIterable<T>;

export declare function asyncTap<T>(func: (item: T, c: number) => any, iterable: AsyncIterableLike<T>): AsyncIterable<T>;

export declare function asyncTee<T>(iterable: AsyncIterableLike<T>, number?: number): AsyncIterable<T>[];

export declare function asyncToArray<T>(iterable: AsyncIterableLike<T>): T[];

export declare function asyncZipLongest<T>(...iterables: AsyncIterableLike<T>[]): AsyncIterable<[T]>;
export declare function asyncZipAll<T>(...iterables: AsyncIterableLike<T>[]): AsyncIterable<[T]>;

export declare function asyncZip<T, T2>(...iterables: [iterable1: AsyncIterableLike<T>[], iterable2: AsyncIterableLike<T2>[]]): AsyncIterable<[T, T2]>;
export declare function asyncZip<T, T2, T3>(...iterables: [iterable1: AsyncIterableLike<T>[], iterable2: AsyncIterableLike<T2>[], iterable3: AsyncIterableLike<T3>[]]): AsyncIterable<[T, T2, T3]>;
export declare function asyncZip<T, T2, T3, T4>(...iterables: [iterable1: AsyncIterableLike<T>[], iterable2: AsyncIterableLike<T2>[], iterable3: AsyncIterableLike<T3>[], iterable4: AsyncIterableLike<T4>[]]): AsyncIterable<[T, T2, T3, T4]>;
export declare function asyncZip<T, T2, T3, T4, T5>(...iterables: [iterable1: AsyncIterableLike<T>[], iterable2: AsyncIterableLike<T2>[], iterable3: AsyncIterableLike<T3>[], iterable4: AsyncIterableLike<T4>[], iterable5: AsyncIterableLike<T5>[]]): AsyncIterable<[T, T2, T3, T4, T5]>;
export declare function asyncZip<T, T2, T3, T4, T5, T6>(...iterables: [iterable1: AsyncIterableLike<T>[], iterable2: AsyncIterableLike<T2>[], iterable3: AsyncIterableLike<T3>[], iterable4: AsyncIterableLike<T4>[], iterable5: AsyncIterableLike<T5>[], iterable6: AsyncIterableLike<T6>[]]): AsyncIterable<[T, T2, T3, T4, T5, T6]>;
export declare function asyncZip<T>(...iterables: AsyncIterableLike<T>[]): AsyncIterable<[T]>;

export declare function asyncRegexpSplitIter(re: RegExp): (iterable: AsyncIterableLike<string>) => AsyncIterableLike<string>;
export declare function asyncRegexpSplitIter(re: RegExp, iterable: AsyncIterableLike<string>): AsyncIterableLike<string>;

export declare function asyncRegexpExecIter(re: RegExp): (iterable: AsyncIterableLike<string>) => AsyncIterableLike<string>;
export declare function asyncRegexpExecIter(re: RegExp, iterable: AsyncIterableLike<string>): AsyncIterableLike<string>;

export declare function asyncSplitLines(iterable: AsyncIterableLike<string>) => AsyncIterableLike<string>;

export declare function asyncThrottle<T>(number: number): (iterable: AsyncIterableLike<T>) => AsyncIterable<T>;
export declare function asyncThrottle<T>(number: number, iterable: AsyncIterableLike<T>): AsyncIterable<T>;

// Deprecated
export declare function asyncIter<T>(syncIterable: AsyncIterableLike<T>): AsyncIterable<T>;
