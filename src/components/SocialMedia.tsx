export default function SocialMedia() {
  return (
    <div className="flex flex-row gap-[5px] 2xl:gap-[15px]">
      {/* FB Icon */}
      <a
        href="https://www.facebook.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/images/facebook.png"
          alt="Dex"
          className="w-[14px] h-[14px] lg:h-auto lg:w-[30px] 2xl:w-full hover:opacity-75 rotate-y-on-hover"
        />
      </a>

      {/* X (formerly Twitter) Icon */}
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <img
          src="/images/twitter.png"
          alt="Twitter"
          className="w-[14px] h-[14px] lg:h-auto lg:w-[30px] 2xl:w-full hover:opacity-75 rotate-y-on-hover"
        />
      </a>
      {/* Inster Icon */}
      <a
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/images/insta.png"
          alt="Telegram"
          className="w-[14px] h-[14px] lg:h-auto lg:w-[30px] 2xl:w-full hover:opacity-75 rotate-y-on-hover"
        />
      </a>

      {/* tiktok Icon */}
      <a
        href="https://www.tiktok.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/images/tiktok.png"
          alt="Ethereum"
          className="w-[14px] h-[14px] lg:h-auto lg:w-[30px] 2xl:w-full hover:opacity-75 rotate-y-on-hover"
        />
      </a>
    </div>
  );
}
