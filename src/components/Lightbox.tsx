export default function Lightbox() {
    function handleClick(e) {
        if (e.target !== e.currentTarget) return
        e.classList.remove('active')
    }
    // https://www.youtube.com/watch?v=uKVVSwXdLr0&ab_channel=WebDevSimplified
    // https://codepen.io/WebDevSimplified/pen/mdbwgxy
    return (
        <div id="lightbox" onClick={handleClick}></div>
    )
}