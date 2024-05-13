import QrCard from "@/components/QrCard";

export default function Home() {
  return (
    <main className="bg-page min-h-screen flex flex-col items-center justify-center">
      <div className="grid grid-cols-1">
        <QrCard/>
      </div>
    </main>
  );
}
