const users =[
    {
      id: 1,
      name: 'Julian Gelvez',
      image: 'https://robohash.org/user2'
    },
    {
      id: 2,
      name: 'David Gallo',
      image: 'https://robohash.org/user3'
    }
  ]

  export function Robot(){
    return <>
    {
      users.map((user, i) => {
        return <div key={i}>
          <h1 >{user.name}</h1>
          <img src={user.image} alt="" />
        </div>
        
      })
    } </>
  }