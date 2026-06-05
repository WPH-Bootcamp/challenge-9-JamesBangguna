import { Skeleton } from '@/components/ui/skeleton';

export default function LoadingState() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
      {Array.from({
        length: 10,
      }).map((_, index) => (
        <Skeleton key={index} className="h-80" />
      ))}
    </div>
  );
}
