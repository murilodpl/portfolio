/**
 * References
 * - https://www.youtube.com/watch?v=uKVVSwXdLr0&ab_channel=WebDevSimplified
 * - https://codepen.io/WebDevSimplified/pen/mdbwgxy
 */

export default function Lightbox() {
    // Function
    function handleClick(e: any) {
        if (e.target !== e.currentTarget) return
        document.body.classList.remove('ofhidden')
        e.target.classList.remove('active')
        e.target.innerHTML = ""
    }

    return (
        <div id="lightbox" onClick={handleClick}></div>
    )
}