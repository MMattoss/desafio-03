import { imgBucketBaseUrl } from "../utils/baseUrls";

type BannerProps = {
  route: string;
}

const Banner = ({route}: BannerProps) => {
  return <div className={`w-screen h-80 flex items-center justify-center relative border-2 border-transparent`}>
    <div style={{backgroundImage: `url(${imgBucketBaseUrl}/banner-1.png)`}} className="w-full h-full absolute top-0 left-0 z-[-1] bg-cover bg-center bg-no-repeat "></div>
    <div className="flex flex-col items-center justify-center">
      <img src={`${imgBucketBaseUrl}/homeImages/logo.png`} alt="Furniro logo" />
      <h1 className="text-5xl text-black font-medium capitalize mb-3">{route}</h1>
      <p className="text-base text-black font-medium">Home {'>'} <span className="capitalize font-light">{route}</span></p>
    </div>
  </div>
}

export default Banner;