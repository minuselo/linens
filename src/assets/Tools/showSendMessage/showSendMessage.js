const showSendMessage = (func) => {
    func(true);
    setTimeout(() => func(false), 2000);
}