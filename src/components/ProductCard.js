import Link from "next/link";

export  function ProductCard({title,image,description,id}) {
    return (
                <div className="card mb-3 col-12 col-sm-6 col-md-4 col-lg-3 shadow-sm p-3 bg-body-tertiary rounded border border-none">
                    <Link href={`/products/${id}`}>
                    <img src={image} className="card-img-top " alt={title}/></Link>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <p className="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                        </div>
                </div>
    )
}

export function Profile({name ,avatar}) {
    return (
      <div class="col col-md-9 col-lg-7 col-xl-5">
        <div class="card" style={{borderRadius: '15px'}}>
          <div class="card-body p-4">
            <div class="d-flex text-black">
              <div class="flex-shrink-0">
                <img src={avatar}
                  alt="Generic placeholder image" class="img-fluid"
                  style={{width: '180px', borderRadius: '10px'}} />
              </div>
              <div class="flex-grow-1 ms-3">
                <h5 class="mb-1">Danny McLoan</h5>
                <p class="mb-2 pb-1" style={{color: '#2b2a2a;'}}>{name}</p>
                <div class="d-flex justify-content-start rounded-3 p-2 mb-2"
                  style={{backgroundColor: '#efefef;'}}>
                  <div>
                    <p class="small text-muted mb-1">Articles</p>
                    <p class="mb-0">41</p>
                  </div>
                  <div class="px-3">
                    <p class="small text-muted mb-1">Followers</p>
                    <p class="mb-0">976</p>
                  </div>
                  <div>
                    <p class="small text-muted mb-1">Rating</p>
                    <p class="mb-0">8.5</p>
                  </div>
                </div>
                <div class="d-flex pt-1">
                  <button type="button" class="btn btn-outline-primary me-1 flex-grow-1">Chat</button>
                  <button type="button" class="btn btn-primary flex-grow-1">Follow</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
