import type { CustomNextPage } from 'next'
import { DashboardLayout } from 'src/layout'

const Notification: CustomNextPage = () => {
  return <div>通知</div>
}

Notification.getLayout = DashboardLayout

export default Notification
