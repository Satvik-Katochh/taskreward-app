// src/components/tasks/TaskList.tsx
import { useQuery } from "@tanstack/react-query";
import TaskCard from "./TaskCard";
import { getTasks, updateTask } from "@/lib/api";
import { Task } from "@/types";

export default function TaskList() {
  const { data: tasks, isLoading } = useQuery({
    queryKey: ["tasks"],
    queryFn: getTasks,
  });

  const handleUpdateTask = async (taskId: number, screenshot: File) => {
    await updateTask(taskId, screenshot);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {tasks?.map((task: Task) => (
        <TaskCard key={task.id} task={task} onUpdate={handleUpdateTask} />
      ))}
    </div>
  );
}
