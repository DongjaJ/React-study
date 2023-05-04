import Avatar from './Avatar';

function Profile({ image, name, title, isnew }) {
	return (
		<div className="profile">
			<Avatar image={image} isnew={isnew}></Avatar>
			<h1>{name}</h1>
			<p>{title}</p>
		</div>
	);
}

export default Profile;
