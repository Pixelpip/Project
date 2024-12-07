// src/app/page.tsx
import Sidebar from '@/components/Sidebar';
import './global.css';
import ChatWindow from '@/components/ChatWindow';
export default function Home() {
  return (
    <div className='flex h-screen w-screen'>
      <Sidebar/>
      <div>SELECT A ROUTE TO START CHATTING</div>
    </div>
  );
}
