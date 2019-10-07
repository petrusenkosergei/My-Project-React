import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader";


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img
                    src='https://www.aussiespecialist.com/content/asp/en/sales-resources/image-and-video-galleries/_jcr_content/mainParsys/hero/image.adapt.1663.medium.jpg'/>
            </div>
            <div className={s.descriptionBlok}>
                <img src={props.profile.photos.large}/>
                ava+description
            </div>
        </div>
    )
}


export default ProfileInfo;