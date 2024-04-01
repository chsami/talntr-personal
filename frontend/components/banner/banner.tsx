'use client'

import { Divider } from '@nextui-org/divider'
import styles from './banner.module.css'

export default function Banner() {
  ///test
  return (
    <div className={styles.banner_wrapper + ' mb-5'}>
      <h2 className="text-5xl text-primary font-bold mb-16">
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        Where tomorrow's opportunities become today's reality.
      </h2>
      <ul className={styles.container_list}>
        <li className={styles.container_list_item + ' text-3xl'}>
          <p>Wat brengt de toekomst jou?</p>
          <p>Dat beslis je zelf..</p>
          <p>
            En <span className="font-bold">Talntr</span> helpt jou hierbij !
          </p>
          <Divider className="mt-4 mb-4"></Divider>
        </li>
        <li className={styles.container_list_item + ' text-lg'}>
          <p>
            Talntr is hét jobplatform <u>vàn</u> de toekomst <u>vóór</u> je
            toekomst!
          </p>
          <br />
          <p>
            Verbind vandaag nog met alle belgische talenten en geef je
            carrièremogelijkheden een enorme boost!
          </p>
          <br />
          <p>
            Op Talntr vind je talloze professionals en bedrijven die op zoek
            zijn naar elkaar, ook naar jou!
          </p>
          <br />
          <p>
            Jij geeft aan waar je toekomst ligt en wij helpen jou de weg af te
            leggen.
          </p>
        </li>
        <li className={styles.container_list_item}>
          <Divider></Divider>
        </li>
      </ul>
    </div>
  )
}
