
// youtube ads skipper 
const click = (e) => {
    const buttons = document.getElementsByClassName(e);
    for (const button of buttons) {
        button.click();
    }
}

setInterval(() => {
    click("ytp-ad-skip-button-text");
    click("ytp-ad-overlay-close-button");
}, 300);

// youtube add skipper class ID = ytd-action-companion-ad-renderer
