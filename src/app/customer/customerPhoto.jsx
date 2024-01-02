

const CustomerPhoto = () => {

    const url = `https://cdn.zipperconnect.space/customer/settings/client/photo/204688184`;
    return (
        <>

        <div className="usercard_avatar">
          <img src={url} className="usercard_avatar_img" alt=""/>
        </div>
      
        </>
    );
};

export default CustomerPhoto;