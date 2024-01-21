import Image from 'next/image'
import Moletom from '../../public/assets/moletom.png'

export default function Home() {
  return (
    <section className='mt-5'>
      <div className='relative bg-light-black w-full'>
        <Image src={Moletom} alt='Moletom 01' />
        <div className='absolute bottom-8 right-8 flex items-center border-2 rounded-full border-light-gray-2 h-12 gap-1.5'>
          <label className='text-sm text-light-gray pl-5'>
            Moletom Never Stop...
          </label>
          <p className='bg-violet box-border h-full rounded-full flex items-center justify-center text-base text-light-gray font-semibold w-20'>R$ 129</p>
        </div>
      </div>
    </section>
  )
}
