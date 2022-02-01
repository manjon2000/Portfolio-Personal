import NavBar from "../../components/NavBar/NavBar";
import './style.css';
import ImgPeta from '../../assets/images/img--petanca.png';
import ImgLoop from '../../assets/images/img--loopstudio.png';
import ImgCard from '../../assets/images/img--nft--card.jpg';
import IconoGitHub from '../../assets/images/github.svg'


const Proyectos = () => {
    const proyectosArry = [
        {
            id: 213,
            titulo: 'Loopstudios landing page',
            descripcion: 'Challenges de www.frontendmentor.io,HTML,SASS,JS',
            img: ImgLoop,
            repositorio: 'https://github.com/manjon2000/LoopStudios-2022',
            bgColorCard: '#ffffff9e'
        },
        {
            id: 532,
            titulo: 'Petanca Morrera',
            descripcion: 'Pagina de petanca,HTML,CSS,PHP y MYSQL',
            img: ImgPeta,
            repositorio: 'https://github.com/manjon2000/prueba/tree/main/Paginapetanca',
            bgColorCard: '#ffffff9e'
        },
        {
            id: 756,
            titulo: 'NFT CARD',
            descripcion: 'Challenges de www.frontendmentor.io,HTML y CSS',
            img: ImgCard,
            repositorio: 'https://github.com/manjon2000/nft-card',
            bgColorCard: '#ffffff9e'
        }
    ]
    
    return (
        <>
            {<NavBar />}
                <div className="proyectos__carrusel">
                    {
                        proyectosArry.map((element,index)=>{
                            return(
                            <>
                                <div key={index} className="proyectos__carrusel--item"
                                style={{
                                    backgroundImage: `url(${element.img})`,
                                    backgroundPosition: 'center center',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'contain',                               
                                }}>
                                    <div className="proyectos__carrusel--info" 
                                    style={{
                                        backgroundColor: `${element.bgColorCard}`
                                    }}
                                    >
                                        <h3>{element.titulo}</h3>
                                        <p>{element.descripcion}</p>
                                        {element.repositorio !== " " ? <a href={element.repositorio}>
                                        <img src={IconoGitHub} alt={IconoGitHub}/></a> : ''}
                                    </div>
                                </div>
                            </>
                            )
                        })
                    }
                   
                    
                </div>
        </>
    )

}


export default Proyectos;