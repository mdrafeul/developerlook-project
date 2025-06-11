import Link from 'next/link';

const dummyDocs = [
  { id: '1', title: 'Doc One' },
  { id: '2', title: 'Doc Two' },
];

export default function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Your Documents</h1>
      <ul className="space-y-2">
        {dummyDocs.map((doc) => (
          <li key={doc.id}>
            <Link href={`/docs/${doc.id}`} className="text-blue-600 hover:underline">
              {doc.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
