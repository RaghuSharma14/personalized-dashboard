import Layout from '@/components/Layout'
import SettingsPanel from '@/components/SettingsPanel'
import NewsFeed from '@/components/NewsFeed'
import Recommendations from '@/components/Recommendations'

export default function Home() {
  return (
    <Layout>
      <SettingsPanel />
      <NewsFeed searchTerm="" />
      <Recommendations />
    </Layout>
  )
}
