import css from "./UserInfo.module.css";

type UserInfoProps = {
    imgSrc: string;
    username: string;
};

function UserInfo({ imgSrc, username }: UserInfoProps) {
    return (
        <div className={css.userInfo}>
            <img src={imgSrc} alt="" />
            {username}
        </div>
    );
}

export default UserInfo;
