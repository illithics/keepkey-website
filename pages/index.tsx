import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import ShopifyBuyButton from '../components/ShopifyBuyButton'
import SecurityWarning from '../components/SecurityWarning'
import heroBgImage from 'public/images/heros/home.png'
import walletImage from 'public/images/hardware/wallet-hero.png'
import computerLockImage from 'public/images/icons/computer-lock.svg'
import backupImage from 'public/images/icons/backup.svg'
import ebStorageImage from 'public/images/icons/eb-storage.svg'
import openSourceImage from 'public/images/icons/open-source.svg'
import shapeshiftDemoImage from 'public/images/software/shapeshift-demo.png'
import walletDeskImage from 'public/images/heros/wallet-desk-grayscale.png'


export default function Home() {
  return (
    <>
      <Hero />
      <FeaturesSection />
      <PromoSection />
      <LeadingCryptos />
      <ProductInfo />
      <div className="container">
        <SecurityWarning />
      </div>
      <TrustedBy />
    </>

  )
}

const Hero = () => {
  return(
    <div className="relative z-0 pt-44 pb-20 lg:py-4 bg-black">
      <Image
        src={heroBgImage}
        alt='keepkey wallet on desk'
        layout="fill"
        objectFit="cover"
        quality={100}
        objectPosition="center"
        priority={true}
        >
      </Image>
      <div className="container relative grid lg:grid-cols-[730px_1fr] items-center">
        <div>
          <h1 className="text-4xl leading-tight tracking-wide lg:text-6xl lg:leading-tight font-bold text-white mb-4">The Next Frontier <br/> of Crypto Security</h1>
          <p className="text-xl leading-relaxed lg:text-2xl lg:leading-relaxed text-white mb-8  tracking-wide">Protect your cryptocurrencies, store your private keys offline, and safeguard your 
            assets from hackers. It’s time to achieve financial freedom in the most secure way with KeepKey.</p>
          <div className="text-left">
            <div className="mr-4 mb-4 sm:mr-4 inline-block">
              <ShopifyBuyButton></ShopifyBuyButton>
            </div>
            <Link href="/onboarding">
              <a className="btn btn-lg btn--transparent">Get Started</a>
            </Link>
          </div>

        </div>
        <div className="w-full mx-auto max-w-[200px] md:max-w-[400px] lg:max-w-[500px] lg:mt-40">
          <Image
            alt="KeepKey wallet"
            src={walletImage}
            height={760}
            unoptimized={true}
            objectFit="cover"
            priority={true}
            // objectPosition="center"
            layout="responsive"
                    >
          </Image>
        </div>
      </div>
    </div>
  )
}

//Features
interface Feature {
  key: number
  icon: string
  title: string
  description: string
}

const features: Feature[] = [
  {
    key: 1,
    icon: computerLockImage,
    title: 'Stress-Free Security',
    description: 'Generate and manage your private keys offline in cold storage, guarded from computer vulnerabilities and viruses, while utilizing wallet software for safe transactions.'
  },
  { 
    key: 2,
    icon: backupImage,
    title: 'Straightforward Backup and Recovery',
    description: 'Each device generates a 12-word recovery sentence during initialization that can be used to retrieve your private keys. Have peace of mind that your funds are secure, even if you lose or break your KeepKey.'
  },
  {
    key: 3,
    icon: ebStorageImage,
    title: 'Sleek and Simple Display',
    description: 'The large display gives clarity to every digital asset sent and received on your device. Each transaction must be manually approved using the confirmation button, giving you control and visibility over your transactions.'
  },
  { 
    key: 4,
    icon: openSourceImage,
    title: 'Effortless Exchanges',
    description: 'Quickly exchange cryptocurrencies via the ShapeShift integration, directly from your wallet.'
  },
]

const FeaturesSection = () => {
  return (
    <section className="bg-white">
      <h2 className="text-center mb-20">The Premier Hardware Wallet</h2>
      <div className="container grid gap-24 md:grid-cols-2 xl:grid-cols-4">
      {features.map(feature => 
        <FeatureCard 
          key = {feature.key}
          icon = {feature.icon}
          title = {feature.title}
          description = {feature.description}
        />
        
      )}
      </div>
    </section>
  )
}

const FeatureCard = (props: Feature) => {
    return (
      <div className="text-center">
        <Image
          src={props.icon}
          alt='image'
          width={60}
          height={60}
          >
        </Image>
        <h4 className="mt-6">{props.title}</h4>
        <p className="mt-3 tracking-wide">{props.description}</p>
      </div>
  )
}


const PromoSection = () => {
  return (
    <section className="bg-zinc-100">
      <div className="container grid gap-24 md:grid-cols-2">
        <div className="my-auto">
          <h2>Now Available on ShapeShift!</h2>
          <p className="font-bold mt-6 mb-4">A KeepKey-secured platform built to handle all of your crypto needs</p>
          <p>KeepKey is the premier wallet in the new ShapeShift Platform, a web-based interface that consolidates your many crypto tools into one, beautiful environment. Click below to experience a new era in hardware security.</p>
          <Link href="https://beta.shapeshift.com">
            <a className="btn mt-7">Explore Now</a>
          </Link>
        </div>
        <div className="max-w-xl">
          <Image
            src={shapeshiftDemoImage}
            alt='shapeshift demo'
            layout="responsive"
            quality={100}
            >
          </Image>
        </div>
      </div>
    </section>
  )
}


import binanceIcon from 'public/images/icons/binance.png'
import ethIcon from 'public/images/icons/ethereum.png'
import bchIcon from 'public/images/icons/bch.png'
import litecoinIcon from 'public/images/icons/litecoin.png'
import dashIcon from 'public/images/icons/dash.png'
import btgIcon from 'public/images/icons/btg.png'
import goIcon from 'public/images/icons/go.png'

const LeadingCryptos = () => {
  return (
    <section className="relative z-0">
      <Image
        src={walletDeskImage}
        alt='keepkey wallet on desk'
        layout="fill"
        objectFit="cover"
        quality={100}
        objectPosition="center"
        >
      </Image>
      <div className="container text-center z-10 relative">
        <h2 className="text-white z-10">Supports the World’s Leading Cryptocurrencies</h2>
        <p className="text-white my-6">Send, receive, and store dozens of the leading tokens and coins available on the market.</p>
        <div className="flex justify-center mt-6">
          <div className="w-40"><Image src={binanceIcon} alt="binance icon" unoptimized={true}></Image></div>
          <div className="w-40"><Image src={ethIcon} alt="eth icon" unoptimized={true}></Image></div>
          <div className="w-40"><Image src={bchIcon} alt="bch icon" unoptimized={true}></Image></div>
          <div className="w-40"><Image src={litecoinIcon} alt="litecoin icon" unoptimized={true}></Image></div>
          <div className="w-40"><Image src={dashIcon} alt="dash icon" unoptimized={true}></Image></div>
          <div className="w-40"><Image src={btgIcon} alt="btg icon" unoptimized={true}></Image></div>
          <div className="w-40"><Image src={goIcon} alt="go icon" unoptimized={true}></Image></div>
        </div>
        <Link href="https://beta.shapeshift.com">
          <a className="btn mt-7">View all 40+ Coins!</a>
        </Link>
      </div>
    </section>
  )
}

import walletsStackedImage from 'public/images/hardware/wallets-stacked.png' 
import walletHorizontal from 'public/images/hardware/wallet-horizontal.png' 

const ProductInfo = () => {
  return (
    <section>
      <div className="container grid md:grid-cols-2 gap-16 gap-y-28 lg:gap-32 lg:gap-y-52">
        <div>
          <h2>A Hardware Wallet that’s as <br /> Serious About Crypto as You Are</h2>
          <p className="my-6">Whether you’re a newcomer or a veteran to the crypto community, we all have one thing in common: the critical need for secure storage of private keys for our digital assets.</p>
          <p className="font-bold">KeepKey gives you:</p>
          <ul className="list-disc pl-10">
            <li className="pt-4">PIN protection against unauthorized use</li>
            <li>Additional passphrase protection</li>
            <li>Customizable transaction speeds</li>
            <li>Limitless wallet addresses on one device</li>
          </ul>
          <Link href="/onboarding">
          <a className="btn mt-8">Get Started</a>
          </Link>
        </div>
        <Image
          src={walletsStackedImage}
          alt='keepkey wallet on desk'
          quality={100}
          >
        </Image>
        <div className="order-2 md:order-none">
          <Image
            src={walletHorizontal}
            alt='keepkey wallet on desk'
            quality={100}
            layout="responsive"
            >
          </Image>
          </div>
          <div>
            <h2>Become a KeepKey Affiliate</h2>
            <p className="mt-6">Earn commission on every KeepKey sale you generate! KeepKey believes that everyone should be their own bank. {`That's`} why {`we've`} designed our program and product, to set you up for success.</p>
            <Link href="https://shapeshift.com/keepkey-affiliate">
            <a className="btn mt-8" target="_blank">Apply Now</a>
            </Link>
        </div>
      </div>
    </section>
  )
}

import forbesImg from 'public/images/customers/forbes.png' 
import cointelegraphImg from 'public/images/customers/cointelegraph.png' 
import coindeskImg from 'public/images/customers/coindesk.png' 
import nasdaqImg from 'public/images/customers/nasdaq.png' 
import bitcoinMagazineImg from 'public/images/customers/bitcoin-magazine.png' 

const TrustedBy = () => {
  return (
    <section className="bg-zinc-100 py-16 mt-32">
      <div className="container flex justify-between align-center">
          <div className="w-40"><Image src={forbesImg} alt="forbes logo" quality={100}></Image></div>
          <div className="w-40"><Image src={cointelegraphImg} alt="coin telegraph logo" quality={100}></Image></div>
          <div className="w-40"><Image src={coindeskImg} alt="coindesk logo" quality={100}></Image></div>
          <div className="w-40"><Image src={nasdaqImg} alt="nasdaq logo" quality={100}></Image></div>
          <div className="w-40"><Image src={bitcoinMagazineImg} alt="bitcoin magazine logo" quality={100}></Image></div>
      </div>
    </section>
  )
}
