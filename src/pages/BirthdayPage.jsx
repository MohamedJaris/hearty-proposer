import FloatingHearts from '../components/FloatingHearts'
import './BirthdayPage.css'

const MESSAGE = `Happy Birthday my cutie patooti dubbu booboo 🎂🎂

Now that you have turned 21, I just want you to keep one thing in your mind, which is... you are getting one more year closer to get together with your handsome husband waiting here eager for his gorgeous wife 🥰😘...

Dont worry about anything pattu, I am working very hard here to give you a peaceful, blissful and a carefree life. I know that you have been through so much which I wish no one goes through 😔...

But dont worry thangameyy, the day we shared our feelings for each other, I promised you that I'll never let you down... and I will keep that word till I lose my last breath 🪦...

No one in this world can ever drift us away and I will always be integral part of you that enriches every single moment of your life ❤️❤️...

I know something for sure, that unlike the women we see in this generation. You are the most modest and faithful soul that I have met, and luckily I got you for myself...

To be honest, Since the time of college, I've been always there around you and spent most of the time with you... After joining the job, now we couldn't speak or hang out like before...

But the matter of fact is that, despite not being in touch or any communication, I am being able to be free and feel secure that, No matter what happens, you will never ever lean an inch away from me for someone, which not a lot of people have with their partners...

Thank you soo much for taking the burden down my shoulders, I am here working very peacefully without any insecurities or struggle... and I want to reassure the same to you...

No matter what the situation is, I will never do something that will hurt your heart forever... No girl can come close to you in my eyes, and my heart only beats for you... So you too carry on with your works and passion without any fear of losing your jarii 🫂🫂...

Its going to be full 3 years of us together, and I pretty much expressed myself in and out to you... and I am happy to say that you are the only one in the world who knows 100% about me.

There will always be different secrets that we hide to different people. But to you, I never hid anything and I have poured my heart and life out to you... Just like what you did to me 🥹🥹...

We have passed a major time period and its only a small portion that is left before we both get together and start a family...

Inshallah, I wish the day comes sooner, where we start our days by sharing kisses 😘😘 on the bright sunshine and end our days with comfortable cuddles in the night 🫂😴...

I want to have many beautiful kids with you and build a beautiful world for us where you shape up the family and keep the house I live a home 💓💓...

Until then, please accept our distance as fate given by god to test our patience...

Once we both lawfully get together, then there will be no one to stop us, control us or Order us on what to do and how to live the life... It will be just us doing what we love to do together...

Happy birthday with one more leap towards our marriage... I am waiting eager for the day just as you and inshallah it will happen... only the days and dates will be different but the output is always going to be the same...

I love you soo much my dear wifeyyy... mmmwaahhhhhh...😘😘`


const SIGN = `'JAR ❤️ SAF' Foreverr 💓💓💓`

export default function BirthdayPage() {
  return (
    <div className="birthday-page">
      <FloatingHearts count={30} />

      <div className="birthday-content">
        <h1 className="bday-title">Happy Birthday</h1>
        <p className="bday-name">Cutie Patooti Dubbu Booboo 💝</p>

        <div className="bday-message-wrapper">
          {MESSAGE.split('\n\n').map((para, i) => (
            <p key={i} className="bday-para">
              {para}
            </p>
          ))}
        </div>

        <div className="bday-signature">{SIGN}</div>
      </div>
    </div>
  )
}
