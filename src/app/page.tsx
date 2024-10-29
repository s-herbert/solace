import Advocates from "@/components/Advocates/Advocates";
import { getAdvocates } from "@/lib/getAdvocates";


export default async function Home() {
  const initialAdvocates = await getAdvocates();

  return (
    <main className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-gray-900">Solace Advocates</h1>
        <Advocates initialAdvocates={initialAdvocates} />
      </div>
    </main>
  );
}
