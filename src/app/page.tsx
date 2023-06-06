import Button from '@/components/ui/Button';
import { db } from '@/lib/db';

export default async function Home() {
	await db.set('hello', 'world');
	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
			<h1 className='font-bold text-3xl'>Hello World</h1>
			<Button isLoading={false}> Hello</Button>
		</main>
	);
}
