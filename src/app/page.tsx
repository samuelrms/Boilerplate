import { Button } from '@/components/Button'
import { Divider } from '@/components/Divider'
import { Stack } from '@/components/Stack/Stack.styles'
import { Typography } from '@/components/Typography'

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-24 flex-col">
      <h1 className="text-4xl break-words text-center">
        Create Next.js apps using TailwindCSS and TypeScript
      </h1>
      <Typography as={'h3'}>Typography component</Typography>
      <Divider height={3} mb={1} mt={2} />
      <Button>Button Component Primary</Button>
      <Divider height={3} mb={1} mt={2} />
      <Button color="secondary">Button Component Secondary</Button>
      <Stack p={2} bgColor="#e35" m={3} br={1} color="#f6f6f6">
        Stack component
      </Stack>
    </main>
  )
}
