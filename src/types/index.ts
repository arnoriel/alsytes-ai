export interface Website {
  id: string;
  name: string;
  prompt: string;
  source_code: string;
  created_at: string;
  thumbnail?: string;
  page_name?: string;
  deployed_at?: string;
  /** Per-project AI chat history for context-aware edits */
  chat_history?: ChatHistoryEntry[];
}

/** A single turn in the per-project chat thread */
export interface ChatHistoryEntry {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  created_at: string;
  /** Optional: what the HTML looked like before this edit (for undo) */
  prev_source_code?: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export type GenerationStatus =
  | 'idle'
  | 'thinking'
  | 'streaming'
  | 'done'
  | 'error';

export interface UserCredits {
  id: string;
  user_id: string;
  credits: number;
  reset_at: string;
  created_at: string;
  updated_at: string;
}
