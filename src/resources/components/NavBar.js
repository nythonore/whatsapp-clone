import { Image, Button, Dropdown } from 'react-bootstrap';

const NavBar = () => {
	return (
		<div className='d-flex bg-ct-grey navbar justify-content-between align-items-center py-3 px-4'>
			<div className='d-flex align-items-center cursor'>
				<Image
					src='https://nythonore.netlify.app/_next/image?url=%2Fnythonore.jpg&w=3840&q=75'
					alt='Honore Niyitegeka'
					className='img-fluid fit-cover mr-3 profile'
				/>
				<p className='user'>Honore Niyitegeka</p>
			</div>

			<div className='d-flex icons'>
				<p>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='22'
						height='22'
						fill='currentColor'
						class='bi bi-search'
						viewBox='0 0 16 16'
					>
						<path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z' />
					</svg>
				</p>

				<Dropdown className='ml-3'>
					<Dropdown.Toggle as={Button} variant='default' className='p-0'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='25'
							height='25'
							fill='currentColor'
							class='bi bi-three-dots-vertical'
							viewBox='0 0 16 16'
						>
							<path d='M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z' />
						</svg>
					</Dropdown.Toggle>

					<Dropdown.Menu className='shadow noborder mt-3'>
						<Dropdown.Item className='py-2'>Contact info</Dropdown.Item>
						<Dropdown.Item className='py-2'>Select messages</Dropdown.Item>
						<Dropdown.Item className='py-2'>Close chat</Dropdown.Item>
						<Dropdown.Item className='py-2'>Mute notification</Dropdown.Item>
						<Dropdown.Item className='py-2'>Clear messages</Dropdown.Item>
						<Dropdown.Item className='py-2'>Delete chat</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			</div>
		</div>
	);
};

export default NavBar;
