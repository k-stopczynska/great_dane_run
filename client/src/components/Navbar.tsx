import { Link } from 'react-router-dom';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import logo from '../assets/logo.jpg';

const Navbar = () => {
	return (
		<nav className='flex items-center justify-between px-4 lg:px-12 py-3 shadow-md bg-white'>
			<img src={logo} alt='logo' className='w-[70px] h-[70px] my-[-10px] mx-[-10px]'></img>
			<div className='hidden md:flex gap-6'>
				<Link to='/' className='hover:underline'>
					Home
				</Link>
				<Link to='/about' className='hover:underline'>
					About
				</Link>
				<Link to='/contact' className='hover:underline'>
					Contact
				</Link>
			</div>

			<div className='md:hidden'>
				<Sheet>
					<SheetTrigger asChild>
						<Button variant='outline' size='icon'>
							<Menu className='w-6 h-6' />
						</Button>
					</SheetTrigger>
					<SheetContent side='right'>
						<div className='flex flex-col gap-4 mt-6 text-lg'>
							<Link to='/' className='hover:underline'>
								Home
							</Link>
							<Link to='/about' className='hover:underline'>
								About
							</Link>
							<Link to='/contact' className='hover:underline'>
								Contact
							</Link>
						</div>
					</SheetContent>
				</Sheet>
			</div>
		</nav>
	);
};

export default Navbar;
