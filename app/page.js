'use client'
import Image from 'next/image'
import { useGetBooksQuery } from './GlobalRedux/Features/FetchDataSlice'
import HeroSection from './Components/HeroSection'
export default function Home() {
  // const {data ,isFetching,isError,error}=useGetBooksQuery("romance")
  // console.log(data)
  return (
    <main >
      <HeroSection/>
    </main>
  )
}
