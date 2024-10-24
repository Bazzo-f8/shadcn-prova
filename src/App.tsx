import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {OdinCard} from "@/components/template/OdinCard.tsx";
import {AppSidebar} from "@/components/template/app-sidebar.tsx";
import {SidebarProvider, SidebarTrigger} from "@/components/ui/sidebar.tsx";
import Layout from "@/app/layout.tsx";
import {CustomChart} from "@/components/template/CustomChart.tsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Layout children={<CustomChart/>}/>
    </>
  )
}

export default App
