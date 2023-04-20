import telussupportImg from '../assets/pages/Projects/telussupport.jpg'
import mayacertImg from '../assets/pages/Projects/mayacert.jpg'
import project1Img from '../assets/pages/Projects/koleyo.png'
// import project1ImgCompressed from '../assets/pages/Projects/koleyoCompress.jpg'
import project2Img from '../assets/pages/Projects/priscilla.jpg'
// import project2ImgCompressed from '../assets/pages/Projects/priscillaCompress.jpg'
import project3Img from '../assets/pages/Projects/carolina.jpg'
// import project3ImgCompressed from '../assets/pages/Projects/carolinaCompress.jpg'
import project4Img from '../assets/pages/Projects/servpresa.jpg'
// import project4ImgCompressed from '../assets/pages/Projects/servpresaCompress.jpg'
import project5Img from '../assets/pages/Projects/squadra.jpg'
// import project5ImgCompressed from '../assets/pages/Projects/squadraCompress.jpg'
import portfolioV1Img from '../assets/pages/Projects/portfolioV1.jpg'
// import portfolioV1ImgCompressed from '../assets/pages/Projects/portfolioV1Compress.jpg'

const projectsContent = {
  en: {
    title1: 'My',
    title2: 'Projects',
    text: 'Below you will find all the professional projects I have worked on.',
    seeMore: 'Visit',
    projects: [
      {
        title: 'Mayacert S.A.',
        subtitle: 'In progress...',
        description: 'Mayacert\'s website. Includes an admin site to manage all the content.',
        url: '',
        img: mayacertImg,
        // compressedImg: project1ImgCompressed
      },
      {
        title: 'TELUS Support',
        subtitle: '',
        description: 'TELUS Support website. Created with Next.js, using React 18, Redux, Jest, and React Testing Library.',
        url: 'https://www.telus.com/support',
        img: telussupportImg,
        // compressedImg: project1ImgCompressed
      },
      {
        title: 'Koleyo',
        subtitle: '',
        description: 'Application created with Symfony, Twig, Javascript, CSS and MySQL that aims to make it easier for independent teachers and small educational institutions to manage and control their students and courses.',
        url: 'https://www.koleyo.com',
        img: project1Img,
        // compressedImg: project1ImgCompressed
      },
      {
        title: 'Priscilla Bianchi',
        subtitle: '',
        description: 'E-commerce and Landing page for a Guatemalan artist. Made with Symfony, Twig, Javascript, CSS and MySQL. It is a website created specifically to the artist, which is also fully manageable. It has the ability to add or remove content in markdown format.',
        url: 'https://www.priscillabianchi.net',
        img: project2Img,
        // compressedImg: project2ImgCompressed
      },
      {
        title: 'Carolina Mendez',
        subtitle: '',
        description: 'Fully manageable landing page created to showcase the work of Carolina Méndez, Guatemalan Wedding Planner.',
        url: 'https://www.carolinamendez.com.gt',
        img: project3Img,
        // compressedImg: project3ImgCompressed
      },
      {
        title: 'Servpresa',
        subtitle: '',
        description: 'Landing page for an industrial security and outsourcing company. It has the ability to receive CVs, which are sent to the corresponding people by mail.',
        url: 'https://www.servpresa.com.gt',
        img: project4Img,
        // compressedImg: project4ImgCompressed
      },
      {
        title: 'Squadra',
        subtitle: '',
        description: 'Landing page created with HTML, CSS and Javascript for a human resources company.',
        url: 'https://www.squadra.com.gt',
        img: project5Img,
        // compressedImg: project5ImgCompressed
      },
      {
        title: 'Portfolio V1',
        subtitle: '',
        description: 'This webpage (Portfolio V1) is the first version of my portfolio, created with React and TailwindCSS.',
        // url: 'https://luis-farfan.vercel.app',
        img: portfolioV1Img,
        // compressedImg: portfolioV1ImgCompressed
      }
    ]
  },
  es: {
    title1: 'Mis',
    title2: 'Proyectos',
    text: 'A continuación encontrará todos los proyectos profesionales en los que he trabajado.',
    seeMore: 'Ver',
    projects: [
      {
        title: 'Mayacert S.A.',
        subtitle: 'En progreso...',
        description: 'Página web de Mayacert. Incluye un sitio administrativo para controlar todo el contenido de la página.',
        url: '',
        img: mayacertImg,
        // compressedImg: project1ImgCompressed
      },
      {
        title: 'TELUS Support',
        subtitle: '',
        description: 'Página web de TELUS Support. Creada con Next.js, usando React 18, Redux, Jest y React Testing Library.',
        url: 'https://www.telus.com/support',
        img: telussupportImg,
        // compressedImg: project1ImgCompressed
      }, ,
      {
        title: 'Koleyo',
        subtitle: '',
        description: 'Aplicación creada con Symfony, Twig, Javascript, CSS y MySQL que tiene el objetivo de facilitarles la administración y control de sus estudiantes y cursos a maestros independientes e instituciones educativas pequeñas.',
        url: 'https://www.koleyo.com',
        img: project1Img,
        // compressedImg: project1ImgCompressed
      },
      {
        title: 'Priscilla Bianchi',
        subtitle: '',
        description: 'E-commerce y Landing page para artista guatemalteca. Realizada con Symfony, Twig, Javascript, CSS y MySQL. Es una página web hecha a la medida de la artista, que a la vez es totalmente administrable. Cuenta con la capacidad de agregar o eliminar contenido en formato de markdown.',
        url: 'https://www.priscillabianchi.net',
        img: project2Img,
        // compressedImg: project2ImgCompressed
      },
      {
        title: 'Carolina Mendez',
        subtitle: '',
        description: 'Landing page totalmente administrable creada para mostrar el trabajo de Carolina Méndez, Wedding Planner guatemalteca.',
        url: 'https://www.carolinamendez.com.gt',
        img: project3Img,
        // compressedImg: project3ImgCompressed
      },
      {
        title: 'Servpresa',
        subtitle: '',
        description: 'Landing page para empresa de seguridad industrial y outsourcing. Cuenta con la capacidad de recibir CVs, los cuales son enviados a las personas correspondientes por medio de correo.',
        url: 'https://www.servpresa.com.gt',
        img: project4Img,
        // compressedImg: project4ImgCompressed
      },
      {
        title: 'Squadra',
        subtitle: '',
        description: 'Landing page creada con HTML, CSS y Javascript para empresa de recursos humanos.',
        url: 'https://www.squadra.com.gt',
        img: project5Img,
        // compressedImg: project5ImgCompressed
      },
      {
        title: 'Portafolio V1',
        subtitle: '',
        description: 'Este sitio web (Portafolio V1) es la primera versión de mi portafolio, creado con React y TailwindCSS.',
        // url: 'https://luis-farfan.vercel.app',
        img: portfolioV1Img,
        // compressedImg: portfolioV1ImgCompressed
      }
    ]
  }
}

export default projectsContent
