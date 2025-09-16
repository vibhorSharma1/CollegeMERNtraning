import React from 'react'
import MovieCard from './MovieCard'
import ThemeToggle from '../ThemeToggle'

function Movies() {
   let movies=[
    {
        imgLink:"https://imgs.search.brave.com/pe0L5idcmA3ym6KPJHlqrPVLhr-WukR5AMjbSHEA9VM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5ncS1tYWdhemlu/ZS5jby51ay9waG90/b3MvNjRhZThiMGZl/YzA0M2M0ZTM3NjJj/NWYwL21hc3Rlci93/XzE2MDAsY19saW1p/dC9CZXN0X0Fpbm1l/X0ZpbG1zXzAwMDFf/WW91cl9uYW1lLmpw/Zw",
        name:"Your Name",
        actor:"Ryunosuke Kamiki, Mone Kamishiraishi",
        releaseDate:"2016"
    },
    {
        imgLink:"https://imgs.search.brave.com/3tqfBQD9tShzXbo99gNWG59h_lLzQKspupuenkKzLBw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wZW9w/bGUuY29tL3RobWIv/RVc3ZThYSTM5RUx4/aGpOeDhHQjh4b0NE/V2FVPS80MDAweDAv/ZmlsdGVyczpub191/cHNjYWxlKCk6bWF4/X2J5dGVzKDE1MDAw/MCk6c3RyaXBfaWNj/KCk6Zm9jYWwoNjY1/eDA6NjY3eDIpL0Rl/bW9uLVNsYXllci0t/S2ltZXRzdS1Oby1Z/YWliYS0wOTEyMjUt/My1jY2JkN2Q5YWRi/NTg0MDFjOWY0ZTMz/MGM2MDg5MjA3NC5q/cGc",
        name:"Demon Slayer: Infinity Castle",
        actor:"Natsuki Hanae, Akari Kito",
        releaseDate:" 13 Sep 2025"
    },
    {
        imgLink:"https://imgs.search.brave.com/OE_eCXEWlVU1i5yK0FCZFe-ijSIS8w17iWvSkDn9_IE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXQuY29t/L3cvZnVsbC8xLzIv/YS8xNDIwMjgtMzg0/MHgyMTYwLWRlc2t0/b3AtNGstbmFydXRv/LXdhbGxwYXBlci1p/bWFnZS5qcGc",
        name:"Naruto",
        actor:"Junko Takeuchi, Maile Flanagan",
        releaseDate:"2002"
    },
    {
        imgLink:"https://imgs.search.brave.com/6S-7PmgS243ZryaKEUrrOn7INyKFN2cf6K5ekz6wKbs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y29tbW9uc2Vuc2Vt/ZWRpYS5vcmcvc2l0/ZXMvZGVmYXVsdC9m/aWxlcy9zdHlsZXMv/cmF0aW9fMTZfOV9z/bWFsbC9wdWJsaWMv/c2NyZWVuc2hvdHMv/Y3NtLW1vdmllL0p1/anV0c3VLYWlzZW4w/LXRoZU1vdmllLXN0/aWxsLmpwZw",
        name:"Jujutsu Kaisen 0",
        actor:"Megumi Ogata, Yuma Uchida",
        releaseDate:"2021"
    },
    {
        imgLink:"https://imgs.search.brave.com/JhtEfDqeH8bYKW5_etRZ4FWxmnhjEcGLubZosLlL4XA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tb3Rp/b25iZ3MuY29tL2kv/Yy8zNjR4MjA1L21l/ZGlhLzU4Nzcva29r/dXNoaWJvLWRlbW9u/LXNsYXllci5qcGc",
        name:"Demon Slayer: Mugen Train",
        actor:"Natsuki Hanae, Akari Kito",
        releaseDate:"2020"
    }
   ]

  return (
    <>
       <div className="bg-[var(--color-bg-base)] text-[var(--color-text-base)] min-h-screen">
        <ThemeToggle/>
        {
        movies.map((movie)=>
            <MovieCard movie={movie}/>
        )}
       </div>
    </>
  )
}

export default Movies