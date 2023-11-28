import Link from "next/link";

export default function Home() {

  return (
    <>
      <header>
        <h1 className="text-2x1">Personnages de jeux de rôle-play</h1>
        <Link href="/view">Vos personnages</Link>
        <Link href="/add">Ajouter un personnage</Link>
      </header>
    </>
  )
}