export default function Lightbox() {
    function handleClick(e: any) {
        if (e.target !== e.currentTarget) return
        document.body.classList.remove('ofhidden')
        e.target.classList.remove('active')
    }
    // https://www.youtube.com/watch?v=uKVVSwXdLr0&ab_channel=WebDevSimplified
    // https://codepen.io/WebDevSimplified/pen/mdbwgxy
    return (
        <div id="lightbox" onClick={handleClick}></div>
    )
}