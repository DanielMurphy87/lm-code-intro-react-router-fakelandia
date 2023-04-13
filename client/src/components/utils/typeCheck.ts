import { Misdemeanour } from "../../../types/misdemeanours.types";

export function isError(e: unknown): e is Error {
    return (e as Error).message !== undefined;
}

export function isArrayMisdemeanour(arr: unknown): arr is Misdemeanour[] {
    return (
        (arr as Misdemeanour[]).length !== undefined &&
        (arr as Misdemeanour[])[0].citizenId !== undefined &&
        (arr as Misdemeanour[])[0].misdemeanour !== undefined &&
        (arr as Misdemeanour[])[0].date !== undefined
    );
}