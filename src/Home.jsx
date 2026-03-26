import Input from './components/Input'
import Navbar from './components/Navbar'
import Result from './components/Result'

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className='grid md:grid-cols-2 md:justify-between justify-center items-center h-[576px] p-5 md:p-0'>
        <Input />
        <Result />
      </div>
    </div>
  )
}

export default Home