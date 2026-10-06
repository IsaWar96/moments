export type Memory = {
  id: string;
  title: string;
  image: string | null;
};

const memories: Memory[] = [];

export function getMemories() {
  return memories;
}

export function getMemory(id: string) {
  return memories.find((memory) => memory.id === id);
}

export function addMemory(title: string, image: string | null) {
  memories.push({ id: Date.now().toString(), title, image });
}
