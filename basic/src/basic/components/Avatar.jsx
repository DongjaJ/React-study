function Avatar({ image, isnew }) {
	return (
		<div className="avatar">
			<img class="photo" src={image} alt="avatar" />
			{isnew && <div class="new">new</div>}
		</div>
	);
}

export default Avatar;
