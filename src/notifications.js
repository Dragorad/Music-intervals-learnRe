let notify = (() => {
    $(() => {
        let loading = 0
        $(document).on({
            ajaxStart: () => {
                if (!loading) $('#loadingBox').fadeIn()
                loading++
            },
            ajaxStop: () => setTimeout(() => {
                loading--
                if (!loading) $('#loadingBox').fadeOut()
            }, 500)
        })

        $('#infoBox').click((event) => $(event.target).fadeOut())
        $('#errorBox').click((event) => $(event.target).fadeOut())
    })

    function showInfo(message) {
        $('#infoBox').text(message)
        $('#infoBox').fadeIn()
        setTimeout(() => $('#infoBox').fadeOut(), 3000)
    }

    function showError(message) {
        $('#errorBox').text(message)
        $('#errorBox').fadeIn()
    }

    function handleError(reason) {
        showError(reason.description)
    }

    return {
        showInfo, showError, handleError
    }
})()