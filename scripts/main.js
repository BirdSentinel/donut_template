function openPost() {
	document.getElementById("blog-post-expander").style.display = "none";
	document.getElementById("blog-post-data").style.height = "auto";
	document.getElementById("blog-post-data").style.maxHeight = "unset";
}

function isPosting() {
	document.getElementById("upload-buttons-hidden").style.display = "block";
	document.getElementById("black-background").style.display = "unset";
	document.getElementById("user-post").style.zIndex = "1010";
	document.body.style.overflow = "hidden";
	window.scrollTo(0,0);
}

function abortPost() {
	document.getElementById("upload-buttons-hidden").style.display = "none";
	document.getElementById("user-post").style.zIndex = "1000";
	document.getElementById("black-background").style.display = "none";
	document.body.style.overflow = "unset";
}