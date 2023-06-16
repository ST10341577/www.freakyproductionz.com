async function lockHandler() {
    await screen.orientation.lock("potrait");
}

function releasedHandler() {
    screen,orientation.unlock(0);
}

function getOrientation() {
    return screen.orientation.type;
}