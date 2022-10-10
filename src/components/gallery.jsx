import { Image } from "./image";

export const Gallery = (props) => {
  return (
    <div id='portfolio' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Events</h2>
          {/* <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p> */}
        </div>
        <div className='row'>
          <div className='portfolio-items'>
            {/* {props.data
              ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className='col-sm-6 col-md-4 col-lg-4'>
                  <Image  smallImage={d.smallImage} />
                </div>
              ))
              : 'Loading...'} */}

            <div onClick={ () => window.location.href='https://my.newsong.net/registration?registrationinstanceid=386'} className='hoverable'>
              <Image smallImage={props.data? props.data[3].smallImage: ""}  />
            </div>

            <div className='col-sm-6 col-md-4 col-lg-4' >
              <Image smallImage={props.data? props.data[0].smallImage: ""} />
            </div>
            <div className='col-sm-6 col-md-4 col-lg-4'>
              <Image smallImage={props.data? props.data[1].smallImage: ""} />
            </div>
            <div className='col-sm-6 col-md-4 col-lg-4 hoverable' onClick={ () => window.location.href='https://docs.google.com/forms/d/e/1FAIpQLSdttETYqcRHVshTws3qGgRsxDPNdquW0DR_qPqw5siFT4Qhyw/viewform?usp=sf_link'}>
              <Image smallImage={props.data? props.data[2].smallImage: ""} />
            </div>


          </div>
        </div>
      </div>
    </div>
  )
}
