$(function () {

    // CONFIG
    const config = {
        menuKey: 'j',
    };

    // DO NOT TOUCH THIS CODE
    $('#ui').hide();
    window.addEventListener('message', function (event) {
        var item = event.data;
        if (item.showUI) {
            $('#ui').show();
        } else {
            $('#ui').hide();
        }
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === config.menuKey) { 
            fetch(`https://${GetParentResourceName()}/closeMenu`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8',
                },
                body: JSON.stringify({})
            })
                .then(response => response.json())
                .then(data => {
                    console.log("Menu fermé", data);
                    $('#ui').hide();
                })
                .catch((error) => {
                    console.error('Erreur lors de la fermeture du menu:', error);
                });
        }
    });

    // PUT YOUR CODE HERE
});