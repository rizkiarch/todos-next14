import styles from './style.module.css'
import content from '@/utils/content.json'

export const generateStaticParams = () => {
    return Object.keys({content}).map((slug)=> ({
        slug: slug.split('/'),
    }))
}

const getData = (slug) => {
    const path = slug.join('/')
    return content[path] || 'coming soon'
  }

export default function DocsPage({params}) {
    const data = getData(params.slug || [])
    return (
        <>
        <div className={styles.title}>
            Page ID 
        </div>
        <div>
            <p className='text-xl'>{data}</p>
        </div>
        </>
    )
}