import { data } from "autoprefixer"

export const Posts = () => {
   return <button onClick={()=> { //promesa
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json() )
            .then(data => console.log(data) )
            .catch(error => console.error(error) )
   }}>

    Traer datos

   </button>
}