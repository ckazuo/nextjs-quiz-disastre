import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
    <div className="container">
      <Head>
        <title>Quiz Disastre</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

      <section className={utilStyles.headingMd}>
        <p>Este site feito pelo grupo da Univesp Jogo Educativo (Quiz) {' '} 
           sobre o enfrentamento inicial realizado por leigos frente a {' '} 
           catástrofes mais recorrentes (inundações, incêndios florestais e {' '} 
           deslizamentos de terra)  </p>
        <br/>
        <button className={utilStyles.button}>
          {' '}
          <Link href={"/quiz/disastre"}>
            <a>Começar Quiz Disastre</a>
          </Link>
        </button>
        <br/>

      </section>    

      </main>

    </div>
    </Layout>
  )
}
