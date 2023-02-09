import { Image } from 'react-bootstrap';

const Contact = () => {
	return (
		<div className='contact d-flex align-items-center border p-3 cursor'>
			<div className='mr-3'>
				<Image
					src='https://nythonore.netlify.app/_next/image?url=%2Fnythonore.jpg&w=3840&q=75'
					alt='Honore Niyitegeka'
					className='img-fluid fit-cover sidebar-icon mr-3'
				/>
			</div>

			<div className='info'>
				<div className='d-flex justify-content-between'>
					<p className='user'>Honore Niyitegeka</p>
					<p className='color-ct-grey-1'>11:59 AM</p>
				</div>

				<p className='message color-ct-grey-2'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='20'
						height='20'
						fill='currentColor'
						class='bi bi-check-all contact-check'
						viewBox='0 0 16 16'
					>
						<path d='M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z' />
					</svg>
					It is a long established fact that a reader will be distracted by the
					readable content of a page when looking at its layout.
				</p>
			</div>
		</div>
	);
};

export default Contact;
