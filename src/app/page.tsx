'use client';
import { Button } from '@/components/Button';
import { Divider } from '@/components/Divider';
import { NavBar } from '@/components/NavBar';
import { Stack } from '@/components/Stack/Stack.styles';
import { Typography } from '@/components/Typography';
import { decrement, increment, reset } from '@/redux';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

export default function Home() {
  const value = useAppSelector((state) => state.defaultCounter.total);
  const dispatch = useAppDispatch();
  return (
    <main className="flex min-h-screen items-center justify-start p-24 pt-0 flex-col h-[200vh]">
      <NavBar shouldHideOnScroll>Seu conteúdo de NavBar aqui</NavBar>
      <Typography as={'h1'} className="text-4xl break-words text-center">
        Create Next.js apps using TailwindCSS and TypeScript
      </Typography>
      <Typography as={'h3'}>Typography component</Typography>
      <Divider height={3} mb={1} mt={2} />
      <Button>Button Component Primary</Button>
      <Divider height={3} mb={1} mt={2} />
      <Button color="secondary">Button Component Secondary</Button>
      <Stack p={2} bgColor="#e35" m={3} br={1} color="#f6f6f6">
        Stack component
      </Stack>
      <Divider height={3} m={2} />
      <Stack className="flex-col">
        <Typography>Contador: {value}</Typography>
        <Stack pt={2}>
          <Button onClick={() => dispatch(increment())}>Soma</Button>
          <Button onClick={() => dispatch(reset())} className="bg-red-400">
            Zerar
          </Button>
          <Button onClick={() => dispatch(decrement())} color="secondary">
            Subtrair
          </Button>
        </Stack>
      </Stack>
    </main>
  );
}
