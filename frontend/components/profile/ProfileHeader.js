import { BsArrowLeftShort } from 'react-icons/bs'
import { useRouter } from 'next/router'

const style = {
    wrapper: `border-[#38444d] border-b`,
    header: `py-1 px-3 mt-2 flex items-center`,
    primary: `bg-transparent outline-none font-bold`,
    secondary: `text-[#8899a6] text-xs`,
    backButton: `text-3xl cursor-pointer mr-2 rounded-full hover:bg-[#313b44] p-1`,
    coverPhotoContainer: `flex items-center justify-center h-[15vh] overflow-hidden`,
    coverPhoto: `object-cover h-full w-full`,
    profileImageContainer: `w-full h-[6rem] rounded-full mt-[-3rem] mb-2 flex justify-start items-center px-3 flex justify-between`,
    profileImage: `object-cover rounded-full h-full`,
    profileImageNft: `object-cover h-full`,
    profileImageMint: `bg-white text-black px-3 py-1 rounded-full hover:bg-[#8899a6] cursor-pointer`,
    details: `px-3`,
    nav: `flex justify-around mt-4 mb-2 text-xs font-semibold text-[#8899a6]`,
    activeNav: `text-white`,
  }

function ProfileHeader() {
    const router = useRouter()

    const isProfileImageNft = false;
    const currentAccount = '0xBCd390f697ffDc176f179fB8d8d9f8d7d7f8d9';
    return(
        <div className={style.wrapper}>
           <div className={style.header}>
                <div onClick={() => router.push('/')} className={style.backButton}>
                <BsArrowLeftShort />
                </div>
                <div className={style.details}>
                    <div className={style.primary}>Glory Praise</div>
                    <div className={style.secondary}>
                        120 Tweets
                    </div>
                </div>
            </div>
            <div className={style.coverPhotoContainer}>
                <img
                src='data:image/jpeg;base64,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'
                alt='cover'
                className={style.coverPhoto}
                />
            </div>
            <div className={style.profileImageContainer}>
                <div
                className={
                    isProfileImageNft ? 'hex' : style.profileImageContainer
                }
                >
                <img
                    src='https://techtrend.africa/wp-content/uploads/2021/11/glory.jpg'
                    alt='Glory Praise'
                    className={
                       isProfileImageNft ? style.profileImageNft : style.profileImage
                    }
                />
                </div>
           </div>
           <div className={style.details}>
                <div>
                <div className={style.primary}>Glory Praise</div>
                </div>
                <div className={style.secondary}>
                {currentAccount && (
                    <>
                    @{currentAccount.slice(0, 8)}...{currentAccount.slice(37)}
                    </>
                )}
                </div>
           </div>
           <div className={style.nav}>
                <div className={style.activeNav}>Tweets</div>
                <div>Tweets & Replies</div>
                <div>Media</div>
                <div>Likes</div>
          </div>
        </div>
    )
}

export default ProfileHeader