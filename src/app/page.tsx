import { Button } from '@/components/Button'
import { Divider } from '@/components/Divider'
import { Typography } from '@/components/Typography'

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-24 flex-col">
      <h1 className="text-4xl break-words text-center">
        Create Next.js apps using TailwindCSS and TypeScript
      </h1>
      <Typography as={'h3'}>Typography component</Typography>
      <Divider height={3} mb={8} mt={16} />
      <Button>Button Component Primary</Button>
      <Divider height={3} mb={8} mt={16} />
      <Button color="secondary">Button Component Secondary</Button>
    </main>
  )
}
