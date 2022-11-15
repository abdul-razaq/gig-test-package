console.log('Hello AbdulRazaq');

process.on('SIGINT', () => {
	console.log('SIGINT detected, exiting application');
});

process.on('SIGTERM', () => {
	console.info('SIGTERM detected, exiting application!');
});
