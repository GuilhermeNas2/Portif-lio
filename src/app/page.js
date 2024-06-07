'use client'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMugSaucer } from "@fortawesome/free-solid-svg-icons";
import { faJs, faPhp, faGithub, faPython, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import dynamic from 'next/dynamic';

const DynamicTimeline = dynamic(() => import('./timeline'), { ssr: false });


export default function Home() {
  return (
      <>
      <header>
          <nav className="fixed flex flex-row items-center justify-around w-full h-1/12 bg-black z-50 border-b-2">
            <div className="w-1/3 ml-5 p-2">       
            <FontAwesomeIcon icon={faMugSaucer} className="fas fa-check" style={{ color: "white" }}></FontAwesomeIcon>          
            </div>
            <ul className="flex flex-row w-2/3 lg:w-1/3 text-xs lg:text-base justify-around">
              <li><a href="#perfilPicture">Sobre mim</a></li>
              <li><a href="#Projetos">Projetos</a></li>
              <li><a href="#Redes">Redes</a></li>
            </ul>
          </nav>
      </header>
      <main className="flex flex-col w-full items-center pt-10">
        <section>
          <div className="flex flex-col items-center m-5 lg:justify-center w-fit lg:flex-row">
            <div className="w-1/2 lg:w-1/4"> 
              <img id='perfilPicture' className="rounded-full" src="/perfil.png"></img>
            </div>
            <div className="mt-2 lg:text-2xl lg:w-1/2 ">
              <h2 className="text-center ">Prazer, me chamo Guilherme</h2>
              <p className="text-sm lg:text-lg text-center mt-2 p-1">
                Sou um pequeno desenvolvedor apaixonado por tecnologia e com grande curiosidade para criar coisas. Minha jornada nessa área ainda está no começo, estou me formando em Ciência da Computação,
                e passando pela etapa do estágio. Entretanto, já possuo certa experiência com projetos autônomos e acadêmicos.
              </p>
            </div>
          </div>
        </section>
        <section id="timeLine" className="w-full h-fit min-h-fit">              
            <DynamicTimeline/>                      
        </section> 
        <section className="w-fit border-y-2 w-max">
          <div className="flex flex-col items-center my-10">         
            <h2 className="text-2xl lg:text-5xl font-rich">Stacks</h2>
            <div className="flex flex-row items-center justify-around min-w-60 lg:min-w-80 w-max min-h-10 mt-8">              
              <div className="w-1/3 flex justify-center">
                <FontAwesomeIcon icon={faJs} className="fas fa-check text-3xl lg:text-6xl" style={{ color: "white"}}></FontAwesomeIcon> 
              </div>
              <div className="w-1/3 flex justify-center">
                <FontAwesomeIcon icon={faPhp} className="fas fa-check text-3xl lg:text-6xl" style={{ color: "white" }}></FontAwesomeIcon>  
              </div>
              <div className="w-1/3 flex justify-center">
                <FontAwesomeIcon icon={faGithub} className="fas fa-check text-3xl lg:text-6xl" style={{ color: "white" }}></FontAwesomeIcon>   
              </div> 
              <div className="w-1/3 flex justify-center">
                <FontAwesomeIcon icon={faPython} className="fas fa-check text-3xl lg:text-6xl" style={{ color: "white" }}></FontAwesomeIcon>   
              </div>     
            </div> 
          </div>           
        </section>
        <section>
          <div id="Projetos" className="flex flex-col items-center mt-10">
            <h2 className="text-2xl lg:text-5xl mb-5 font-rich">
              Projetos
            </h2>
            <div className="flex flex-col lg:flex-row lg:justify-around items-center p-2">
              <div className="w-1/2 lg:w-1/3">
                <img src="apolo.jpg"></img>
              </div>              
              <div className="text-center w-fit mt-3 p-3 bg-zinc-600 rounded-sm lg:w-1/2">
                <h3 className="text-3xl mb-3 font-rich">Apollo</h3>
                <p className="text-sm lg:text-lg">
                  Robô de automação desenvolvido por mim que consegue ler e editar XMLs ou planilhas Excel. Além disso, 
                  ele se baseia nas informações retiradas desses arquivos para preencher um formulário.
                </p>
                <div className="mt-4 flex justify-around">
                  <button className="bg-black p-3 rounded-md min-w-40 hover:bg-black/50"><a href="https://github.com/GuilhermeNas2/Apollo-v.02" target="blank">Código fonte</a></button>                  
                </div>
              </div>              
            </div>
            <div className="flex flex-col lg:flex-row lg:justify-around items-center p-2">
              <div className="w-1/2 lg:w-1/3 font-rich">
                <img src="software.png"></img>
              </div>
              <div className="text-center w-fit mt-3 p-3 bg-zinc-600 rounded-sm lg:w-1/2">
                <h3 className="text-3xl mb-3 font-rich">Software</h3>
                <p className="text-sm lg:text-lg">
                  Projeto para uma empresa de um software que gerencia o estoque de produtos, além de realizar o gerenciamento de usuários. 
                  O interessante desse projeto foi o aperfeiçoamento dos meus conceitos de roteamento e da estrutura MVC.
                </p>
                <div className="mt-4 flex justify-around">
                  <button className="bg-black p-3 rounded-md min-w-40 hover:bg-black/50"><a href="https://github.com/GuilhermeNas2/Danglass" target="blank">Código fonte</a></button>
                  {/* <button className="bg-black p-3 rounded-md min-w-40">Site</button> */}
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row lg:justify-around items-center p-2">
              <div className="w-1/2 lg:w-1/3">
                <img src="siteD.png"></img>
              </div>
              <div className="text-center w-fit mt-3 p-3 bg-zinc-600 rounded-sm lg:w-1/2">
                <h3 className="text-3xl mb-3 font-rich">Site</h3>
                <p className="text-sm lg:text-lg">
                  Uma simples página feita por mim para receber demandas de serviços. Conta com um simples HTML para explicar do que se trata o site, 
                  junto com um formulário, e um back-end para gerenciar os dados e realizar o envio do e-mail para mim..
                </p>
                <div className="mt-4 flex justify-around">
                  <button className="bg-black p-3 rounded-md min-w-40 hover:bg-black/50"><a href="https://github.com/GuilhermeNas2/Website_demandas" target="blank">Código fonte</a></button>
                  <button className="bg-black p-3 rounded-md min-w-40 hover:bg-black/50"><a href="https://codenhdemandas.onrender.com/" target="blank">Site</a></button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer id="Redes" className="flex flex-col items-center my-6 border-t-2">
          <span className="text-xl lg:text-5xl my-5 font-rich">Redes</span>
          <div className="flex flex-row items-center justify-around min-w-60 w-max min-h-10 mt-3">
            <div className="w-1/3 flex justify-center">
              <a href="https://github.com/GuilhermeNas2" target="blank">
                <FontAwesomeIcon icon={faGithub} className="fas fa-check text-4xl" style={{ color: "white"}}></FontAwesomeIcon> 
              </a>              
            </div>
            <div className="w-1/3 flex justify-center">
              <a href="https://www.linkedin.com/in/guilherme-nascimento-b121aa206/" target="blank">
                <FontAwesomeIcon icon={faLinkedin} className="fas fa-check text-4xl" style={{ color: "white"}}></FontAwesomeIcon>
              </a>
            </div>
            <div className="w-1/3 flex justify-center">
              <a href="https://www.instagram.com/codenoh/" target="blank">
                <FontAwesomeIcon icon={faInstagram} className="fas fa-check text-4xl" style={{ color: "white"}}></FontAwesomeIcon>               
              </a>
            </div>
          </div>
      </footer>
      </>
  );
}
