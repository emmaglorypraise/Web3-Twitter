import Sidebar from '../components/Sidebar'
import Feed from '../components/home/Feed'
import Widgets from '../components/Widgets'

const style = {
  wrapper: `flex justify-center  h-fit w-screen select-none bg-[#15202b] text-white`, //h-screen
  content: `max-w-[1400px] w-fit  flex justify-between` //w-2/3
}

export default function Home() {
  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <Sidebar/>
        <Feed/>
        <Widgets/>
      </div>
    </div>
  )
}

