import { Card, CardContent } from '@/components/ui/card';

import { Button } from '@/components/ui/button';

export default function MovieCard() {
  return (
    <Card>
      <CardContent>
        <img src="poster.jpg" alt="movie" />

        <Button>Detail</Button>
      </CardContent>
    </Card>
  );
}
