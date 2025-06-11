import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

export default function DocEditor() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold mb-4">Editing Document: {id}</h1>
      <ReactQuill theme="snow" />
    </div>
  );
}
