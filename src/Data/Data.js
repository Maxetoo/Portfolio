// AiOutlineMail
// AiOutlineGithub
// FaHashnode
// SiHashnode
// LuTwitter
import { AiOutlineMail, AiOutlineGithub, AiOutlineHome} from 'react-icons/ai'
import { HiMenuAlt4 } from 'react-icons/hi'
import { AiOutlineUser } from 'react-icons/ai'
import { BiSolidContact } from 'react-icons/bi'
import { BiBookAlt } from 'react-icons/bi'
import { MdWorkOutline } from 'react-icons/md'
import { LuServer } from "react-icons/lu";
// LuServer

// import { FaHashnode } from 'react-icons/fa'
import { SiHashnode } from 'react-icons/si'
import { LuTwitter } from 'react-icons/lu'
import Dojaworld from '../Assets/Dojaworld.png'
import Nairaexchange from '../Assets/NairaExchange.png'
import Notepad from '../Assets/Notepad.png'
export const socials = [
  {
    id: 0,
    icon: <AiOutlineMail />,
    link: 'mailto: etombimaxwell@gmail.com',
  },
  {
    id: 1,
    icon: <AiOutlineGithub />,
    link: 'https://github.com/Maxetoo',
  },
  {
    id: 2,
    icon: <SiHashnode />,
    link: 'https://themaxydude.hashnode.dev/',
  },
  {
    id: 3,
    icon: <LuTwitter />,
    link: 'https://twitter.com/EtombiMaxwell',
  },
]

export const articles = [
  {
    id: 0,
    title: 'Regular Expression',
    description: 'Understanding The Basics of RegExp in javaScript',
    readTime: '15 min read',
    date: 'Jul 25, 2022',
    link: 'https://themaxydude.hashnode.dev/regular-expression',
  },
  {
    id: 1,
    title: 'Motivation',
    description: 'How To Motivate Yourself When Taking Web-Development Path',
    readTime: '3 min read',
    date: 'Jul 8, 2022',
    link: 'https://themaxydude.hashnode.dev/how-to-motivate-yourself-when-taking-web-development-path',
  },
]

export const projects = [
  {
    id: 0,
    name: 'Writeme',
    techUsed: 'ReactJS + Redux Toolkit + ExpressJS + MongoDB',
    description:
      'An anonymous web application where you can send an receive indiviual and group anonymous messages',
    link: '',
    image: ''
  },
  {
    id: 1,
    name: 'Doja World',
    techUsed: 'ReactJS + Redux Toolkit + Styled components',
    description:
      'A custom music web apllication that helps you stream popular Doja cat songs',
    link: 'https://dojaa-world.vercel.app/',
    image: Dojaworld

  },
  {
    id: 2,
    name: 'Naira Exchange',
    techUsed: 'ReactJS + Styled components',
    description: 'A landing page for a crypto and giftcard vendor',
    link: 'https://nairaexchangeng.vercel.app/',
    image: Nairaexchange

  },
  {
    id: 3,
    name: 'Notepad Beta',
    techUsed: 'ReactJS + Redux Toolkits',
    description: 'A replica of the a mobile notepad',
    link: 'https://notepad-inky.vercel.app/',
    image: Notepad

  },
  {
    id: 4,
    name: 'Sabi-Button Library',
    techUsed: 'TS + Storybok + Rollup',
    description:
      'A react component button library that allows you create simple and beautiful buttons',
    link: 'https://github.com/Maxetoo/Sabi-Button-Lib',
  image: 'https://cdn.dribbble.com/users/729829/screenshots/5306711/galshir-lemonade-icons_still_2x.gif?resize=640x480&vertical=center'

  },

]

export const menudata = [{
  id: 0,
  title: 'Home',
  icon: <AiOutlineHome/>
}, 
{
  id: 1,
  title: 'Introduction',
  icon: <LuServer/>
},{
  id: 2,
  title: 'About',
  icon: <AiOutlineUser/>
},{
  id: 3,
  title: 'Projects',
  icon: <MdWorkOutline/>
},{
  id: 4,
  title: 'Articles',
  icon: <BiBookAlt/>
}, {
  id: 5,
  title: 'Contact',
  icon: <BiSolidContact/>
}]
