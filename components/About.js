import Image from 'next/image'

import mirrorpic from '../public/images/IMG_0002.jpg'
export default function About () {
  return (
    <div id='about' className='about section'>
      <div className='about__content'>
        <div className='image-container'>
          <Image
            className='about__content-pic'
            src={mirrorpic}
            width={400}
            alt='alt'
          ></Image>
        </div>
        <div className='about__content-txt'>
          <h1 className='about__content-txt-hdr'>About Me</h1>
          <p className='about__content-txt-body'>
            It&apos;s beautiful - and we haven&apos;t even done anything to it yet. There
            we go. This painting comes right out of your heart. You can&apos;t have
            light without dark. You can&apos;t know happiness unless you&apos;ve known
            sorrow. We need dark in order to show light. Just make a decision
            and let it go. Just use the old one inch brush. Anyone can paint.
            Every single thing in the world has its own personality - and it is
            up to you to make friends with the little rascals. God gave you this
            gift of imagination. Use it. The little tiny Tim easels will let you
            down. The only thing worse than yellow snow is green snow. Trees
            live in your fan brush, but you have to scare them out. Clouds are
            free.
          </p>
          <p className='about__content-txt-body'>They just float around the sky all day and have fun. It&apos;s
            cold, but it&apos;s beautiful. Volunteering your time; it pays you and
            your whole community fantastic dividends. We&apos;ll put all the little
            clouds in and let them dance around and have fun. Put light against
            light - you have nothing. Put dark against dark - you have nothing.
            It&apos;s the contrast of light and dark that each give the other one
            meaning. You can&apos;t make a mistake. Anything that happens you can
            learn to use - and make something beautiful out of it. It is a lot
            of fun. If you didn&apos;t have baby clouds, you wouldn&apos;t have big
            clouds. We can always carry this a step further. There&apos;s really no
            end to this. Trees grow however makes them happy.</p>
        </div>
      </div>
    </div>
  )
}
