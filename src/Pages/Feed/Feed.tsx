import { Post, PostType } from '../../components/Post/Post'
import { Header } from '../../components/Header/Header'
import { Sidebar } from '../../components/Sidebar/Sidebar'

import styles from './Feed.module.css';

import '../../styles/global.css';

const posts: PostType[] = [ 
{
  id: 1,
  author: {
    avatarUrl: 'https://media.discordapp.net/attachments/1012049672489156669/1243018999621488670/4352375.png?ex=664ff327&is=664ea1a7&hm=c753de87db85bed5f64c6c7b9d75946dfb8eea30f8e86c08945a14994f5fcdad&=&format=webp&quality=lossless',
    name: 'Rafael Barbosa',
    role: '@Username'
  },
  content: [
    {type: 'paragraph', content: 'Fala galeraa 👋',},
    {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',},
    {type: 'link', content: 'jane.design/doctorcare'},
  ],
  publishedAt: new Date('2022-05-03 20:00:00'),
},
{
  id: 2,
  author: {
    avatarUrl: 'https://media.discordapp.net/attachments/1012049672489156669/1243018999621488670/4352375.png?ex=664ff327&is=664ea1a7&hm=c753de87db85bed5f64c6c7b9d75946dfb8eea30f8e86c08945a14994f5fcdad&=&format=webp&quality=lossless',
    name: 'Patrícia Costa',
    role: '@Username'
  },
  content: [
    {type: 'paragraph', content: 'Fala galeraa 👋',},
    {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',},
    {type: 'link', content: 'jane.design/doctorcare'},
  ],
  publishedAt: new Date('2022-05-10 20:00:00'),
},
]

export function Feed() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                post={post}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}