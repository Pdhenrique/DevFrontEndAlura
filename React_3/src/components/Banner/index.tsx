import './Banner.css'

interface BannerProps{
    imageAddress: string,
    altText?: string
}

const Banner = ({imageAddress, altText } :BannerProps) => {
    return(
        <header className="banner">
            <img alt={altText} src={imageAddress}/>
            
        </header>
    )
}

export default Banner