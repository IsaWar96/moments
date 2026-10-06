export type Memory = {
  id: string;
  title: string;
};

const memories: Memory[] = [];

export function getMemories() {
  return memories;
}

export function addMemory(title: string) {
  memories.push({ id: Date.now().toString(), title });
}

export function getMemory(id: string) {
  return memories.find((memory) => memory.id === id);
}
