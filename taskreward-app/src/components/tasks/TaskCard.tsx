// / src/cemnnoopst / tasks / TaskCard.tsx;
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

import { Task } from "@/types";
interface TaskCardProps {
  task: Task;
  onUpdate: (taskId: number, screenshot: File) => Promise<void>;
}

export default function TaskCard({ task, onUpdate }: TaskCardProps) {
  const [file, setFile] = useState<File | null>(null);
  const { toast } = useToast();

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile?.type.startsWith("image/")) {
      setFile(droppedFile);
    }
  };

  const handleSubmit = async () => {
    if (!file) return;
    try {
      await onUpdate(task.id, file);
      toast({
        title: "Success",
        description: "Screenshot uploaded successfully",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to upload screenshot",
      });
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{task.app.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Points: {task.app.points}
          </p>
          <div
            className="border-2 border-dashed rounded-lg p-4 text-center"
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
          >
            {file ? (
              <div className="space-y-2">
                <p className="text-sm">{file.name}</p>
                <Button onClick={handleSubmit}>Upload Screenshot</Button>
              </div>
            ) : (
              <div className="space-y-2">
                <Upload className="mx-auto h-8 w-8 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">
                  Drag and drop screenshot here
                </p>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
