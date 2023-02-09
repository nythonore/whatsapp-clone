import {
	Image,
	InputGroup,
	FormControl,
	Button,
	Dropdown,
} from 'react-bootstrap';
import Contact from './Contact';

const SideBar = () => {
	return (
		<>
			<div className='d-flex bg-ct-grey topbar justify-content-between align-items-center p-3'>
				<div className='d-flex align-items-center'>
					<Image
						src='https://nythonore.netlify.app/_next/image?url=%2Fnythonore.jpg&w=3840&q=75'
						alt='Honore Niyitegeka'
						className='img-fluid fit-cover mr-4 profile'
					/>
					<p className='beta'>BETA</p>
				</div>

				<div className='d-flex icons'>
					<p className='cursor'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='25'
							height='25'
							fill='currentColor'
							class='bi bi-circle'
							viewBox='0 0 16 16'
						>
							<path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z' />
						</svg>
					</p>

					<p className='cursor ml-4 mr-3'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='25'
							height='25'
							fill='currentColor'
							class='bi bi-chat-left'
							viewBox='0 0 16 16'
						>
							<path d='M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z' />
						</svg>
					</p>

					<Dropdown>
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
							<Dropdown.Item className='py-2'>New Group</Dropdown.Item>
							<Dropdown.Item className='py-2'>Profile</Dropdown.Item>
							<Dropdown.Item className='py-2'>Catalog</Dropdown.Item>
							<Dropdown.Item className='py-2'>Starred messages</Dropdown.Item>
							<Dropdown.Item className='py-2'>Labels</Dropdown.Item>
							<Dropdown.Item className='py-2'>Settings</Dropdown.Item>
							<Dropdown.Item className='py-2'>Log out</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
				</div>
			</div>

			<div className='search-bar px-3 py-2'>
				<InputGroup>
					<InputGroup.Text className='pl-4'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='16'
							height='16'
							fill='currentColor'
							class='bi bi-search'
							viewBox='0 0 16 16'
						>
							<path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z' />
						</svg>
					</InputGroup.Text>

					<FormControl placeholder='Search or start new chat' />
				</InputGroup>
			</div>

			<div className='contacts-list sidebar-contact'>
				{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((_, key) => (
					<div key={key}>
						<Contact />
					</div>
				))}
			</div>
		</>
	);
};

export default SideBar;
