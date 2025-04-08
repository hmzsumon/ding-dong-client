const Separator = () => {
	return (
		<div className='flex items-center w-full my-6'>
			<hr className='flex-grow border-t border-white/30' />
			<span className='px-4 text-white text-sm opacity-80'>or</span>
			<hr className='flex-grow border-t border-white/30' />
		</div>
	);
};

export default Separator;
