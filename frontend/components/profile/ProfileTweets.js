import Post from "../Post"

const style = {
    wrapper: `no-scrollbar`,
    header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
    headerTitle: `text-xl font-bold`,
}

const tweets = [
    {
        displayName: "Glory Praise",
        userName: "0xBCd390f697ffDc176f179fB",
        avatar: 'https://techtrend.africa/wp-content/uploads/2021/11/glory.jpg',
        text: 'Keep moving',
        isProfileImageNft: false,
        timestamp: '2022-05-21T07:00:00.000Z'
    },
    {
        displayName: "Glory Praise",
        userName: "0xBCd390f697ffDc176f179fB",
        avatar: 'https://techtrend.africa/wp-content/uploads/2021/11/glory.jpg',
        text: 'WAGMI',
        isProfileImageNft: true,
        timestamp: '2022-04-01T11:39:00,000Z'
    },
    {
        displayName: "Glory Praise",
        userName: "0xBCd390f697ffDc176f179fB",
        avatar: 'https://techtrend.africa/wp-content/uploads/2021/11/glory.jpg',
        text: 'Roses are red',
        isProfileImageNft: false,
        timestamp: '2022-03-01T05:00:00,000Z'
    },
    {
        displayName: "Glory Praise",
        userName: "0xBCd390f697ffDc176f179fB8d8d9f8d7d7f8d9",
        avatar: 'https://techtrend.africa/wp-content/uploads/2021/11/glory.jpg',
        text: 'gm',
        isProfileImageNft: false,
        timestamp: '2022-01-01T12:00:00,000Z'
    },
]

function ProfileTweets() {
    return(
        <div className={style.wrapper}>
            {tweets?.map((tweet, index) => (
                <Post
                key={index}
                displayName='Glory Praise'
                userName={`${tweet.userName.slice(
                    0,
                    4,
                )}...${tweet.userName.slice(-4)}`}
                text={tweet.tweet}
                avatar={tweet.avatar}
                timestamp={tweet.timestamp}
                isProfileImageNft={tweet.isProfileImageNft}
                />
            ))}
        </div>
    )
}

export default ProfileTweets