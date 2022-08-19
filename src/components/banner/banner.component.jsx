import {BannerContainer, BannerImage, BannerImageContainer,Header, Overlay} from './banner.styles'

const Banner = () => {
    return ( 
        <BannerContainer>
            <BannerImage src="https://c0.wallpaperflare.com/preview/822/951/691/pair-of-white-red-and-black-nike-air-jordan-1-shoes-on-floor.jpg" />

        <Header>
                <h1>Talaria</h1>
                <span>Give your feet the beauty treatment that only brand new shoes can give.</span>
            </Header>
             <Overlay>      
        </Overlay>
        </BannerContainer>
       
     );
}
 
export default Banner;