import Link from 'next/link'
import Head from 'next/head'
import Script from 'next/script'
import Layout from '../../components/layout'

export default function Quiz() {

    return (

        <Layout home>
            <Head>
                <title>Quiz Disastre</title>
            </Head>
            
            <main>
                <div className="container">
                    <div id="game" className="justify-center flex-column">
                        <div id="hud">
                            <div className="hud-item">
                                <p id="progressText" nameClass="hud-prefix">
                                    Question
                                </p>
                                <div id="progressBar">
                                    <div id="progressBarFull"></div>
                                </div>
                            </div>
                            <div className="hud-item">
                                <p className="hud-prefix">
                                    Score
                                </p>
                                <h1 className="hud-main-text" id="score">
                                    0
                                </h1>
                            </div>
                        </div>
                        <div id="question">Qual a resposta para a questão</div>
                        <div className="choice-container">
                            <p className="choice-prefix">A</p>
                            <p className='choice-text' data-number="1">Choice</p>
                        </div>
                        <div className="choice-container">
                            <p className="choice-prefix">B</p>
                            <p className='choice-text' data-number="2">Choice</p>
                        </div>
                        <div className="choice-container">
                            <p className="choice-prefix">C</p>
                            <p className='choice-text' data-number="3">Choice</p>
                        </div>
                        <div className="choice-container">
                            <p className="choice-prefix">D</p>
                            <p className='choice-text' data-number="4">Choice</p>
                        </div>
                    </div> 
                    <br/>
                </div>
            </main>  
          
            <footer>
                <Link href={"/"}>
                    <a>Back to home</a>
                </Link>
            </footer>
        </Layout>
    )
}

