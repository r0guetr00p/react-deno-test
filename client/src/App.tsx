import { use, useState, useEffect, Suspense } from "react";
import supabase from './utils/supabase.ts'
import { Tables } from '../../database.types.ts'
import { supabaseLogin } from './utils/supabaseLogin.ts'
import { Card, CardContent, CardDescription, CardTitle } from './components/ui/card.tsx'
import type { QueryData } from '@supabase/supabase-js'

// const allMoviesQuery = supabase
//   .from('Movies')
//   .select('*')
//   .limit(10)
//
// async function getAllMovies() {
//   await supabaseLogin()
//   return allMoviesQuery
// }
//
// function Movies({ moviesPromise }: { moviesPromise: Promise<Tables<'Movies'>[]> }) {
//   const movies = use(moviesPromise)
//   return (
//     <>
//       {!!movies.length && (movies.map((movie) => (
//         <Card key={movie.id}>
//           <CardContent>
//             <div className="flex "></div>
//             <CardTitle>{movie.title}</CardTitle>
//             <CardDescription>{movie.description}</CardDescription>
//           </CardContent>
//         </Card>
//       )))}
//     </>
//   )
// }

function App() {
  const [movies, setMovies] = useState<Tables<'Movies'>[]>([])

  // type queryType = QueryData<typeof allMoviesQuery>

  useEffect(() => {
    const getAllMovies = async () => {
      await supabaseLogin()
      const { data, error } = await supabase
        .from('Movies')
        .select(`
          *,
          Actors:MoviesActors (
            Actors (*)
          ),
          Categories:MoviesCategories (
            Categories (*)
          )`)
        .limit(10)

      if (error) {
        console.error(error)
        return
      }

      return data
    }

    getAllMovies().then((data) => {
      setMovies(data ?? [])
    })
  }, [])

  return (
    <>
      {/*<Suspense fallback={<div>Loading...</div>}>*/}
      {/*  <Movies moviesPromise={getAllMovies()}>*/}

      {/*  </Movies>*/}
      {/*</Suspense>*/}
      {!!movies.length && (movies.map((movie) => (
        <Card key={movie.id}>
          <CardContent>
            <div className="flex "></div>
            <CardTitle>{movie.title}</CardTitle>
            <CardDescription>{movie.description}</CardDescription>
          </CardContent>
        </Card>
      )))}
    </>
  );
}

export default App;
