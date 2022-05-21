import { BsStar } from "react-icons/bs"
import TweetBox from './TweetBox'
import Post from "../Post"

const style = {
    wrapper: `flex-[2] border-r border-l border-[#38444d] overflow-y-scroll`,
    header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
    headerTitle: `text-xl font-bold`,
}

const tweets = [
    {
        displayName: "Glory Praise",
        userName: "0xBCd390f697ffDc176f179fB",
        avatar: 'https://techtrend.africa/wp-content/uploads/2021/11/glory.jpg',
        text: 'gm',
        isProfileImageNft: false,
        timestamp: '2020-06-01T12:00:00,000Z'
    },
    {
        displayName: "Glory Praise",
        userName: "0xBCd390f697ffDc176f179fB",
        avatar: 'https://techtrend.africa/wp-content/uploads/2021/11/glory.jpg',
        text: 'gm',
        isProfileImageNft: false,
        timestamp: '2020-06-01T12:00:00,000Z'
    },
    {
        displayName: "Glory Praise",
        userName: "0xBCd390f697ffDc176f179fB",
        avatar: 'https://techtrend.africa/wp-content/uploads/2021/11/glory.jpg',
        text: 'gm',
        isProfileImageNft: false,
        timestamp: '2020-06-01T12:00:00,000Z'
    },
    {
        displayName: "Glory Praise",
        userName: "0xBCd390f697ffDc176f179fB",
        avatar: 'https://techtrend.africa/wp-content/uploads/2021/11/glory.jpg',
        text: 'gm',
        isProfileImageNft: false,
        timestamp: '2020-06-01T12:00:00,000Z'
    },
]

function Feed() {
    return (
        <div className={style.wrapper}>
            <div className={style.header}>
                <div className={style.headerTitle}>Home</div>
                <BsStar/>
            </div>
            <TweetBox/>
            {tweets.map((tweet, index) => {
                <Post/>
            })}
        </div>
    )
}
export default Feed