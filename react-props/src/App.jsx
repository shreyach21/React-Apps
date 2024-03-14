import { useState } from 'react'

import './App.css'
import Card from './Card'

function App() {

  const persons=
  [
    {
      name:"Shreya",
      text:"Shreya's Profile",
      img:"https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
    },
    {
      name:"Saikat",
      text:"Saikat's Profile",
      img:"https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name:"Souvik",
      text:"Souvik's Profile",
      img:"https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name:"Souvik",
      text:"Souvik's Profile",
      img:"https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name:"Souvik",
      text:"Souvik's Profile",
      img:"https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name:"Souvik",
      text:"Souvik's Profile",
      img:"https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name:"Souvik",
      text:"Souvik's Profile",
      img:"https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
  ]

  return (
    <>
       <h1 className="text-3xl font-bold p-5 bg-slate-900 text-white w-1/3 rounded-xl m-auto text-center">
        Profile Section
      </h1>
      <div className='flex flex-wrap justify-center m-auto w-10/12 gap-2'>
      {
        persons.map(person=>(
          <Card username={person.name} btnText={person.text} img={person.img}/>
        ))
      }
      </div>
    </>
  )
}

export default App
