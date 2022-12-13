import Navbar from './navbar'

export default function Layout({ children }) {
    return (
      <>
        <Navbar />
        <main className='dark:bg-slate-900'>{children}</main>
       
      </>
    )
  }