function openSideBar(){
    
    const dashboard = document.querySelector('h1.dashboard');
    dashboard.classList.toggle('dashboard_moved')

    const sidebar = document.querySelector('nav.sidebar')
    sidebar.classList.toggle('sidebar_open')

    const buttonMenu = document.querySelector('.sidebar_button:nth-child(1)')
    buttonMenu.classList.toggle('expanded_with_sidebar')

    const textButtonMenu = document.querySelector('.sidebar p:nth-child(2)')
    textButtonMenu.classList.toggle('visible')

    const searchField = document.querySelector('.sidebar div:nth-child(3)')
    searchField.classList.toggle('expanded_search_field')
    searchField.classList.toggle('visible')

    const searchFieldText = document.querySelector('.sidebar input:nth-child(4)')
    searchFieldText.classList.toggle('visible')

    const dashboardButtonText = document.querySelector('.sidebar p:nth-child(6)')
    dashboardButtonText.classList.toggle('visible')

    const animalsButtonText = document.querySelector('.sidebar p:nth-child(8)')
    animalsButtonText.classList.toggle('visible')

    const clientsButtonText = document.querySelector('.sidebar p:nth-child(10)')
    clientsButtonText.classList.toggle('visible')    

    const vetsButtonText = document.querySelector('.sidebar p:nth-child(12)')
    vetsButtonText.classList.toggle('visible')

    const settingsButtonText = document.querySelector('.sidebar p:nth-child(14)')
    settingsButtonText.classList.toggle('visible')

    const buttonLogout = document.querySelector('.button_logout')
    buttonLogout.classList.toggle('expanded_with_sidebar')

    const profile = document.querySelector('#profile')
    profile.classList.toggle('visible_logout')

}