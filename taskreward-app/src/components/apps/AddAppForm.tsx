// src/components/apps/AddAppForm.tsx
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

export default function AddAppForm() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    packageName: "",
    points: "",
    category: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Add API call here
      toast({
        title: "Success",
        description: "App added successfully",
      });
      setFormData({ name: "", packageName: "", points: "", category: "" });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to add app",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-lg">
      <Input
        placeholder="App Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <Input
        placeholder="Package Name"
        value={formData.packageName}
        onChange={(e) =>
          setFormData({ ...formData, packageName: e.target.value })
        }
      />
      <Input
        type="number"
        placeholder="Points"
        value={formData.points}
        onChange={(e) => setFormData({ ...formData, points: e.target.value })}
      />
      <Select
        onValueChange={(value) => setFormData({ ...formData, category: value })}
      >
        <SelectTrigger>
          <SelectValue placeholder="Select Category" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="social">Social</SelectItem>
          <SelectItem value="games">Games</SelectItem>
          <SelectItem value="productivity">Productivity</SelectItem>
        </SelectContent>
      </Select>
      <Button type="submit" className="w-full">
        Add App
      </Button>
    </form>
  );
}
