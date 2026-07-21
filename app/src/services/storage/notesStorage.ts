const NOTES_KEY = "notes";

export async function getNotes(): Promise<Record<string, string>> {
  const result = await chrome.storage.local.get(NOTES_KEY);

  return (result[NOTES_KEY] as Record<string, string>) ?? {};
}

export async function saveNote(url: string, note: string) {
  const notes = await getNotes();

  notes[url] = note;

  await chrome.storage.local.set({
    [NOTES_KEY]: notes,
  });
}

export async function getNote(url: string): Promise<string> {
  const notes = await getNotes();

  return notes[url] ?? "";
}