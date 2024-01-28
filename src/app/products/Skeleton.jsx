

const Skeleton = () => {
    return (
        <>
        
					<div className="skeleton-item">
						<div className="skeleton-item-img-box">
							<div className="skeleton-item-wrapper">
								<div className="item-img-inner"></div>
							</div>
						</div>
						<div className="skeleton-item-info">
							<h4 style={{ width: "40%", marginTop: "8px" }}></h4>
							<h4></h4>
							<div className="skeleton-add-item" style={{ marginTop:'10px' }}></div>
						</div>
					</div>


        </>
    );
};

export default Skeleton;