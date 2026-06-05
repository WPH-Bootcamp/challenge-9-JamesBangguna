interface Props {
  message?: string;
}

export default function ErrorState({ message }: Props) {
  return <div className="text-red-500">{message || 'Failed to fetch movies'}</div>;
}
