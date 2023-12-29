import Card from "./components/Card"
import Header from "./components/Header"

export default function Home() {
  return (
    <main className="min-h-screen w-full flex flex-col items-stretch">
      <Header />
      <div className="w-full max-w-[1440px] mx-auto space-y-10 p-5">
      <div className="grid-layer">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      </div>
    </main>
  )
}