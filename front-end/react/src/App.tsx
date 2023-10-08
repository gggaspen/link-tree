import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button/Button'
import LogoSpinner from './components/LogoSpinner/LogoSpinner'
import Link from './components/Link/Link'
import ILink from './models/Link.model'

function App() {
  const [count, setCount] = useState(0)
  const links: ILink[] = [
    {
      _id: 1,
      url: 'https://react.dev',
      img: reactLogo,
      description: 'React Logo',
    },
    {
      _id: 2,
      url: 'https://vide.dev',
      img: viteLogo,
      description: 'Vite Logo',
    },
  ]

  return (
    <>
      <div className="flex flex-col items-center justify-center space-y-4 p-4">
        {
          links.map((link: ILink, key) => {
            const { _id, url, img, description } = link
            return (
              <Link key={key} _id={_id} url={url} description={description} img={img} />
            )
          })
        }
      </div>
      {/* <Button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </Button> */}
    </>
  )
}

export default App
