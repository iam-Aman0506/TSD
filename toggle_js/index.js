let puppyImageElement = document.getElementById("puppyImage");
let likeIconElement = document.getElementById("likeIcon");
let likeButtonElement = document.getElementById("likeButton");
let isImageLiked = false;

function onClickLikeButton() {
    if (isImageLiked === false) {
        puppyImageElement.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-liked-img.png";
        likeIconElement.style.color = "#0967d2";
        likeButtonElement.style.backgroundColor = "#0967d2";
        likeButtonElement.style.color = "#ffffff";
        isImageLiked = true;
    } else {
        puppyImageElement.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-img.png";
        likeIconElement.style.color = "#9aa5b1";
        likeButtonElement.style.backgroundColor = "#9aa5b1";
        likeButtonElement.style.color = "#cbd2d9";
        isImageLiked = false;

    }
}