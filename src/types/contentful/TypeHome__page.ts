import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeHome__pageFields {
    title?: EntryFieldTypes.Symbol;
    subtitle?: EntryFieldTypes.Symbol;
    content?: EntryFieldTypes.RichText;
    stack: EntryFieldTypes.AssetLink;
}

export type TypeHome__pageSkeleton = EntrySkeletonType<TypeHome__pageFields, "home-page">;
export type TypeHome__page<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeHome__pageSkeleton, Modifiers, Locales>;
