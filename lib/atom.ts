import { atom } from 'jotai';
import { defaultEditorContent } from "@/lib/content";
import type { JSONContent } from 'novel';
import { atomWithStorage } from 'jotai/utils';


export const generatedContent = atom<JSONContent | null>(defaultEditorContent);
export const initialContent = atom<JSONContent | null>(defaultEditorContent);
export const persona = atom({});
export const isEYFontRequired = atom(false);
export const isEditorLoading = atom(false);
export const contentArray = atom([]);
// export const isFirstLoad = atomWithStorage('showIntroJS', false);