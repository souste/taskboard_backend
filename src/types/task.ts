export interface Task {
  id: number;
  user_id: number;
  column_id: number;
  title: string;
  description: string;
  position: number;
  completed: boolean;
  created_at: string;
  updated_at: string;
}
