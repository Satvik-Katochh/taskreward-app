// src/components/apps/AppCard.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface AppCardProps {
  app: {
    id: number;
    name: string;
    points: number;
    category: string;
    packageName: string;
  };
  onComplete?: (appId: number) => void;
  isAdmin?: boolean;
}

export default function AppCard({ app, onComplete, isAdmin }: AppCardProps) {
  return (
    <Card className="card-hover">
      <CardHeader>
        <CardTitle>{app.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">Points: {app.points}</p>
          <p className="text-sm text-muted-foreground">
            Category: {app.category}
          </p>
          {!isAdmin && (
            <Button className="w-full" onClick={() => onComplete?.(app.id)}>
              Complete Task
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
