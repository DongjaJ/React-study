function Profile({ image, name, title, isnew }) {
	return (
		<div className="profile">
			<img class="photo" src={image} alt="avatar" />
			{isnew && <div class="new">new</div>}
			<h1>{name}</h1>
			<p>{title}</p>
		</div>
	);
}

export default Profile;
