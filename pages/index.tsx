import type { CustomNextPage } from 'next'
import { DashboardLayout } from 'src/layout'
import { Index } from 'src/pages/index'

const IndexPage: CustomNextPage = () => {
  return <Index />
}

IndexPage.getLayout = DashboardLayout

export default IndexPage
