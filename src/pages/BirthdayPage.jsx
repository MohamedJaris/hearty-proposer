import FloatingHearts from '../components/FloatingHearts'
import './BirthdayPage.css'

const MESSAGE = `Happy Birthday my cutie patooti dubbu booboo 🎂🎂

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
